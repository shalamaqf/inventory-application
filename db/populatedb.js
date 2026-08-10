const { Client } = requrie("pg");

const SQL = `
    INSERT INTO genre (name) VALUES ('Uncategorized'), ('Rock'), ('Jazz');
    INSERT INTO artist (name) VALUES ('Fleetwood Mac'), ('The Beatles'), ('Chet Baker');
    INSERT INTO album (name, artist_id, genre_id, release_year)
    VALUES
        ('Rumours', (SELECT id FROM artist WHERE name = 'Fleetwood Mac'), (SELECT id FROM genre WHERE name = 'Rock'), 1997),
        ('Abbey Road', (SELECT id FROM artist WHERE name = 'The Beatles'), (SELECT id FROM genre WHERE name = 'Rock'), 1969),
        ('Chet', (SELECT id FROM artist WHERE name = 'Chet Baker'), (SELECT id FROM genre WHERE name = 'Jazz'), 1959);
`