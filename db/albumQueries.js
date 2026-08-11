const pool = require("./pool");

async function getAllAlbumsByGenre(genreId) {
    const { rows } = await pool.query("SELECT * FROM album WHERE genre_id = $1", [genreId]);
    return rows;
}

async function getAlbumByNameAndGenre(name, genreId) {
    const { rows } = await pool.query("SELECT * FROM album WHERE name = $1 AND genre_id = $2", [name, genreId]);
    return rows;
}

async function getAlbumByArtistAndGenre(artistId, genreId) {
    const { rows } = await pool.query("SELECT * FROM album WHERE artist_id = $1 AND genre_id = $2", [artistId, genreId])
    return rows;
}

async function addAlbum(name, artistId, genreId, releaseYear) {
    const { rows } = await pool.query("INSERT INTO album (name, artist_id, genre_id, release_year) VALUES ($1, $2, $3, $4) RETURNING *",
                                    [name, artistId, genreId, releaseYear]);
    return rows[0];
}

async function updateAlbum(name, artistId, genreId, releaseYear, albumId) {
    const { rows } = await pool.query("UPDATE album SET name = $1, artist_id = $2, genre_id = $3, release_year = $4 WHERE id = $5 RETURNING *",
                                        [name, artistId, genreId, releaseYear, albumId]);
    return rows[0];                   
}

async function deleteAlbum(albumId) {
    const { rows } = await pool.query("DELETE FROM album WHERE id = $1 RETURNING *", [albumId]);
    return rows[0];
}