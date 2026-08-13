const pool = require("./pool");

async function getArtistByName(name) {
    const { rows } = await pool.query("SELECT * FROM artist WHERE name = $1", [name]);
    return rows[0];
}

async function getArtistById(id) {
    const { rows } = await pool.query("SELECT * FROM artist WHERE id = $1", [id]);
    return rows[0];
}

module.exports = {
    getArtistById,
    getArtistByName
}