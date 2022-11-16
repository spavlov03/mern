import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
    
const MessageDisplay = (props) => {
    const navigate = useNavigate();
    return (
        <>
            <h1>Current Message</h1>
            <pre>{ props.message }</pre>
            <Link to={navigate(-1)}>Go Back</Link>
        </>
    );
};
    
export default MessageDisplay;

