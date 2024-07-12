
import React from 'react';

import MenuLayout from './MenuLayout';
import Breakfast from './Breakfast';
import Starters from './Starters';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


export default function Menu() {
  
  return (
   <>
   <Router>
      <Switch>
        <Route exact path="/menu" >
          <MenuLayout>
            <Starters />
          </MenuLayout>
        </Route>
        <Route path="/menuBreakfast">
          <MenuLayout>
            <Breakfast />
          </MenuLayout>
        </Route>
        {/* <Route path="/menuBreakfast">
          <MenuLayout>
            <Breakfast />
          </MenuLayout>
        </Route>
        <Route path="/menuBreakfast">
          <MenuLayout>
            <Breakfast />
          </MenuLayout>
        </Route> */}
      </Switch>
    </Router>
    </>
  
  );
}

 