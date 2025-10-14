# Waterloo Zone Change Requests

JavaScript tool for tracking and visualizing zoning change requests in Waterloo.

## About

Zoning changes may cause lasting impacts in surrounding neighbourhoods. It is important for information about these requests to be easily accessible, and to make members of the community aware of upcoming public meetings, as well any other related documents.

Fortunately, the City of Waterloo already publishes much of this information in its [portal](https://www.waterloo.ca/en/government/zone-changes.aspx). This project aims to enhance it, and propose other ways for the community to visualize and interact with this information. We also hope it will encourage other municipalities to become more transparent.

## Subprojects

* **[Backend](backend/README.md)** - Server providing cache of zoning data obtained from the City of Waterloo

* **[Frontend](frontend/README.md)** - React App containing an alternative map view of active zoning change requests  
  📍 **Live Demo:** https://CivicTechWR.github.io/WaterlooZoneChangeRequests/

* **[Reddit Bot](reddit-bot/README.md)** - Updates [/r/WaterlooZoneChanges/](https://www.reddit.com/r/WaterlooZoneChanges/) with any new zoning change requests

* **Common** - Contains common logging logic

## Tech Stack

- JavaScript
- React (Frontend)
- Node.js (Backend)
- Reddit API (Bot)

## Status

Historical project from 2020. The tools demonstrated how civic tech can improve transparency around urban planning decisions.

## Contributing

A CivicTechWR community project. For current projects, visit:

- **Meetup:** https://www.meetup.com/civictechwr/
- **Website:** https://civictechwr.org
- **Email:** civictechwr@gmail.com
