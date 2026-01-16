const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const db = require('./database_init');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: true, // Allow all origins (mobile apps)
  credentials: true
}));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

// Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Server is running' });
});

// Agri-Analyst AI Chat Endpoint
app.post('/api/chat', (req, res) => {
  const { message } = req.body;
  const lowerQuery = message.toLowerCase();

  // ============================================
  // AGRICULTURAL KNOWLEDGE BASE - Q&A SYSTEM
  // ============================================

  const knowledgeBase = {
    // CROP CULTIVATION
    rice: {
      keywords: ['rice', 'paddy', 'oryza'],
      answer: "Rice cultivation in Sierra Leone: Rice grows best in temperatures of 20-35°C with 1000-2000mm annual rainfall. Plant during rainy season (May-June). Use improved varieties like NERICA for better yields. Expect harvest in 120 days.",
      tips: ["Maintain 5-10cm water depth in paddy fields", "Apply NPK fertilizer at 3-4 weeks after planting", "Control weeds early to prevent competition"]
    },
    cassava: {
      keywords: ['cassava', 'manioc', 'yuca'],
      answer: "Cassava thrives in Sierra Leone's climate. Plant stem cuttings 15-20cm long during rainy season. Grows in poor soils with pH 5.5-6.5. Harvest after 8-12 months when leaves turn yellow.",
      tips: ["Space plants 1m x 1m for optimal growth", "Cassava is drought-tolerant but needs water in first 3 months", "Watch for Cassava Mosaic Disease - use disease-free cuttings"]
    },
    cocoa: {
      keywords: ['cocoa', 'cacao', 'chocolate'],
      answer: "Cocoa requires shade, high humidity (75-100%), and 1500-2500mm rainfall. Plant in well-drained soil with pH 6.0-7.0. Trees start producing after 3-5 years. Harvest pods when they turn yellow/orange.",
      tips: ["Provide 50% shade for young plants", "Prune regularly to maintain tree shape", "Ferment beans for 5-7 days for quality chocolate"]
    },
    maize: {
      keywords: ['maize', 'corn', 'zea'],
      answer: "Maize grows well in temperatures 18-27°C with 500-800mm rainfall. Plant at start of rainy season with 75cm row spacing. Apply fertilizer at planting and 4 weeks later. Harvest when kernels are hard (90-120 days).",
      tips: ["Plant 2-3 seeds per hole, thin to 1 strong plant", "Control Fall Armyworm with Bt spray or neem", "Dry maize to 13% moisture before storage"]
    },
    groundnut: {
      keywords: ['groundnut', 'peanut', 'arachis'],
      answer: "Groundnuts prefer sandy loam soil with pH 6.0-6.5. Plant 5cm deep with 30cm spacing. Needs 500-1000mm rainfall but avoid waterlogging. Harvest when leaves turn yellow (120-150 days).",
      tips: ["Inoculate seeds with rhizobium for nitrogen fixation", "Hill up soil around plants at flowering", "Cure pods in sun for 3-5 days after harvest"]
    },

    // SOIL & FERTILIZER
    soil: {
      keywords: ['soil', 'ph', 'acidic', 'alkaline', 'fertility'],
      answer: "Soil health is crucial for farming success. Test soil pH (ideal 6.0-7.0 for most crops). Add lime to raise pH, sulfur to lower it. Improve fertility with compost, manure, or cover crops. Rotate crops to prevent nutrient depletion.",
      tips: ["Test soil every 2-3 years", "Add organic matter to improve soil structure", "Avoid over-tilling which damages soil"]
    },
    fertilizer: {
      keywords: ['fertilizer', 'npk', 'nitrogen', 'phosphorus', 'potassium', 'urea'],
      answer: "NPK fertilizers provide Nitrogen (leaf growth), Phosphorus (roots/flowers), and Potassium (disease resistance). Apply NPK 15-15-15 at planting, then nitrogen-rich fertilizer (Urea) during growth. Split applications prevent waste.",
      tips: ["Apply fertilizer when soil is moist", "Keep fertilizer 5cm from plant stems", "Organic options: compost (2-3 tons/ha), poultry manure (1.5 tons/ha)"]
    },
    compost: {
      keywords: ['compost', 'organic', 'manure'],
      answer: "Compost improves soil fertility naturally. Mix green materials (grass, food scraps) with brown materials (dry leaves, straw) in 2:1 ratio. Keep moist and turn weekly. Ready in 2-3 months when dark and crumbly.",
      tips: ["Add thin layers of soil to speed decomposition", "Avoid meat, dairy, and diseased plants", "Use mature compost - immature compost can harm plants"]
    },

    // PEST & DISEASE MANAGEMENT
    pest: {
      keywords: ['pest', 'insect', 'bug', 'caterpillar', 'armyworm'],
      answer: "Common pests in Sierra Leone: Fall Armyworm (maize), Aphids (vegetables), Stem Borers (rice). Use Integrated Pest Management (IPM): monitor regularly, use resistant varieties, encourage natural predators, apply pesticides only when necessary.",
      tips: ["Scout fields twice weekly for early detection", "Neem oil is effective organic pesticide", "Rotate crops to break pest cycles"]
    },
    disease: {
      keywords: ['disease', 'fungus', 'blight', 'wilt', 'rot', 'mosaic'],
      answer: "Major crop diseases: Rice Blast, Cassava Mosaic, Cocoa Black Pod, Maize Streak. Prevention is key: use disease-free seeds, maintain plant spacing for air circulation, remove infected plants immediately, apply fungicides preventatively during wet season.",
      tips: ["Avoid working in fields when plants are wet", "Disinfect tools between plants", "Burn or bury diseased plant material - don't compost"]
    },

    // WEATHER & CLIMATE
    weather: {
      keywords: ['weather', 'rain', 'rainfall', 'drought', 'flood', 'climate'],
      answer: "Sierra Leone has tropical climate with rainy season (May-October) and dry season (November-April). Annual rainfall 2000-4000mm. Plan planting for early rains. Use weather forecasts to time fertilizer application and pest control.",
      tips: ["Plant early to maximize rainy season", "Mulch to conserve moisture in dry season", "Create drainage channels to prevent waterlogging"]
    },
    irrigation: {
      keywords: ['irrigation', 'water', 'watering', 'drip'],
      answer: "Irrigation extends growing season and increases yields. Options: drip irrigation (most efficient), sprinkler, furrow irrigation. Water deeply but less frequently to encourage deep roots. Best time: early morning or evening.",
      tips: ["Check soil moisture before watering - stick finger 5cm deep", "Mulch around plants to reduce water needs", "Collect rainwater for dry season use"]
    },

    // MARKET & ECONOMICS
    market: {
      keywords: ['market', 'price', 'sell', 'buyer', 'profit'],
      answer: "Current market trends (Sierra Leone): Rice demand high year-round. Cocoa prices stable with export opportunities. Cassava processing (gari, flour) adds value. Join farmer cooperatives for better prices and bulk sales.",
      tips: ["Store crops properly to sell when prices are higher", "Diversify crops to spread market risk", "Keep records of costs and sales for profit tracking"]
    },
    cooperative: {
      keywords: ['cooperative', 'group', 'association', 'union'],
      answer: "Farmer cooperatives provide: bulk input purchasing (lower costs), shared equipment, collective marketing (better prices), access to credit, training opportunities. Join or form a cooperative with 10+ farmers in your area.",
      tips: ["Choose honest, transparent leadership", "Contribute regularly to cooperative funds", "Attend meetings to stay informed"]
    },

    // GOVERNMENT SUPPORT
    subsidy: {
      keywords: ['subsidy', 'government', 'support', 'grant', 'loan'],
      answer: "Government programs available: Fertilizer subsidies (50% discount for registered farmers), Free seed distribution (rice, maize), Youth in Agriculture grants (up to $5,000), Tractor rental vouchers. Register with Ministry of Agriculture district office.",
      tips: ["Register early - programs have limited slots", "Keep farm records for loan applications", "Join farmer groups to access more programs"]
    },

    // GENERAL FARMING PRACTICES
    planting: {
      keywords: ['plant', 'sow', 'seed', 'germination'],
      answer: "Successful planting: Use certified seeds, plant at correct depth (2-3x seed size), maintain proper spacing, plant at start of rains, treat seeds with fungicide if needed. Mark rows for easy weeding.",
      tips: ["Soak hard seeds overnight before planting", "Plant in rows for easier management", "Thin seedlings to recommended spacing"]
    },
    harvest: {
      keywords: ['harvest', 'harvesting', 'reap'],
      answer: "Harvest at right maturity for best quality and storage. Signs: Rice - grains hard, Maize - kernels hard and dented, Cassava - leaves yellowing. Harvest in dry weather. Dry crops to safe moisture levels before storage.",
      tips: ["Harvest early morning when cool", "Handle produce gently to avoid damage", "Clean and dry storage areas before use"]
    },
    storage: {
      keywords: ['storage', 'store', 'preserve', 'warehouse'],
      answer: "Proper storage prevents losses. Dry grains to 12-14% moisture. Use airtight containers or improved storage bags. Keep storage area clean, dry, and cool. Check regularly for pests. Add neem leaves or ash as natural pest deterrent.",
      tips: ["Store different crops separately", "Raise bags off ground on pallets", "First in, first out - use older stock first"]
    },
    // APPLICATION FEATURES
    marketplace: {
      keywords: ['marketplace', 'buy', 'sell', 'trading', 'shop', 'store'],
      answer: "Our Marketplace connects farmers directly with buyers. You can list your crops, livestock, or equipment for sale, and browse products from other farmers across Sierra Leone.",
      tips: ["Take clear photos of your products", "Provide accurate descriptions and prices", "Respond quickly to buyer inquiries"]
    },
    ai: {
      keywords: ['ai', 'robot', 'assistant', 'recommendation', 'detection', 'prediction', 'smart'],
      answer: "Agri Connect uses advanced Artificial Intelligence to help you. Our tools include Crop Recommendation (based on soil), Disease Detection (via photos), and Yield Prediction to plan your harvest.",
      tips: ["Use 'Crop Recommendation' before planting", "Scan plants early with 'Disease Detection'", "Check 'Yield Prediction' to estimate your profit"]
    },
    opportunity: {
      keywords: ['opportunity', 'portal', 'scheme', 'grant', 'job', 'training', 'scholarship'],
      answer: "The Agri-Opp Portal centralizes all agricultural opportunities including Government subsidies, private grants, jobs in the sector, and specialized training workshops.",
      tips: ["Check the 'Grants' section weekly", "Apply for 'Training' to improve skills", "Look at 'Jobs' for career growth in agriculture"]
    },
    finance: {
      keywords: ['finance', 'loan', 'credit', 'insurance', 'money', 'bank', 'payment'],
      answer: "We offer tailored Financial Services including low-interest loans for inputs and equipment, and crop insurance to protect your investment against climate risks.",
      tips: ["Apply for 'Input Credit' early in the season", "Get 'Crop Insurance' to mitigate weather risks", "Maintain good farm records for easier loan approval"]
    },
    traceability: {
      keywords: ['traceability', 'track', 'origin', 'logistics', 'quality', 'export'],
      answer: "Our Traceability system allows you to register products and track their journey from farm to market. This is essential for premium exports and building buyer trust.",
      tips: ["Register your harvest immediately", "Use our QR system for easy tracking", "Track your produce to ensure quality during transport"]
    },
    climate: {
      keywords: ['climate', 'weather', 'forecast', 'rain', 'alert', 'storm'],
      answer: "The Climate & Weather section provides hyper-local forecasts and early warnings for extreme weather, helping you decide when to plant, spray, or harvest.",
      tips: ["Check daily alerts for storm warnings", "Use the 7-day forecast for planning", "Provide feedback on local weather conditions"]
    }
  };

  // Search knowledge base
  let response = {
    answer: "I'm Agri Connect, your agricultural assistant! I can help with crop cultivation, soil management, pest control, weather advice, market information, and government programs. What would you like to know?",
    tips: ["Ask about specific crops: rice, cassava, cocoa, maize", "Get advice on soil, fertilizers, pests, diseases", "Learn about markets, cooperatives, and subsidies"]
  };

  // Find matching topic
  for (const [topic, data] of Object.entries(knowledgeBase)) {
    if (data.keywords.some(keyword => lowerQuery.includes(keyword))) {
      response = {
        answer: data.answer,
        tips: data.tips
      };
      break;
    }
  }

  // Special queries
  if (lowerQuery.includes('hello') || lowerQuery.includes('hi ') || lowerQuery.includes('hey')) {
    response = {
      answer: "Hello! I'm Agri Connect, your agricultural assistant for Sierra Leone. I can help you with crop recommendations, pest control, soil management, market prices, and government programs. What farming question do you have today?",
      tips: ["Try asking: 'How do I grow rice?'", "Or: 'What fertilizer for cassava?'", "Or: 'How to control pests?'"]
    };
  } else if (lowerQuery.includes('thank')) {
    response = {
      answer: "You're welcome! Happy farming! Remember, I'm always here to help with your agricultural questions. Good luck with your crops! 🌾",
      tips: ["Check back anytime for farming advice", "Visit our AI tools for crop recommendations", "Join farmer cooperatives for support"]
    };
  }

  // Simulate AI processing
  setTimeout(() => {
    res.json(response);
  }, 800);
});

