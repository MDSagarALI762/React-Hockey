import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";



const Root = () => {
    return (
        <div>
            <header className="w-11/12 mx-auto">
<Navbar></Navbar>

            </header>
            <main>
<Outlet></Outlet>
            </main>
            <footer>
<Footer></Footer>
            </footer>
        </div>
    );
};

export default Root;