import React from 'react'
import ReactDOM from 'react-dom'

function showDetails(character='Batman', city='Gotham'){
    return <div>
            <h1 className="someclass"> ⚛️ Simple React App Demo </h1>
            <h2> {character} lives in {city} city</h2>
        </div>
}

function showCurrentTime(){
    return <h2> Current Time :: {new Date().toLocaleTimeString()}</h2>
}

// Component using Function
function SuperHeroDetails(props){
    return <h1>Hello {props.name}, {props.city} needs you!! </h1>
}

// Component using class
// class SuperHeroDetails extends React.Component{
//     render(){
//         return <h1>Hello {this.props.name}, {this.props.city} needs you!! </h1>
//     }
// }

function Show(){
return <div>
            <SuperHeroDetails name='Captain America' city='New York' />
            <SuperHeroDetails name='Iron Man' city='New York' />
    </div>
}


    ReactDOM.render(
         <Show />,
        document.getElementById('root')
    );


