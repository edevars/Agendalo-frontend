import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import ScrollToTop from 'react-router-scroll-top'
import Home from '../Pages/Home'
import Destinos from '../Pages/Destinos';
import ErrorPage from '../Pages/error'
import Reservar from '../Pages/Reservar';




const App = () => {
    return (  
        <BrowserRouter>
            <ScrollToTop>
                <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/destinos" component={Destinos}/>
                <Route exact path="/reservar/:placeId" component={Reservar}/>
                <Route component={ErrorPage}/>
                </Switch>
            </ScrollToTop>
            
        </BrowserRouter>
    );
}
 
export default App;