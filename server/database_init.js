const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Initialize Database
const dbPath = path.resolve(__dirname, 'agri_connect.db');
const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error('Error opening database ' + dbPath + ': ' + err.message);
    } else {
        console.log('Connected to the SQLite database.');
    }
});

// Create Tables
db.serialize(() => {
    // 1. Marketplace Tables
    db.run(`CREATE TABLE IF NOT EXISTS marketplace_products (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        seller_name TEXT,
        seller_phone TEXT,
        seller_location TEXT,
        product_name TEXT,
        category TEXT,
        description TEXT,
        price REAL,
        unit TEXT,
        quantity_available TEXT,
        status TEXT DEFAULT 'available',
        seller_id TEXT,
        created_date TEXT
    )`);

    db.run(`CREATE TABLE IF NOT EXISTS marketplace_inquiries (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        product_id INTEGER,
        product_name TEXT,
        buyer_name TEXT,
        buyer_email TEXT,
        buyer_phone TEXT,
        message TEXT,
        status TEXT DEFAULT 'pending',
        inquiry_date TEXT
    )`);

    // 2. Application Tables
    db.run(`CREATE TABLE IF NOT EXISTS job_applications (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        job_id TEXT,
        job_title TEXT,
        applicant_name TEXT,
        email TEXT,
        phone TEXT,
        cover_letter TEXT,
        status TEXT DEFAULT 'pending',
        applied_date TEXT
    )`);

    db.run(`CREATE TABLE IF NOT EXISTS govt_applications (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        program_id TEXT,
        program_name TEXT,
        program_type TEXT,
        applicant_name TEXT,
        email TEXT,
        phone TEXT,
        id_number TEXT,
        farm_size TEXT,
        location TEXT,
        crops TEXT,
        is_registered_farmer TEXT,
        additional_info TEXT,
        status TEXT DEFAULT 'pending',
        applied_date TEXT
    )`);

    db.run(`CREATE TABLE IF NOT EXISTS training_enrollments (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        training_id TEXT,
        training_title TEXT,
        training_provider TEXT,
        applicant_name TEXT,
        email TEXT,
        phone TEXT,
        organization TEXT,
        experience_level TEXT,
        reason TEXT,
        status TEXT DEFAULT 'pending',
        enrolled_date TEXT
    )`);

    db.run(`CREATE TABLE IF NOT EXISTS grant_applications (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        grant_id TEXT,
        grant_title TEXT,
        grant_amount TEXT,
        applicant_name TEXT,
        email TEXT,
        phone TEXT,
        organization TEXT,
        project_description TEXT,
        requested_amount TEXT,
        status TEXT DEFAULT 'pending',
        applied_date TEXT
    )`);

    // 3. Social Hub Tables (New for Phase 7)
    db.run(`CREATE TABLE IF NOT EXISTS posts (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        author_name TEXT,
        author_avatar TEXT,
        is_specialist INTEGER DEFAULT 0,
        location TEXT,
        content TEXT,
        timestamp TEXT,
        likes_count INTEGER DEFAULT 0,
        comments_count INTEGER DEFAULT 0,
        image_url TEXT,
        tags TEXT
    )`);

    db.run(`CREATE TABLE IF NOT EXISTS comments (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        post_id INTEGER,
        author_name TEXT,
        content TEXT,
        timestamp TEXT
    )`);

    // 4. Data Seeding (Static Data for Endpoints)
    // We will check if tables are empty before seeding to avoid duplicates on restart

    // Seed Posts
    db.get("SELECT count(*) as count FROM posts", [], (err, row) => {
        if (err) return console.error(err.message);
        if (row.count === 0) {
            console.log("Seeding Posts...");
            const posts = [
                {
                    author_name: 'Mohamed Kamara',
                    is_specialist: 1,
                    location: 'Bo District',
                    content: 'Just harvested my rice crop! Used the NERICA variety and got excellent yields. Always remember to check soil pH before planting for optimal results. Happy to share tips!',
                    likes_count: 42,
                    comments_count: 12,
                    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(), // 2h ago
                    tags: JSON.stringify(['#RiceFarming', '#HarvestSuccess'])
                },
                {
                    author_name: 'Fatmata Bangura',
                    is_specialist: 0,
                    location: 'Kenema',
                    content: 'Looking for advice on cassava farming. Any experienced farmers in the area? I am seeing some leaf yellowing in the lower canopy.',
                    likes_count: 12,
                    comments_count: 8,
                    timestamp: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(), // 5h ago
                    tags: JSON.stringify(['#Cassava', '#DiseaseHelp'])
                },
                {
                    author_name: 'Ibrahim Sesay',
                    is_specialist: 1,
                    location: 'Makeni',
                    content: 'Weather forecast looks good for planting next week in the Northern Province. We are expecting moderate rains which is perfect for seed germination.',
                    likes_count: 28,
                    comments_count: 4,
                    timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(), // 1d ago
                    tags: JSON.stringify(['#WeatherAlert', '#PlantingSeason'])
                }
            ];

            const insert = db.prepare(`INSERT INTO posts (author_name, is_specialist, location, content, likes_count, comments_count, timestamp, tags) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`);
            posts.forEach(p => {
                insert.run([p.author_name, p.is_specialist, p.location, p.content, p.likes_count, p.comments_count, p.timestamp, p.tags]);
            });
            insert.finalize();
        }
    });

    // Seed Marketplace Products
    db.get("SELECT count(*) as count FROM marketplace_products", [], (err, row) => {
        if (err) return console.error(err.message);
        if (row.count === 0) {
            console.log("Seeding Marketplace...");
            const products = [
                {
                    seller_name: 'Kadiatu Fofanah',
                    seller_location: 'Kambia District',
                    product_name: 'Organic Honey',
                    category: 'Products',
                    price: 150000,
                    unit: 'liter',
                    quantity_available: '50',
                    created_date: new Date().toISOString()
                },
                {
                    seller_name: 'Alumine Turay',
                    seller_location: 'Port Loko',
                    product_name: 'Cassava Tubers',
                    category: 'Crops',
                    price: 450000,
                    unit: 'bag',
                    quantity_available: '100',
                    created_date: new Date().toISOString()
                }
            ];
            const insert = db.prepare(`INSERT INTO marketplace_products (seller_name, seller_location, product_name, category, price, unit, quantity_available, created_date) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`);
            products.forEach(p => insert.run([p.seller_name, p.seller_location, p.product_name, p.category, p.price, p.unit, p.quantity_available, p.created_date]));
            insert.finalize();
        }
    });

    // Seed Static Tables (Job, Grants, etc used in GET routes)
    db.run(`CREATE TABLE IF NOT EXISTS jobs (id INTEGER PRIMARY KEY, title TEXT, type TEXT, location TEXT, posted TEXT)`);
    db.run(`CREATE TABLE IF NOT EXISTS govt_subsidies (id INTEGER PRIMARY KEY, title TEXT, description TEXT)`);
    db.run(`CREATE TABLE IF NOT EXISTS govt_infrastructure (id INTEGER PRIMARY KEY, title TEXT, description TEXT)`);
    db.run(`CREATE TABLE IF NOT EXISTS trainings (id INTEGER PRIMARY KEY, title TEXT, provider TEXT, type TEXT)`);
    db.run(`CREATE TABLE IF NOT EXISTS grants (id INTEGER PRIMARY KEY, title TEXT, description TEXT, amount TEXT)`);

    // Check and seed if necessary (simplified for brevity, ensuring table existence is key)


});

module.exports = db;