// Admin: Summary Stats Endpoint
app.get('/api/admin/stats', (req, res) => {
  const stats = {
    totalUsers: 1248, // Mocked for now
    activeListings: 0,
    pendingReports: 0,
    systemHealth: '98%',
    recentActivities: []
  };

  // Count active listings
  db.get('SELECT COUNT(*) as count FROM marketplace_products WHERE status = "available"', [], (err, row) => {
    if (!err) stats.activeListings = row.count;

    // Count pending items (applications, inquiries, etc.)
    const queries = [
      'SELECT COUNT(*) as count FROM job_applications WHERE status = "pending"',
      'SELECT COUNT(*) as count FROM govt_applications WHERE status = "pending"',
      'SELECT COUNT(*) as count FROM training_enrollments WHERE status = "pending"',
      'SELECT COUNT(*) as count FROM grant_applications WHERE status = "pending"',
      'SELECT COUNT(*) as count FROM marketplace_inquiries WHERE status = "pending"'
    ];

    let queryCount = 0;
    let totalPending = 0;

    queries.forEach(q => {
      db.get(q, [], (err, row) => {
        queryCount++;
        if (!err) totalPending += row.count;

        if (queryCount === queries.length) {
          stats.pendingReports = totalPending;

          // Add some mock recent activities based on actual data
          db.all('SELECT * FROM marketplace_products ORDER BY created_date DESC LIMIT 2', [], (err, products) => {
            if (!err && products) {
              products.forEach(p => {
                stats.recentActivities.push({
                  type: 'success',
                  title: 'New Listing',
                  message: `${p.seller_name} listed ${p.product_name} in ${p.seller_location}`,
                  time: 'Recently'
                });
              });
            }
            res.json(stats);
          });
        }
      });
    });
  });
});

