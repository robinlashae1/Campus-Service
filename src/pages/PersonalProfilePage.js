import {React,useState} from "react";
import HomeBanner from "../bars/HomeBanner";
import BottomBorder from "../bars/BottomBorder";
import CreateServiceForm from "../forms/CreateServiceForm"
import ServiceCard from "../pages/ServiceCard"
import { useHistory } from "react-router-dom";
import UpdateService from "../forms/UpdateService";
import UpdateUserForm from "../forms/UpdateUserForm";

function PersonalProfilePage({schoolList,onLogin,setLoginShow,loginShow,handleDelete,user,setUser,servicesList,serviceCategoryList,setUsername,setPassword,username,password}) {
  
  const [createModalShow, setCreateModalShow] = useState(false);
  const [updateModalShow, setUpdateModalShow] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [modalData, setModalData] = useState(null);
  let history = useHistory();

      function handleLogout() {
        fetch("/logout", { method: "DELETE" }).then((r) => {
          if (r.ok) {
            setUser(null)
            history.push("/");
          }
        });
      }

      console.log(user)
      function handleTechButtons(user){
        if (user.is_tech === true){
          return(
            <>
          <button type="button" id="serviceCreateButton" className="button ppbutton" onClick={()=> setCreateModalShow(true)}>Create a Service</button>
          <CreateServiceForm  setCreateModalShow={setCreateModalShow} user={user} 
          servicesList={servicesList} serviceCategoryList={serviceCategoryList} 
          schoolList={schoolList} show={createModalShow} handleClose={() => setCreateModalShow(false)} />
          </>
          )
        }else{
          return(
            <></>
          )
        }
      }

  return (
    user?
    <div id="personalProfilePage">
      <HomeBanner user={user} onLogin={onLogin} setUsername={setUsername} setPassword={setPassword} username={username} password={password} setLoginShow={setLoginShow} loginShow={loginShow} title="My Profile" user={user}/>
      <div id="profileDiv">
        
        <img id="personalProfilePic" src={user.profile_picture.url} alt="profile picture"/>
        <div id="descriptionDiv">
          {` Hi, ${user.name}!`} / 
         <i>{user.username}</i> <br/>
         <p>{user.description}</p>
        </div>
        
      </div>
      <button type="button" id="serviceCreateButton" className="button ppbutton" onClick={()=> setUpdateModalShow(true)}>Update Your Profile</button>
      <UpdateUserForm user={user} show={updateModalShow} handleClose={()=> setUpdateModalShow(false)}/>
      {handleTechButtons(user)}
      <button className="button ppbutton" id="logOut" onClick={handleLogout}>Log Out</button>
      <div className="personalProfileServices">
        { user.user_services.map(service=>{
          return(
            <ServiceCard setModalData={setModalData} user={user} setModalShow={setModalShow}
            key={service.id} handleDelete={handleDelete} className={"personalServiceCard"} service={service}/>
          ) })}
           <UpdateService setModalShow={setModalShow} modalData={modalData} setModalShow={setModalShow} 
           user={user} servicesList={servicesList} serviceCategoryList={serviceCategoryList}
            schoolList={schoolList} show={modalShow} handleClose={() => setModalShow(false)}/> 
        </div>
    </div> : <div>
      <HomeBanner onLogin={onLogin} user={user} onLogin={onLogin} setUsername={setUsername} setPassword={setPassword} username={username} password={password} setLoginShow={setLoginShow} loginShow={loginShow} user={user} title="My Profile"/>
      <div id="profileDiv">
        <div className="loadingDiv"/>
      </div>
        <button type="button ppbutton" id="serviceCreateButton" className="button" onClick={() => setCreateModalShow(true)}>Create a Service</button>
          <CreateServiceForm  setCreateModalShow={setCreateModalShow} user={user} 
              servicesList={servicesList} serviceCategoryList={serviceCategoryList} 
              schoolList={schoolList} show={createModalShow} handleClose={() => setCreateModalShow(false)} />
      <button className="button ppbutton" id="logOut" onClick={handleLogout}>Log Out</button>
      <div className="personalProfileServices">
        <div className="loadingDiv"/>
        </div>
        </div>
  )}

export default PersonalProfilePage