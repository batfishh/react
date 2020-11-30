import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail'
import ApprovalCard from './Approvalcard'
const App = ()=>{
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail author={faker.name.findName()} time="2PM" text={faker.hacker.phrase()} image = {faker.image.animals()}/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author={faker.name.findName()} time="4PM" text={faker.hacker.phrase()} image = {faker.image.animals()}/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author={faker.name.findName()} time="8PM" text={faker.hacker.phrase()} image = {faker.image.animals()}/>
            </ApprovalCard>
        </div>
    )
}

ReactDOM.render(<App/>,document.querySelector('#root'));