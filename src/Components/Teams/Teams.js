import React, { useState } from 'react';




const Teams = (props) => {
console.log(props)
    const teamStyle = {border: '1px solid red', margin:'40px', padding:'10px',boxShadow:'2px 2px 30px red',width:'450px',backgroundColor:'gray', color:'white'}
    const flagStyle = {height:'200px'}
    const divStyle={
       
       }


   const {name,email,salary,gender,image}=props.player;
   const AddPlayerButton=props.AddPlayerButton;


    return (
        <div style={teamStyle}>
<div style={divStyle}>

           <div >
            <img style={flagStyle} src={image} alt=""/>

            </div>

            <div >
            <p>Player Name: {name}</p>
             <p>Email: {email}</p>
            <p>Player Salary: {salary}</p>
            <p>Gender: {gender}</p>
            <button onClick={()=> AddPlayerButton(props.player)}>Add player</button>
            </div>
</div>



            
        </div>
    );
};

export default Teams;