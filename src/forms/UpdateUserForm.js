import { Modal, Button } from "react-bootstrap";
import {React,useState} from "react";

function UpdateUserForm({show,handleClose,user}) {
    const [newName, setNewName]= useState([])
    const [newUsername, setNewUsername]= useState([])
    const [newPassword, setNewPassword]= useState([])
    const [newPasswordConfirm, setNewPasswordConfirm]= useState([])
    const [newProfilePic, setNewProfilePic] = useState(null)
    const [newDescription, setNewDescription]= useState([])

    function handleUpdateFile(id) {
        fetch(`/users/${user.id}`, {
                    method: "PATCH",
                    headers: {"Content-Type": "application/json",},
                        body: JSON.stringify({
                        name: newName, 
                        description: newDescription,
                        username: newUsername
                      }),
                    })
                      .then((r) => {
                        if (r.ok){
                        (handleClose())
              
                  } else {
                    r.json().then((err) => console.log(err));
                }
              })}
                                  
    
    return (
        user?
        <Modal show={show} onHide={handleClose} className="modal">
          <Modal.Header className="modalHeader">
          <Modal.Title id="contained-modal-title-vcenter">
              Update Your Profile
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="modalBody">
        <form  onSubmit={handleClose} className="modal-details" className="modal-content" className="modalBody">
            <label for="name">Name</label>
            <input type="text" placeholder={user.name} onChange={(e)=>{setNewName(e.target.value)}}></input> <br/>
            <label for="name">Username</label>
            <input type="text" placeholder={user.username} onChange={(e)=>{setNewUsername(e.target.value)}}></input> <br/>
            <label for="Description">Description</label>
            <input type="text" placeholder={user.description} onChange={(e)=>{setNewDescription(e.target.value)}}/><br/>
          <label for="price">Password</label>
            <input type="text" onChange={(e)=>{setNewPassword(e.target.value)}}/><br/>
            <label for="price">Password Comfirmation</label>
            <input type="text" onChange={(e)=>{setNewPasswordConfirm(e.target.value)}}/><br/>
          {/* <label for="images">Profile Picture</label>
          <input type="file" accept="image/*" onChange={(e)=>{setNewProfilePic(e.target.files[0])}}/> */}
          </form>  
          
        </Modal.Body>
         <Modal.Footer className="modalFooter">
        <button type="submit" data-dismiss="modal" className="button" id="modalSubmit" form="modal-details"  onClick={() => handleUpdateFile(user.id)} >Submit</button>
        <Button variant="secondary" onClick={handleClose} className="button" id="modalClose">Close</Button>
        </Modal.Footer>
      </Modal> : <>  </>
     );
}
    
export default UpdateUserForm;