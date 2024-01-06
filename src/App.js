import { Container } from '@mui/system';
import './App.css';

import MyAppBar from './components/MyAppBar';
import RadiationChart from './components/RadiationChart';
import RadiationDisplay from './components/RadiationDisplay';
import WindSpeedDisplay from './components/WindSpeedDisplay';
import WindDirectionDisplay from './components/WindDirDisplay';
import TemperatureDisplay from './components/TemperatureDisplay';
import TemperatureChart from './components/TemperatureChart';

import { Box } from '@mui/material';
import Grid from '@mui/material/Grid';

function App() {
  return (
    <div className="main_div">
      <MyAppBar/>
      <br/>
      <Container>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
        <Grid item xs={12} sm={5}>
            <TemperatureDisplay></TemperatureDisplay>
          </Grid>
          <Grid item xs={12} sm={7}>
            <TemperatureChart></TemperatureChart>
          </Grid>
          <Grid item xs={12} sm={6}>
              <WindSpeedDisplay></WindSpeedDisplay>
          </Grid>
          <Grid item xs={12} sm={6}>
              <WindDirectionDisplay></WindDirectionDisplay>
          </Grid>
          <Grid item xs={12} sm={5}>
            <RadiationDisplay></RadiationDisplay>
          </Grid>
          <Grid item xs={12} sm={7}>
            <RadiationChart></RadiationChart>
          </Grid>
        </Grid>
      </Box>
      </Container>
    </div>
  );
}

export default App;
