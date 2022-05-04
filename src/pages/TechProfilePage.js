import {React, useState,useEffect} from "react";
import { useParams } from "react-router-dom"
import BottomBorder from "../bars/BottomBorder";
import HomeBanner from "../bars/HomeBanner";
import ServiceCard from "../pages/ServiceCard";
import SearchBar from "material-ui-search-bar";

function TechProfilePage({userServiceList,setLoginShow,loginShow,user,onLogin,setUsername,setPassword,username,password}) {
    // const [serviceList, setServiceList] = useState([]);
    const [searchFilter, setSearchFilter] = useState(userServiceList);
    const {userName} = useParams();

    const filterByUser = userServiceList.filter(service=>(
        service.user.username === userName
    ))
console.log(filterByUser)
    const handleSearch = (e) => {
        const filtered = filterByUser.filter((service) => {
          return service.name.toLowerCase().includes(e)
        })
        setSearchFilter(filtered)
      }

      useEffect(() => {
        setSearchFilter(filterByUser)
      },[userServiceList])

    return ( 
      filterByUser[0]? 
        <div style={{height: "100vh"}}>
          <HomeBanner setUsername={setUsername} onLogin={onLogin} setPassword={setPassword} username={username} password={password} setLoginShow={setLoginShow} loginShow={loginShow} user={user} title={userName} />
         
          {/* <div id="techServiceSpace"> */}
          <div style={{marginTop: "1%"}}>
            <div id="techProfileSpace">
            <img src={filterByUser[0].user.profile_picture.url} className="userPic"/>
              <h1>{filterByUser[0].user.name}</h1>
              <h1>{filterByUser[0].user.description}</h1>
            </div>
            <div className="displayTechService">
              <SearchBar className="search-bar techSearch gapDiv" onChange={handleSearch}/>
            {searchFilter.map(service=>(
              <a href={`/techs/${service.user.username}/${service.name}/${service.id}`} style={{textDecoration: "none", color: "black"}}>
                <ServiceCard canEdit={false} className={"techServiceCard"} service={service}/>
              </a>
              
            ))}
            </div>
            </div>
        </div>: <></>
    );
}

export default TechProfilePage;