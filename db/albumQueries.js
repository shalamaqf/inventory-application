const pool = require("./pool");

async function getAllAlbumsByGenre(genreId) {
    const { rows } = await pool.query("SELECT * FROM album WHERE genre_id = $1", [genreId]);
    return rows;
}

async function getAlbumByNameAndGenre(name, genreId) {
    const { rows } = await pool.query("SELECT * FROM album WHERE name = $1 AND genre_id = $2", [name, genreId]);
    return rows;
}