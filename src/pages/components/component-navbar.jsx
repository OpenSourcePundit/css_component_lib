import React from "react"
import '../../css/main.css'
import {useLocation,useNavigate} from 'react-router-dom'
import { componentRoutes } from "../../App";

const TopNavBar = () =>{

  const ActiveNav = useLocation();
  const navigate = useNavigate()
  const active_class = ActiveNav.pathname.split('/')[2]

 return(
    <div class="top-navbar">
        <ul>
          {componentRoutes.map((component)=>{return(
            <li>
            <div className='a' id={component.name.toLowerCase()==active_class?`active`:``} onClick={()=>navigate(`/${component.path}`)}>{component.name}</div>
          </li>
          )})}          
          
        </ul>
        <hr/>
      </div>

 )
}

const SideNavBar = () =>{
  const ActiveNav = useLocation();
  const navigate = useNavigate()
  const active_class = ActiveNav.pathname.split('/')[2]

  return(
    <div className="side-nav">
<ul>
          {componentRoutes.map((component)=>{return(
            <li>
            <div href="/" className='a' id={component.name.toLowerCase()==active_class?`active`:``} onClick={()=>navigate(`/${component.path}`)}>{component.name}</div>
          </li>
          )})}
  
</ul>
</div>
  )
}
export { TopNavBar,SideNavBar}


      