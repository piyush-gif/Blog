# Blog

A simple React blog application with full CRUD functionality.

## Prerequisites

- Node.js
- npm

## Installation

```bash
npm install
```

## Development

Start the React dev server:

```bash
npm start
```

Start the JSON server (in a separate terminal):

```bash
npx json-server --watch data/db.json --port 8000
```

App runs on `http://localhost:3000`

## Production Deployment

Build the app:

```bash
npm run build
```

Deploy to server:

```bash
# Copy build files to web server
sudo cp -r build/* /var/www/html/

# Start JSON server with PM2
pm2 start npx --name "json-server" -- json-server --watch data/db.json --port 8000 --host 0.0.0.0
pm2 save
```

## Project Structure

- `src/` - React components (App.js, BlogList.js, BlogDetails.js, Create.js)
- `public/` - Static assets
- `data/db.json` - Blog data storage

## Tech Stack

- React
- JSON Server (REST API)
- Nginx (production web server)
- PM2 (process manager)

## Live Demo

Deployed on Oracle Cloud: `http://79.72.74.40`
