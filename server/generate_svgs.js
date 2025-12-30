const fs = require('fs');
const path = require('path');

const outputDir = path.join(__dirname, '../client/public/images/marketplace');

if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

const products = [
    { name: 'rice', color: '#fef3c7', text: 'Rice', iconColor: '#d97706' },
    { name: 'cassava', color: '#ecfccb', text: 'Cassava', iconColor: '#65a30d' },
    { name: 'cocoa', color: '#78350f', text: 'Cocoa', iconColor: '#fffbeb' },
    { name: 'vegetables', color: '#dcfce7', text: 'Veggies', iconColor: '#16a34a' },
    { name: 'goats', color: '#f1f5f9', text: 'Goat', iconColor: '#475569' },
    { name: 'chickens', color: '#ffedd5', text: 'Chicken', iconColor: '#ea580c' },
    { name: 'tools', color: '#e2e8f0', text: 'Tools', iconColor: '#1e293b' },
    { name: 'pump', color: '#dbeafe', text: 'Pump', iconColor: '#2563eb' },
    { name: 'palmoil', color: '#ef4444', text: 'Palm Oil', iconColor: '#fee2e2' },
    { name: 'driedfish', color: '#ffedd5', text: 'Fish', iconColor: '#c2410c' },
];

products.forEach(p => {
    const svg = `
<svg width="400" height="300" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
    <rect width="400" height="300" fill="${p.color}"/>
    <circle cx="200" cy="150" r="80" fill="${p.iconColor}" opacity="0.2"/>
    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="Arial, sans-serif" font-size="48" font-weight="bold" fill="${p.iconColor}">${p.text}</text>
</svg>`;

    fs.writeFileSync(path.join(outputDir, `${p.name}.svg`), svg.trim());
    console.log(`Generated ${p.name}.svg`);
});
console.log('Done generating SVGs');
