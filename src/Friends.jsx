// import { useEffect, useState } from 'react'
// import './friend.css'
// export default function Friend(){
//     const [friends,setFriend] =useState([])
//     useEffect(()=>{
//         fetch('https://jsonplaceholder.typicode.com/users')
//         .then (res => res.json)
//         .then (data => setFriend(data));
//     },[])
//     return (
//         <div className='box'>
//             <h3>Hey boy : {friends.length}</h3>
//         </div>
//     )
// }

/*
*1 . state to hold data
*2 . use effect with dependency array
*3 use fetch to load data
*4 set loaded data to the state
*/