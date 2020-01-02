# Waterloo Zone Change Requests Frontend

Map containing zone change requests for the City of Waterloo. Alternative view for [this page](https://www.waterloo.ca/en/government/zone-changes.aspx). Check it out at https://CivicTechWR.github.io/WaterlooZoneChangeRequests/

Relies on data provided by the backend server, also included in this repository. Please ensure you have it deployed beforehand. For more information, please refer to [backend README](../backend/README.md)

## Installing dependencies

```
npm install
```

## Running it locally

```
npm start
```

### Backend deployed in a different host

```
BACKEND=otherhost.com:3001 npm start
```

## Deploying it to Github Pages

```
npm run deploy
```