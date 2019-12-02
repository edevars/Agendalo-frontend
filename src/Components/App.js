import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import ScrollToTop from 'react-router-scroll-top'
import Home from '../Pages/Home'
import ErrorPage from '../Pages/error'


const App = () => {
    return (  
        <BrowserRouter>
            <ScrollToTop>
                <Switch>
                <Route exact path="/" component={Home}/>
                
                <Route component={ErrorPage}/>
                </Switch>
            </ScrollToTop>
            
        </BrowserRouter>
    );
}
 
export default App;