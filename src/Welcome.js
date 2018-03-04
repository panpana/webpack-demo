import React from 'react'; 
class Welcome extends React.Component {
  constructor(props){
      super(props)
      this.state = {
          date: new Date()
      }
  }
  render(){
      return (
          <div>
              <h1>Hello,{this.props.name}</h1>
              <h2>{this.state.date.toLocaleTimeString()}</h2>
          </div>
      )
  }
}

export default Welcome 