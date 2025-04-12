
import email from '../assets/images/Frame (5).png'
import call from '../assets/images/Frame (4).png'
const Footer = () => {
    return (
        <div>
      <footer className="footer sm:footer-horizontal bg-[#131318]  p-10">
  <aside>
    <h2 className="text-white font-bold text-2xl mb-3">Get In Touch</h2>
    <p className="text-[#FFFFFF99]">
    Dit amet consectetur. Condimentum <br />  adipiscing aliquam turpis placerat dolor. Purus <br /> urna in sit nullam proin. 
    </p>
    <p className='flex gap-3 mt-2'>
        <img src={email} alt="" /> <span className='text-[#FFFFFF99]'>hockeys@support.com</span>
    </p>
    <p className='flex gap-3 mt-1'>
        <img src={call} alt="" /> <span className='text-[#FFFFFF99]'>(+62) 123-321-543</span>
    </p>
  </aside>
  <nav>
    <h6 className="text-white font-bold text-xl mb-4">Company</h6>
  <div className='flex flex-col gap-3'>
  <a className="link link-hover text-[#FFFFFF99]">About us</a>
    <a className="link link-hover text-[#FFFFFF99]">Leadership</a>
    <a className="link link-hover text-[#FFFFFF99]">Careers</a>
    <a className="link link-hover text-[#FFFFFF99]">News & Article</a>
    <a className="link link-hover text-[#FFFFFF99]">Legal Notice</a>
  </div>
  </nav>
  <nav>
  <h6 className="text-white font-bold text-xl mb-4">Support</h6>
  <div className='flex flex-col gap-3'>
    <a className="link link-hover text-[#FFFFFF99]">Help Center</a>
    <a className="link link-hover text-[#FFFFFF99]">FAQ</a>
    <a className="link link-hover text-[#FFFFFF99]">Ticeket Support</a>
    <a className="link link-hover text-[#FFFFFF99]">Contact Us</a>
 </div>
 </nav>
  <nav>
  <h6 className="text-white font-bold text-xl mb-4">Services</h6>
  <div className='flex flex-col gap-3'>
    <a className="link link-hover text-[#FFFFFF99]">Academy</a>
    <a className="link link-hover text-[#FFFFFF99]">Group Lesson</a>
    <a className="link link-hover text-[#FFFFFF99]">Privete Lesson</a>
    <a className="link link-hover text-[#FFFFFF99]">Hockeys for Kids</a>
    <a className="link link-hover text-[#FFFFFF99]">Hockeys for Adult</a>
 </div>
  </nav>
</footer>
        </div>
    );
};

export default Footer;