import React, { useReducer } from "react";
import HomeBanner from "../bars/HomeBanner";
import BottomBorder from "../bars/BottomBorder";

 function HomePage({title,setLoginShow,loginShow,user,setUser,onLogin,setUsername,setPassword,username,password}){
    return(
    user?
        <div className="homepage">
            <HomeBanner onLogin={onLogin} setUser={setUser} setLoginShow={setLoginShow} loginShow={loginShow} title="HOME" location="homepage" user={user} onLogin={onLogin} setUsername={setUsername} setPassword={setPassword} username={username} password={password}/>
            <div id="homePageHolder">

        
        <div id="firstQuaterDiv">
            <h1 className="titleLines">Your</h1>
            <h1 className="titleLines">Campus</h1>
            <h1 className="titleLines">Finder</h1>
        </div>
        <img id="homePageImage" src={"https://i.pinimg.com/564x/03/2a/b2/032ab277d6ef8c477013d24ad127df45.jpg"} alt="hair braiding" />
            <div className="homeSlogan">
            <h1 id="homeSloganTop">Hi, {user.name}!</h1>
             <h1 id="homeSloganBottom">Lets get you started</h1> 
             <div id="phraseAndButton">
             <p id="homeSloganP">Let us help connect you to the people you're looking for...<br/> Anywhere, Anytime. We got you!</p>
        <a href="/schools">
            <button className="button bottombuttonExtend"type="button">Find Your School</button>
        </a>
         </div>
         </div>
         </div>
        </div>:
        <div className="homepage">
        <HomeBanner onLogin={onLogin} setLoginShow={setLoginShow} loginShow={loginShow} title="HOME" location="homepage" user={user} onLogin={onLogin} setUsername={setUsername} setPassword={setPassword} username={username} password={password}/>
        <div id="homePageHolder">

        
        <div id="firstQuaterDiv">
            <h1 className="titleLines">Your</h1>
            <h1 className="titleLines">Campus</h1>
            <h1 className="titleLines">Finder</h1>
        </div>
        <img id="homePageImage" src={"https://i.pinimg.com/564x/03/2a/b2/032ab277d6ef8c477013d24ad127df45.jpg"} alt="hair braiding" />
        <div className="homeSlogan">
         <h1 id="homeSloganTop">Whatever you need,</h1>
         <h1 id="homeSloganBottom">Wherever You are.</h1>
         <div id="phraseAndButton">
             <p id="homeSloganP">Let us help connect you to the people you're looking for...<br/> Anywhere, Anytime. We got you!</p>
        <a href="/schools">
            <button className="button bottombuttonExtend"type="button">Find Your School</button>
        </a>
         </div>
        
        </div>
        </div>
        {/*// <div className="circles"><div id="outterCircle"><div id="innerCircle"></div></div></div>
         <div className="testDiv"/> 
        // <BottomBorder/> */}
        </div>
    )
}
export default HomePage;