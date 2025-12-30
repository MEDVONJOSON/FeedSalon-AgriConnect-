const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.join(__dirname, 'feed_salon.db');
const db = new sqlite3.Database(dbPath);

const updates = [
    { id: 1, url: '/images/marketplace/rice.png' },
    { id: 2, url: '/images/marketplace/cassava.png' },
    { id: 3, url: '/images/marketplace/cocoa.jpg' },
    { id: 4, url: '/images/marketplace/vegetables.jpg' },
    { id: 5, url: '/images/marketplace/goats.jpg' },
    { id: 6, url: '/images/marketplace/chickens.jpg' },
    { id: 7, url: '/images/marketplace/tools.jpg' },
    { id: 8, url: '/images/marketplace/pump.jpg' },
    { id: 9, url: '/images/marketplace/palmoil.jpg' },
    { id: 10, url: '/images/marketplace/driedfish.jpg' },
];

db.serialize(() => {
    updates.forEach(u => {
        db.run(`UPDATE marketplace_products SET image_url = ? WHERE id = ?`, [u.url, u.id], (err) => {
            if (err) console.error(err);
            else console.log(`Updated product ${u.id} with ${u.url}`);
        });
    });
});

db.close();
