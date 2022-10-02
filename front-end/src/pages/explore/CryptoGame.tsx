import { Grid } from '@material-ui/core';
import React from 'react';
import { Theme, makeStyles } from '@material-ui/core/styles'; 

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: theme.palette.card.default,
    border: `1px solid ${theme.palette.background.default}`,
    borderRadius: 12,
  }
}));

const CryptoGame: React.FC = () => {
  const classes = useStyles();
  return (
    <Grid container spacing={5} className={classes.container} justifyContent='center'>
      <Grid container item xs={12} md={12} spacing={3}>
        <iframe width="100%" height="100%" src="https://cryptozombies.io/en/course/" title="Crypto Zombile"></iframe>
      </Grid>
    </Grid>
  )
}

export default CryptoGame