import './App.css';
import {React, useEffect, useState} from "react";
import HomePage from './pages/HomePage';
import SchoolPage from './pages/SchoolPage';
import SchoolServicesPage from './pages/SchoolServicesPage';
import ServiceCategoryPage from './pages/ServiceCategoryPage';
import { Route, Switch, BrowserRouter} from "react-router-dom";
import About from './pages/About';
import Rescue from './pages/Rescue';
import Login from './forms/Login';
import NavBar from './bars/NavBar';
import HomeBanner from './bars/HomeBanner';
import TechProfilePage from './pages/TechProfilePage';
import AllTechsPage from './pages/AllTechsPage';
import PersonalProfilePage from './pages/PersonalProfilePage';
// import TechServicePage from './TechServicePage';
import SpecificService from './pages/SpecificService';


function App(){
  const [user, setUser]= useState(null);
  const [servicesList, setServicesList]= useState([]);
  const [serviceCategoryList, setServiceCategoryList]=useState([]);
  const [userServiceList, setUserServiceList] = useState([]);
  const [schoolList, setschoolList] = useState([]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginShow, setLoginShow] = useState(false)

    useEffect(() => {
        fetch("/user_services")
        .then((r) => r.json())
        .then((userService) => setUserServiceList(userService))
      }, []);
      useEffect(() => {
        fetch("/service_categories")
        .then((r) => r.json())
        .then((serviceCategory) => setServiceCategoryList(serviceCategory))
      }, []);
      useEffect(() => {
        fetch("/schools")
        .then((r) => r.json())
        .then((schools) => setschoolList(schools))
    }, []);
  
  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json()
        .then((user) => setUser(user));
      }
    });
  }, []);

    useEffect(() => {
        fetch("/services")
        .then((r) => r.json())
        .then((services) => setServicesList(services))
      }, []);

      function handleDelete(id) {
        fetch(`/user_services/${id}`, {
            method: 'DELETE',
        }).then((r) => {
            if (r.ok) {
              setUserServiceList((services) =>
                services.filter((services) => services.id !== id)
                );}})}
  
  return(
    <div className='App'>
      <BrowserRouter>
      {/* <HomeBanner user={user} onLogin={setUser} setUsername={setUsername} setPassword={setPassword} username={username} password={password}/> */}
      <Switch>
         <Route exact path="/login" >
            <Login user={user} onLogin={setUser} setUsername={setUsername} username={username} password={password} setPassword={setPassword}/>
          </Route>
          <Route exact path="/" >
            <HomePage setUser={setUser} user={user} setLoginShow={setLoginShow} loginShow={loginShow} onLogin={setUser} setUsername={setUsername} setPassword={setPassword} username={username} password={password}/>
          </Route>
          <Route exact path="/about">
            <About setLoginShow={setLoginShow} loginShow={loginShow} user={user} onLogin={setUser} setUsername={setUsername} setPassword={setPassword} username={username} password={password}/>
          </Route>
          <Route exact path="/schools" >
            <SchoolPage setLoginShow={setLoginShow} loginShow={loginShow} user={user} onLogin={setUser} schoolList={schoolList} setUsername={setUsername} setPassword={setPassword} username={username} password={password}/>
          </Route>
          <Route exact path={`/schools/:schoolName`} >
            <SchoolServicesPage setLoginShow={setLoginShow} onLogin={setUser} loginShow={loginShow} user={user} servicesList={servicesList} setUsername={setUsername} setPassword={setPassword} username={username} password={password}/>
          </Route>
          <Route exact path="/schools/:schoolName/:serviceName" >
            <ServiceCategoryPage setLoginShow={setLoginShow} onLogin={setUser} loginShow={loginShow} user={user} serviceCategoryList={serviceCategoryList} setUsername={setUsername} setPassword={setPassword} username={username} password={password}/>
          </Route>
          <Route exact path= '/schools/:schoolName/:serviceName/:serviceCategoryName'>
            <AllTechsPage setLoginShow={setLoginShow} onLogin={setUser} loginShow={loginShow} user={user} servicesList={userServiceList} setUsername={setUsername} setPassword={setPassword} username={username} password={password}/>
          </Route>
          <Route exact path="/techs/:userName" >
            <TechProfilePage setLoginShow={setLoginShow} onLogin={setUser} loginShow={loginShow} user={user} userServiceList={userServiceList} setUsername={setUsername} setPassword={setPassword} username={username} password={password}/>
          </Route>
          <Route exact path="/techs/:userName/:serviceName/:serviceId" >
            <SpecificService setLoginShow={setLoginShow} onLogin={setUser} loginShow={loginShow} user={user} userServiceList={userServiceList} setUsername={setUsername} setPassword={setPassword} username={username} password={password}/>
          </Route>
          {/* <Route exact path="/:userName/:serviceName">
            <TechServicePage/>
          </Route> */}
          <Route exact path='/myProfile'>
            <PersonalProfilePage onLogin={setUser} setLoginShow={setLoginShow} loginShow={loginShow} handleDelete={handleDelete} schoolList={schoolList} userServiceList={userServiceList} setUsername={setUsername} user={user} setUser={setUser} serviceCategoryList={serviceCategoryList} servicesList={servicesList}/>
          </Route>
          <Route>
            <Rescue/>
          </Route>
      </Switch>
      </BrowserRouter>
    </div>
  )}

export default App;
