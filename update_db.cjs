const fs = require('fs');

const data = JSON.parse(fs.readFileSync('src/database.json', 'utf8'));

const updates = {
  "Prof. Kamlesh Singh": {
    "scholarLink": "https://scholar.google.com/citations?user=Ymqw46sAAAAJ",
    "researchGate": "https://www.researchgate.net/profile/Kamlesh-Singh-6"
  },
  "Prof. Sumitava Mukherjee": {
    "scholarLink": "https://scholar.google.com/citations?user=gsrGTEQAAAAJ",
    "orcid": "https://orcid.org/0000-0002-8445-0492"
  },
  "Prof. Sumitash Jana": {
    "scholarLink": "https://scholar.google.com/citations?user=jtiwxv0AAAAJ",
    "vidwanId": "https://vidwan.inflibnet.ac.in/profile/237495",
    "researchGate": "https://www.researchgate.net/profile/Sumitash-Jana"
  },
  "Prof. Varsha Singh": {
    "scholarLink": "https://scholar.google.com/citations?user=Gg9O-fcAAAAJ",
    "researchGate": "https://www.researchgate.net/profile/Varsha-Singh-21"
  },
  "Prof. Yashpal Jogdand": {
    "researchGate": "https://hss.iitd.ac.in/faculty/yashpal-jogdand"
  },
  "Prof. Purnima Singh": {
    "scholarLink": "https://scholar.google.com/citations?user=kwGG99gAAAAJ",
    "researchGate": "https://www.researchgate.net/profile/Purnima-Singh-4"
  },
  "Prof. Samar Husain": {
    "scholarLink": "https://scholar.google.com/citations?user=5Z9q6oIAAAAJ",
    "researchGate": "https://web.iitd.ac.in/~samar/"
  },
  "Prof. Azizuddin Khan": {
    "scholarLink": "https://scholar.google.com/citations?user=wHqu3CkAAAAJ",
    "orcid": "https://orcid.org/0000-0001-5113-4760",
    "researchGate": "https://www.researchgate.net/profile/Azizuddin-Khan-2"
  },
  "Prof. Rashmi Gupta": {
    "scholarLink": "https://scholar.google.com/citations?user=c3jv7VIAAAAJ",
    "researchGate": "https://www.hss.iitb.ac.in/people/faculty/rashmi-gupta"
  },
  "Prof. Meenakshi Gupta": {
    "researchGate": "https://www.hss.iitb.ac.in/people/faculty/meenakshi-gupta"
  },
  "Prof. Pooja Purang": {
    "researchGate": "https://www.hss.iitb.ac.in/people/faculty/pooja-purang"
  },
  "Prof. Narayanan Srinivasan": {
    "scholarLink": "https://scholar.google.com/citations?user=oL4UaqcAAAAJ",
    "researchGate": "https://www.researchgate.net/profile/Narayanan-Srinivasan-2"
  },
  "Prof. Braj Bhushan": {
    "scholarLink": "https://scholar.google.com/citations?user=C2iVFoQAAAAJ",
    "orcid": "https://orcid.org/0000-0001-5177-1209",
    "vidwanId": "https://vidwan.inflibnet.ac.in/profile/52328",
    "researchGate": "https://www.researchgate.net/profile/Braj-Bhushan"
  },
  "Prof. Shikha Dixit": {
    "researchGate": "https://www.iitk.ac.in/hss/shikha-dixit"
  },
  "Prof. Kumar Ravi Priya": {
    "researchGate": "https://www.iitk.ac.in/hss/kumar-ravi-priya"
  },
  "Prof. Devpriya Kumar": {
    "scholarLink": "https://scholar.google.com/scholar?q=Devpriya+Kumar+IIT+Kanpur",
    "researchGate": "https://www.iitk.ac.in/cogsci/"
  },
  "Prof. Ark Verma": {
    "researchGate": "https://www.iitk.ac.in/hss/"
  },
  "Prof. Aditya Kumar": {
    "researchGate": "https://hss.iitm.ac.in/"
  },
  "Prof. V. R. Sujatha": {
    "researchGate": "https://hss.iitm.ac.in/"
  },
  "Prof. S. P. Dhanavel": {
    "researchGate": "https://hss.iitm.ac.in/"
  },
  "Prof. Richa Gupta": {
    "scholarLink": "https://scholar.google.com/scholar?q=Richa+Gupta+IIT+Madras+cognitive+science",
    "researchGate": "https://hss.iitm.ac.in/"
  },
  "Prof. Rajlakshmi Guha": {
    "researchGate": "https://www.hss.iitkgp.ac.in/"
  },
  "Prof. Damodar Suar": {
    "scholarLink": "https://scholar.google.com/citations?user=MxABx0cAAAAJ",
    "researchGate": "https://www.researchgate.net/profile/Damodar-Suar"
  },
  "Prof. Rabindra Kumar Pradhan": {
    "scholarLink": "https://scholar.google.com/scholar?q=Rabindra+Kumar+Pradhan+IIT+Kharagpur",
    "researchGate": "https://www.researchgate.net/profile/Rabindra-Pradhan"
  },
  "Prof. Seema Sharma": {
    "researchGate": "https://www.hss.iitkgp.ac.in/"
  },
  "Prof. Priyadarshi Patnaik": {
    "researchGate": "https://www.hss.iitkgp.ac.in/"
  },
  "Prof. Naveen Kashyap": {
    "scholarLink": "https://scholar.google.com/scholar?q=Naveen+Kashyap+IIT+Guwahati+psychology",
    "researchGate": "https://www.iitg.ac.in/hss/"
  },
  "Prof. Dilwar Hussain": {
    "scholarLink": "https://scholar.google.com/scholar?q=Dilwar+Hussain+IIT+Guwahati+positive+psychology",
    "researchGate": "https://www.researchgate.net/profile/Dilwar-Hussain"
  },
  "Prof. Nachiketa Tripathi": {
    "scholarLink": "https://scholar.google.com/citations?user=tDShOQ8AAAAJ",
    "orcid": "https://orcid.org/0000-0002-9708-5850",
    "researchGate": "https://www.researchgate.net/profile/Nachiketa-Tripathi"
  },
  "Prof. Pooja Garg": {
    "scholarLink": "https://scholar.google.com/scholar?q=Pooja+Garg+IIT+Roorkee+organizational+psychology",
    "researchGate": "https://www.researchgate.net/profile/Pooja-Garg"
  },
  "Prof. Smita Jha": {
    "researchGate": "https://www.iitr.ac.in/hss/"
  },
  "Prof. Renu Rastogi": {
    "scholarLink": "https://scholar.google.com/scholar?q=Renu+Rastogi+IIT+Roorkee",
    "researchGate": "https://www.researchgate.net/profile/Renu-Rastogi"
  },
  "Prof. Shubha Ranganathan": {
    "scholarLink": "https://scholar.google.com/scholar?q=Shubha+Ranganathan+IIT+Hyderabad",
    "researchGate": "https://www.researchgate.net/profile/Shubha-Ranganathan"
  },
  "Prof. Mahati Chittem": {
    "scholarLink": "https://scholar.google.com/scholar?q=Mahati+Chittem+IIT+Hyderabad",
    "researchGate": "https://www.researchgate.net/profile/Mahati-Chittem"
  },
  "Prof. Amrita Lamba": {
    "scholarLink": "https://scholar.google.com/scholar?q=Amrita+Lamba+cognitive+neuroscience+IIT+Hyderabad",
    "researchGate": "https://la.iith.ac.in/"
  },
  "Prof. Jaison A. Manjaly": {
    "scholarLink": "https://scholar.google.com/citations?user=l2uLHYcAAAAJ",
    "researchGate": "https://cogs.iitgn.ac.in/newcogs/team/jaison-manjaly/"
  },
  "Prof. Pratik Mutha": {
    "scholarLink": "https://scholar.google.com/citations?user=PejUtIQAAAAJ",
    "researchGate": "https://www.researchgate.net/scientific-contributions/Pratik-K-Mutha-14057892"
  },
  "Prof. Meera M. Sunny": {
    "scholarLink": "https://scholar.google.com/scholar?q=Meera+Sunny+IIT+Gandhinagar",
    "researchGate": "https://cogs.iitgn.ac.in/"
  },
  "Prof. Krishna Prasad Miyapuram": {
    "scholarLink": "https://scholar.google.com/citations?user=R20YmxkAAAAJ",
    "orcid": "https://orcid.org/0000-0001-5779-2342",
    "vidwanId": "https://iitgn.irins.org/profile/53728",
    "researchGate": "https://www.researchgate.net/profile/Krishna-Miyapuram"
  },
  "Prof. Bipin Indurkhya": {
    "scholarLink": "https://scholar.google.com/scholar?q=Bipin+Indurkhya+cognitive+science",
    "researchGate": "https://www.researchgate.net/profile/Bipin-Indurkhya"
  },
  "Prof. Dipanjan Roy": {
    "scholarLink": "https://scholar.google.com/scholar?q=Dipanjan+Roy+computational+neuroscience+brain",
    "researchGate": "https://www.researchgate.net/profile/Dipanjan-Roy"
  },
  "Prof. Sanjram Premjit Khanganba": {
    "scholarLink": "https://scholar.google.com/scholar?q=Sanjram+Khanganba+IIT+Indore",
    "researchGate": "https://www.iiti.ac.in/"
  },
  "Prof. Priyanka Tripathi": {
    "scholarLink": "https://scholar.google.com/scholar?q=Priyanka+Tripathi+IIT+Patna",
    "researchGate": "https://www.iitp.ac.in/"
  },
  "Prof. Rano Ringo": {
    "scholarLink": "https://scholar.google.com/scholar?q=Rano+Ringo+IIT+Ropar",
    "researchGate": "https://www.iitrpr.ac.in/"
  },
  "Prof. Arnav Bhavsar": {
    "scholarLink": "https://scholar.google.com/scholar?q=Arnav+Bhavsar+IIT+Mandi+cognitive",
    "researchGate": "https://www.iitmandi.ac.in/"
  },
  "Prof. Anuradha": {
    "scholarLink": "https://scholar.google.com/scholar?q=Anuradha+IIT+BHU+clinical+psychology",
    "researchGate": "https://www.iitbhu.ac.in/"
  },
  "Prof. Godabarisha Mishra": {
    "scholarLink": "https://scholar.google.com/scholar?q=Godabarisha+Mishra+IIT+Bhubaneswar",
    "researchGate": "https://www.iitbbs.ac.in/"
  },
  "Prof. S. R. Mahadeva Prasanna": {
    "scholarLink": "https://scholar.google.com/scholar?q=Mahadeva+Prasanna+IIT+Dharwad+speech",
    "researchGate": "https://www.iitdh.ac.in/"
  },
  "Prof. Reenu Punnoose": {
    "scholarLink": "https://scholar.google.com/scholar?q=Reenu+Punnoose+IIT+Palakkad",
    "researchGate": "https://www.iitpkd.ac.in/"
  },
  "Prof. V. V. N. Somayajulu": {
    "scholarLink": "https://scholar.google.com/scholar?q=VVN+Somayajulu+IIT+Tirupati",
    "researchGate": "https://www.iittp.ac.in/"
  },
  "Prof. Rajeev Kumar": {
    "scholarLink": "https://scholar.google.com/scholar?q=Rajeev+Kumar+IIT+Bhilai",
    "researchGate": "https://www.iitbhilai.ac.in/"
  },
  "Prof. Quleen Kaur Bijral": {
    "scholarLink": "https://scholar.google.com/scholar?q=Quleen+Kaur+Bijral+IIT+Jammu",
    "researchGate": "https://www.iitjammu.ac.in/"
  },
  "Prof. Neha Munjal": {
    "scholarLink": "https://scholar.google.com/scholar?q=Neha+Munjal+IIT+Goa",
    "researchGate": "https://www.iitgoa.ac.in/"
  }
};

