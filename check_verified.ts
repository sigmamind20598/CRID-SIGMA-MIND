import fs from 'fs';

const content = fs.readFileSync('src/staticDatabase.ts', 'utf8');
const matches = content.match(/"([^"]+ \(\d{4}\))"/g);

if (matches) {
  const unverified = matches.filter(m => m.includes("UNVERIFIED:"));
  const verified = matches.filter(m => !m.includes("UNVERIFIED:"));
  
  console.log(`Total papers: ${matches.length}`);
  console.log(`UNVERIFIED papers: ${unverified.length}`);
  console.log(`Potentially real papers: ${verified.length}`);
  
  if (verified.length > 0) {
    console.log("Sample of potentially real papers:");
    verified.slice(0, 20).forEach(title => console.log(title));
  }
}
