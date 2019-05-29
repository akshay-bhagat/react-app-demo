import React from 'react'
import ReactDOM from 'react-dom'

function showDetails(character='Batman', city='Gotham'){
    return <div>
            <h1 className="someclass"> <span> ⚛️ </span> Simple React App Demo </h1>
            <h2> {character} lives in {city} city</h2>
        </div>
}

// function showCurrentTime(){
//     return <h2> Current Time :: {new Date().toLocaleTimeString()}</h2>
// }


class ShowClock extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            date : new Date()
        }
    }

    // calls when component is added to DOM
    componentDidMount(){
       this.timer = setInterval(() => this.startTime(),1000)
    }

    // calls when component is removed from DOM
    componentWillMount(){
        clearInterval(this.timer);
    }

    startTime(){
        this.setState({
            date : new Date()
        });
    }

    render(){
        return <h2> Current Time :: {this.state.date.toLocaleTimeString()}</h2>
    }
}

// Component and props using Function
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

    // function UpdateRealTime(){

    //     ReactDOM.render(
    //          <ShowClock />,
    //         document.getElementById('root')
    //     );
    // }
    // setInterval(UpdateRealTime,1000); // refresh component every 1 second..

    ReactDOM.render(
        <ShowClock />,
       document.getElementById('root')
   );



