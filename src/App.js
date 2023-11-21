import {Routes,Route} from 'react-router-dom'
import './App.css';
import './styles.css'

import { LandingPage,AvatarComponent,InstallationPage } from './components';
import NavBar from './pages/components/navbar';



function App() {

  const componentRoutes = [
    // {
    //   name: "Alert",
    //   path: "/alert",
    //   route: <Alert />,
    // },
    {
      name: "Avatar",
      path: "components/avatar",
      route: <AvatarComponent />,
    },
    // {
    //   name: "Badge",
    //   path: "/badge",
    //   route: <Badge />,
    // },
    // {
    //   name: "Button",
    //   path: "/button",
    //   route: <Button />,
    // },
    // {
    //   name: "Card",
    //   path: "/card",
    //   route: <Card />,
    // },
    // {
    //   name: "Heading",
    //   path: "/heading",
    //   route: <Heading />,
    // },
    // {
    //   name: "Image",
    //   path: "/image",
    //   route: <Image />,
    // },
    // {
    //   name: "Text",
    //   path: "/text",
    //   route: <Text />,
    // },
  ];

  const pathRoutes = [
    {
      name: "Home",
      path: "/",
      route: <LandingPage />,
    },
    {
      name: "Installation",
      path: "/installation",
      route: <InstallationPage />,
    },
    // {
    //   name: "Components",
    //   path: "/components",
    //   route: <Components />,
    // },
    ...componentRoutes,
  ];

  

  return (
    <div className="App">
      <NavBar/>
      <Routes>
      {pathRoutes.map(({ path, route }, index) => (
            <Route path={path} element={route} key={index}></Route>
          ))}
      </Routes>
      
    </div>
  );
}

export default App;
