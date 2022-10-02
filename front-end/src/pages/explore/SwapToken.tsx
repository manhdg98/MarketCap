import { Grid } from '@material-ui/core';
import React from 'react';
import { Theme, makeStyles } from '@material-ui/core/styles'; 
import Web3 from 'web3';
import { AdvancedChart } from "react-tradingview-embed";

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: theme.palette.card.default,
    border: `1px solid ${theme.palette.background.default}`,
    borderRadius: 12,
    marginTop: '10px'
  }
}));

const SwapToken: React.FC = () => {
  const classes = useStyles();
  const web3 = new Web3(window.ethereum);
  const account = web3.eth.accounts;
  const { ethereum } = window;
  
  const connect = async () => {
    console.log('hi')
    if (ethereum) {
      await ethereum.request({ method: "eth_requestAccounts" });
      //Get the current MetaMask selected/active wallet
      const walletAddress = account.givenProvider.selectedAddress;
      console.log(`Wallet: ${walletAddress}`);
   
     } else {
      console.log("No wallet");
    }
  }

  const logout = async () => {
      // console.log('hi')
      // const accounts = await ethereum.request({method: 'eth_accounts'});
      // if (accounts && accounts.length > 0) {
      //   console.log("user is connected");
      // } else {
      //     console.log("user not connected");
      // }

      // ethereum.on('accountsChanged', async () => {
      //   console.log("changed")
      // });

      await ethereum.request({
        method: "eth_requestAccounts",
        params: [{eth_accounts: {}}]
      })
    }

  return (
    <>
      <button onClick={connect}>Connect</button>
      <button onClick={logout}>Logout</button>
      <Grid container className={classes.container} justifyContent='center'>
        <Grid container item xs={12} md={12} spacing={3}>
          <AdvancedChart widgetProps={
              {
                "autosize": true,
                "symbol": "BINANCE:BTCUSDT",
                "timezone": "Etc/UTC",
                "theme": "dark",
                "style": "1",
                "locale": "en",
                "toolbar_bg": "#f1f3f6",
                "enable_publishing": true,
                "withdateranges": true,
                "range": "YTD",
                "hide_side_toolbar": false,
                "allow_symbol_change": true
              }
            } />
        </Grid>
      </Grid>
    </>
  )
}

export default SwapToken