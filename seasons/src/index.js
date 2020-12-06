import React from 'react';
import ReactDOM from 'react-dom';

const App = ()=>{
window.navigator.geolocation.getCurrentPosition((pos)=>{console.log(pos);})


    return(
        <div>Hello</div>
    )
}

ReactDOM.render(<App/>, document.querySelector('#root'));