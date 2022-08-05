import React from "react";
import styles from "./CommentItem.module.scss";

const CommentItem = ({content, userId, username, parentId, parentName, setReplyId}) => {

    const replyComment = (id) => {
        console.log(id);
        setReplyId(id);
    }

    return (
        <>
            <div className={styles.comment} id = {"item"+userId}>
                <div className={styles.header}>
                    <h2>
                        {username}
                        {parentId != -1 && 
                            <>
                                {" ← " + parentName}
                            </>
                        }
                    </h2>
                    {parentId != -1 && 
                        <div className={styles.parent}>
                            <a href={"#item"+parentId}>Find Parent</a>
                        </div>
                    }
                </div>      
                
                <div className={styles.content}>
                    {content}
                </div>
                
                
                

                <div className={styles.reply}>
                    <a href="#addnew" onClick={()=>{replyComment(userId)}}>Reply</a>
                </div>
            </div>
        </>
    );
}

export default CommentItem;