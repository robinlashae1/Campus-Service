import {React,useEffect,useState} from "react";
import { useParams } from "react-router-dom"
import BottomBorder from "../bars/BottomBorder";
import HomeBanner from "../bars/HomeBanner";
import ServiceCard from "../pages/ServiceCard"

function SpecificService({userServiceList,setLoginShow,loginShow,user,onLogin,setUsername,setPassword,username,password}) {
    const {userName,serviceName,serviceId } = useParams();

    const filterByUser = userServiceList.filter(service=>(
        service.user.username === userName

    ))
    console.log(filterByUser)
    const filteredByService = filterByUser.filter(service=>(
        service.name === serviceName
    ))
    console.log(filteredByService[0])
    const filteredById = filteredByService.filter(service=>(
        service.id === serviceId
    ))

    return (
        filteredByService[0]?
        <div style={{height: "100vh"}}>
            <HomeBanner user={user} onLogin={onLogin} setUsername={setUsername} setPassword={setPassword} username={username} password={password} setLoginShow={setLoginShow} loginShow={loginShow} user={user} title={serviceName} />
            <div className="fullSpecificDiv"> 
            <a href={`/techs/${userName}`}><div id="techProfileSpace">
                
                <img src={filteredByService[0].user.profile_picture.url} className="userPic"/>
                 <h1>{filteredByService[0].user.name} / @{filteredByService[0].user.username} </h1>
               <h1>{filteredByService[0].user.description}</h1>
            </div></a>
            <div style={{marginTop: "8%", width: "70vw"}}>
              {filteredByService.map(service=>(
                <ServiceCard className={"specificRender"} service={service}/>
            ))}  
            </div>
            
            </div>
            </div>:
            <div>
            <HomeBanner user={user} onLogin={onLogin} setLoginShow={setLoginShow} loginShow={loginShow} setUsername={setUsername} setPassword={setPassword} username={username} password={password} user={user} title={serviceName} />
            <div className="fullSpecificDiv">
            <div id="techProfileSpace">
            <div className="loadingDiv"/>
            </div>
            {filteredByService.map(service=>(
                <ServiceCard className={"specificRender"} service={service}/>
            ))}
            </div>
            </div>
            
    );
}

export default SpecificService;