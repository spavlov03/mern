import { useState } from "react";

const Form = (props) => { 
  const [ firstName, setFirstName ] = useState(""); 
  const [ lastName, setLastName ] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");  
  const [confirmPassword, setConfirmPassword] = useState("");  

  const createUser = (e) => { 
    e.preventDefault();

    const newUser = {
      firstName,lastName,email,password,confirmPassword
    }; 
    setFirstName(""); 
    setLastName(""); 
    setEmail(""); 
    setPassword(""); 
    setConfirmPassword(""); 
  }; 
  return(
    <div className="container d-flex flex-column align-items-center w-50">
      <form className="d-flex flex-column gap-3 mt-3" onSubmit={createUser}>
        <div className="d-flex flex-row flex-nowrap form-control bg-light  text-start">
          <label className="order-1 text-start w-50" htmlFor="firstName">First Name:</label>
          <input className="order-2 text-start" type="text" value={firstName} onChange={ (e) => setFirstName(e.target.value) }/>
        </div>
        <div className="d-flex flex-row flex-nowrap form-control bg-light text-start">
          <label className="order-1 text-start w-50" htmlFor="lastName">Last Name:</label>
          <input className="order-2 text-start" type="text" value={lastName} onChange={ (e) => setLastName(e.target.value) }/>
        </div>
        <div className="d-flex flex-row flex-nowrap form-control bg-light text-start">
          <label className="order-1 text-start w-50" htmlFor="email">Email:</label>
          <input className="order-2 text-start" type="text" value={email} onChange={ (e) => setEmail(e.target.value) }/>
        </div>
        <div className="d-flex flex-row flex-nowrap form-control bg-light text-start">
          <label className="order-1 text-start w-50" htmlFor="password">Password:</label>
          <input className="order-2 text-start" type="password" value={password} onChange={ (e) => setPassword(e.target.value) }/>
        </div>
        <div className="d-flex flex-row flex-nowrap form-control bg-light text-start">
          <label className="order-1 text-start w-50" htmlFor="confirmPassword">Confirm Password:</label>
          <input className="order-2 text-start" type="password" value={confirmPassword} onChange={ (e) => setConfirmPassword(e.target.value) }/>
        </div>
      </form>
      <div className="d-flex flex-column mt-3 text-start">
        <h4 className="text-center">Your Form Data</h4>
        <p>First Name : {firstName}</p>
        <p>Last Name : {lastName}</p>
        <p>Email : {email}</p>
        <p>Password : {password}</p>
        <p>Confirm Password : {confirmPassword}</p>
      </div>
    </div>
  );
};
export default Form; 