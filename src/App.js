import React, { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {HeaderComponent,FooterComponent} from './component/layouts';
import URLRouter from './component/urlrouter/URLRouter'
class App extends Component {
  render() {
    return (
      <Router>
          <div className="wrapper">
            <HeaderComponent/>
              <URLRouter></URLRouter>
            <FooterComponent/>
          </div>
      </Router>
    );
  }
}

export default App;