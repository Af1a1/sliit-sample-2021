import React from 'react';
import Posts from '../Posts';
import {BrowserRouter as Router, Redirect, Switch, Route, Link} from 'react-router-dom';
import AddPost from '../AddPost'

const posts = [
    {
        id: 1,
        name: 'React',
        description: 'Best UI library'
    },
    {
        id: 2,
        name: 'Node',
        description: 'Server side JS'
    }
   ];

export default class PostsHolder extends React.Component {
    
    constructor(props) {
        super(props);
    
        console.log('PostHolder');
    }


    addNewPost({name, description}) {
        posts.push({id: posts.length + 1, name, description});
    }
       

    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/post/add">
                        <AddPost save={post => this.addNewPost(post)} />
                    </Route>
                    <Route path="/post">
                        <Posts posts={posts} /> 
                    </Route> 
                </Switch>
                 <Link to="/post/add">Add</Link>
                 
            </div>   
        )
        
    }
}