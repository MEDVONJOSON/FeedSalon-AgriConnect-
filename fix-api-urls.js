const fs = require('fs');
const path = require('path');

const clientDir = path.join(process.cwd(), 'client');

function walkDir(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        let isDirectory = fs.statSync(dirPath).isDirectory();
        if (isDirectory) {
            if (f !== 'node_modules' && f !== '.next' && f !== '.git') {
                walkDir(dirPath, callback);
            }
        } else {
            callback(path.join(dir, f));
        }
    });
}

function updateFile(filePath) {
    if (!filePath.endsWith('.tsx') && !filePath.endsWith('.ts') && !filePath.endsWith('.js') && !filePath.endsWith('.mjs')) return;
    if (filePath.includes('api-config.ts')) return;

    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // 1. Replace hardcoded localhost:5000 with backtick API_URL
    // Handle cases like 'http://localhost:5000' or "http://localhost:5000" or `http://localhost:5000`
    const localhostRegex = /(['"`])http:\/\/localhost:5000(.*?)(['"`])/g;
    if (localhostRegex.test(content)) {
        content = content.replace(localhostRegex, '`${API_URL}$2`');
        modified = true;
    }

    // 2. Fix broken '${API_URL}' or "${API_URL}" to use backticks
    const brokenRegex = /(['"])\${API_URL}(.*?)(['"])/g;
    if (brokenRegex.test(content)) {
        content = content.replace(brokenRegex, '`${API_URL}$2`');
        modified = true;
    }

    if (modified) {
        // 3. Ensure import
        if (!content.includes("from '@/lib/api-config'")) {
            // Find the best place to insert (after 'use client' or at top)
            if (content.startsWith("'use client'") || content.startsWith('"use client"')) {
                const firstNewline = content.indexOf('\n');
                content = content.slice(0, firstNewline + 1) + "\nimport { API_URL } from '@/lib/api-config'\n" + content.slice(firstNewline + 1);
            } else {
                content = "import { API_URL } from '@/lib/api-config'\n" + content;
            }
        }
        fs.writeFileSync(filePath, content);
        console.log(`Updated: ${filePath}`);
    }
}

walkDir(clientDir, updateFile);
console.log('Finished updating API URLs.');
