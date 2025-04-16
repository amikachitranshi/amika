// prepare-deploy.js
const fs = require('fs');
const path = require('path');
const archiver = require('archiver');

// Create deployment directory
if (!fs.existsSync('deployment')) {
  fs.mkdirSync('deployment');
}

// Create a file to stream archive data to
const output = fs.createWriteStream(path.join('deployment', 'ncmaz-faust-deploy.zip'));
const archive = archiver('zip', {
  zlib: { level: 9 } // Sets the compression level
});

// Listen for all archive data to be written
output.on('close', function() {
  console.log(`✅ Deployment package created: ${archive.pointer()} total bytes`);
  console.log('✅ The deployment package is ready in the deployment/ directory');
});

// Catch warnings and errors
archive.on('warning', function(err) {
  if (err.code === 'ENOENT') {
    console.warn(err);
  } else {
    throw err;
  }
});

archive.on('error', function(err) {
  throw err;
});

// Pipe archive data to the file
archive.pipe(output);

// Add the necessary files and directories
console.log('📦 Adding .next directory...');
archive.directory('.next', '.next');

console.log('📦 Adding public directory...');
archive.directory('public', 'public');

console.log('📦 Adding package.json and package-lock.json...');
archive.file('package.json', { name: 'package.json' });
archive.file('package-lock.json', { name: 'package-lock.json' });

console.log('📦 Adding possibleTypes.json...');
archive.file('possibleTypes.json', { name: 'possibleTypes.json' });

console.log('📦 Adding next.config.js...');
archive.file('next.config.js', { name: 'next.config.js' });

console.log('📦 Adding .env.production (will need to be renamed to .env on server)...');
archive.file('.env.production', { name: '.env.production' });

console.log('📦 Adding deployment documentation...');
archive.file('DEPLOYMENT.md', { name: 'DEPLOYMENT.md' });

// Finalize the archive
archive.finalize(); 