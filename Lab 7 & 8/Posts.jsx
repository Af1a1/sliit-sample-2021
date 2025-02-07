import React, {Component} from 'react';
import PostlistItem from './PostListitem';
import Post from './Post';



export default class Posts extends React.Component {

    
    constructor(props){
        super(props);
        this.state = {
            post: null
        };
    }

    selectPost(post) {
        this.setState({post: post})
    }

    render(){
        const {posts} = this.props;
        return (<div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Discription</th>
                        <td></td>
                    </tr>
                </thead>
                <tbody>
                    {posts.map(post=>{
                        return <PostlistItem key={post.id.toString()} post={post}
                        selectPost={post=> this.selectPost(post)}/>
                    })}
                </tbody>
            </table>
            <div>
                {this.state.post ? <Post post={this.state.post}/> : ''}
            </div>
        </div>)
       
    }    
}
