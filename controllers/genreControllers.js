const db = require("../db/genreQueries");

async function genreListGet(req, res) {
    const genreList = await db.getAllGenres();
    console.log('Genres: ', genreList);
    res.render('index', { title: "Genre List", genreList })
}

async function addGenreGet(req, res) {
    res.render('createGenre', { title: "Add Genre" });
}

async function updateGenreGet(req, res) {
    const genreId = req.params.id;
    const genre = await db.getGenreById(genreId);
    res.render('updateGenre', { title: "Update Genre", genre })
}

module.exports = {
    genreListGet,
    addGenreGet,
    updateGenreGet,
}