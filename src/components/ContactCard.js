import React from 'react'
import user from '../images/user.png'

const ContactCard = (props) => {
    const {name, email} = props.contact; //destructuring
    return (
        <div className='item' style={{display:'flex',alignItems:"center"}}>
            {/* <img className='ui avatar image' src={user} alt="user" /> */}
            <div className="content" style={{display:"flex",alignItems:'center'}}>

            <img className='ui avatar image' src={user} alt="user" />

            <div className='info' style={{display:"block"}}>
                <div className="header">
                    {name}
                </div>
                <div>{email}</div>
            </div>
            </div>
           <div style={{marginLeft:"70%"}} >
           <i style={{color:"crimson"}} className="trash alternate outline icon"></i>
           </div>
        </div> 
    );
};

export default ContactCard;