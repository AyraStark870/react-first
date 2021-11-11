
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Title from './components/Title'
import Subtitle from './components/Subtitle copy'
import Routeando from './components/Routeando';
import { Fragment } from 'react'


function App() {

  return (
    <Fragment>
      <Title title='soy un titulo!!!'/>
      <Subtitle subtitle='soy un subtitulo!!'/>


      <Router>
        <Switch>
          <Route
            exact path="/ruta" component={Routeando}
          />
        </Switch>
      </Router>
    </Fragment>

  );
}

export default App;
