import React from 'react';
import { AppBar, Toolbar, IconButton, Grid, Typography, Avatar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AppsIcon from '@mui/icons-material/Apps';
import { Container, Box, TextField, } from '@mui/material';
import Button from '@mui/material/Button';


const App: React.FC = () => {
  return (
    <>
      <Toolbar>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <IconButton edge="start" color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
          </Grid>
          <Grid item>
            <Grid container alignItems="center" spacing={1}>
              <Grid item>
                <IconButton color="inherit">
                  <AppsIcon />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton color="inherit">
                  <Avatar alt="User" src="https://via.placeholder.com/40" />
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>

      <Container>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        style={{ minHeight: '50vh' }}
        spacing={2}
      >
        <Grid container item justifyContent="center" alignItems="center" spacing={2}>
          <Grid item xs={3} />
          <Grid item xs={6}>
            <Typography variant="h3" component="h1" align="center">
              Google
            </Typography>
          </Grid>
          <Grid item xs={3} />
        </Grid>

        <Grid container item justifyContent="center" alignItems="center" spacing={2}>
          <Grid item xs={3} />
          <Grid item xs={6}>
            <TextField variant="outlined" placeholder="Search Google or type a URL" fullWidth />
          </Grid>
          <Grid item xs={3} />
        </Grid>

        <Grid container item justifyContent="center" alignItems="center" spacing={2}>
          <Grid item xs={4} />
          <Grid item xs={2}>
            <Button variant="contained" fullWidth>
              Google search
            </Button>
          </Grid>
          <Grid item xs={2}>
            <Button variant="contained" fullWidth>
              I'm Feeling Lucky
            </Button>
          </Grid>
          <Grid item xs={4} />
        </Grid>

        <Grid container item justifyContent="center" alignItems="center">
          <Grid item xs={3} />
          <Grid item xs={6}>
            <Typography variant="body1" align="center">
                Google offered in: English
            </Typography>
          </Grid>
          <Grid item xs={3} />
        </Grid>

      </Grid>
    </Container>
    </>
  );
};

export default App;
