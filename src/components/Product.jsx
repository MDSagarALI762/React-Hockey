import { FaStar } from "react-icons/fa";
import Frame1 from '../assets/images/Frame.png'
import Frame2 from '../assets/images/Frame (1).png'
import Frame3 from '../assets/images/Frame (2).png'

const Product = ({product}) => {
   const { image, rating, title, description, price} = product;
    return (
        <div className="shadow-sm md:grid grid-cols-3 gap-4 p-4">
            <div className="col-span-1 md:flex   items-center">
                <img className="w-full " src={image}></img>
            </div>
           <div className="col-span-2 flex flex-col gap-2 mt-4 md:mt-0">
            <div className="flex items-center gap-4">
                <div className="flex gap-1 items-center"><FaStar className="text-[#F99808] text-xl"></FaStar>
                <p>{rating}.00</p></div>
                <div className="flex items-center gap-1">
                    <img src={Frame1} alt="" />
                    <p>20</p>
                </div>
                <div className="flex items-center gap-1">
                    <img src={Frame2} alt="" />
                    <p>200</p>
                </div>
            </div>
            <h2 className="text-xl font-bold">{title}</h2>
            <p className="text-[#13131899] ">{description}</p>
           <div className="flex items-center gap-4">
           <p className="text-[#FF4240]">Price-${price}</p>
            <div className="flex items-center gap-1">
            <img src={Frame3} alt="" />
            <p className="text-[#13131899]">Delivery Fee : Free</p>
            </div>
           </div>
           </div>
        </div>
    );
};

export default Product;