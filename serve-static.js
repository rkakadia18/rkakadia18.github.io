#!/usr/bin/env node

// Simple static file server for the portfolio
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = 5000;

// Serve static files from dist/public
const staticPath = path.join(__dirname, 'dist', 'public');
app.use(express.static(staticPath));

// Handle client-side routing - serve index.html for all routes
app.get('*', (req, res) => {
  res.sendFile(path.join(staticPath, 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Static portfolio serving on port ${PORT}`);
  console.log(`Open: http://localhost:${PORT}`);
});