import * as React from 'react';
// import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';


export default function RadiationDisplay() {
  return (
    <Card sx={{
        bgcolor: 'background.paper',
        boxShadow: 1,
        borderRadius: 2,
        p: 2,
        // maxWidth: 200,
        // minWidth: 150,
        height: 200,
      }}>
      <CardContent>
        <Container sx={{ textAlign: 'center' }}>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Current radiation [mWm^2]
        </Typography>
        <Typography sx={{ fontSize: 60 }}>
          40 
        </Typography>
        </Container>
      </CardContent>
    </Card>
  );
}