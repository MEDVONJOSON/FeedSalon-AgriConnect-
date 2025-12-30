const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Connect to SQLite database (creates file if not exists)
const dbPath = path.resolve(__dirname, 'feed_salon.db');
const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error('Error opening database:', err.message);
    } else {
        console.log('Connected to the SQLite database.');
    }
});

// Serialize queries to ensure sequential execution
db.serialize(() => {
    // 1. Government Subsidies Table
    db.run(`CREATE TABLE IF NOT EXISTS govt_subsidies (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        description TEXT NOT NULL
    )`);

    // 2. Government Infrastructure Table
    db.run(`CREATE TABLE IF NOT EXISTS govt_infrastructure (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        description TEXT NOT NULL
    )`);

    // 3. Jobs Table
    db.run(`CREATE TABLE IF NOT EXISTS jobs (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        type TEXT NOT NULL,
        location TEXT NOT NULL,
        posted TEXT NOT NULL
    )`);

    // 4. Trainings Table
    db.run(`CREATE TABLE IF NOT EXISTS trainings (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        provider TEXT NOT NULL,
        type TEXT NOT NULL
    )`);

    // 5. Grants Table
    db.run(`CREATE TABLE IF NOT EXISTS grants (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        description TEXT NOT NULL,
        amount TEXT NOT NULL
    )`);

    // 6. Market Stats Table
    db.run(`CREATE TABLE IF NOT EXISTS market_stats (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        label TEXT NOT NULL,
        value TEXT NOT NULL,
        sub TEXT NOT NULL,
        color TEXT NOT NULL
    )`);

    // 7. Market Prices Table
    db.run(`CREATE TABLE IF NOT EXISTS market_prices (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        item TEXT NOT NULL,
        price TEXT NOT NULL
    )`);

    // 8. Business Tools Table
    db.run(`CREATE TABLE IF NOT EXISTS business_tools (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL
    )`);

    // 9. Youth Opportunities Table
    db.run(`CREATE TABLE IF NOT EXISTS youth_opportunities (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        description TEXT NOT NULL,
        icon TEXT NOT NULL
    )`);

    // 10. NGO Partners Table
    db.run(`CREATE TABLE IF NOT EXISTS ngo_partners (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        type TEXT NOT NULL,
        offers TEXT NOT NULL -- Stored as JSON string
    )`);

    // 11. Job Applications Table
    db.run(`CREATE TABLE IF NOT EXISTS job_applications (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        job_id INTEGER NOT NULL,
        job_title TEXT NOT NULL,
        applicant_name TEXT NOT NULL,
        email TEXT NOT NULL,
        phone TEXT NOT NULL,
        cover_letter TEXT,
        applied_date TEXT NOT NULL,
        status TEXT DEFAULT 'pending'
    )`);

    // 12. Government Program Applications Table
    db.run(`CREATE TABLE IF NOT EXISTS govt_applications (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        program_id INTEGER NOT NULL,
        program_name TEXT NOT NULL,
        program_type TEXT NOT NULL,
        applicant_name TEXT NOT NULL,
        email TEXT NOT NULL,
        phone TEXT NOT NULL,
        id_number TEXT,
        farm_size TEXT,
        location TEXT,
        crops TEXT,
        is_registered_farmer TEXT,
        additional_info TEXT,
        applied_date TEXT NOT NULL,
        status TEXT DEFAULT 'pending'
    )`);

    // 13. Training Enrollments Table
    db.run(`CREATE TABLE IF NOT EXISTS training_enrollments (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        training_id INTEGER NOT NULL,
        training_title TEXT NOT NULL,
        training_provider TEXT NOT NULL,
        applicant_name TEXT NOT NULL,
        email TEXT NOT NULL,
        phone TEXT NOT NULL,
        organization TEXT,
        experience_level TEXT,
        reason TEXT,
        enrolled_date TEXT NOT NULL,
        status TEXT DEFAULT 'pending'
    )`);

    // 14. Grant Applications Table
    db.run(`CREATE TABLE IF NOT EXISTS grant_applications (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        grant_id INTEGER NOT NULL,
        grant_title TEXT NOT NULL,
        grant_amount TEXT NOT NULL,
        applicant_name TEXT NOT NULL,
        email TEXT NOT NULL,
        phone TEXT NOT NULL,
        organization TEXT,
        project_description TEXT,
        requested_amount TEXT,
        applied_date TEXT NOT NULL,
        status TEXT DEFAULT 'pending'
    )`);

    // 15. Marketplace Products Table
    db.run(`CREATE TABLE IF NOT EXISTS marketplace_products (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        seller_id INTEGER,
        seller_name TEXT NOT NULL,
        seller_phone TEXT NOT NULL,
        seller_location TEXT NOT NULL,
        product_name TEXT NOT NULL,
        category TEXT NOT NULL,
        description TEXT,
        price TEXT NOT NULL,
        unit TEXT NOT NULL,
        quantity_available TEXT NOT NULL,
        image_url TEXT,
        status TEXT DEFAULT 'available',
        created_date TEXT NOT NULL
    )`);

    // 16. Marketplace Inquiries Table
    db.run(`CREATE TABLE IF NOT EXISTS marketplace_inquiries (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        product_id INTEGER NOT NULL,
        product_name TEXT NOT NULL,
        buyer_name TEXT NOT NULL,
        buyer_email TEXT NOT NULL,
        buyer_phone TEXT NOT NULL,
        message TEXT,
        inquiry_date TEXT NOT NULL,
        status TEXT DEFAULT 'pending'
    )`);

    // ============================================
    // SEED INITIAL DATA
    // ============================================

    const seedData = async () => {
        // Helper to check if table is empty
        const isEmpty = (tableName) => {
            return new Promise((resolve) => {
                db.get(`SELECT count(*) as count FROM ${tableName}`, (err, row) => {
                    resolve(row && row.count === 0);
                });
            });
        };

        // Seed Govt Subsidies
        if (await isEmpty('govt_subsidies')) {
            const stmt = db.prepare('INSERT INTO govt_subsidies (title, description) VALUES (?, ?)');
            stmt.run('Fertilizer subsidies', '50% discount for registered smallholders.');
            stmt.run('Seed distribution', 'Free improved rice and maize seeds.');
            stmt.run('Farm inputs grants', 'Tools and equipment support.');
            stmt.finalize();
            console.log('Seeded govt_subsidies');
        }

        // Seed Govt Infrastructure
        if (await isEmpty('govt_infrastructure')) {
            const stmt = db.prepare('INSERT INTO govt_infrastructure (title, description) VALUES (?, ?)');
            stmt.run('Mechanization support', 'Tractor rental vouchers.');
            stmt.run('Land access', 'Leasing programs for youth.');
            stmt.run('Community farming', 'Irrigation scheme access.');
            stmt.finalize();
            console.log('Seeded govt_infrastructure');
        }

        // Seed Jobs
        if (await isEmpty('jobs')) {
            const stmt = db.prepare('INSERT INTO jobs (title, type, location, posted) VALUES (?, ?, ?, ?)');
            stmt.run('Government Agricultural Officer', 'Full Time', 'Bo District', '2 days ago');
            stmt.run('NGO Field Coordinator', 'Contract', 'Kenema', '1 week ago');
            stmt.run('Agribusiness Sales Rep', 'Full Time', 'Freetown', 'Just now');
            stmt.run('Seasonal Farm Manager', 'Seasonal', 'Makeni', '3 days ago');
            stmt.finalize();
            console.log('Seeded jobs');
        }

        // Seed Trainings
        if (await isEmpty('trainings')) {
            const stmt = db.prepare('INSERT INTO trainings (title, provider, type) VALUES (?, ?, ?)');
            stmt.run('Modern Farming Techniques', 'Ministry of Agriculture', 'Workshop');
            stmt.run('Agro-processing Basics', 'UNIDO', 'Course');
            stmt.run('Climate-Smart Agriculture', 'FAO', 'online');
            stmt.run('Digital Farming Tools', 'Feed Salone', 'Webinar');
            stmt.finalize();
            console.log('Seeded trainings');
        }

        // Seed Grants
        if (await isEmpty('grants')) {
            const stmt = db.prepare('INSERT INTO grants (title, description, amount) VALUES (?, ?, ?)');
            stmt.run('Youth Agri-Entrepreneurship Fund', 'Startup capital for young farmers under 35.', 'Up to Le 10M');
            stmt.run('Women in Agriculture Grant', 'Support for female-led farming businesses.', 'Le 5M - 15M');
            stmt.run('Climate-Smart Agriculture Fund', 'Grants for sustainable farming practices.', 'Variable');
            stmt.finalize();
            console.log('Seeded grants');
        }

        // Seed Marketplace Products
        if (await isEmpty('marketplace_products')) {
            const stmt = db.prepare(`INSERT INTO marketplace_products (
                seller_name, seller_phone, seller_location, product_name, category, 
                description, price, unit, quantity_available, status, created_date
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`);

            const now = new Date().toISOString();

            // Crops
            stmt.run('Mohamed Kamara', '+232 76 123 456', 'Bo District', 'Premium Rice', 'Crops',
                'High-quality locally grown rice, freshly harvested', '850,000', '50kg bag', '100', 'available', now);
            stmt.run('Fatmata Sesay', '+232 77 234 567', 'Kenema', 'Organic Cassava', 'Crops',
                'Fresh organic cassava, perfect for gari production', '450,000', '100kg', '200', 'available', now);
            stmt.run('Ibrahim Koroma', '+232 78 345 678', 'Makeni', 'Cocoa Beans', 'Crops',
                'Premium quality cocoa beans, sun-dried', '1,200,000', '50kg bag', '50', 'available', now);
            stmt.run('Aminata Bangura', '+232 76 456 789', 'Freetown', 'Fresh Vegetables Mix', 'Crops',
                'Tomatoes, peppers, onions - farm fresh daily', '25,000', 'basket', '30', 'available', now);

            // Livestock
            stmt.run('Abu Bakarr', '+232 77 567 890', 'Port Loko', 'Healthy Goats', 'Livestock',
                'Well-fed goats, vaccinated and healthy', '800,000', 'per goat', '15', 'available', now);
            stmt.run('Mariama Conteh', '+232 78 678 901', 'Bombali', 'Layer Chickens', 'Livestock',
                'Productive layer chickens, 6 months old', '45,000', 'per chicken', '50', 'available', now);

            // Equipment
            stmt.run('Sahr Kamanda', '+232 76 789 012', 'Bo District', 'Farm Tools Set', 'Equipment',
                'Complete set: hoes, cutlasses, rakes - brand new', '150,000', 'set', '20', 'available', now);
            stmt.run('Joseph Mansaray', '+232 77 890 123', 'Kenema', 'Irrigation Pump', 'Equipment',
                'Petrol-powered water pump, 1 year warranty', '2,500,000', 'unit', '5', 'available', now);

            // Processed
            stmt.run('Hawa Kamara', '+232 78 901 234', 'Freetown', 'Palm Oil (Pure)', 'Processed',
                'Pure red palm oil, traditionally processed', '35,000', 'liter', '100', 'available', now);
            stmt.run('Alimamy Turay', '+232 76 012 345', 'Makeni', 'Dried Fish', 'Processed',
                'Smoked and dried fish, ready for cooking', '80,000', 'kg', '40', 'available', now);

            stmt.finalize();
            console.log('Seeded marketplace_products');
        }

        // Seed Market Stats
        if (await isEmpty('market_stats')) {
            const stmt = db.prepare('INSERT INTO market_stats (label, value, sub, color) VALUES (?, ?, ?, ?)');
            stmt.run('Local Buyers', '126', 'Active in your region', 'green');
            stmt.run('Export Demands', 'High', 'Cocoa & Coffee', 'blue');
            stmt.run('Bulk Deals', '15', 'Available now', 'orange');
            stmt.finalize();
            console.log('Seeded market_stats');
        }

        // Seed Market Prices
        if (await isEmpty('market_prices')) {
            const stmt = db.prepare('INSERT INTO market_prices (item, price) VALUES (?, ?)');
            stmt.run('Rice (50kg bag)', 'Le 850,000');
            stmt.run('Cassava (100kg)', 'Le 450,000');
            stmt.run('Palm Oil (5 Gallon)', 'Le 600,000');
            stmt.finalize();
            console.log('Seeded market_prices');
        }

        // Seed Business Tools
        if (await isEmpty('business_tools')) {
            const stmt = db.prepare('INSERT INTO business_tools (name) VALUES (?)');
            const tools = [
                'Business Plan Template', 'Cooperative Formation Guide', 'Export Regulations Handbook',
                'Loan Application Checklist', 'Farm Record Book', 'Tax Guide'
            ];
            tools.forEach(tool => stmt.run(tool));
            stmt.finalize();
            console.log('Seeded business_tools');
        }

        // Seed Youth Opportunities
        if (await isEmpty('youth_opportunities')) {
            const stmt = db.prepare('INSERT INTO youth_opportunities (title, description, icon) VALUES (?, ?, ?)');
            stmt.run('School Agriculture Competitions', 'Win scholarships and funding for your school farm.', 'graduation');
            stmt.run('Internship Placements', '3-month paid internships at top agribusinesses.', 'user-plus');
            stmt.finalize();
            console.log('Seeded youth_opportunities');
        }

        // Seed NGO Partners
        if (await isEmpty('ngo_partners')) {
            const stmt = db.prepare('INSERT INTO ngo_partners (name, type, offers) VALUES (?, ?, ?)');
            stmt.run('World Food Programme', 'Development Partner', JSON.stringify(['Sustainable agriculture training', 'Food for assets', 'Nutrition support']));
            stmt.run('Save the Children', 'Child Focus', JSON.stringify(['School feeding programs', 'Family livelihood support']));
            stmt.run('Care International', 'Humanitarian', JSON.stringify(['VSLA Village Savings', 'Women empowerment']));
            stmt.finalize();
            console.log('Seeded ngo_partners');
        }
    };

    seedData();
});

module.exports = db;
