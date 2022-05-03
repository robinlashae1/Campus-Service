// import Modal from "react-bootstrap/Modal"
// import Button from "react-bootstrap/Button"
import { Modal, Button } from "react-bootstrap";
import {React,useState} from "react";

function CreateServiceForm({setCreateModalShow,setShow,show,handleClose,serviceCategoryList,schoolList,user,servicesList}) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [newName,setNewName]= useState([])
  const [newDescription,setDescription]= useState([])
  const [newPrice,setPrice]= useState([])
  const [serviceCategoryId,setServiceCategoryId]= useState([])
  const [serviceId,setServiceId]= useState([])
  const [schoolId,setSchoolId]= useState([])


    function handleSubmit(e){
        e.preventDefault();

        const formData = new FormData()
        formData.append('user_id', user.id)
        formData.append('name', newName)
        formData.append('description', newDescription)
        formData.append('price', newPrice)
        formData.append('service_id', serviceId)
        formData.append('service_category_id', serviceCategoryId)
        formData.append('school_id', schoolId)
        formData.append('image', selectedFile)

        fetch(`/user_services`, {
          method: "POST",
          // headers: {
          //   "Content-Type": "application/json",
          // },
          body: formData
        })
          .then((r) => r.json())
          .then((data) => console.log(data))
          .then(handleClose)
      }
      
//value={selectedFile}
    const filteredCategories = serviceCategoryList.filter(userService=>(
        userService.service.id === parseInt(serviceId)
        ))
    return (
      
      <Modal show={show} onHide={handleClose} className="modal">
        <Modal.Header className="modalHeader">
        <Modal.Title id="contained-modal-title-vcenter">
            Add a Service
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="modalBody">
      <form 
      //onSubmit={console.log("submitted")} 
      className="modal-details" className="modal-content" className="modalBody">
          <input type="text"  placeholder="NAME" onChange={(e)=>{setNewName(e.target.value)}}/> <br/>
          <input type="text" placeholder="DESCRIPTION" onChange={(e)=>{setDescription(e.target.value)}}/><br/>
          <input type="integer" placeholder="PRICE" onChange={(e)=>{setPrice(e.target.value)}}/><br/>
        <select  onChange={(e)=>{setServiceId(e.target.value)}}><br/>
        <option>WHAT TYPE OF SERVICE IS THIS?</option>
          {servicesList.map(service=>(
              <option key={service.id} value={service.id}>{service.name}</option>
          ))}
          </select><br/>

        <select  onChange={(e)=>{setServiceCategoryId(e.target.value)}}><br/>
        <option>WHAT SUB-CATEGORY?</option>
          {filteredCategories.map(service=>(
              <option key={service.id} value={service.id}>{service.name}</option>
          ))}
          </select><br/>
        <select onChange={(e)=>{setSchoolId(e.target.value)}}>
        <option>SCHOOL</option>
        {schoolList.map(school=>(
              <option key={school.id} value={school.id}>{school.name}</option>
          ))}
          </select><br/>
        <label for="image">PLEASE CHOOSE AN IMAGE (REQUIRED)</label>
        <input type="file"  onChange={(e)=>{setSelectedFile(e.target.files[0])}}/>
        </form> 
        
      </Modal.Body>
       <Modal.Footer className="modalFooter">
      <Button type="submit" data-dismiss="modal" className="button" id="modalSubmit" form="modal-details" onClick={handleSubmit} >Submit</Button>
      <Button variant="secondary" onClick={handleClose} className="button" id="modalClose">Close</Button>
      </Modal.Footer>
    </Modal> 
     );
}

export default CreateServiceForm;