
import Img1 from '../assets/images/Group 1171275331.png'
import Img2 from '../assets/images/Group 1171275328.png'
import Img3 from '../assets/images/Group 1171275329.png'
import {  FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import { GiSnakeBite } from 'react-icons/gi';
const Contact = () => {
    return (
        <div className="w-11/12 mx-auto my-16">
          <div  className="border-t-1 text-center py-6 border-b-1 border-dashed border-[#13131833] my-12">
            <h2 className="text-3xl font-bold">Get In Touch</h2>
           <p className="pt-4 text-[#13131899]">Dit amet consectetur. Condimentum dignissim adipiscing aliquam turpis placerat <br /> dolor. Purus urna in sit nullam proin. </p>
            </div> 
            {/**Contact */} 
            <div className="md:grid grid-cols-3 gap-6">
                <div className="shadow-xl p-8 space-y-4 col-span-1">
<img src={Img1}></img>
<img src={Img2}></img>
<img src={Img3}></img>
                </div>
           <div className='col-span-2 space-y-3'>
           <div className='md:grid grid-cols-2 gap-6'>
           <div className='flex flex-col gap-3 '>
            <h2 className=" font-bold text-xl">Your Name</h2>
  <input type="text" className="bg-[#F8F8F8]  input border-0" placeholder="Enter your name" />
  <h2 className=" font-bold text-xl">Subject</h2>
  <input type="text" className="bg-[#F8F8F8] input border-0" placeholder="Enter your Subject" />
          </div>
          <div className='flex flex-col gap-3'>
            <h2 className=" font-bold text-xl">Your Email</h2>
  <input type="text" className="bg-[#F8F8F8] w-full input border-0" placeholder="Enter your email" />
  <h2 className=" font-bold text-xl">Phone Number</h2>
  <input type="text" className="bg-[#F8F8F8] input border-0" placeholder="Enter your phone number" />
          </div>
           </div>
           {/**textarea */}
           <fieldset className="fieldset">
  <legend className="fieldset-legend text-xl font-bold">Message</legend>
  <textarea className="textarea w-full bg-[#F8F8F8] h-[230px] border-0" placeholder="write your message"></textarea>
</fieldset>
<button className='w-full bg-[#FF4240] py-2 text-white font-semibold rounded-full'>Send Message</button>
            </div>     
                </div> 
{/**social media */}
                <div className='bg-[#13131808] mt-10 py-4 text-center rounded-xl'>
                    <h2 className='font-bold text-xl'>Social Media</h2>
<div className='flex gap-5 mt-6 text-xl justify-center'>
    <FaTwitter></FaTwitter>
    <FaFacebookF></FaFacebookF>
    <FaInstagram></FaInstagram>
    <GiSnakeBite></GiSnakeBite>
</div>
                </div>
        </div>
    );
};

export default Contact;