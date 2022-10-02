import { Grid } from '@material-ui/core';
import React from 'react';

const DeFi: React.FC = () => {

  return (
    <Grid container spacing={5} justifyContent='center'>
      <Grid container item xs={12} md={6} spacing={3}>
        <iframe width="100%" height="420" src="https://embed.theblockcrypto.com/data/crypto-markets/prices/crypto-total-marketcap/embed" title="Crypto Total Marketcap"></iframe>
      </Grid>
      <Grid container item xs={12} md={6} spacing={3}>
        <iframe width="100%" height="420" src="https://embed.theblockcrypto.com/data/crypto-markets/spot/total-exchange-volume-daily/embed" title="Daily Exchange Volume (7DMA)"></iframe>
      </Grid>
      <Grid container item xs={12} md={6} spacing={3}>
        <iframe width="100%" height="420" src="https://embed.theblockcrypto.com/data/crypto-markets/futures/number-of-liquidations/embed" title="Number of Liquidations"></iframe>
      </Grid>
      <Grid container item xs={12} md={6} spacing={3}>
        <iframe width="100%" height="420" src="https://embed.theblockcrypto.com/data/crypto-markets/spot/btc-and-eth-total-exchange-volume-7dma/embed" title="BTC and ETH Total Exchange Volume (7DMA)"></iframe>
      </Grid>
    </Grid>
  )
}

export default DeFi