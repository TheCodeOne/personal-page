import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const blogDir = path.resolve(__dirname, '../src/content/blog');

try {
  if (!fs.existsSync(blogDir)) {
    console.error(`Error: Blog directory not found at ${blogDir}`);
    process.exit(1);
  }

  const items = fs.readdirSync(blogDir);
  const dirs = items.filter(item => fs.statSync(path.join(blogDir, item)).isDirectory());
  
  const missing = [];
  const tooSmall = [];

  for (const dir of dirs) {
    const abstractPath = path.join(blogDir, dir, '.ai-abstract.md');
    if (!fs.existsSync(abstractPath)) {
      missing.push(dir);
    } else {
      const stats = fs.statSync(abstractPath);
      if (stats.size < 500) {
        tooSmall.push(dir);
      }
    }
  }

  if (missing.length === 0 && tooSmall.length === 0) {
    console.log('\x1b[32m%s\x1b[0m', '✔ All blog posts have valid AI abstracts (.ai-abstract.md)!');
    process.exit(0);
  }

  console.log('\x1b[33m%s\x1b[0m', '⚠ Attention: Some blog posts are missing valid AI abstracts!\n');

  if (missing.length > 0) {
    console.log('Missing abstracts:');
    missing.forEach(d => console.log(`  - ${d}`));
    console.log();
  }

  if (tooSmall.length > 0) {
    console.log('Incomplete/too small abstracts:');
    tooSmall.forEach(d => console.log(`  - ${d}`));
    console.log();
  }

  console.log('\x1b[36m%s\x1b[0m', '------------------------------------------------------------');
  console.log('\x1b[36m%s\x1b[0m', 'PROMPT FOR AI ASSISTANT:');
  console.log('\x1b[36m%s\x1b[0m', '------------------------------------------------------------');
  console.log(`Please read the rules in .ai/rules.md and generate `.ai-abstract.md` files for the following directories:`);
  [...missing, ...tooSmall].forEach(d => {
    console.log(`- ${path.join('src/content/blog', d)}`);
  });
  console.log('\x1b[36m%s\x1b[0m', '------------------------------------------------------------');

  process.exit(1);
} catch (err) {
  console.error('Error running check-abstracts:', err);
  process.exit(1);
}
