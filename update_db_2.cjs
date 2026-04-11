const fs = require('fs');

const data = JSON.parse(fs.readFileSync('src/database.json', 'utf8'));

for (const institute in data) {
  // Remove Prof. Samar Husain
  data[institute] = data[institute].filter(prof => prof.name !== "Prof. Samar Husain");

  data[institute].forEach(prof => {
    if (prof.name === "Prof. Kamlesh Singh") {
      delete prof.orcid;
      delete prof.vidwanId;
      delete prof.scholarLink;
    }
    if (prof.name === "Prof. Yashpal Jogdand") {
      prof.researchGate = "https://www.researchgate.net/profile/Yashpal-Jogdand";
    }
    if (prof.name === "Prof. Purnima Singh") {
      delete prof.orcid;
      delete prof.vidwanId;
      delete prof.scholarLink;
    }
  });
}

fs.writeFileSync('src/database.json', JSON.stringify(data, null, 2));
console.log("Database updated successfully.");
