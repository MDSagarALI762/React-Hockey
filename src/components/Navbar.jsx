import { CiSearch } from "react-icons/ci";


const Navbar = () => {
    return (
<div className="navbar">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content text-[16px] font-semibold
        bg-base-100 rounded-box z-1 mt-3 h-80 space-y-2 w-[375px] p-2 shadow">
         <li><a className="text-[16px] font-semibold">Home</a></li>
      <li><a className="text-[16px] font-semibold">About</a>
      </li>
      <li><a className="text-[16px] font-semibold">Page</a></li>
      <li><a className="text-[16px] font-semibold">Blog</a></li>
      <li><a className="text-[16px] font-semibold">Contact</a></li>
      </ul>
    </div>
    <a className="text-xl md:text-4xl font-bold">Hockey's</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a className="text-[20px] font-semibold">Home</a></li>
      <li><a className="text-[20px] font-semibold">About</a>
      </li>
      <li><a className="text-[20px] font-semibold">Page</a></li>
      <li><a className="text-[20px] font-semibold">Blog</a></li>
      <li><a className="text-[20px] font-semibold">Contact</a></li>
    </ul>
  </div>
  <div className="navbar-end flex gap-2 md:gap-6">
    <div  className="relative flex items-center">
    <input type="text" className="w-20 md:w-50"/>
    <CiSearch className="absolute right-0 ml-[150px] text-2xl text-gray-500 cursor-pointer
    "></CiSearch>
    </div>
    <button className="btn flex bg-[#FF4240] font-semibold rounded
     md:py-2 
    md:px-5 md:text-[20px] text-white">
      Get Ticket</button>
  </div>
</div>
    );
};

export default Navbar;