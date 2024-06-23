//using usestate
import React, { useState } from 'react';

const Contact = () => {

  const [address] = useState({
    name:'Anil Gollapalli',
    email:'gollapallianil005@gmail.com',
    street : 'Padmashali TownShip',
    city:'Ecil , Kapra',
    landmark:'Oak valley School',
    state:'Telangana',
    zip:'500083'
  });
   
    return (
        <div className='contact' id='contact'>
              <h2>Contact Me</h2>
            <div className="contact-container">
                <p><strong>Name </strong> <b>:</b><span>{address.name}</span></p>
                <p><strong>Email </strong> <b>:</b><span>{address.email}</span></p>
                <p><strong>Street </strong><b>:</b><span>{address.street}</span></p>
                <p><strong>City </strong><b>:</b><span>{address.city}</span></p>
                <p><strong>Landmark</strong><b>:</b><span>{address.landmark}</span></p>
                <p><strong>State </strong><b>:</b><span>{address.state}</span></p>
                <p><strong>Zip </strong><b>:</b><span>{address.zip}</span></p>
            </div>
        </div>
    );
};

export default Contact;