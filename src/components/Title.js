import * as React from 'react';
// import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';

function Title() {
  return (
    <Typography component="h2" variant="h6" color="primary" gutterBottom>
        Weather dashboard
    </Typography>
  );
}

export default Title;