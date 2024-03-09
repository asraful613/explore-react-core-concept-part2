import { useState } from "react"

export default function Team(){
    const [team,setTeam]=useState(0)
    const addPlayer= () =>{
        const newPlayer=team+1;
        setTeam(newPlayer);
    }
    const removePlayer=()=>{
        const newPlayer=team-1;
        setTeam(newPlayer);
    }
    const divStyles={
        border:'2px solid blueviolet',
        margin:'20px',
        padding:'20px',
        borderRadius:'16px'
    }
    return (
        <div style={divStyles}>
            <h2>Team : {team} </h2>
            <button onClick={addPlayer}>Add Player</button>
            <button onClick={removePlayer}>Remove Player</button>
        </div>
    )
}