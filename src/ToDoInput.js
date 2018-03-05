import React, { Component } from 'react'

export default class TodoInput extends Component{
    render(){
        return <input type="text" value={this.props.content} 
                onKeyPress={this.submit.bind(this)}
                onChange={this.changeTitle.bind(this)}/>
    }
    submit(e){
            if (e.key === 'Enter') {
            this.props.onSubmit(e)
            console.log("按回车啦")
        }
    }
    changeTitle(e){
          this.props.onChange(e)
    }
}