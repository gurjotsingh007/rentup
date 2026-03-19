import app from '../backend/app.js';

// Vercel serverless handler
export default function handler(req, res) {
  return app(req, res);
}
