import { Button } from "@mantine/core";
import { IconCheck, IconMapPin, IconNavigationCog, IconTools } from "@tabler/icons-react";

const IndexPage=()=>{
    return(
        <div className="bg-mine-shaft-950">
      {/* Left section */}
      <div className="flex items-center justify-between px-20 py-16">
        <div className="flex flex-col w-[50%] gap-10">
          <h1 className="text-5xl leading-tight font-extrabold text-mine-shaft-100 [&>span]:text-bright-sun-400" >
            On-Road <span>Vehicle</span> <br />
            <span>Breakdown</span>Assistance
          </h1>
          <p className="text-lg text-mine-shaft-200">
            Stranded on the road? Get reliable help in minutes. Connect with nearby mechanics or request towing assistance — anytime, anywhere.
          </p>
          <div className="flex gap-10 items-center">
            <button className="bg-bright-sun-400 cursor-pointer p-3 rounded-lg hover:bg-mine-shaft-200 font-semibold">
              Request Assistance
            </button>
            <button className="bg-bright-sun-400 cursor-pointer p-3 rounded-lg hover:bg-mine-shaft-200 font-semibold ">
              Learn More
            </button>
          </div>
        </div>
{/* Right section */}
        <div className="w-[45%]">
          <img
            src="/MainImageVehicle.png"
            alt="Breakdown illustration"
          />
        </div>
      </div>

      {/* How It Works Section */}
      <div className="bg-mine-shaft-900 flex items-center flex-col gap-5  p-20">
        <h2 className="text-3xl font-bold text-mine-shaft-100 pb-5">How It Works ?</h2>
        <div className="flex gap-40 justify-center items-center px-28">
          {/* Step 1 */}
          <div className="justify-between px-20 gap-3 flex-col">
            <IconMapPin size={55} className="flex text-bright-sun-400 justify-center "/>
            <h3 className="text-xl font-semibold text-mine-shaft-100">Pin Your Location</h3>
            <p className="text-mine-shaft-400 leading-tight text-lg">
              Let us detect your location or manually share it for faster help.
            </p>
          </div>

          {/* Step 2 */}
          <div className="justify-between px-20 gap-3 flex-col">
            <IconTools size={55} className="flex text-bright-sun-400 justify-center" />
            <h3 className="text-xl font-semibold text-mine-shaft-100">Choose a Mechanic</h3>
            <p className="text-mine-shaft-400 leading-tight text-lg">
              Receive offers from nearby providers and pick the best one.
            </p>
          </div>

          {/* Step 3 */}
          <div className="justify-between px-20 gap-3 flex-col">
            <IconCheck size={55} className="flex text-bright-sun-400 justify-center" />
            <h3 className="text-xl font-semibold text-mine-shaft-100">Get Back on Road</h3>
            <p className="text-mine-shaft-400 leading-tight text-lg ">
              The mechanic arrives and fixes the issue or provides necessary towing help.
            </p>
          </div>
        </div>
      </div>
    </div>
        
        
    );
}
export default IndexPage;