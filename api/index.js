import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const { pathname } = new URL(req.url, `http://${req.headers.host}`);
  
  let filePath = path.join(process.cwd(), 'designify', pathname === '/' ? 'index.html' : pathname);
  
  // Security check to prevent directory traversal
  if (!filePath.startsWith(path.join(process.cwd(), 'designify'))) {
    return res.status(403).json({ error: 'Forbidden' });
  }
  
  try {
    const content = fs.readFileSync(filePath);
    const ext = path.extname(filePath);
    
    let contentType = 'text/html';
    switch (ext) {
      case '.js':
        contentType = 'text/javascript';
        break;
      case '.css':
        contentType = 'text/css';
        break;
      case '.json':
        contentType = 'application/json';
        break;
    }
    
    res.setHeader('Content-Type', contentType);
    res.status(200).send(content);
  } catch (error) {
    if (error.code === 'ENOENT') {
      res.status(404).json({ error: 'File not found' });
    } else {
      res.status(500).json({ error: 'Server error' });
    }
  }
} 