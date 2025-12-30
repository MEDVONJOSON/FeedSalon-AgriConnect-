const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.join(__dirname, 'feed_salon.db');
const db = new sqlite3.Database(dbPath);

db.all("SELECT id, product_name, image_url FROM marketplace_products", [], (err, rows) => {
    if (err) {
        throw err;
    }
    rows.forEach((row) => {
        console.log(`${row.id}: ${row.product_name} -> ${row.image_url}`);
    });
    db.close();
});
