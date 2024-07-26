import {
  APP_INIT_ERROR,
  APP_READY,
  AppProvider,
  ErrorPage,
  initialize,
  subscribe,
} from '@openedx/frontend-base';

import ReactDOM from 'react-dom';

import Header from '@edx/frontend-component-header';
import FooterSlot from '@openedx/frontend-slot-footer';

import ExamplePage from './example/ExamplePage';
import messages from './i18n';

import './index.scss';

subscribe(APP_READY, () => {
  ReactDOM.render(
    <AppProvider>
      <Header />
      <ExamplePage />
      <FooterSlot />
    </AppProvider>,
    document.getElementById('root'),
  );
});

subscribe(APP_INIT_ERROR, (error) => {
  ReactDOM.render(<ErrorPage message={error.message} />, document.getElementById('root'));
});

initialize({
  messages,
  handlers: {
    auth: () => { },
  },
});
