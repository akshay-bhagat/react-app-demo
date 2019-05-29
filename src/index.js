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

    //Increment the counter value by click event
class IncrementValue extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            counter : 0
        }
    }

    increment = (e) => {
        this.setState({
            counter : this.state.counter + 1
         });
    }


    render(){
        return <div>
            <h2>Current Value :: {this.state.counter}</h2>
        <button onClick={this.increment}>Click me to Add value...</button>
        </div>
    }
}

// Switch betwen Components

function ShowBulb(props){
    if(props.value){
        return <div>
            <img src="https://www.w3schools.com/js/pic_bulbon.gif"></img>
        </div>
    }else{
        return <div>
        <img src="https://www.w3schools.com/js/pic_bulboff.gif"></img>
    </div>
    }
}
class Bulb extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value : true
        }
    }

    changeState = () => {
        this.setState({
            value : !this.state.value
        });
    }

    render(){
        return(
            <div>
                <ShowBulb value={this.state.value} />
                <h3>Click on Button to change the state of Bulb...</h3>
                <button onClick={this.changeState}>{this.state.value? 'ON' : 'OFF'}</button>
                <p>Picture Credit : https://www.w3schools.com </p>
            </div>
        );
    }
}


    ReactDOM.render(
        <Bulb />,
       document.getElementById('root')
   );



