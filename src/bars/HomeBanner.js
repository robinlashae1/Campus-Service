import React from "react";
import NavBar from "./NavBar";

function HomeBanner({title,setUser,setLoginShow,loginShow,location,user,onLogin,setUsername,setPassword,username,password}){
    if (location === "homepage"){
    return(
        <div style={{paddingTop: "2vh"}}>
            <NavBar setUser={setUser} setLoginShow={setLoginShow} loginShow={loginShow} locationPage={"homepage"} user={user} onLogin={onLogin} setUsername={setUsername} setPassword={setPassword} username={username} password={password}/>
        {/* <div className="homepage">
            <div id="TopBorder">
                <h2 className="title">{title}</h2>
            </div>  
            </div> */}
        </div>
        )
    }else{
        return(
            <div >
            <NavBar setLoginShow={setLoginShow} loginShow={loginShow} user={user} onLogin={onLogin} setUsername={setUsername} setPassword={setPassword} username={username} password={password}/>
        <div >
            <div id="TopBorder">
                <div id="titleBorderBackground">
                    {title}
                </div>
                
            </div>  
            </div>
        </div>
        )
    }
    
}
export default HomeBanner