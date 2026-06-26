import { useGlobalContext } from "./Context";
import Hero from "./Hero";
import NavBar from "./NavBar";
import NavLinks from "./NavLinks";
import SideBar from "./SideBar";
import SubMenu from "./SubMenu";

const App = () => {
  const{isSideBarOpen}=useGlobalContext();
  return <main>
    <NavBar/>
  
    <Hero/>
    <SideBar/>
    <SubMenu/>
    
  </main>;
};
export default App;
