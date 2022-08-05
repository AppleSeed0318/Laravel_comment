import { useState } from "react";
import styles from "./PostComment.module.scss";

const PostComment = ({replyId, setReplyId, parentName, addComment}) => {

    const [username, setUsername] = useState("");
    const [contents, setContents] = useState("");


    const onSubmit = () => {
        
        let item = {};

        item['id'] = 1;
        item['contents'] = contents;
        item['username'] = username;

        item['parent_id'] = replyId;
        item['parentName'] = replyId != -1 ? "PPP" : "";

        addComment(item);
    }

    const onChangeName = (e) => {
        e.preventDefault() ;
        setUsername(e.target.value);
    }

    const onChangeContents = (e) => {
        e.preventDefault() ;
        setContents(e.target.value);

    }

    const cancelReply = () => {
        setReplyId(-1);
    }

    return (
        
        <div className={styles.postcomment} id = "addnew">
            
            <div className={styles.header}>
                <h2>{replyId!=-1?"Reply("+parentName+")":"Post"} Comment</h2>
                {replyId!=-1 && <button onClick={cancelReply}>cancel reply</button>}
            </div>

            <div className={styles.content}>
                <p>Name:</p>
                <input type="text" onChange={onChangeName} value = {username}/>

                <p>Contents:</p>
                <textarea onChange={onChangeContents} value = {contents}/>

                <div><button onClick={onSubmit}>submit</button></div>
            </div>
        </div>
    )
}

export default PostComment;