import React from 'react'; 
import { Switch , Route } from 'react-router-dom';


import Landingpage from './landingpage';
import About from './about';
import Project from './project';
import Resume from './resume';
import Contact from './contact';

const Main = () => (
    <Switch>
        <Route exact path ="/" component={Landingpage} />
        <Route  path ="/about" component={About} />
        <Route  path ="/project" component={Project} />
        <Route  path ="/resume" component={Resume} />
        <Route  path ="/contact" component={Contact} />
       
    </Switch>
)


export default Main;