const pool = require("./pool");

async function getAllGenres() {
    const { rows } = await pool.query("SELECT * FROM genre");
    return rows;
}

async function addGenre(name) {
    const { rows } = await pool.query("INSERT INTO genre (name) VALUES ($1) RETURNING *", [name]);
    return rows[0];
}

async function updateGenre(name, id) {
    const { rows } = await pool.query("UPDATE genre SET name = $1 WHERE id = $2 RETURNING *", [name, id]);
    return rows[0];
}