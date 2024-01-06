import * as React from 'react';
// import Box from '@mui/material/Box';
import { LineChart } from '@mui/x-charts/LineChart';
import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

const y_data = [2, 10, 22, 40, 43, 40, 30, 10, 4, 2, ] ;
const x_data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, ];

export default function RadiationChart() {
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
          { id: 'linearAxis', scaleType: 'linear', label: '[mW/m^2]' },
        ]}
        series={[
          { yAxisKey: 'linearAxis', data: y_data, label: 'Radiation', color: '#fdb462' },
        ]}
        leftAxis="linearAxis"
        height={200}
      />
    {/* </Box> */}
    </CardContent>
    </Card>
  );
}