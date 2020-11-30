import React from 'react';
import ReactDOM from 'react-dom';

import CommentDetail from './CommentDetail'

const App = ()=>{
    return (
        <div className="ui container comments">
            <CommentDetail author="ashwin" time="2PM" text="HELLO"/>
            <CommentDetail author="rahul" time="2PM" text="HELLO"/>
            <CommentDetail author="sam" time="2PM" text="HELLO"/>
        </div>
    )
}

ReactDOM.render(<App/>,document.querySelector('#root'));