const db_album = require("../db/albumQueries");
const db_genre = require("../db/genreQueries");

async function albumListByGenreGet(req, res) {
    const genreName = req.params.genre_name;
    const genre = await db_genre.getGenreByName(genreName);

    if (!genre) {
        res.render("404", { title: "404 | Page Not Found" });
        return;
    }

    const genreId = genre.id;
    const albumList = await db_album.getAllAlbumsByGenre(genreId);
    console.log("Album List: ", albumList);
    res.render("albumListByGenre", { title: `${genre.name} Album List`, genre, albumList})
}

module.exports = {
    albumListByGenreGet
}