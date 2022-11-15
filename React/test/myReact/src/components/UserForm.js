import React, { useState } from  'react';
import {Link,useNavigate} from 'react-router-dom'
    
const UserForm = (props) => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState(""); 
    const navigate = useNavigate(); 
    
    const createUser = (e) => {
        // we must prevent the default refresh of the browser to keep our state from being reset
        e.preventDefault();
        
        // shorthand ES6 syntax for building an object - see notes above
        const newUser = { username, email, password };
        console.log("Welcome", newUser);
    	setUsername("");
    	setEmail("");
    	setPassword("");
        navigate("/display_user")
    };
    
    return(
        <div>
            <form onSubmit={ createUser }>
                <div>
                    <label>Username: </label> 
                    <input type="text" value={username} onChange={ (e) => setUsername(e.target.value) } />
                </div>
                <div>
                    <label>Email Address: </label> 
                    <input type="text" value={email} onChange={ (e) => setEmail(e.target.value) } />
                </div>
                <div>
                    <label>Password: </label>
                    <input type="text" value={password} onChange={ (e) => setPassword(e.target.value) } />
                </div>
                <input type="submit" value="Create User" />
            </form>
            <Link to={"/card"}>Go To Persona Card</Link>
        </div>
    );
};
    
export default UserForm;