import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';
import banner from '../assets/images/banner.png';
import roundedImg1 from '../assets/images/4267cbc5-7a0b-4561-adf1-4c7b566f07bb (1).jpeg';
import roundedImg2 from '../assets/images/f3ef8cfa-2ae8-4f15-9033-aeb98788279c (1).png';
import './Banner.css'
const Banner = () => {
  return (
    <div className="w-11/12   mx-auto mt-8">
      <div className="carousel w-full rounded-xl">

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

             <div className="relative w-32 h-32 rounded-full bg-white shadow-lg flex items-center justify-center">
  {/* Circle items */}
  <div className="absolute w-10 h-10 bg-purple-500 text-white flex items-center justify-center rounded-full text-sm font-bold border-2 border-white" style={{ top: '10%', left: '50%', transform: 'translateX(-50%)' }}>
    Y
  </div>

  <div className="absolute w-10 h-10 rounded-full border-2 border-white" style={{ top: '30%', left: '20%' }}>
    <img src={roundedImg1} alt="Avatar 1" className="w-full h-full object-cover rounded-full" />
  </div>

  <div className="absolute w-10 h-10 bg-pink-500 text-white flex items-center justify-center rounded-full text-sm font-bold border-2 border-white" style={{ bottom: '15%', left: '20%' }}>
    M
  </div>

  <div className="absolute w-10 h-10 rounded-full border-2 border-white" style={{ top: '30%', right: '20%' }}>
    <img src={roundedImg2} alt="Avatar 2" className="w-full h-full object-cover rounded-full" />
  </div>

  <div className="absolute w-10 h-10 bg-gray-500 text-white flex items-center justify-center rounded-full text-sm font-bold border-2 border-white" style={{ bottom: '15%', right: '20%' }}>
    M
  </div>
</div>

            
          </div>

          {/* Text Box */}
          <div className="absolute bottom-6 right-6 bg-black bg-opacity-90 text-white p-6 rounded-xl max-w-sm z-10">
            <h1 className="text-xl font-bold mb-2">Meet all the heroes from the field</h1>
            <p className="text-sm text-white/70">
              Dit amet consectetur. Condimentum dignissim adipiscing aliquam turpis placerat dolor. Purus urna in sit nullam proin.
            </p>
          </div>
        </div>

        {/* Slide 2 */}
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

            <div className="relative w-32 h-32 rounded-full bg-white shadow-lg flex items-center justify-center">
  {/* Circle items */}
  <div className="absolute w-10 h-10 bg-purple-500 text-white flex items-center justify-center rounded-full text-sm font-bold border-2 border-white" style={{ top: '10%', left: '50%', transform: 'translateX(-50%)' }}>
    Y
  </div>

  <div className="absolute w-10 h-10 rounded-full border-2 border-white" style={{ top: '30%', left: '20%' }}>
    <img src={roundedImg1} alt="Avatar 1" className="w-full h-full object-cover rounded-full" />
  </div>

  <div className="absolute w-10 h-10 bg-pink-500 text-white flex items-center justify-center rounded-full text-sm font-bold border-2 border-white" style={{ bottom: '15%', left: '20%' }}>
    M
  </div>

  <div className="absolute w-10 h-10 rounded-full border-2 border-white" style={{ top: '30%', right: '20%' }}>
    <img src={roundedImg2} alt="Avatar 2" className="w-full h-full object-cover rounded-full" />
  </div>

  <div className="absolute w-10 h-10 bg-gray-500 text-white flex items-center justify-center rounded-full text-sm font-bold border-2 border-white" style={{ bottom: '15%', right: '20%' }}>
    M
  </div>
</div>

          </div>

          {/* Text Box */}
          <div className="absolute bottom-6 right-6 bg-black bg-opacity-90 text-white p-6 rounded-xl max-w-sm z-10">
            <h1 className="text-xl font-bold mb-2">Meet all the heroes from the field</h1>
            <p className="text-sm text-white/70">
              Dit amet consectetur. Condimentum dignissim adipiscing aliquam turpis placerat dolor. Purus urna in sit nullam proin.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Banner;
