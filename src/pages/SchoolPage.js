import {React,useEffect,useState} from "react";
import HomeBanner from "../bars/HomeBanner";
import BottomBorder from "../bars/BottomBorder";
import SearchBar from "material-ui-search-bar";

function SchoolPage({schoolList,setLoginShow,loginShow,user,onLogin,setUsername,setPassword,username,password}){
    const [searchFilter, setSearchFilter] = useState(schoolList);

    const alphabeticalFiltered= schoolList.sort(function(a,b){
      if(a.name < b.name) { return -1; }
    if(a.name > b.name) { return 1; }
    return 0;
    })

    const handleSearch = (e) => {
        const filtered = alphabeticalFiltered.filter((school) => {
          return school.name.toLowerCase().includes(e)
        })
        setSearchFilter(filtered)
      }

      useEffect(() => {
        setSearchFilter(alphabeticalFiltered)
      },[alphabeticalFiltered])

    return(
        <div className="schoolPage" style={{overflowX: "hidden"}}>
            <HomeBanner onLogin={onLogin} user={user} onLogin={onLogin} setUsername={setUsername} setPassword={setPassword} username={username} password={password} setLoginShow={setLoginShow} loginShow={loginShow} user={user} title="ALL SCHOOLS"/>
              <SearchBar className="search-bar gapDiv" onChange={handleSearch}/>
              <div className="colleges-center">
              {searchFilter.map(school=>(
               <div className="collegeContainers">
                <a href={`/schools/${school.name}`}><img src={school.image_url} alt={school.name} key={school.id}/></a>
              {console.log('ive been fetched')}
              </div>
              ))}
              </div>
        </div>
    )
}
export default SchoolPage