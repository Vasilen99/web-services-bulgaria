const fs = require('fs');
const path = require('path');

// Create middleware.js.nft.json if it doesn't exist
// This is needed for Vercel deployment with Next.js 16
const nftFilePath = path.join(__dirname, '../.next/server/middleware.js.nft.json');
const nftDir = path.dirname(nftFilePath);

try {
  if (!fs.existsSync(nftDir)) {
    fs.mkdirSync(nftDir, { recursive: true });
  }

  if (!fs.existsSync(nftFilePath)) {
    const nftContent = {
      files: [],
      globPatterns: [],
      reasons: {
        'middleware.js': 'Middleware entry point'
      }
    };
    fs.writeFileSync(nftFilePath, JSON.stringify(nftContent, null, 2));
    console.log('✓ Created middleware.js.nft.json for Vercel compatibility');
  }
} catch (error) {
  console.error('Warning: Could not create middleware.js.nft.json:', error.message);
  // Don't fail the build if this script fails
  process.exit(0);
}
