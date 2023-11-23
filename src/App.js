import {Routes,Route} from 'react-router-dom'
import './App.css';
//import './styles.css'
 import './css/main.css'
// import './css/components.css'
import { LandingPage,InstallationPage,ComponentsListingPage,
  Alert,Slider,TextUtils,Rating,Card,Grid,Image,Input,Lists,AvatarComponent,Badges,Button,
  // Snackbar,Navigation,
} from './components';
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
    name: "Badges",
    path: "components/badges",
    route: <Badges />,
  },
  {
    name: "Button",
    path: "components/button",
    route: <Button />,
  },
  {
    name: "Rating",
    path: "components/rating",
    route: <Rating />,
  },
  {
    name: "Card",
    path: "components/card",
    route: <Card />,
  },
  {
    name: "Grid",
    path: "components/grid",
    route: <Grid />,
  },
  {
    name: "Image",
    path: "components/image",
    route: <Image />,
  },
  {
    name: "Input",
    path: "components/input",
    route: <Input />,
  },
  {
    name: "Lists",
    path: "components/lists",
    route: <Lists />,
  },
  // {
  //   name: "Modal",
  //   path: "components/modal",
  //   route: <Modal />,
  // },
  // {
  //   name: "Navigation",
  //   path: "components/navigation",
  //   route: <Navigation />,
  // },
  {
    name: "Slider",
    path: "components/slider",
    route: <Slider />,
  },
  // {
  //   name: "Snackbar",
  //   path: "components/snackbar",
  //   route: <Snackbar />,
  // },
  {
    name: "TextUtils",
    path: "components/textutils",
    route: <TextUtils />,
  },
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