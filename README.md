# Waterloo Zone Change Requests

Zoning changes may cause lasting impacts in surrounding neighbourhoods. It is important for information about these requests to be easily accessible, and to make members of the community aware of upcoming publing meetings, as well any other related document.

Fortunately, the City of Waterloo already publishes much of this information in its [portal](https://www.waterloo.ca/en/government/zone-changes.aspx). This project aims to enhance it, and propose other ways for the community to visualize and interact with this information. We also hope it will encourage other municipalities to become more transparent.


## Subprojects

* [Backend](backend/README.md) : Server providing cache of zoning data obtained from the City of Waterloo;

* [Frontend](frontend/README.md) : React App containing an alternative map view of active zoning change requests. See it in action [here](https://CivicTechWR.github.io/WaterlooZoneChangeRequests/);

* [Reddit Bot](reddit-bot/README.md): Updates [/r/WaterlooZoneChanges/](https://www.reddit.com/r/WaterlooZoneChanges/) with any new zoning change requests;

* Common : contains common logging logic;