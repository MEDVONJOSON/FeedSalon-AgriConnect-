const http = require('http');

// Create a large payload (~2MB)
const largeData = 'a'.repeat(2 * 1024 * 1024);
const postData = JSON.stringify({
    imageData: `data:image/jpeg;base64,${largeData}`,
    cropType: 'rice'
});

const options = {
    hostname: 'localhost',
    port: 5000,
    path: '/api/ai/disease-detection',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(postData)
    }
};

console.log(`Sending payload of size: ${(Buffer.byteLength(postData) / 1024 / 1024).toFixed(2)} MB`);

const req = http.request(options, (res) => {
    console.log(`STATUS: ${res.statusCode}`);
    res.setEncoding('utf8');
    let data = '';
    res.on('data', (chunk) => {
        data += chunk;
    });
    res.on('end', () => {
        console.log('BODY:', data.substring(0, 200) + '...');
        if (res.statusCode === 200) {
            console.log('TEST PASSED: Large payload accepted.');
        } else {
            console.log('TEST FAILED: Payload rejected or error occurred.');
        }
    });
});

req.on('error', (e) => {
    console.error(`problem with request: ${e.message}`);
});

// Write data to request body
req.write(postData);
req.end();
