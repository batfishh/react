import React from 'react';
import faker from 'faker';

const CommentDetail = ({author,text,time})=>{
    return(
        <div className="comment">
                <a href="/" className="avatar">
                    <img alt="avatar" src={faker.image.people()}/>
                </a>
                <div className="content">
                    <a href="/" className="author">
                        {author}
                    </a>
                    <div className="metadata">
                        <span className="date">Today at {time}</span>
                    </div>
                    <div className="text">{text}</div>
                </div>
            </div>   
    );
}

export default CommentDetail