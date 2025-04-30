import React, { useState } from 'react';
import { MdPassword } from 'react-icons/md';

const ContactForm = () => {
    const [message, setMessage] = useState({
        username: "",
        email: "",
        password: "",
    });

    const Hform = (e) => {
        e.preventDefault();

        const contactData = {
            username: message.username,
            email: message.email,
            password: message.password,
        };
        console.log(contactData);
    };

    const Handle = (e) => {
        const { name, value } = e.target; // Fixed typo from 'trget' to 'target'
        setMessage((prev) => ({
            ...prev, [name]: value,
        }));
    };

    return (
        <div>
            <form onSubmit={Hform}>
                <input type="text" value={message.username} name="username" onChange={Handle} placeholder="Username" />
                <input type="email" value={message.email} name="email" onChange={Handle} placeholder="Email" />
                <input type="password" value={message.password} name="password" onChange={Handle} placeholder="Password" />
                <button type="submit">Submit</button> {/* Added submit button */}
            </form>
        </div>
    );
};

export default ContactForm;
