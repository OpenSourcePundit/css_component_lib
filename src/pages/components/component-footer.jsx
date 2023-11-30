import React from 'react'
import { useLocation,useNavigate } from 'react-router-dom'
import { componentRoutes } from '../../App';

const ComponentFooter = () =>{

    const navigate = useNavigate();
    const currentComponent = String(useLocation().pathname.split('/')[2])
    const mapped = componentRoutes.map(component=>component.name.toLowerCase())
    const currentIndexOfElement = componentRoutes.map(component=>component.name.toLowerCase()).indexOf(currentComponent)
    // console.log("current","cur")
    // console.log("curr:",String(currentComponent),"componentRoutes//mapped:",mapped,"currentindexofelement:", currentIndexOfElement)
    const previousElement = currentIndexOfElement===0?{name:"Components List",path:'components'}:componentRoutes[currentIndexOfElement-1]
    const nextElement = currentIndexOfElement===14?componentRoutes[0]:componentRoutes[currentIndexOfElement+1]


    return(
        <footer className="page-footer">
            <div className="foot-item a" onClick={()=>navigate(`/${previousElement.path}`)}>
              <i className="far fa-hand-point-left"></i>{previousElement.name}
            </div>
            <div className="foot-item a" onClick={()=>navigate(`/${nextElement.path}`)}>
              {nextElement.name}<i className="far fa-hand-point-right"></i>
            </div>
          </footer>
    )
}
export {ComponentFooter}