import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';
import banner from '../assets/images/banner.png';
import roundedImg1 from '../assets/images/4267cbc5-7a0b-4561-adf1-4c7b566f07bb (1).jpeg';
import roundedImg2 from '../assets/images/f3ef8cfa-2ae8-4f15-9033-aeb98788279c (1).png';


const SMBanner = () => {
    return (
        <div className='w-11/12 mx-auto'>
             <div className="carousel  w-full rounded-xl">
       
               {/* Slide 1 */}
               <div id="slide1" className="carousel-item w-full relative">
                 <img src={banner} alt="Banner"  />
       
                 {/* Controls and Avatars */}
                 <div className="absolute bottom-6 left-6 flex items-end space-x-4 z-10">
                   {/* Arrows */}
                   <div className="flex space-x-2">
                     <a href="#slide2" className="bg-black text-white p-2 rounded-full hover:bg-gray-700">
                       <FaChevronLeft />
                     </a>
                     <a href="#slide2" className="bg-black text-white p-2 rounded-full hover:bg-gray-700">
                       <FaChevronRight />
                     </a>
                   </div>
       
                   {/* Avatars */}
                   <div className="bg-white rounded-full p-2 flex items-center -space-x-2 shadow-lg">
                     <img src={roundedImg1} alt="Avatar 1" className="w-10 h-10 rounded-full border-2 border-white" />
                     <div className="w-10 h-10 bg-purple-500 text-white flex items-center justify-center rounded-full text-2xl font-bold border-2 border-white">
                       Y
                     </div>
                     <img src={roundedImg2} alt="Avatar 2" className="w-10 h-10 rounded-full border-2 border-white" />
                     <div className="w-10 h-10 bg-pink-500 text-white flex items-center justify-center rounded-full text-2xl font-bold border-2 border-white">
                       M
                     </div>
                     <div className="w-10 h-10 bg-gray-500 text-white flex items-center justify-center rounded-full text-2xl font-bold border-2 border-white">
                       M
                     </div>
                   </div>
                 </div>
       </div>
       {/**slider 2 */}
       <div id="slide2" className="carousel-item w-full relative">
                 <img src={banner} alt="Banner"  />
       
                 {/* Controls and Avatars */}
                 <div className="absolute bottom-6 left-6 flex items-end space-x-4 z-10">
                   <div className="flex space-x-2">
                     <a href="#slide1" className="bg-black text-white p-2 rounded-full hover:bg-gray-700">
                       <FaChevronLeft />
                     </a>
                     <a href="#slide1" className="bg-black text-white p-2 rounded-full hover:bg-gray-700">
                       <FaChevronRight />
                     </a>
                   </div>
       
                   <div className="bg-white rounded-full p-2 flex items-center -space-x-2 shadow-lg">
                     <img src={roundedImg1} alt="Avatar 1" className="w-10 h-10 rounded-full border-2 border-white" />
                     <div className="w-10 h-10 bg-purple-500 text-white flex items-center justify-center rounded-full text-2xl font-bold border-2 border-white">
                       Y
                     </div>
                     <img src={roundedImg2} alt="Avatar 2" className="w-10 h-10 rounded-full border-2 border-white" />
                     <div className="w-10 h-10 bg-pink-500 text-white flex items-center justify-center rounded-full text-2xl font-bold border-2 border-white">
                       M
                     </div>
                     <div className="w-10 h-10 bg-gray-500 text-white flex items-center justify-center rounded-full text-2xl font-bold border-2 border-white">
                       M
                     </div>
                   </div>
                 </div>
       
       </div>

       </div>
                 {/* Text Box */}
                 <div className="mt-6 bottom-6 right-6 bg-black bg-opacity-90 text-white p-6 rounded-xl max-w-sm z-10">
                   <h1 className="text-xl font-bold mb-2">Meet all the heroes from the field</h1>
                   <p className="text-sm text-white/70">
                     Dit amet consectetur. Condimentum dignissim adipiscing aliquam turpis placerat dolor. Purus urna in sit nullam proin.
                   </p>
                 </div>
               
            
        </div>

    );
};

export default SMBanner;