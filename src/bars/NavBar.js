import {React, useState} from "react";
import {NavLink} from "react-router-dom";
import Login from "../forms/Login";


function NavBar({setPassword,setLoginShow,loginShow,setUsername,user,locationPage, setUser,onLogin,username,password}) {
  const [loginDefault,setLoginDefault]= useState(false)
  // let history = useHistory();
  // function handleLogoutClick() {
  //   fetch("/logout", { method: "DELETE" }).then((r) => {
  //     if (r.ok) {
  //       setUser(null);
  //     }
  //   });
  // }
  if (locationPage === "homepage"){
    
    return (
      user?
      <div>
        {/* <div id="title-banner">
          <a href="/" id="homepageLink">
            <h1 >Campus Finder</h1>
            </a>
         </div>    */}
        <NavLink className="navLinks"
          to="/"
          /* set exact so it knows to only set activeStyle when route is deeply equal to link */
          exact
          /* add styling to Navlink */
          style={linkStyles}
          /* add prop for activeStyle */
        >
          Home
        </NavLink>
        <NavLink className="navLinks"
          to="/about"
          exact
          style={linkStyles}
        >
          About
        </NavLink>
        <NavLink className="navLinks"
          to="/schools"
          exact
          style={linkStyles}
        >
          Find Your College
        </NavLink>
        <NavLink className="navLinks"
          to="/myProfile"
          exact
          style={linkStyles}
        >
          My Profile
        </NavLink>
      </div>
      :
      <div>
        {/* <div id="title-banner">
          <a href="/" id="homepageLink">
            <h1 >Campus Finder</h1>
            </a>
         </div>    */}
        <NavLink className="navLinks"
          to="/"
          /* set exact so it knows to only set activeStyle when route is deeply equal to link */
          exact
          /* add styling to Navlink */
          style={linkStyles}
          /* add prop for activeStyle */
        >
          Home
        </NavLink>
        <NavLink className="navLinks"
          to="/about"
          exact
          style={linkStyles}
        >
          About
        </NavLink>
        <NavLink className="navLinks"
          to="/schools"
          exact
          style={linkStyles}
        >
          Find Your College
        </NavLink>
         <button className="navLinks loginButton"
         onClick={() => {setLoginShow(true);setLoginDefault(true)}}
         style={linkStyles}
       >
         Login
       </button>
       <button className="navLinks loginButton"
       onClick={() => {setLoginShow(true);setLoginDefault(false)}}
       style={linkStyles}
     >
       Sign Up
     </button>
        {/* <div className="Login">
          // 
        </div> */}
        <Login loginDefault={loginDefault} user={user} show={loginShow} handleClose={()=> setLoginShow(false)}onLogin={onLogin} setUsername={setUsername} setPassword={setPassword} username={username} password={password} />
      </div>
    );
  }else{
    return(
      user ?
      <div>
      <div id="title-banner">
          <a href="/" id="homepageLink">
            <h1 >Your Campus Finder</h1>
            </a>
         </div>
         <div>
           
      <NavLink className="navLinks"
        to="/"
        /* set exact so it knows to only set activeStyle when route is deeply equal to link */
        exact
        /* add styling to Navlink */
        style={linkStyles}
        /* add prop for activeStyle */
      >
        Home
      </NavLink>
      <NavLink className="navLinks"
        to="/about"
        exact
        style={linkStyles}
      >
        About
      </NavLink>
      <NavLink className="navLinks"
        to="/schools"
        exact
        style={linkStyles}
      >
        Find Your College
      </NavLink>
      <NavLink className="navLinks"
        to="/myProfile"
        exact
        style={linkStyles}
      >
        My Profile
      </NavLink>
      <Login loginDefault={loginDefault} user={user} show={loginShow} handleClose={()=> setLoginShow(false)}onLogin={onLogin} setUsername={setUsername} setPassword={setPassword} username={username} password={password} />
      </div>  
    </div> :
      <div>
        <div id="title-banner">
          <a href="/" id="homepageLink">
            <h1 >Your Campus Finder</h1>
            </a>
         </div>   
        <NavLink className="navLinks"
          to="/"
          /* set exact so it knows to only set activeStyle when route is deeply equal to link */
          exact
          /* add styling to Navlink */
          style={linkStyles}
          /* add prop for activeStyle */
        >
          Home
        </NavLink>
        <NavLink className="navLinks"
          to="/about"
          exact
          style={linkStyles}
        >
          About
        </NavLink>
        <NavLink className="navLinks"
          to="/schools"
          exact
          style={linkStyles}
        >
          Find Your College
        </NavLink>
        <button className="navLinks loginButton"
        onClick={() => {setLoginShow(true);setLoginDefault(true)}}
        style={linkStyles}
      >
        Login
      </button>
      <button className="navLinks loginButton"
      onClick={() => {setLoginShow(true);setLoginDefault(false)}}
      style={linkStyles}
    >
      Sign Up
    </button>
      <Login loginDefault={loginDefault} user={user} show={loginShow} handleClose={()=> setLoginShow(false)}onLogin={onLogin} setUsername={setUsername} setPassword={setPassword} username={username} password={password} />
      </div>
    )
  }
  }
    export default NavBar

    const linkStyles = {
        display: "inline-block",
        width: "160px",
        padding: "12px",
        margin: "-10px 6px 12px",
        textDecoration:"none",
        color: "black",
        float: "right"
      };
