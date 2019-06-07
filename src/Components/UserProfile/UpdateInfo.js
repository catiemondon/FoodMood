import React, {Component} from 'react'
import axios from 'axios'
import styled from 'styled-components'


class UpdateInfo extends Component{
    constructor(){
        super()
        this.state={
            user_name: ''
        }
    }

    onSubmit=(e)=>{
        e.preventDefault()
        const{user_name}= this.state
        axios.put('/api/user', {user_name})
        .then((res)=>{
            console.log('success')
        })
    }


    hanldeInput=(e)=>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render(){
        return(
           
                <Form onSubmit={this.onSubmit}>
                    <Input type='text' placeholder='input new username' name='user_name' onChange={this.hanldeInput}></Input>
                    <Button>Update Username</Button>
                </Form>
           
        )
    }
}

export default UpdateInfo

const Form= styled.form`
@import url('https://fonts.googleapis.com/css?family=Noto+Sans+TC&display=swap');
font-family: 'Noto Sans TC', sans-serif;
display: flex;
flex-direction: column;
width: 100vw;
align-items: center;


`
const Input= styled.input`
@import url('https://fonts.googleapis.com/css?family=Noto+Sans+TC&display=swap');
font-family: 'Noto Sans TC', sans-serif;
margin: 5px;
width: 60%;
border-radius: 6px;
border: none;
border-bottom: 1px solid lightgray;
font-size: 18px;
align-items: center;

`
const Button= styled.button`
background: palegreen;
border-radius: 3px;
border: 2px solid palegreen;
color: white;
margin: .5em .5em;
padding: 0.25em 1em;
height: 2em;
`