import './App.css';
import '@rainbow-me/rainbowkit/styles.css';
import {
  ConnectButton,
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { configureChains, createConfig, useAccount, WagmiConfig } from 'wagmi';
import {
  base
} from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';

import { styleReset } from 'react95';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

/* Pick a theme of your choice */
import original from 'react95/dist/themes/original';

/* Original Windows95 font (optional) */
import ms_sans_serif from 'react95/dist/fonts/ms_sans_serif.woff2';
import ms_sans_serif_bold from 'react95/dist/fonts/ms_sans_serif_bold.woff2';
import { Dapp } from './components/Dapp';

const GlobalStyles = createGlobalStyle`
  ${styleReset}
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif}') format('woff2');
    font-weight: 400;
    font-style: normal
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif_bold}') format('woff2');
    font-weight: bold;
    font-style: normal
  }
  body, input, select, textarea {
    font-family: 'ms_sans_serif';
  }
`;

const { chains, publicClient } = configureChains(
  [base],
  [
    publicProvider()
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'My RainbowKit App',
  projectId: 'fb6c3edd1d475f8059eb4711a48113ae',
  chains
});
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient
})

function App() {

  return (
    <>
    <GlobalStyles />
    <ThemeProvider theme={original}>

    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains}>
      
      <ConnectButton />
      <Dapp />

      </RainbowKitProvider>

    </WagmiConfig>
    </ThemeProvider>
    </>
  );
}

export default App;
