import axios from 'axios';
import React from 'react'
import { useEffect, useState } from 'react'

const FetchData = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get("https://6671136ae083e62ee439f0b6.mockapi.io/Clients").then((res)=>{setUsers(res.data)}).catch((err)=>{console.log(err)})   
    }, [])
  return (
    <>
    {
        users.map((user)=>{
            return(
                <div>
                    <ul style={{listStyle:"none"}} key={user.id}>
                    <li>{user.name}</li>
                    <li>{user.email}</li>
                    <li>{user.message}</li> <br />
                    </ul>
                    
                </div>
            )
        })
    }
    </>
  )
}

export default FetchData