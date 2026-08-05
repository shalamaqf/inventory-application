const { Router } = require("express");
const albumRouter = Router();


albumRouter.get("/genre/:genre_name/search/:album_name", (req, res) => {
    res.send("this is album name");
})

albumRouter.get("/genre/:genre_name/add-album", (req, res) => {
    res.send("this is form to add album");
})

albumRouter.get("/genre/:genre_name/update-album", (req, res) => {
    res.send("this is form to update album");
})

albumRouter.post("/genre/:genre_name/add-album", (req, res) => {
    res.send("adding album...");
})

albumRouter.post("/genre/:genre_name/update-album", (req, res) => {
    res.send("updating album...");
})

albumRouter.post("/genre/:genre_name/deleted-album/:id", (req, res) => {
    res.redirect("/genre/:genre_name");
})