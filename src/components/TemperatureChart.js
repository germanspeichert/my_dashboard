import * as React from 'react';
// import Box from '@mui/material/Box';
import { LineChart } from '@mui/x-charts/LineChart';
import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

const y_data = [18, 19, 24, 29, 32, 33, 30, 25, 21, 19, ] ;
const x_data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, ];

export default function TemperatureChart() {
  return (
    <Card sx={{
        bgcolor: 'background.paper',
        boxShadow: 1,
        borderRadius: 2,
        p: 2,
        minWidth: 300,
        height: 200,
      }}>
    <CardContent>
    {/* <Box sx={{ width: '50%', maxWidth: 500   }}> */}
      <LineChart
        xAxis={[{ data: x_data, label: 'Last samples' }]}
        yAxis={[
          { id: 'linearAxis', scaleType: 'linear', label: '[°C]' },
        ]}
        series={[
          { yAxisKey: 'linearAxis', data: y_data, label: 'Temperature', color: '#ff0000' },
        ]}
        leftAxis="linearAxis"
        height={200}
      />
    {/* </Box> */}
    </CardContent>
    </Card>
  );
}




