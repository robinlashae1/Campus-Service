import {React,useState} from "react";
import Form from "react-bootstrap/Form";
import { Modal, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import Switch from "react-switch";

function Login({onLogin,username,loginDefault,password,setPassword,setUsername,user,show,handleClose}) {
  let history = useHistory();
  const [errors, setErrors] = useState([]);
  const [newUsername, setNewUsername] = useState('');
  const [newName, setNewName] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [newProfilePic, setNewProfilePic] = useState(null);
  const [newPassword, setNewPassword] = useState('');
  const [newPasswordConfirmation, setNewPasswordConfirmation] = useState('');
  const [newIsTech, setIsTech] = useState(false);
  
    function handleLoginSubmit(e) {
      e.preventDefault();
      fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username: username, password }),
      })
        .then((r) => {
          if (r.ok){
          r.json().then((user) => onLogin(user)).then(history.push("/"));
    } else {
      r.json().then((err) => setErrors(err.errors));
    }
  });}
console.log(newIsTech)
  function handleSignUpSubmit() {
    const formData = new FormData()
      formData.append("username", newUsername)
      formData.append('name', newName)
      formData.append('description', newDescription)
      formData.append('profile_picture', newProfilePic)
      formData.append('password', newPassword)
      formData.append('password_confirmation', newPasswordConfirmation)
      formData.append('is_tech',newIsTech)
              
      fetch(`/users`, {
                  method: "POST",
                  body: formData
                  }).then((r) => {
                    if (r.ok){
                    r.json().then((user) => onLogin(user)).then(history.push("/"));
              } else {
                r.json().then((err) => setErrors(err.errors));
              }
            })}

    console.log(errors)
    
    return(
    loginDefault ?   
    <Modal show={show} onHide={handleClose} className="modal">
    <Modal.Header className="modalHeader">
    <Modal.Title id="contained-modal-title-vcenter">
        Login
    </Modal.Title>
  </Modal.Header>
  <Modal.Body className="modalBody">
    <div className="Login">
        <Form onSubmit={handleLoginSubmit}>
            <Form.Group size="lg" controlId="username">
            <Form.Control
            placeholder="USERNAME"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
        />
        </Form.Group>
          <Form.Group size="lg" controlId="password">
          <Form.Control
          placeholder="PASSWORD"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
          />
            </Form.Group>

      </Form>
      </div> 
      </Modal.Body>
      <Modal.Footer>
        <button className="submitButton" onClick={handleLoginSubmit}>Submit</button>
      </Modal.Footer>
      </Modal> :
      <Modal show={show} onHide={handleClose} className="modal">
      <Modal.Header className="modalHeader">
      <Modal.Title id="contained-modal-title-vcenter" >
          Sign Up
      </Modal.Title>
    </Modal.Header>
    <Modal.Body className="modalBody">
      <div className="Login">

          <Form onSubmit={handleSignUpSubmit}>
            <div style={{display: "flex", flexDirection: "row"}}>
            <Form.Group size="lg" controlId="password" style={{width:"50%"}}>
            <Form.Control style={style}
            placeholder="USERNAME"
                type="text"
                value={newUsername}
                onChange={(e) => setNewUsername(e.target.value)}
            /></Form.Group>
              <Form.Group size="lg" controlId="username"  style={{width:"50%"}}>
              <Form.Control style={style}
              placeholder="FIRST NAME"
                type="text"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
          /> </Form.Group>
            
              
             </div> 
              <Form.Group size="lg" controlId="password">
            <Form.Control
            placeholder="BIO"
                type="text"
                value={newDescription}
                onChange={(e) => setNewDescription(e.target.value)}
            />
              </Form.Group>
              <Form.Group size="lg" controlId="password">
            <Form.Control
            placeholder="PASSWORD"
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
            />
              </Form.Group>
              <Form.Group size="lg" controlId="password">
            <Form.Control
            placeholder="PASSWORD CONFIRMATION"
                type="password"
                value={newPasswordConfirmation}
                onChange={(e) =>  setNewPasswordConfirmation(e.target.value)}
            />
              </Form.Group>
              <div style={{display: "flex", flexDirection: "row", border: "black 1.5px solid ",textAlign: "center",backgroundColor: "white"}}>
                <Form.Group size="lg" controlId="password" style={{width:"55%",backgroundColor: "white"}}>
            <Form.Label>Profile Picture (REQUIRED)</Form.Label>
            <div >
              <Form.Control
              style={{margin: "auto"}}
                type="file"
                accept="image/*"
                onChange={(e) => setNewProfilePic(e.target.files[0])}
            />
            </div>
            
            </Form.Group>
            <Form.Group size="lg" controlId="password" style={{width:"45%", display: "flex", flexDirection: "column",borderLeft: "black 1.5px solid",textAlign: "center",backgroundColor: "white"}}>
            <Form.Label>Are you a tech?</Form.Label>
            <div style={{margin: "auto"}}>
              <Switch checked={newIsTech} onChange={() => setIsTech(!newIsTech)} />
            </div>
            
              </Form.Group>
              </div>
              
  
        </Form>
        </div> 
        </Modal.Body>
        <Modal.Footer className="modalFooter">
          <button className="submitButton" onClick={handleSignUpSubmit}>Submit</button>
        </Modal.Footer>
        </Modal>
    )  
  }
  export default Login
  const style={
    width: "100%"
  }