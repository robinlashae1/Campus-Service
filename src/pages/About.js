import React from "react";
import HomeBanner from "../bars/HomeBanner";

function About({user,onLogin,setUsername,setLoginShow,loginShow,setPassword,username,password}){
    return(
    <div className="aboutPage">
        <HomeBanner onLogin={onLogin} setLoginShow={setLoginShow} user={user} setUsername={setUsername} setPassword={setPassword} username={username} password={password} loginShow={loginShow} title="Mission Statement" location="" user={user} onLogin={onLogin} setUsername={setUsername} setPassword={setPassword} username={username} password={password}/>
        <div id="textSpace">
        <div className="aboutUs">
            <p>Born out of the need for easy access to local beauty services 
                tailored towards POC on a PWI campus, Campus Finder works to 
                connect the students looking for specific beauty services with
                the students providing these services on campus. A perfect place
                for new entrepreneurs to grow the reach of their business, Campus
                Finder provides a localized hub for students to discover the essential
                services offered within the comfort of their own community. From hair braiding 
                to nail techs, Campus Finder gives a list of the services available across the country.</p>
        </div>
        <div>
            <img id="aboutImage" src={"https://i.pinimg.com/564x/cc/21/79/cc217901730a2523311de2a66e87e6d0.jpg"} />
          </div>
          </div>
    </div>
    )
}
export default About