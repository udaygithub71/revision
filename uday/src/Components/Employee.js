import React, {useState, useEffect} from 'react';
import './Employee.css'
function Employee(){

const [users, setUsers]=useState([])
useEffect(()=>{
fetch("https://fakestoreapi.com/products")
.then(response => response.json())
.then(json => setUsers(json))
},[])

 return (
    <>
    <h1 align="center" >DISPLAY DATA FROM API-DATABASE</h1>
    <div className="container">
        <table className='table table-bardered'>
            <thead className='table-dark font-color white'>
                <tr>
                    <th>Title</th>
                    <th>Description</th>
                    <th>price</th>
                    <th> Rate</th>
                    <th>About</th>
                    <th>Contact</th>
                    <th>Help</th>
                </tr>

            </thead>
            {users.map(user =>(
                <tr>
                    <td>{user.title}</td>
                    <td>{user.description}</td>
                    <td>{user.price}</td>
                    <td><img src={user.image}></img></td>
                </tr>
            ))}
        </table>
    </div>

    </>
  )


}
export default Employee