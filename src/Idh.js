import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

//Material-ui 
import UseMediaQuery from '@material-ui/core/useMediaQuery';

//Views
import FullScreen from './views/FullScreen'
import Mobile from './views/Mobile'

//Context
import { IdhProvider } from './IdhContext'


function Idh() {

  //For responsive 
  const matches = UseMediaQuery('(min-width:480px)');

  if (matches) {
    return (
      <Router>
        <IdhProvider>
          <Switch>
            <Route exact path="/" component={FullScreen} />
          </Switch>
        </IdhProvider>
      </Router>
    );
  } else {
    return (
      <Router>
        <IdhProvider>
          <Switch>
            <Route exact path="/" component={Mobile} />
          </Switch>
        </IdhProvider>
      </Router>
    );
  }
}

export default Idh;
