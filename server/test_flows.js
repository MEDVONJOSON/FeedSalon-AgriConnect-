const fetch = require('node-fetch');

async function runTests() {
    console.log('🚀 Starting Marketplace Flow Tests...');

    // 1. Test Product Creation
    console.log('\n--- Test 1: Product Creation ---');
    try {
        const productRes = await fetch('http://localhost:5000/api/marketplace/products', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                seller_name: 'Test Farmer',
                seller_phone: '123456789',
                seller_location: 'Bo',
                product_name: 'Test Product',
                category: 'Crops',
                description: 'This is a test product created by automation.',
                price: '500',
                unit: 'kg',
                quantity_available: '10'
            })
        });
        const productData = await productRes.json();
        if (productRes.ok && productData.success) {
            console.log('✅ Product created successfully. ID:', productData.product_id);
            const productId = productData.product_id;

            // 2. Test Inquiry Submission
            console.log('\n--- Test 2: Inquiry Submission ---');
            const inquiryRes = await fetch('http://localhost:5000/api/marketplace/inquiries', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    product_id: productId,
                    product_name: 'Test Product',
                    buyer_name: 'Test Buyer',
                    buyer_phone: '987654321',
                    message: 'Is this test product still available?'
                })
            });
            const inquiryData = await inquiryRes.json();
            if (inquiryRes.ok && inquiryData.success) {
                console.log('✅ Inquiry submitted successfully. ID:', inquiryData.inquiry_id);
            } else {
                console.error('❌ Inquiry submission failed:', inquiryData);
            }
        } else {
            console.error('❌ Product creation failed:', productData);
        }
    } catch (error) {
        console.error('❌ Network error during tests:', error.message);
    }
}

runTests();
