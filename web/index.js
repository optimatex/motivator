import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import store from 'app/store';
import Base from 'app/components/Base';

global.ROOT_URL = 'http://localhost:3000';

render(
  <Provider store={store}>
    <Base />
  </Provider>,
  document.getElementById('appRoot'),
);
