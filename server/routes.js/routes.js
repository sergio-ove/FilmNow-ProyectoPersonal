const router = require("express").Router();
const User = require("../controllers/userController");
const Film = require("../controllers/filmController")
const Scrap = require("../controllers/scrapingController")


//rutas relacionadas con el usuario:

//REGISTRO USUARIO
router.post("/register",User.insertUser);
//MODIFICAR USUARIO
router.post("/update-user",User.update)
//LOGIN
router.post("/login",User.login);
//ELIMINAR USUARIO
router.post("/delete-user",User.delete);
//GET USUARIO
router.get("/get-user/:userEmail",User.getUser);
//REGISTRO POR EMAIL
router.post("/register-email",User.registerEmail);


//rutas relacionadas con las películas:

//INSERTAR PELÍCULAS
router.post("/insertFilm",Film.insertFilm);
//BUSCA PELICULAS POR USUARIO
router.post("/favorites-films",Film.postFilm);


//rutas relacionadas con el scraping:

router.post("/scrap",Scrap.insertScrap);

//exportar router
module.exports = router


