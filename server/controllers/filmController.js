const dbConnection = require("../database/connection")

const Film = {


    insertFilm: async (req, res) => {

        const { name_film } = req.body;
        const { email } = req.body;
        const film = ({ name_film, email })

        try {
            console.log("entra", film)
            const connection = await dbConnection();
            await connection.query('INSERT INTO films SET ?', film)
            res.json({ name_film })
        }
        catch (error) {
            res.status(400)
            res.send(error.message)
        }
    },


    postFilm: async (req, res) => {

        const { email } = req.body;
        console.log('el correo es este',email);

        try {
            const connection = await dbConnection()
            await connection.query(`SELECT * FROM films WHERE email = '${email}'`, function (err, result) {
                if (err) {
                    console.log('en el error');
                    throw Error
    
                }

                if (result) {
                    console.log(result)
                    res.json(result);
                }
            })
            //console.log({resultFilms})
            //res.json({ resultFilms})

        } catch (error) {
            console.log(error)
            res.status(500)
            res.send(error.message)
        }


    },

}


module.exports = Film