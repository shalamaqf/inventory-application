const { Router } = require("express");
const genreRouter = Router();
const albumRouter = require("./albumRoutes");
const genreControllers = require("../controllers/genreControllers")


genreRouter.get("/", genreControllers.genreListGet);

genreRouter.get("/genre/add-genre", genreControllers.addGenreGet)

genreRouter.get("/genre/:genre_name", (req, res) => {
    res.send("this is album page by genre");
})

genreRouter.get("/genre/update-genre/:id", genreControllers.updateGenreGet);

genreRouter.post("/genre/add-genre", (req, res) => {
    res.send("this is form to add genre");
})

genreRouter.post("/genre/update-genre/:id", (req, res) => {
    res.send("this is form to update genre");
})

genreRouter.post("/genre/deleted-genre/:id", (req, res) => {
    res.redirect("/");
})

genreRouter.use("/genre/:genre_name", albumRouter);

module.exports = genreRouter;