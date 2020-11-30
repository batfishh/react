import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail'

const App = ()=>{
    return (
        <div className="ui container comments">
            <CommentDetail author={faker.name.findName()} time="2PM" text="HELLO" image = {faker.image.animals()}/>
            <CommentDetail author={faker.name.findName()} time="2PM" text="HELLO" image = {faker.image.animals()}/>
            <CommentDetail author={faker.name.findName()} time="2PM" text="HELLO" image = {faker.image.animals()}/>
        </div>
    )
}

ReactDOM.render(<App/>,document.querySelector('#root'));