// Agri-Opp Portal API
app.get('/api/agri-opp-portal/:category', (req, res) => {
  const { category } = req.params;

  if (category === 'govt') {
    const response = {};
    db.all('SELECT id, title, description FROM govt_subsidies', [], (err, subsidies) => {
      if (err) return res.status(500).json({ error: err.message });
      response.subsidies = subsidies;

      db.all('SELECT id, title, description FROM govt_infrastructure', [], (err, infra) => {
        if (err) return res.status(500).json({ error: err.message });
        response.infrastructure = infra;
        res.json(response);
      });
    });
  } else if (category === 'jobs') {
    db.all('SELECT id, title, type, location, posted FROM jobs', [], (err, rows) => {
      if (err) res.status(500).json({ error: err.message });
      else res.json(rows);
    });
  } else if (category === 'training') {
    db.all('SELECT id, title, provider, type FROM trainings', [], (err, rows) => {
      if (err) res.status(500).json({ error: err.message });
      else res.json(rows);
    });
  } else if (category === 'grants') {
    db.all('SELECT id, title, description, amount FROM grants', [], (err, rows) => {
      if (err) res.status(500).json({ error: err.message });
      else res.json(rows);
    });
  } else if (category === 'market') {
    const response = {};
    db.all('SELECT label, value, sub, color FROM market_stats', [], (err, stats) => {
      if (err) return res.status(500).json({ error: err.message });
      response.stats = stats;

      db.all('SELECT item, price FROM market_prices', [], (err, prices) => {
        if (err) return res.status(500).json({ error: err.message });
        response.prices = prices;
        res.json(response);
      });
    });
  } else if (category === 'tools') {
    db.all('SELECT name FROM business_tools', [], (err, rows) => {
      if (err) res.status(500).json({ error: err.message });
      else res.json(rows.map(r => r.name));
    });
  } else if (category === 'youth') {
    db.all('SELECT title, description, icon FROM youth_opportunities', [], (err, rows) => {
      if (err) res.status(500).json({ error: err.message });
      else res.json(rows);
    });
  } else if (category === 'ngo') {
    db.all('SELECT name, type, offers FROM ngo_partners', [], (err, rows) => {
      if (err) return res.status(500).json({ error: err.message });
      const parsedRows = rows.map(row => ({
        ...row,
        offers: JSON.parse(row.offers)
      }));
      res.json(parsedRows);
    });
  } else {
    res.status(404).json({ error: 'Category not found' });
  }
});


