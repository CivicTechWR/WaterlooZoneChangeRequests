import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import RedditIcon from '@material-ui/icons/Reddit';

import ZonesMap from './components/ZonesMap';

function App() {
  return (
    <Grid 
      container 
      direction="row" 
      spacing={2} 
      alignItems="center" 
      justify="center"  
      className="App"
      style={{ maxWidth: '1024px', margin: 'auto' }}>
      <Grid item>
        { header() }
      </Grid>
      <Grid item>
        <ZonesMap></ZonesMap>
      </Grid>
      <Grid item>
        { footer() }
      </Grid>
    </Grid>
  );
}

function header() {
  return (
    <div className="header">
        <Typography variant="h5">City of Waterloo Zoning Change Requests</Typography>
    </div>
  )
}

function footer() {
  return (
    <Grid 
      container 
      spacing={4} 
      className="footer"
      style={{ padding: '10px'}}
      >
      <Grid item className="githubInformation">
        <GitHubIcon></GitHubIcon>
        <a href="https://github.com/CivicTechWR/WaterlooZoneChangeRequests/">WaterlooZoneChangeRequests</a>
      </Grid>
      <Grid item className="redditInformation">
        <RedditIcon></RedditIcon>
        <a href="https://www.reddit.com/r/WaterlooZoneChanges/">/r/WaterlooZoneChanges/</a>
      </Grid>
    </Grid>
  )
}

export default App;
