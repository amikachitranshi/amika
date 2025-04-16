# Ncmaz-Faust - WordPress Headless with NextJS

This repository contains a NextJS frontend for a headless WordPress site using Faust.js. It features a modern UI, full TypeScript support, and GraphQL integration.

## Features

- 🚀 NextJS 14+ for server-side rendering and static site generation
- 🔄 Faust.js for seamless WordPress integration
- 📊 GraphQL for efficient data fetching
- 💅 Tailwind CSS for styling
- 🌐 Internationalization support
- 🔍 SEO optimization
- 🎨 Modern UI components

## Getting Started

### Prerequisites

- Node.js 18+ installed
- A WordPress site with the FaustWP plugin installed

### Installation

1. Clone the repository:
```bash
git clone https://github.com/amikachitranshi/amika.git
cd amika
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file based on the example:
```bash
cp .env.local.example .env.local
```

4. Edit the `.env.local` file with your WordPress URL and Faust secret key.

5. Generate GraphQL types and possible types:
```bash
npm run generate
npm run codegen
```

6. Start the development server:
```bash
npm run dev
```

7. The site will be available at http://localhost:3000

## Deployment

See the [DEPLOYMENT.md](DEPLOYMENT.md) file for detailed deployment instructions.

## Project Structure

- `src/` - Source code
  - `components/` - Reusable UI components
  - `pages/` - Next.js pages
  - `fragments/` - GraphQL fragments
  - `wp-templates/` - WordPress template components

## Environment Variables

Copy `.env.local.example` to `.env.local` and update the values:

- `NEXT_PUBLIC_WORDPRESS_URL`: Your WordPress site URL
- `FAUST_SECRET_KEY`: Secret key from WordPress (found in Settings -> Headless Faust)
- `NEXT_PUBLIC_URL`: Your frontend URL

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run codegen` - Generate GraphQL code

## For more information

For more information on this Blueprint please check out the following sources:

- [WP Engine's Atlas Platform](https://wpengine.com/atlas/)
- [Faust.js](https://faustjs.org)
- [WPGraphQL](https://www.wpgraphql.com)
- [Atlas Content Modeler](https://wordpress.org/plugins/atlas-content-modeler/)
- [WP Engine's Atlas developer community](https://developers.wpengine.com)

### Contributor License Agreement

All external contributors to WP Engine products must have a signed Contributor License Agreement (CLA) in place before the contribution may be accepted into any WP Engine codebase.

1. [Submit your name and email](https://wpeng.in/cla/)
2. 📝 Sign the CLA emailed to you
3. 📥 Receive copy of signed CLA

❤️ Thank you for helping us fulfill our legal obligations in order to continue empowering builders through headless WordPress.