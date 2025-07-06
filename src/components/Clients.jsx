import img1 from '../assets/images/Rectangle 4 (6).png'

const Clients = () => {
    return (
       <div className="w-11/12 mx-auto mt-16">
         <div  className="border-t-1 text-center py-6 border-b-1 border-dashed border-[#13131833] my-12">
            <h2 className="text-3xl font-bold">Clients Question</h2>
           <p className="pt-4 text-[#13131899]">Dit amet consectetur. Condimentum dignissim adipiscing aliquam turpis placerat <br /> dolor. Purus urna in sit nullam proin. </p>
            </div>
            <div className="mt-10">
            <div className="hero shadow-sm ">
  <div className="hero-content flex-col md:flex-row">
    <img
      src={img1}
      className=" w-[370px] rounded-lg shadow-2xl " />
    {/**According */}
    <div>
    <div className="collapse collapse-plus bg-base-100 border border-base-300">
  <input type="radio" name="my-accordion-3" defaultChecked />
  <div className="collapse-title font-bold text-xl">Our Equipment</div>
  <div className="collapse-content text-sm text-[#13131899] ">Dolor sit amet consectetur. Ut urna diam quis sagittis. Elit elit enim <br /> sagittis turpis in magna.</div>
</div>
<div className="collapse collapse-plus bg-base-100 border border-base-300">
  <input type="radio" name="my-accordion-3" />
  <div className="collapse-title font-bold text-xl">Hockey Training</div>
  <div className="collapse-content text-sm text-[#13131899] ">Dolor sit amet consectetur. Ut urna diam quis sagittis. Elit elit enim <br /> sagittis turpis in magna.</div>
</div>
<div className="collapse collapse-plus bg-base-100 border border-base-300">
  <input type="radio" name="my-accordion-3" />
  <div className="collapse-title font-bold text-xl">Private Lessons</div>
  <div className="collapse-content text-sm text-[#13131899] ">Dolor sit amet consectetur. Ut urna diam quis sagittis. Elit elit enim <br /> sagittis turpis in magna.</div>
</div>
<div className="collapse collapse-plus bg-base-100 border border-base-300">
  <input type="radio" name="my-accordion-3" />
  <div className="collapse-title font-bold text-xl">Ski Touring</div>
  <div className="collapse-content text-sm text-[#13131899] ">Dolor sit amet consectetur. Ut urna diam quis sagittis. Elit elit enim <br /> sagittis turpis in magna.</div>
</div>
<div className="collapse collapse-plus bg-base-100 border border-base-300">
  <input type="radio" name="my-accordion-3" />
  <div className="collapse-title font-bold text-xl">Booking</div>
  <div className="collapse-content text-sm text-[#13131899] ">Dolor sit amet consectetur. Ut urna diam quis sagittis. Elit elit enim <br /> sagittis turpis in magna.</div>
</div>
<div className="collapse collapse-plus bg-base-100 border border-base-300">
  <input type="radio" name="my-accordion-3" />
  <div className="collapse-title font-bold text-xl">Pricings</div>
  <div className="collapse-content text-sm text-[#13131899] ">Dolor sit amet consectetur. Ut urna diam quis sagittis. Elit elit enim <br /> sagittis turpis in magna.</div>
</div>
      </div>
  </div>
</div>
            </div>
       </div>
    );
};

export default Clients;