const pool = require("./pool");

async function getArtistByName(name) {
    const { rows } = await pool.query("SELECT * FROM artist WHERE name = $1", [name]);
    return rows[0];
}