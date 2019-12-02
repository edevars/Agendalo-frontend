import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import ScrollToTop from 'react-router-scroll-top'
import Home from '../Pages/Home'
import Destinos from '../Pages/Destinos';
import ErrorPage from '../Pages/error'
import Reservar from '../Pages/Reservar';
import SignIn from '../Pages/sign-in';
import SignUp from '../Pages/sign-up';


const App = () => {
    return (  
        <BrowserRouter>
            <ScrollToTop>
                <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/destinos" component={Destinos}/>
                <Route exact path="/sign-in" component={SignIn}/>
                <Route exact path="/sign-up" component={SignUp}/>
                <Route exact path="/reservar/:placeId" component={Reservar}/>
                <Route component={ErrorPage}/>
                </Switch>
            </ScrollToTop>
            
        </BrowserRouter>
    );
}
 
export default App;