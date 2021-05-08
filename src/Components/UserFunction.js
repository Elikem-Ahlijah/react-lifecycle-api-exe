import React, { useState, useEffect } from 'react';
import axios from 'axios';


export default function UserFunction() {
    const [users, setUsers] = useState([])
    useEffect(()=>{
        axios
            .get('https://jsonplaceholder.typicode.com/users')
            .then((res)=>{
                setUsers(res.data)
            })
            .catch((err)=>{
                console.log(err)
            });
    },[])

    return (
        <div>
            <h1>Users</h1>
            {users.length === 0 && <h1>loading users</h1>}
            {users.map((user)=>{
                return (
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
