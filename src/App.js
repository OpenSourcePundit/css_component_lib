import {Routes,Route} from 'react-router-dom'
import './App.css';
//import './styles.css'
import './css/main.css'
import { LandingPage,AvatarComponent,InstallationPage,ComponentsListingPage,Alert,
  Badge,Button } from './components';
import NavBar from './pages/components/navbar';
import Footer from './pages/components/footer';



const componentRoutes = [
  {
    name: "Alert",
    path: "components/alert",
    route: <Alert />,
  },
  {
    name: "Avatar",
    path: "components/avatar",
    route: <AvatarComponent />,
  },
  {
    name: "Badge",
    path: "components/badge",
    route: <Badge />,
  },
  {
    name: "Button",
    path: "components/button",
    route: <Button />,
  },
  // {
  //   name: "Card",
  //   path: "components/card",
  //   route: <Card />,
  // },
  // {
  //   name: "Heading",
  //   path: "components/heading",
  //   route: <Heading />,
  // },
  // {
  //   name: "Image",
  //   path: "components/image",
  //   route: <Image />,
  // },
  // {
  //   name: "Text",
  //   path: "components/text",
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
  {
    name: "Components",
    path: "/components",
    route: <ComponentsListingPage />,
  },
  ...componentRoutes,
];

function App() {

  

  

  return (
    <div className="App">
      <NavBar/>
      <Routes>
      {pathRoutes.map(({ path, route }, index) => (
            <Route path={path} element={route} key={index}></Route>
          ))}
      </Routes>
      
      <Footer/>
    </div>
  );
}

export default App;
export {componentRoutes}