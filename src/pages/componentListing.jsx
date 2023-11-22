import React from "react";
import {useNavigate} from 'react-router-dom'
import { componentRoutes } from "../App";
const ComponentsListingPage = () => {
    const navigate = useNavigate();
  return (
    <div className="content">
      <div className="page-content">
        <div className="component-listing">
            {componentRoutes.map((component)=>{return(
                <div className="component-tab btn btn-secondary foot-item a" onClick={()=>navigate(`../${component.path}`)}>
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
