import React, {useState} from 'react'
import PostListItem from './PostListitem';
import Post from './Post'

const PostFunctionalComp = (props) => {

    const [post, setPost] = useState(null);

    const {posts} = props;
    return (
        <div>
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
                        return <PostListItem key={post.id.toString()} post={post}
                        selectPost={setPost}/>
                    })}
                </tbody>
            </table>
            <div>
                {post ? <Post post={post}/> : ''}
            </div>
        </div>
    )
}


export default PostFunctionalComp;