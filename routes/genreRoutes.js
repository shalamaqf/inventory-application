const { Router } = require("express");
const genreRouter = Router();


genreRouter.get("/", (req, res) => {
    res.send("this is home page");
})

genreRouter.get("/genre/:genre_name", (req, res) => {
    res.send("this is album page by genre");
})

genreRouter.get("/genre/add-genre", (req, res) => {
    res.send("this is form to add genre");
})

genreRouter.get("/genre/update-genre/:id", (req, res) => {
    res.send("this is form to update genre");
})

genreRouter.post("/genre/add-genre", (req, res) => {
    res.send("this is form to add genre");
})

genreRouter.post("/genre/update-genre/:id", (req, res) => {
    res.send("this is form to update genre");
})

genreRouter.post("/genre/deleted-genre/:id", (req, res) => {
    res.redirect("/");
})

module.exports = genreRouter;