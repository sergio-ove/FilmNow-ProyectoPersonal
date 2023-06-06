const dbConnection = require('../database/connection')
const bcyptjs = require('bcryptjs');
const sendEmail = require('../controllers/emailController')

const User = {


    insertUser: async (req, res) => {
        const { name_user, year_user, email, pass } = req.body;
        const pass_hash = await bcyptjs.hash(pass, 6);
        const user = ({ name_user, year_user, email, pass: pass_hash })
        try {
            console.log("entra", req.body)
            const connection = await dbConnection();
            await connection.query('INSERT INTO users SET ?', user)
            res.json({ message: "usuario insertado" })
        }
        catch (error) {

            res.status(400)
            res.send(error.message)
        }
    },


    login: async (req, res) => {

        try {

            const userEmail = req.body.email;
            const userPass = req.body.pass
            const connection = await dbConnection();
            console.log(userPass)

            await connection.query(`SELECT * FROM users WHERE email = "${userEmail}"`, function (err, result) {
                if (err) {
                    res.json(err);
                    console.log(result);
                    process.exit(1);
                }
                if (result.length !== 0) {
                    let compare = bcyptjs.compareSync(userPass, result[0].pass);

                    // const infoJwt = jwt.sign({ email, "id": user.dataValues.id, "full_name": user.dataValues.full_name }, "m1c4s4");
                    if (compare) {

                        // res.cookie("session", infoJwt)
                        res.json({ validation: true });
                    } else {

                        res.json({ validation: false });
                    }
                } else {

                    res.json("no existe el usuario");
                }

            });

        } catch (error) {
            res.json(error)
        }

    },



    update: async (req, res) => {

        const { name_user, newEmail, year_user, email } = req.body;


        try {
            console.log("entra", req.body)
            const connection = await dbConnection();
            await connection.query(`UPDATE users SET name_user ='${name_user}', year_user ='${year_user}',email ='${newEmail}' WHERE email ='${email}'`)
            res.json({ message: "usuario modificado" })

        }
        catch (error) {

            res.status(400)
            res.send(error.message)
        }
    },





    delete: async (req, res) => {

        const { email } = req.body;
        // Crea una consulta DELETE para eliminar el usuario con id 1
        const sql = `DELETE FROM users WHERE email = '${email}'`;
        const connection = await dbConnection();
        // Ejecuta la consulta
        connection.query(sql, (error, results, fields) => {

            if (error) {
                throw error
            } else
                res.json({ delete: true });
            console.log('Usuario eliminado');
        });

        // Cierra la conexión a la base de datos
        connection.end();
    },




    getUser: async (req, res) => {
        const { userEmail } = req.params;
        console.log(userEmail);
        const connection = await dbConnection();
        try {
            await connection.query(`SELECT id_user, name_user, year_user, email FROM users WHERE email = "${userEmail}"`, (err, results) => {
                res.json(results)
                console.log("estamos en el try",results[0])
            })
        } catch (err) {
            res.json(err);
        } finally {
            connection.end();
        }
    },




    registerEmail: async (req, res) => {
        try {
            const { email } = req.body;
            console.log(email)
            await sendEmail.emailToRegister(email);
            res.json(`Email enviado a ${email}`);
            console.log("hola")
        } catch (error) {
            console.log(error)
            res.json(error)
        }
    },


}




module.exports = User
