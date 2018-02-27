import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './components/App/app';
import Card from './components/Card/card';

const root = document.getElementById('root');
const load = () => render((
  <AppContainer>
    <App />
  </AppContainer>
), root);

// This is needed for Hot Module Replacement
if (module.hot) {
  module.hot.accept('./components/App/app', load);
}

load();