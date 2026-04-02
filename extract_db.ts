import { FACULTY_DATABASE } from './src/staticDatabase';
import fs from 'fs';

fs.writeFileSync('src/database.json', JSON.stringify(FACULTY_DATABASE, null, 2));
console.log("Database exported to src/database.json");
