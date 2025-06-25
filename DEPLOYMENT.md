# Deployment Guide

## Production Environment Setup

### Required Environment Variables
- `SESSION_SECRET`: A secure random string for session management
- `NODE_ENV`: Set to "production" 
- `DATABASE_URL`: PostgreSQL connection string (if using database)

### Build Process
1. Frontend build: `vite build` outputs to `dist/public`
2. Backend build: `esbuild` bundles server to `dist/index.js`
3. Production start: `node dist/index.js`

### Health Check
- Endpoint: `/health`
- Returns: `{"status": "ok", "timestamp": "...", "environment": "production"}`

### Deployment Configuration
The `.replit` file is configured for:
- Build command: `npm run build`
- Start command: `npm run start`
- Port: 5000 (internal), 80 (external)

### Security Notes
- Sessions are configured with secure cookies in production
- Static files served from built assets
- Environment validation warns if SESSION_SECRET is missing