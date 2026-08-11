const pool = require("./pool");

async function getAllAlbumsByGenre(genreId) {
    const { rows } = await pool.query("SELECT * FROM album WHERE genre_id = $1", [genreId]);
    return rows;
}