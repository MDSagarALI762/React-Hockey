import Banner from "../../components/Banner";
import Clients from "../../components/Clients";
import Contact from "../../components/Contact";
import HockyClub from "../../components/HockyClub";
import Products from "../../components/Products";
import Program from "../../components/Program";
import SMBanner from "../../components/SMBanner";


const HomePage = () => {
    return (
        <div>
    <div className="hidden md:block  ">
    <Banner></Banner>
    </div>
      <div className="block md:hidden ">
      <SMBanner></SMBanner>
      </div>
      <HockyClub></HockyClub> 
      <Program></Program> 
      <Products></Products> 
      <Clients></Clients>  
      <Contact></Contact> 
        </div>
    );
};

export default HomePage;