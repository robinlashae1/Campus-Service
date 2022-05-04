import {React} from "react";
import { useParams } from "react-router-dom"
import HomeBanner from "../bars/HomeBanner";
import BottomBorder from "../bars/BottomBorder";

function SchoolServicesPage({servicesList,setLoginShow,loginShow,user,onLogin,setUsername,setPassword,username,password}){
   const {schoolName} = useParams();

    return(
        <div>
        <HomeBanner user={user} onLogin={onLogin} setUsername={setUsername} setPassword={setPassword} username={username} password={password} setLoginShow={setLoginShow} loginShow={loginShow} user={user} title={`${schoolName}`}/>
        <div >
            <div className="colleges-center">
              {servicesList.map((service)=>(
            <a href={`/schools/${schoolName}/${service.name}`}><div className="services"id={`${service.name}`}>{service.name}</div ></a>
        ))}  
            </div>
        
        
        </div>
        </div>
    )
}
export default SchoolServicesPage