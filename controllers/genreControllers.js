const db = require("../db/genreQueries");

async function genreListGet(req, res) {
    const genreList = await db.getAllGenres();
    console.log('Genres: ', genreList);
    res.render('index', { title: "Genre List", genreList })
}