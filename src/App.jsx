import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css'
import Layout from './Components/Layout';
import Hero from './Components/Hero';
import Menu from './Components/Menu'

export default function App() {
  

  return (
    <>
    <Router>
      <Switch>
        <Route exact path="/">
          <Layout>
            <Hero />
          </Layout>
        </Route>
        <Route path="/menu">
          <Layout>
            <Menu />
          </Layout>
        </Route>
      </Switch>
    </Router>
    </>
  )
}


