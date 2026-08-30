# 🏛️ LandScope OS (`landscopeapi.com`)

> **Autonomous Property Intelligence, Zoning Compliance & Solar Roof Feasibility Engine**  
> Sub-10ms PostGIS parcel geometry, deed owner verification, and statutory setback calculations.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Part of Quite Good Project](https://img.shields.io/badge/Maintained_by-Quite_Good_Project-09090b.svg)](https://quitegoodproject.com)

---

## ⚡ 1-Line HTML Widget Embed

```html
<script src="https://landscopeapi.com/widget.js" async></script>
<landscope-widget address="4812 E 7th St, Austin, TX 78702"></landscope-widget>
```

---

## 🚀 REST API Quickstart

### Deed Owner Verification
```bash
curl -X POST "https://landscopeapi.com/v1/verify/owner" \
  -H "Authorization: Bearer <LANDSCOPE_API_KEY>" \
  -H "Content-Type: application/json" \
  -d '{
    "address": "4812 E 7th St, Austin, TX 78702",
    "applicant_name": "Carlos Martinez"
  }'
```

---

## 🏛️ Governance
Part of **[The Quite Good Project](https://quitegoodproject.com)** developer suite.
