import '../styles/globals.css';
import {Context,state} from '../components/state/state';

function MyApp({ Component, pageProps }) {
  return <Context.Provider value={state}><Component {...pageProps} /></Context.Provider>
}

export default MyApp
