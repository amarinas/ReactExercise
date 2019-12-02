import React from "react"

class MemeGenerator extends React.Component {
  constructor(){
      super()
      this.state ={
            topText: "",
            bottomText: "",
            randomImage: "http://i.imgflip.com/1bij.jpg"

      }

  }
  componentDidMount(){
    fetch("https://api.imgflip.com/get_memes")
        .then(response => response.json())
        .then(response => {
            const {meme} = response.data
          })
  }
  render(){

      return (
          <h1>MEME Generator Section </h1>
      )

    }
}

export MemeGenerator
