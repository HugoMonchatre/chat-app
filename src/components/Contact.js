import React from 'react';
import './Contact.css';

const avatar =
    "https://upload.wikimedia.org/wikipedia/commons/4/49/Pacman.svg ";
const name = "Dark Pacman";
const online = true;
const Contact = () => (
    <div className="Contact">
        <img src={avatar} className="avatar" />
        <div>
            <h4 className="name"> {name} </h4>
            <div className="status">
                <p className="status-online"></p>
                <p> {online ? "online" : "offline"} </p>
            </div>
        </div>
    </div >
);

export default Contact;
