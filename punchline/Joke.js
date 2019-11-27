import React from "react"


function Joke(props) {
    console.log(props.answer.Question)
return(
        <div>
          <h1 style={{display: !props.answer.Question && "none"}}>Question: {props.answer.Question}</h1>
          <h2 style={{color: !props.answer.Question && "green"}}>Punchline: {props.answer.Punchline}</h2>
          <hr />
        </div>
      )

}


export default Joke
