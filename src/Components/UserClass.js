import React, { Component } from 'react'

export default class UserClass extends Component {
    constructor(props){
        super(props)

        this.state = {users:[]}
    }

    componentDidMount(){
        console.log('First')
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((res)=>{
                return res.json();
            })
            .then((jsonData)=>{
                console.log(jsonData)
                this.setState({users: jsonData});
            });
            console.log('Third')
    }

    render() {
        return (
            <div>
                <h1>Users</h1>
                {this.state.users.length === 0 && <h1>loading users</h1>}
                {this.state.users.map((user)=>{
                    return(
                        <div>
                            <p>
                                <strong>Name:</strong> {user.name}
                            </p>
                            <p>
                                <strong>Username:</strong> {user.username}
                            </p>
                            <p>
                                <strong>Email:</strong> {user.email}
                            </p>

                            <hr></hr>
                            
                        </div>
                    )
                })}
                
            </div>
        )
    }
}
