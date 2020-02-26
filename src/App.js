import { Link, BrowserRouter, Switch, Route } from 'react-router-dom'
import React from 'react';

import { Home } from './pages/Home'
import { PageOne } from './pages/PageOne'
import { PageTwo } from './pages/PageTwo'
import { PageThree } from './pages/PageThree'
import { PageFour } from './pages/PageFour'
import { Link as CustomLink } from './lib/Link'
import { createLink } from './lib/createLink'
import styles from './App.module.css'

function App() {
  return (
    <BrowserRouter>
      <div className={styles.app}>
        <div className={styles.sidebar}>
          {/**
            * We could use the `createLink` function anywhere,
            * also in code that uses the `useLocation` hooks
            * to push new urls
            */''}
          <p><Link to={createLink('/')}>Home</Link></p>

          {/**
            * We could use a custom Link component,
            * which uses the `createLink` function
            */''}
          <p><CustomLink to={'/page_one'}>Page One</CustomLink></p>
          <p><CustomLink to={'/page_two'}>Page Two</CustomLink></p>
          <p><CustomLink to={'/page_three'}>Page Three</CustomLink></p>
          <p><CustomLink to={'/page_four'}>Page Four</CustomLink></p>
        </div>

        <div className={styles.main}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/page_one" component={PageOne} />
            <Route exact path="/page_two" component={PageTwo} />
            <Route exact path="/page_three" component={PageThree} />
            <Route exact path="/page_four" component={PageFour} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
