#!/usr/bin/env node

// Static build script for portfolio
import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

console.log('📦 Building static portfolio...');

try {
  // Build using the static config
  execSync('npx vite build --config vite.static.config.ts', { stdio: 'inherit' });
  
  // Copy any additional assets if needed
  const distPath = path.join(__dirname, 'dist');
  
  if (fs.existsSync(distPath)) {
    console.log('✅ Static build completed successfully');
    console.log(`📁 Output directory: ${distPath}`);
    console.log('🚀 Ready for static deployment');
  }
  
} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
}