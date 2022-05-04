import {React, useState,useEffect} from "react";
import { useParams } from "react-router-dom"
import HomeBanner from "../bars/HomeBanner";
import BottomBorder from "../bars/BottomBorder";
import SearchBar from "material-ui-search-bar";
import ServiceCard from "../pages/ServiceCard"

 function AllTechsPage ({servicesList,user,setLoginShow,loginShow,onLogin,setUsername,setPassword,username,password}){
    const {schoolName, serviceName,serviceCategoryName} = useParams();
    const [searchFilter, setSearchFilter] = useState(servicesList);

  const filteredBySchool = servicesList.filter(userService=>(
    userService.school.name === schoolName
    ))

    const filteredByService = filteredBySchool.filter(service=>
        service.service.name === serviceName
    )

    const filteredByCategory = filteredByService.filter(service=>
        service.service_category.name === serviceCategoryName
    )
    const handleSearch = (e) => {
        const filtered = filteredByCategory.filter((service) => {
          return service.name.toLowerCase().includes(e)
        })
        setSearchFilter(filtered)
    }
    useEffect(() => {
        setSearchFilter(filteredByCategory)
      },[filteredByCategory])
      
    
        if (filteredByCategory < 1){
           return(
            <div className="schoolPage">
            <HomeBanner onLogin={onLogin} setLoginShow={setLoginShow} loginShow={loginShow} user={user} title={`${serviceCategoryName}`}/>
            <SearchBar className="search-bar gapDiv" onChange={handleSearch}/>
               <h1>Sorry, there are no services here yet.<br/>
                Be sure to check back soon, We are growing everyday!</h1>
            </div>
           )
        } else{
            return(
              <div className="schoolPage">
            <HomeBanner onLogin={onLogin} user={user} onLogin={onLogin} setUsername={setUsername} setPassword={setPassword} username={username} password={password} setLoginShow={setLoginShow} loginShow={loginShow} user={user} title={`${serviceCategoryName}`}/>
            <SearchBar className="search-bar gapDiv" onChange={handleSearch}/>
            {searchFilter.map(service=>(

                    <a href={`/techs/${service.user.username}/${service.name}/${service.id}`}>
                    <ServiceCard canEdit={false} className={"serviceCard"} service={service}/>
                    </a>
                )
            )}
        </div>  
            )
        }
        }
export default AllTechsPage