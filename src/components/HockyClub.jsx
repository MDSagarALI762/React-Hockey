

const HockyClub = () => {
    return (
       <div className="w-11/12 mx-auto">
         <div className="border-t-1 text-center py-6 border-b-1 border-dashed border-[#13131833] my-12">
          <div>
          <h2 className="text-3xl font-bold pb-4">Professional Hockeys Club</h2>  
          </div>
          <p className="text-[#13131899]">Dit amet consectetur. Condimentum dignissim adipiscing aliquam turpis 
            <br /> dolor. Purus urna in sit nullam proin. </p>
        </div>
        <div className="text-center  md:flex gap-4">
<div className="flex flex-col gap-3 justify-center items-center">
    {/* For TSX uncomment the commented types below */}
<div className="radial-progress text-[#FF4240]" style={{ "--value": 87 } /* as React.CSSProperties */ } aria-valuenow={87} role="progressbar">
  87%
</div>
<p className="font-semibold">Prayer Facility</p>
<p className="text-[#13131899]">Amet consectetur. Condimentum <br />dignissim adipiscing .</p>
</div>
<div className="flex flex-col gap-3 justify-center items-center">
    {/* For TSX uncomment the commented types below */}
<div className="radial-progress text-[#49D293]" style={{ "--value": 95 } /* as React.CSSProperties */ } aria-valuenow={95} role="progressbar">
  95%
</div>
<p className="font-semibold">Experienced Coach</p>
<p className="text-[#13131899]">Amet consectetur. Condimentum <br />dignissim adipiscing .</p>
</div>
<div className="flex flex-col gap-3 justify-center items-center">
    {/* For TSX uncomment the commented types below */}
<div className="radial-progress text-[#FFB546]" style={{ "--value": 90 } /* as React.CSSProperties */ } aria-valuenow={90} role="progressbar">
  90%
</div>
<p className="font-semibold">Senior Player</p>
<p className="text-[#13131899]">Amet consectetur. Condimentum <br />dignissim adipiscing .</p>
</div>
<div className="flex flex-col gap-3 justify-center items-center">
    {/* For TSX uncomment the commented types below */}
<div className="radial-progress text-[#4C8DF1]" style={{ "--value": 80 } /* as React.CSSProperties */ } aria-valuenow={80} role="progressbar">
  80%
</div>
<p className="font-semibold">Training Ground</p>
<p className="text-[#13131899]">Amet consectetur. Condimentum <br />dignissim adipiscing .</p>
</div>

        </div>
       </div>
    );
};

export default HockyClub;