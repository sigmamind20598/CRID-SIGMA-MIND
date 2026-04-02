import fs from 'fs';

const content = fs.readFileSync('src/staticDatabase.ts', 'utf8');
const matches = content.match(/"([^"]+ \(\d{4}\))"/g);

if (matches) {
  const counts: Record<string, number> = {};
  matches.forEach(m => {
    const clean = m.replace(/"/g, '');
    counts[clean] = (counts[clean] || 0) + 1;
  });
  
  const singletons = Object.entries(counts).filter(x => x[1] === 1);
  console.log("Total unique papers:", Object.keys(counts).length);
  console.log("Papers occurring exactly once:", singletons.length);
  console.log("Sample of singletons:");
  singletons.slice(0, 20).forEach(([title]) => console.log(title));
}
