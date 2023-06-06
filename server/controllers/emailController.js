var nodemailer = require('nodemailer');

const smtpConfig = {
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: "sergio.ovejeropascual@gmail.com",
        pass: "cxkhrenwiltypnwh"
    }
};
const transporter = nodemailer.createTransport(smtpConfig);

const email = {
    /**
     * Envia un email al usuario que desea registrarse para verificar que el email realmente pertenece al usuario.
     * @param {STRING} jwt JSON web token generado para insertar en la url del enlace de verificación.
     * @param {STRING} email email del usuario.
     */
    emailToRegister: async (email) => {
        var username = email.split("@")[0]
        console.log("eviando correo")
        var mailOptions = {
            from: 'quatrellothebridge@gmail.com',
            to: email,
            subject: 'Verifica tu cuenta de FilmNow',
            text: "",
            html: `<!doctype html>
                <html ⚡4email>
                  <head>
                    <meta charset="utf-8">
                  </head>
                  <body>
                    <table width="100%" border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse">
                      <tbody>
                        <tr>
                         <td align="center">
                          <div style="max-width:520px;margin:0 auto">
                              <div
                                  style="vertical-align:top;text-align:left;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;font-size:14px;font-weight:400;letter-spacing:-0.005em;color:#091e42;line-height:20px">
                                  
                                  <hr style="margin-top:24px;margin-bottom:24px;border:0;border-bottom:1px solid #FFCC00">
                                  <h1>🎥</h1>
                                  <h1>¡Hola ${username}!</h1>
                                  <p
                                      style="font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;font-size:14px;font-weight:400;letter-spacing:-0.005em;color:#091e42;line-height:20px;margin-top:12px">
                                      <a style="text-decoration:none;color:inherit"></a></p>
                                  <p
                                      style="font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;font-size:14px;font-weight:400;letter-spacing:-0.005em;color:#091e42;line-height:20px;margin-top:12px">
                                      Confirma tu correo electronico y encuentra la película que estás buscando en este momento!
                                      </p>
                                  <div style="margin-top:28px"><a
                                          href="http://127.0.0.1:3000"
                                          style="box-sizing:border-box;border-radius:3px;border-width:0;border:none;display:inline-flex;font-style:normal;font-size:inherit;height:2.28571429em;line-height:2.28571429em;margin:0;outline:none;padding:0 12px;text-align:center;vertical-align:middle;white-space:nowrap;text-decoration:none;background:#FFCC00;color:#000000"
                                          target="_blank"
                                          >Confirmar correo electrónico</a></div>
                                  <hr style="margin-top:24px;margin-bottom:24px;border:0;border-bottom:1px solid #FFCC00">
                                          <tbody>
                                              <tr>
                                                  <td valign="top" align="center"
                                                      style="padding-top:10px;line-height:18px;text-align:center;font-weight:none;font-size:12px;color:#505f79">
                                                      
                                              </tr>
                                              <tr valign="top">
                                                
                                              </tr>
                                          </tbody>
                                      </table>
                                  </div>
                              </div>
                          </div>
                      </td>
                  </tr>
              </tbody>
          </table>
                  </body>
                </html>`
        };
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log('Email enviado: ' + info.response);
                console.log(info.accepted)
            }
        });
    },

}
module.exports = email;