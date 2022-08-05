require('./bootstrap');


import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

import Counter from './components/Counter';
import PostComment from './components/PostComment/PostComment';
import CommentItem from './components/CommentItem/CommentItem';
import axios from 'axios';

export default function App() {

    const [comments, setComments] = useState([]);
    const [replyId, setReplyId] = useState(-1);

    const getParentName = (id) => {
        let _comment = [...comments];
        const found = _comment.find(element => element.id == id);
        if(found){
            return found.username;
        }
        return "";
    }

    const addComment = (item) => {
        let _comment = [...comments];
    
        axios.post(`http://localhost:8000/comments/add`, item)
            .then(res => {
                const id = res.data;
                console.log("add success = " + id);
                
                item['id'] = id;
                item['parentName'] = getParentName(item.parent_id);

                console.log(item);

                _comment.push(item);
                setComments(_comment);
            });
    }

    useEffect(()=>{
        axios.get(`http://localhost:8000/comments`)
            .then(res => {
                const _com = res.data;
                console.log(_com, "---");
                setComments(_com);
            });
    }, []);

    

    return (
        <>
            <h1>Post and Reply Comments</h1>
            <div style={{textAlign:"right"}}>
                <a href='#addnew' onClick={()=>setReply(false)}>+AddNew</a>
            </div>

            {comments.map((item)=>(
                <div key={item.id} >
                    <CommentItem 
                        content={item.contents} 
                        userId = {item.id} 
                        username = {item.username} 
                        parentId = {item.parent_id} 
                        parentName={getParentName(item.parent_id)} 
                        setReplyId = {setReplyId}
                    />
                </div>
            ))}

            <PostComment replyId = {replyId} setReplyId = {setReplyId} parentName = {getParentName(replyId)} addComment = {addComment}/>
        </>
    );
}

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
