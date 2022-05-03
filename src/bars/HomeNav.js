function HomeNav({setPassword,setUsername,user, setUser,onLogin,username,password}) {
    // let history = useHistory();
    // function handleLogoutClick() {
    //   fetch("/logout", { method: "DELETE" }).then((r) => {
    //     if (r.ok) {
    //       setUser(null)
    //       history.push("/");
    //     }
    //   });
    // }if (location === "homepage"){
      
      return (
        <div>
          <div id="title-banner">
            <a href="/" id="homepageLink">
              <h1 >Campus Finder</h1>
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
          <div className="Login">
            <Login user={user} onLogin={onLogin} setUsername={setUsername} setPassword={setPassword} username={username} password={password} />
          </div>
        </div>
      );
    }
      export default HomeNav
  
      const linkStyles = {
          display: "inline-block",
          width: "160px",
          padding: "12px",
          margin: "-10px 6px 12px",
          textDecoration:"none",
          color: "black",
        };