const toRemove = [
  "Prof. T. Bhattacharya",
  "Prof. E. Reddy",
  "Prof. F. Rao",
  "Prof. G. Das",
  "Prof. H. Baruah",
  "Prof. I. Sharma",
  "Prof. J. Gupta",
  "Prof. M. Singh"
];

let nachiketa = null;

for (const institute in data) {
  data[institute] = data[institute].filter(prof => {
    if (toRemove.includes(prof.name)) {
      return false;
    }
    
    if (prof.name === "Prof. Nachiketa Tripathi" && institute === "Indian Institute of Technology Guwahati") {
      nachiketa = { ...prof };
      return false;
    }
    
    return true;
  });
  
  data[institute].forEach(prof => {
    if (updates[prof.name]) {
      Object.assign(prof, updates[prof.name]);
    }
  });
}

if (nachiketa) {
  if (updates[nachiketa.name]) {
    Object.assign(nachiketa, updates[nachiketa.name]);
  }
  if (!data["Indian Institute of Technology Goa"]) {
    data["Indian Institute of Technology Goa"] = [];
  }
  data["Indian Institute of Technology Goa"].push(nachiketa);
}

// Add Dipanjan Roy to IIT Jodhpur if not exists
const jodhpurProfs = data["Indian Institute of Technology Jodhpur"] || [];
if (!jodhpurProfs.find(p => p.name === "Prof. Dipanjan Roy")) {
  jodhpurProfs.push({
    "id": "iitj-new-dipanjan",
    "name": "Prof. Dipanjan Roy",
    "specialization": "Computational Neuroscience",
    "focus": "Brain Networks",
    "scholarLink": "https://scholar.google.com/scholar?q=Dipanjan+Roy+computational+neuroscience+brain",
    "researchGate": "https://www.researchgate.net/profile/Dipanjan-Roy",
    "citations": "0",
    "topPapers": [],
    "researchIdeas": []
  });
  data["Indian Institute of Technology Jodhpur"] = jodhpurProfs;
}

fs.writeFileSync('src/database.json', JSON.stringify(data, null, 2));
console.log("Database updated successfully.");
