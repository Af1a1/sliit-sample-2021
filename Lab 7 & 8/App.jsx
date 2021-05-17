import React from 'react';

import {BrowserRouter as Router, Redirect, Switch, Route} from 'react-router-dom';
import PostsHolder from './component/PostHolder';
import AddPost from './AddPost'
export default class App extends React.Component {

    
    constructor(props){
        super(props);
    }

    render(){

        return <Router>
            <Switch>
                <Route path="/post">
                    <PostsHolder />
                </Route>
                
                <Redirect to="/post" />
            
            </Switch>
        </Router>
       
    }

    
}



