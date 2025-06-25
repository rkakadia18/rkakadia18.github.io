#!/usr/bin/env node

// Production startup script
// This ensures proper environment configuration before starting the server

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Set production environment
process.env.NODE_ENV = 'production';

// Check if SESSION_SECRET is set, if not generate a warning
if (!process.env.SESSION_SECRET) {
  console.warn('⚠️  WARNING: SESSION_SECRET environment variable not set');
  console.warn('⚠️  Using fallback secret - this should be set for production');
  process.env.SESSION_SECRET = 'fallback-secret-' + Math.random().toString(36);
}

// Check if build directory exists
const buildDir = path.join(__dirname, 'dist');
if (!fs.existsSync(buildDir)) {
  console.log('📦 Build directory not found, running build process...');
  try {
    execSync('npm run build', { stdio: 'inherit' });
    console.log('✅ Build completed successfully');
  } catch (error) {
    console.error('❌ Build failed:', error.message);
    process.exit(1);
  }
}

// Start the production server
console.log('🚀 Starting production server...');
try {
  require('./dist/index.js');
} catch (error) {
  console.error('❌ Failed to start server:', error.message);
  process.exit(1);
}