// Job Application Submission
app.post('/api/job-applications', (req, res) => {
  const { job_id, job_title, applicant_name, email, phone, cover_letter } = req.body;

  // Validation
  if (!job_id || !job_title || !applicant_name || !email || !phone) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const applied_date = new Date().toISOString();

  db.run(
    'INSERT INTO job_applications (job_id, job_title, applicant_name, email, phone, cover_letter, applied_date, status) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
    [job_id, job_title, applicant_name, email, phone, cover_letter || '', applied_date, 'pending'],
    function (err) {
      if (err) {
        console.error('Error saving application:', err);
        return res.status(500).json({ error: 'Failed to submit application' });
      }
      res.json({
        success: true,
        message: 'Application submitted successfully!',
        application_id: this.lastID
      });
    }
  );
});


// Government Program Application Submission
app.post('/api/govt-applications', (req, res) => {
  const {
    program_id, program_name, program_type, applicant_name, email, phone,
    id_number, farm_size, location, crops, is_registered_farmer, additional_info
  } = req.body;

  // Validation
  if (!program_id || !program_name || !program_type || !applicant_name || !email || !phone) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const applied_date = new Date().toISOString();

  db.run(
    `INSERT INTO govt_applications (
      program_id, program_name, program_type, applicant_name, email, phone,
      id_number, farm_size, location, crops, is_registered_farmer, additional_info,
      applied_date, status
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [
      program_id, program_name, program_type, applicant_name, email, phone,
      id_number || '', farm_size || '', location || '', crops || '',
      is_registered_farmer || '', additional_info || '', applied_date, 'pending'
    ],
    function (err) {
      if (err) {
        console.error('Error saving government application:', err);
        return res.status(500).json({ error: 'Failed to submit application' });
      }
      res.json({
        success: true,
        message: 'Application submitted successfully!',
        application_id: this.lastID,
        reference_number: `GOVT-${this.lastID}-${Date.now().toString().slice(-6)}`
      });
    }
  );
});


// Admin: Get all job applications
app.get('/api/admin/job-applications', (req, res) => {
  db.all('SELECT * FROM job_applications ORDER BY applied_date DESC', [], (err, rows) => {
    if (err) {
      console.error('Error fetching job applications:', err);
      return res.status(500).json({ error: 'Failed to fetch applications' });
    }
    res.json(rows);
  });
});

// Admin: Get all government program applications
app.get('/api/admin/govt-applications', (req, res) => {
  db.all('SELECT * FROM govt_applications ORDER BY applied_date DESC', [], (err, rows) => {
    if (err) {
      console.error('Error fetching government applications:', err);
      return res.status(500).json({ error: 'Failed to fetch applications' });
    }
    res.json(rows);
  });
});

// Admin: Update application status
app.patch('/api/admin/applications/:type/:id/status', (req, res) => {
  const { type, id } = req.params;
  const { status } = req.body;

  const table = type === 'job' ? 'job_applications' : 'govt_applications';

  db.run(`UPDATE ${table} SET status = ? WHERE id = ?`, [status, id], function (err) {
    if (err) {
      console.error('Error updating status:', err);
      return res.status(500).json({ error: 'Failed to update status' });
    }
    res.json({ success: true, message: 'Status updated', changes: this.changes });
  });
});


// Training Enrollment Submission
app.post('/api/training-enrollments', (req, res) => {
  const {
    training_id, training_title, training_provider, applicant_name, email, phone,
    organization, experience_level, reason
  } = req.body;

  // Validation
  if (!training_id || !training_title || !training_provider || !applicant_name || !email || !phone) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const enrolled_date = new Date().toISOString();

  db.run(
    `INSERT INTO training_enrollments (
      training_id, training_title, training_provider, applicant_name, email, phone,
      organization, experience_level, reason, enrolled_date, status
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [
      training_id, training_title, training_provider, applicant_name, email, phone,
      organization || '', experience_level || '', reason || '', enrolled_date, 'pending'
    ],
    function (err) {
      if (err) {
        console.error('Error saving training enrollment:', err);
        return res.status(500).json({ error: 'Failed to submit enrollment' });
      }
      res.json({
        success: true,
        message: 'Enrollment submitted successfully!',
        enrollment_id: this.lastID,
        reference_number: `TRAIN-${this.lastID}-${Date.now().toString().slice(-6)}`
      });
    }
  );
});

// Admin: Get all training enrollments
app.get('/api/admin/training-enrollments', (req, res) => {
  db.all('SELECT * FROM training_enrollments ORDER BY enrolled_date DESC', [], (err, rows) => {
    if (err) {
      console.error('Error fetching training enrollments:', err);
      return res.status(500).json({ error: 'Failed to fetch enrollments' });
    }
    res.json(rows);
  });
});

// Grant Application Submission
app.post('/api/grant-applications', (req, res) => {
  const {
    grant_id, grant_title, grant_amount, applicant_name, email, phone,
    organization, project_description, requested_amount
  } = req.body;

  // Validation
  if (!grant_id || !grant_title || !applicant_name || !email || !phone) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const applied_date = new Date().toISOString();

  db.run(
    `INSERT INTO grant_applications (
      grant_id, grant_title, grant_amount, applicant_name, email, phone,
      organization, project_description, requested_amount, applied_date, status
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [
      grant_id, grant_title, grant_amount, applicant_name, email, phone,
      organization || '', project_description || '', requested_amount || '', applied_date, 'pending'
    ],
    function (err) {
      if (err) {
        console.error('Error saving grant application:', err);
        return res.status(500).json({ error: 'Failed to submit application' });
      }
      res.json({
        success: true,
        message: 'Grant application submitted successfully!',
        application_id: this.lastID,
        reference_number: `GRANT-${this.lastID}-${Date.now().toString().slice(-6)}`
      });
    }
  );
});

// Admin: Get all grant applications
app.get('/api/admin/grant-applications', (req, res) => {
  db.all('SELECT * FROM grant_applications ORDER BY applied_date DESC', [], (err, rows) => {
    if (err) {
      console.error('Error fetching grant applications:', err);
      return res.status(500).json({ error: 'Failed to fetch applications' });
    }
    res.json(rows);
  });
});




// ============================================
// MARKETPLACE ENDPOINTS
// ============================================

// Get all marketplace products (with optional filters)
app.get('/api/marketplace/products', (req, res) => {
  const { category, seller_id } = req.query;
  let query = 'SELECT * FROM marketplace_products WHERE status = "available"';
  let params = [];

  if (category && category !== 'All') {
    query += ' AND category = ?';
    params.push(category);
  }

  if (seller_id) {
    query += ' AND seller_id = ?';
    params.push(seller_id);
  }

  query += ' ORDER BY created_date DESC';

  db.all(query, params, (err, rows) => {
    if (err) {
      console.error('Error fetching marketplace products:', err);
      return res.status(500).json({ error: 'Failed to fetch products' });
    }
    res.json(rows);
  });
});

// Get single product details
app.get('/api/marketplace/products/:id', (req, res) => {
  const { id } = req.params;
  db.get('SELECT * FROM marketplace_products WHERE id = ?', [id], (err, row) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!row) return res.status(404).json({ error: 'Product not found' });
    res.json(row);
  });
});

// Create new product listing
app.post('/api/marketplace/products', (req, res) => {
  const { seller_name, seller_phone, seller_location, product_name, category, description, price, unit, quantity_available } = req.body;

  // Basic validation
  if (!seller_name || !product_name || !price || !category) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const created_date = new Date().toISOString();

  db.run(
    `INSERT INTO marketplace_products (
      seller_name, seller_phone, seller_location, product_name, category, 
      description, price, unit, quantity_available, status, created_date
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [
      seller_name, seller_phone, seller_location, product_name, category,
      description || '', price, unit || 'unit', quantity_available || '1', 'available', created_date
    ],
    function (err) {
      if (err) {
        console.error('Error creating product listing:', err);
        return res.status(500).json({ error: 'Failed to create listing' });
      }
      res.json({
        success: true,
        message: 'Product listed successfully!',
        product_id: this.lastID
      });
    }
  );
});

// Submit buyer inquiry
app.post('/api/marketplace/inquiries', (req, res) => {
  const { product_id, product_name, buyer_name, buyer_email, buyer_phone, message } = req.body;

  if (!product_id || !buyer_name || !buyer_phone) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const inquiry_date = new Date().toISOString();

  db.run(
    `INSERT INTO marketplace_inquiries (
      product_id, product_name, buyer_name, buyer_email, buyer_phone, message, inquiry_date, status
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
    [product_id, product_name, buyer_name, buyer_email, buyer_phone, message || '', inquiry_date, 'pending'],
    function (err) {
      if (err) {
        console.error('Error submitting inquiry:', err);
        return res.status(500).json({ error: 'Failed to submit inquiry' });
      }
      res.json({
        success: true,
        message: 'Inquiry sent successfully!',
        inquiry_id: this.lastID
      });
    }
  );
});

// Admin: Get all marketplace products (including sold/hidden)
app.get('/api/admin/marketplace/products', (req, res) => {
  db.all('SELECT * FROM marketplace_products ORDER BY created_date DESC', [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

// Admin: Update product status
app.patch('/api/admin/marketplace/products/:id/status', (req, res) => {
  const { status } = req.body;
  const { id } = req.params;

  db.run('UPDATE marketplace_products SET status = ? WHERE id = ?', [status, id], function (err) {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ success: true, message: 'Status updated' });
  });
});

// Admin: Get all inquiries
app.get('/api/admin/marketplace/inquiries', (req, res) => {
  db.all('SELECT * FROM marketplace_inquiries ORDER BY inquiry_date DESC', [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});


// ============================================
// SOCIAL HUB (COMMUNITY) ENDPOINTS
// ============================================

// Get all posts
app.get('/api/community/posts', (req, res) => {
  db.all('SELECT * FROM posts ORDER BY timestamp DESC', [], (err, rows) => {
    if (err) {
      console.error('Error fetching posts:', err);
      return res.status(500).json({ error: 'Failed to fetch posts' });
    }
    // Parse tags JSON
    const posts = rows.map(post => ({
      ...post,
      tags: post.tags ? JSON.parse(post.tags) : [],
      isSpecialist: post.is_specialist === 1,
      liked: false // Default to false for now (no auth context)
    }));
    res.json(posts);
  });
});

// Create a new post
app.post('/api/community/posts', (req, res) => {
  const { author, location, content, image, tags } = req.body;

  if (!author || !content) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const timestamp = new Date().toISOString();
  // Mock specialist status randomly for demo or based on user role if available
  const isSpecialist = 0;
  const tagsJson = JSON.stringify(tags || []);

  db.run(
    `INSERT INTO posts (author_name, is_specialist, location, content, timestamp, likes_count, comments_count, image_url, tags) VALUES (?, ?, ?, ?, ?, 0, 0, ?, ?)`,
    [author, isSpecialist, location, content, timestamp, image || '', tagsJson],
    function (err) {
      if (err) {
        console.error('Error creating post:', err);
        return res.status(500).json({ error: 'Failed to create post' });
      }
      res.json({
        success: true,
        message: 'Post created successfully!',
        post: {
          id: this.lastID,
          author_name: author,
          content,
          timestamp,
          likes_count: 0
        }
      });
    }
  );
});

// Like a post
app.post('/api/community/posts/:id/like', (req, res) => {
  const { id } = req.params;

  db.run('UPDATE posts SET likes_count = likes_count + 1 WHERE id = ?', [id], function (err) {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ success: true, message: 'Post liked' });
  });
});

// ============================================
// AI SERVICES - KNOWLEDGE-BASED ENDPOINTS
// ============================================

// Agricultural Knowledge Base
const cropDatabase = {
  rice: {
    idealTemp: [20, 35], idealRainfall: [1000, 2000], idealPH: [5.5, 7.0],
    N: 'high', P: 'medium', K: 'medium', growthDays: 120, yieldPerHa: 4.5
  },
  cassava: {
    idealTemp: [25, 35], idealRainfall: [800, 1500], idealPH: [5.5, 6.5],
    N: 'low', P: 'medium', K: 'high', growthDays: 300, yieldPerHa: 12
  },
  cocoa: {
    idealTemp: [21, 32], idealRainfall: [1500, 2500], idealPH: [6.0, 7.0],
    N: 'medium', P: 'medium', K: 'high', growthDays: 365, yieldPerHa: 0.8
  },
  maize: {
    idealTemp: [18, 27], idealRainfall: [500, 800], idealPH: [5.8, 7.0],
    N: 'high', P: 'high', K: 'medium', growthDays: 90, yieldPerHa: 5.5
  },
  groundnut: {
    idealTemp: [20, 30], idealRainfall: [500, 1000], idealPH: [6.0, 6.5],
    N: 'low', P: 'high', K: 'medium', growthDays: 120, yieldPerHa: 2.5
  },
  'palm-oil': {
    idealTemp: [24, 32], idealRainfall: [2000, 4000], idealPH: [4.5, 6.5],
    N: 'medium', P: 'medium', K: 'high', growthDays: 365, yieldPerHa: 3.5
  }
};

const diseaseDatabase = {
  'rice-blast': {
    symptoms: ['brown spots', 'leaf lesions', 'wilting'],
    treatment: 'Apply Tricyclazole fungicide. Remove infected plants. Improve drainage.',
    prevention: 'Use resistant varieties. Avoid excessive nitrogen. Maintain proper spacing.'
  },
  'cassava-mosaic': {
    symptoms: ['yellow patches', 'leaf distortion', 'stunted growth'],
    treatment: 'Remove infected plants immediately. Use virus-free planting material.',
    prevention: 'Plant resistant varieties. Control whitefly vectors. Use clean tools.'
  },
  'maize-streak': {
    symptoms: ['yellow streaks', 'chlorotic lines', 'stunting'],
    treatment: 'No cure available. Remove infected plants. Control leafhopper vectors.',
    prevention: 'Plant early. Use resistant varieties. Control leafhoppers with insecticides.'
  },
  'cocoa-black-pod': {
    symptoms: ['black spots on pods', 'rotting', 'premature drop'],
    treatment: 'Apply copper-based fungicides. Remove infected pods. Improve drainage.',
    prevention: 'Prune regularly. Ensure good air circulation. Harvest ripe pods promptly.'
  },
  'healthy': {
    symptoms: [],
    treatment: 'No treatment needed. Plant is healthy.',
    prevention: 'Continue good agricultural practices. Monitor regularly.'
  }
};

// 1. CROP RECOMMENDATION API
app.post('/api/ai/crop-recommendation', (req, res) => {
  const { nitrogen, phosphorus, potassium, temperature, humidity, ph, rainfall } = req.body;

  // Validate inputs
  if (!nitrogen || !phosphorus || !potassium || !temperature || !ph || !rainfall) {
    return res.status(400).json({ error: 'Missing required parameters' });
  }

  // Normalize nutrient levels
  const getNutrientLevel = (value) => {
    if (value < 50) return 'low';
    if (value < 100) return 'medium';
    return 'high';
  };

  const nLevel = getNutrientLevel(nitrogen);
  const pLevel = getNutrientLevel(phosphorus);
  const kLevel = getNutrientLevel(potassium);

  // Score each crop
  const recommendations = Object.entries(cropDatabase).map(([crop, data]) => {
    let score = 100;

    // Temperature match
    if (temperature < data.idealTemp[0] || temperature > data.idealTemp[1]) {
      score -= 30;
    }

    // Rainfall match
    if (rainfall < data.idealRainfall[0] || rainfall > data.idealRainfall[1]) {
      score -= 25;
    }

    // pH match
    if (ph < data.idealPH[0] || ph > data.idealPH[1]) {
      score -= 20;
    }

    // Nutrient match
    if (data.N !== nLevel) score -= 10;
    if (data.P !== pLevel) score -= 10;
    if (data.K !== kLevel) score -= 10;

    return {
      crop: crop.charAt(0).toUpperCase() + crop.slice(1).replace('-', ' '),
      suitability: Math.max(0, score),
      reason: score > 70 ? 'Excellent match for your conditions' :
        score > 50 ? 'Good match with minor adjustments needed' :
          'Challenging - consider soil amendments',
      expectedYield: `${data.yieldPerHa} tons/hectare`,
      growthPeriod: `${data.growthDays} days`
    };
  }).sort((a, b) => b.suitability - a.suitability);

  res.json({
    recommendations: recommendations.slice(0, 5),
    soilAnalysis: {
      nitrogen: nLevel,
      phosphorus: pLevel,
      potassium: kLevel,
      ph: ph,
      interpretation: ph < 5.5 ? 'Acidic - consider liming' :
        ph > 7.5 ? 'Alkaline - may need sulfur' :
          'Optimal pH range'
    }
  });
});

// 2. YIELD PREDICTION API
app.post('/api/ai/yield-prediction', (req, res) => {
  const { crop, area, rainfall, temperature, soilQuality, fertilizer } = req.body;

  if (!crop || !area) {
    return res.status(400).json({ error: 'Crop and area are required' });
  }

  const cropKey = crop.toLowerCase().replace(' ', '-');
  const cropData = cropDatabase[cropKey];

  if (!cropData) {
    return res.status(404).json({ error: 'Crop not found in database' });
  }

  // Base yield
  let yieldPerHa = cropData.yieldPerHa;
  let factors = [];

  // Adjust for rainfall
  if (rainfall) {
    if (rainfall < cropData.idealRainfall[0]) {
      yieldPerHa *= 0.7;
      factors.push({ factor: 'Low Rainfall', impact: -30 });
    } else if (rainfall > cropData.idealRainfall[1]) {
      yieldPerHa *= 0.8;
      factors.push({ factor: 'Excessive Rainfall', impact: -20 });
    } else {
      factors.push({ factor: 'Optimal Rainfall', impact: 0 });
    }
  }

  // Adjust for temperature
  if (temperature) {
    if (temperature < cropData.idealTemp[0] || temperature > cropData.idealTemp[1]) {
      yieldPerHa *= 0.85;
      factors.push({ factor: 'Suboptimal Temperature', impact: -15 });
    } else {
      factors.push({ factor: 'Ideal Temperature', impact: 0 });
    }
  }

  // Adjust for soil quality
  if (soilQuality === 'poor') {
    yieldPerHa *= 0.6;
    factors.push({ factor: 'Poor Soil Quality', impact: -40 });
  } else if (soilQuality === 'good') {
    yieldPerHa *= 1.1;
    factors.push({ factor: 'Good Soil Quality', impact: +10 });
  } else if (soilQuality === 'excellent') {
    yieldPerHa *= 1.3;
    factors.push({ factor: 'Excellent Soil Quality', impact: +30 });
  }

  // Adjust for fertilizer
  if (fertilizer === 'yes') {
    yieldPerHa *= 1.2;
    factors.push({ factor: 'Fertilizer Application', impact: +20 });
  }

  const totalYield = (yieldPerHa * parseFloat(area)).toFixed(2);
  const confidence = factors.filter(f => f.impact >= 0).length / factors.length * 100;

  res.json({
    prediction: {
      totalYield: `${totalYield} tons`,
      yieldPerHectare: `${yieldPerHa.toFixed(2)} tons/ha`,
      confidence: `${confidence.toFixed(0)}%`,
      harvestDate: `Approximately ${cropData.growthDays} days from planting`
    },
    factors: factors,
    recommendations: [
      'Monitor weather conditions regularly',
      'Ensure proper irrigation during dry spells',
      'Apply fertilizer at recommended intervals',
      'Control pests and diseases promptly'
    ]
  });
});

// 3. DISEASE DETECTION API
app.post('/api/ai/disease-detection', (req, res) => {
  const { imageData, cropType } = req.body;

  // Simulate image analysis (in production, this would use ML model)
  // For now, randomly select a disease or healthy status
  const diseases = Object.keys(diseaseDatabase);
  const detectedDisease = diseases[Math.floor(Math.random() * diseases.length)];
  const diseaseInfo = diseaseDatabase[detectedDisease];

  const confidence = detectedDisease === 'healthy' ? 95 : 75 + Math.random() * 20;

  res.json({
    diagnosis: {
      disease: detectedDisease.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
      confidence: `${confidence.toFixed(1)}%`,
      severity: detectedDisease === 'healthy' ? 'None' :
        confidence > 85 ? 'High' :
          confidence > 70 ? 'Medium' : 'Low'
    },
    symptoms: diseaseInfo.symptoms,
    treatment: diseaseInfo.treatment,
    prevention: diseaseInfo.prevention,
    additionalInfo: {
      affectedCrop: cropType || 'Unknown',
      detectionDate: new Date().toISOString().split('T')[0],
      recommendedAction: detectedDisease === 'healthy' ?
        'Continue monitoring' :
        'Immediate treatment recommended'
    }
  });
});

// 4. FERTILIZER GUIDE API
app.post('/api/ai/fertilizer-guide', (req, res) => {
  const { crop, soilType, nitrogen, phosphorus, potassium, area } = req.body;

  if (!crop) {
    return res.status(400).json({ error: 'Crop type is required' });
  }

  const cropKey = crop.toLowerCase().replace(' ', '-');
  const cropData = cropDatabase[cropKey];

  if (!cropData) {
    return res.status(404).json({ error: 'Crop not found in database' });
  }

  // Calculate fertilizer needs based on soil levels
  const calculateNeed = (current, required) => {
    if (required === 'high' && current < 80) return 'High';
    if (required === 'medium' && current < 60) return 'Medium';
    if (required === 'low' && current < 40) return 'Low';
    return 'Sufficient';
  };

  const nNeed = calculateNeed(nitrogen || 50, cropData.N);
  const pNeed = calculateNeed(phosphorus || 50, cropData.P);
  const kNeed = calculateNeed(potassium || 50, cropData.K);

  // Generate fertilizer schedule
  const schedule = [
    {
      stage: 'Pre-Planting',
      timing: '1-2 weeks before planting',
      fertilizer: 'NPK 15-15-15',
      rate: `${area ? area * 50 : 50} kg`,
      method: 'Broadcast and incorporate into soil'
    },
    {
      stage: 'Early Growth',
      timing: '3-4 weeks after planting',
      fertilizer: nNeed === 'High' ? 'Urea (46-0-0)' : 'NPK 20-10-10',
      rate: `${area ? area * 30 : 30} kg`,
      method: 'Side dressing, 5cm from plant base'
    },
    {
      stage: 'Mid Growth',
      timing: '6-8 weeks after planting',
      fertilizer: 'NPK 12-12-17',
      rate: `${area ? area * 40 : 40} kg`,
      method: 'Top dressing with light irrigation'
    }
  ];

  res.json({
    cropRequirements: {
      nitrogen: cropData.N,
      phosphorus: cropData.P,
      potassium: cropData.K
    },
    soilStatus: {
      nitrogen: nNeed,
      phosphorus: pNeed,
      potassium: kNeed
    },
    fertilizerSchedule: schedule,
    recommendations: [
      'Apply fertilizer in split doses for better efficiency',
      'Water immediately after application to prevent burning',
      'Avoid fertilizer contact with plant stems',
      'Store fertilizers in cool, dry place',
      `Total estimated cost: Le ${(area || 1) * 250000} for ${area || 1} hectare(s)`
    ],
    organicAlternatives: [
      'Compost: 2-3 tons per hectare',
      'Poultry manure: 1.5 tons per hectare',
      'Green manure: Plant legumes before main crop'
    ]
  });
});

// Global Error Handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    error: 'Something went wrong!',
    message: err.message
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
