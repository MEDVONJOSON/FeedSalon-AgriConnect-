const fs = require('fs');
const path = require('path');

const clientDir = path.join(process.cwd(), 'client');

function walkDir(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        let isDirectory = fs.statSync(dirPath).isDirectory();
        if (isDirectory) {
            if (f !== 'node_modules' && f !== '.next') {
                walkDir(dirPath, callback);
            }
        } else {
            callback(path.join(dir, f));
        }
    });
}

const targetFiles = [];
walkDir(clientDir, (filePath) => {
    if (filePath.endsWith('.tsx') || filePath.endsWith('.ts') || filePath.endsWith('.js') || filePath.endsWith('.mjs')) {
        const content = fs.readFileSync(filePath, 'utf8');
        if (content.includes('http://localhost:5000')) {
            targetFiles.push(filePath);
        }
    }
});

console.log(`Found ${targetFiles.length} files to update.`);

targetFiles.forEach(filePath => {
    let content = fs.readFileSync(filePath, 'utf8');

    // Check if API_URL is already imported
    if (!content.includes('import { API_URL } from \'@/lib/api-config\'')) {
        // Find the best place to insert the import (after 'react' or at the top)
        if (content.includes('from \'react\'')) {
            content = content.replace(/(import .* from 'react'.*\n)/, `$1import { API_URL } from '@/lib/api-config'\n`);
        } else if (content.includes('from "react"')) {
            content = content.replace(/(import .* from "react".*\n)/, `$1import { API_URL } from '@/lib/api-config'\n`);
        } else {
            content = `import { API_URL } from '@/lib/api-config'\n` + content;
        }
    }

    // Replace all occurrences
    const updatedContent = content.replace(/http:\/\/localhost:5000/g, '${API_URL}');
    fs.writeFileSync(filePath, updatedContent);
    console.log(`Updated ${filePath}`);
});
