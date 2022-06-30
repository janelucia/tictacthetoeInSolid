/* @refresh reload */
import { render } from 'solid-js/web';

import './frontend/styles/index.css';
import App from './frontend/App';

render(() => <App />, document.getElementById('root') as HTMLElement);
