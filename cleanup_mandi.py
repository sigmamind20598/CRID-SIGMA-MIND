import json

with open('src/database.json', 'r') as f:
    data = json.load(f)

# Find Mandi entry
mandi_faculty = data.get("Indian Institute of Technology Mandi", [])

# Keep only the ones we want
ids_to_keep = [
    "iitmandi-bhavsar",
    "iitmandi-nara",
    "iitmandi-banerjee",
    "iitmandi-dutt",
    "iitmandi-singh",
    "iitmandi-chembrolu",
    "iitmandi-govindaraji"
]

new_mandi_faculty = [p for p in mandi_faculty if p.get("id") in ids_to_keep]

data["Indian Institute of Technology Mandi"] = new_mandi_faculty

with open('src/database.json', 'w') as f:
    json.dump(data, f, indent=2)
