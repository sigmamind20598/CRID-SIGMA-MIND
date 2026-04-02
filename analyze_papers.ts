import fs from 'fs';

const content = fs.readFileSync('src/staticDatabase.ts', 'utf8');
const matches = content.match(/"([^"]+ \(\d{4}\))"/g);

if (matches) {
  const counts: Record<string, number> = {};
  matches.forEach(m => {
    const clean = m.replace(/"/g, '');
    counts[clean] = (counts[clean] || 0) + 1;
  });
  
  const sorted = Object.entries(counts).sort((a, b) => b[1] - a[1]);
  console.log("Top 30 most common papers:");
  sorted.slice(0, 30).forEach(([title, count]) => {
    console.log(`${count}x: ${title}`);
  });
}
