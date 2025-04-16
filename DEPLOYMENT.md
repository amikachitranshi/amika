# Deployment Guide for Ncmaz-Faust NextJS & WordPress

This guide explains how to deploy the Ncmaz-Faust NextJS application to a production server.

## Prerequisites

- Node.js 18+ installed on your server
- Access to your WordPress instance (headless.amikachitranshi.com)
- A domain or subdomain configured for your frontend

## Deployment Options

### Option 1: Node.js Server Deployment (Recommended)

1. **Prepare your server**:
   - Install Node.js (v18+)
   - Install PM2 for process management: `npm install -g pm2`

2. **Files to upload to your server**:
   - `.next/` directory
   - `public/` directory
   - `package.json` and `package-lock.json`
   - `.env.production` (rename to `.env` on the server)
   - `next.config.js`
   - `possibleTypes.json`

3. **Server setup**:
   ```bash
   # Install dependencies
   npm install --production
   
   # Start the application with PM2
   pm2 start npm --name "ncmaz-faust" -- start
   
   # Ensure PM2 restarts the app after server reboots
   pm2 save
   pm2 startup
   ```

4. **Configure Nginx or Apache** as a reverse proxy:

   For Nginx:
   ```nginx
   server {
       listen 80;
       server_name your-production-domain.com;
       
       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

5. **Enable HTTPS** using Let's Encrypt

### Option 2: Static Export (If your site can be statically rendered)

If your site doesn't require dynamic data on every request, you can use static export:

1. Modify `next.config.js` to enable output export:
   ```js
   module.exports = withFaust({
     // other options
     output: 'export',
   });
   ```

2. Build the static site:
   ```bash
   npm run build
   ```

3. Upload the contents of the `out/` directory to your web server.

### Option 3: Vercel or Netlify (Easiest)

1. Connect your Git repository to Vercel or Netlify
2. Configure your environment variables
3. Deploy

## Environment Configuration

Make sure your `.env` file on the production server has the correct URLs:

```
NEXT_PUBLIC_WORDPRESS_URL=https://headless.amikachitranshi.com
FAUST_SECRET_KEY=your-secret-key
NEXT_PUBLIC_URL=https://your-production-domain.com
```

## Troubleshooting

- If the site cannot connect to WordPress, check your FAUST_SECRET_KEY
- Ensure the NEXT_PUBLIC_WORDPRESS_URL is accessible from your server
- Verify that your WordPress site has the FaustWP plugin installed and properly configured

## Maintenance

- To update your site, upload the new `.next` directory after running `npm run build`
- For server-side rendering, restart the app after updates: `pm2 restart ncmaz-faust` 