const { Router } = require("express");
const albumRouter = Router();


albumRouter.get("/search/:album_name", (req, res) => {
    res.send("this is album name");
})

albumRouter.get("/add-album", (req, res) => {
    res.send("this is form to add album");
})

albumRouter.get("/update-album", (req, res) => {
    res.send("this is form to update album");
})

albumRouter.post("/add-album", (req, res) => {
    res.send("adding album...");
})

albumRouter.post("/update-album", (req, res) => {
    res.send("updating album...");
})

albumRouter.post("/deleted-album/:id", (req, res) => {
    res.redirect("/genre/:genre_name");
})

module.exports = albumRouter;