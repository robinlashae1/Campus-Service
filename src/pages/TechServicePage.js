import {React} from "react";
import { useParams } from "react-router-dom"
import HomeBanner from "../HomeBanner";
import BottomBorder from "../BottomBorder";

function TechServicePage({user}) {
    const {userName,serviceName} = useParams();
    return (
        <>
            <HomeBanner user={user}/>
            {userName}
            {serviceName}
            <BottomBorder/>
        </>
     );
}

export default TechServicePage ;