import { Modal, Button } from "react-bootstrap";
import {React,useState} from "react";

function UpdateService({service,show,id,modalData,handleClose,serviceCategoryList,schoolList,user,servicesList}) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [updatedName,setNewName]= useState([])
  const [newDescription,setDescription]= useState([])
  const [newPrice,setPrice]= useState([])
  const [serviceCategoryId,setServiceCategoryId]= useState([])
  const [serviceId,setServiceId]= useState([])
  const [schoolId,setSchoolId]= useState([])


          function handleselectedFile(selectedFile){
            const formData = new FormData()
            formData.append("id", id)
            formData.append('user_id', user.id)
            formData.append('name', updatedName)
            formData.append('description', newDescription)
            formData.append('price', newPrice)
            formData.append('service_id', serviceId)
            formData.append('service_category_id', serviceCategoryId)
            formData.append('school_id', schoolId)
            formData.append("image", selectedFile)

              fetch(`/user_services/${modalData.id}`, {
                method: "PATCH",
                body: formData
              })
                .then((r) => r.json())
                .then((data) => console.log(data)) 
            }

    function handleUpdate(id) {
      fetch(`/user_services/${modalData.id}`, {
        method: "PATCH",
        headers: {"Content-Type": "application/json",},
        body: JSON.stringify({
                    id: id,
                    user_id: user.id,
                    name: updatedName,
                    description: newDescription,
                    price: newPrice,
                    service_id: serviceId,
                    service_category_id: serviceCategoryId,
                    school_id: schoolId
                  }),
      })
        .then((r) => {
          if (r.ok){
          (handleClose())

    } else {
      r.json().then((err) => console.log(err));
  }
})}


    const filteredCategories = serviceCategoryList.filter(userService=>(
        userService.service.id === parseInt(serviceId)
        ))

    return (
      modalData?
      <Modal show={show} onHide={handleClose} className="modal">
        <Modal.Header className="modalHeader">
        <Modal.Title id="contained-modal-title-vcenter">
            Update A Service
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="modalBody">
      <form  onSubmit={handleClose} className="modal-details modal-content modalBody" >
          <label >Name</label>
          <input type="text" placeholder={modalData.name}  onChange={(e)=>{setNewName(e.target.value)}}></input> <br/>
          <label >Description</label>
          <input type="text" 
          placeholder={modalData.description}
          onChange={(e)=>{setDescription(e.target.value)}}></input><br/>
        <label >Price</label>
          <input type="integer" placeholder={modalData.price} onChange={(e)=>{setPrice(e.target.value)}}/><br/>
        <label >What type of Service is this?</label>
        <select  onChange={(e)=>{setServiceId(e.target.value)}}><br/>
        <option value=""></option>
          {servicesList.map(service=>(
              <option key={service.id} value={service.id}>{service.name}</option>
          ))}
          </select><br/>
        <label >What subCategory?</label>
        <select  onChange={(e)=>{setServiceCategoryId(e.target.value)}}><br/>
        <option value=""></option>
          {filteredCategories.map(service=>(
              <option key={service.id} value={service.id}>{service.name}</option>
          ))}
          </select><br/>
        <label >School?</label>
        <select onChange={(e)=>{setSchoolId(e.target.value)}}>
        <option value=""></option>
        {schoolList.map(school=>(
              <option key={school.id} value={school.id}>{school.name}</option>
          ))}
          </select>
          <br/>
        <label for="images">images</label>
        <input type="file"  onChange={(e)=>{setSelectedFile(e.target.files[0])}}/>
        </form>  
        
      </Modal.Body>
       <Modal.Footer className="modalFooter">
      <button type="submit" data-dismiss="modal" className="button" id="modalSubmit" form="modal-details"  onClick={selectedFile?  () => handleselectedFile(selectedFile):() => handleUpdate(modalData.id)} >Submit</button>
      <Button variant="secondary" onClick={handleClose} className="button" id="modalClose">Close</Button>
      </Modal.Footer>
    </Modal> : <></>
     );
}


export default UpdateService;