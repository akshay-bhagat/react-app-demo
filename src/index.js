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

setInterval(()=>{
    ReactDOM.render(
         showCurrentTime(),
        document.getElementById('root')
    );

},1000)
