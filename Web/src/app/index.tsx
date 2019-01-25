import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { App } from './App'

(global as any).jQuery = require('jquery');
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import './css/site.css'

ReactDOM.render(<App />, document.getElementById("root"));
