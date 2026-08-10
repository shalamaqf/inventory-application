const { Client } = require("pg");

const SQL = `
    INSERT INTO genre (name) VALUES ('Uncategorized'), ('Rock'), ('Jazz');
    INSERT INTO artist (name) VALUES ('Fleetwood Mac'), ('The Beatles'), ('Chet Baker');
    INSERT INTO album (name, artist_id, genre_id, release_year)
    VALUES
        ('Rumours', (SELECT id FROM artist WHERE name = 'Fleetwood Mac'), (SELECT id FROM genre WHERE name = 'Rock'), 1997),
        ('Abbey Road', (SELECT id FROM artist WHERE name = 'The Beatles'), (SELECT id FROM genre WHERE name = 'Rock'), 1969),
        ('Chet', (SELECT id FROM artist WHERE name = 'Chet Baker'), (SELECT id FROM genre WHERE name = 'Jazz'), 1959);
`

async function main () {
    console.log("seeding...");
    const client = new Client({
        connectionString: "postgresql://shalamaop:odinsqf@localhost:5432/album_vinyl_store",
    });
    await client.connect();
    await client.query(SQL);
    await client.end();
    console.log("done");
}

main();