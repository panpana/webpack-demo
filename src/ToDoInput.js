import React, { Component } from 'react'

export default class ToDoInput extends Component{
    render(){
        return <input type="text" value={this.props.content}/>
    }
}