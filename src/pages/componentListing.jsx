import React from "react";
import '../css/main.css'
import '../css/components.css'
import {useNavigate} from 'react-router-dom'
import { componentRoutes } from "../App";
const ComponentsListingPage = () => {
    const navigate = useNavigate();
  return (
    <div className="content">
      <div className="page-content">
        <div className="component-listing">
            {componentRoutes.map((component)=>{return(
                <div id="component-tab"className="component-tab btn btn-secondary a " onClick={()=>navigate(`../${component.path}`)}>
                    <p>
                        {component.name}
                    </p>

                </div>
            )})}

        </div>
        
      </div>
    </div>
  );
};

export default ComponentsListingPage;
