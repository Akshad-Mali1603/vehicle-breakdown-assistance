import { Avatar, Indicator } from "@mantine/core";
import { IconBell, IconCarGarage, IconSettings } from "@tabler/icons-react";
import { NavLink } from "react-router-dom";
import NavLinks from "./NavLinks";

const Header = () => {
    return <div className="w-full bg-black text-white px-6 h-20 flex justify-between items-center   ">

        <div className="flex gap-2 items-center text-bright-sun-400">
            <IconCarGarage className="w-12 h-12" stroke={2.5} />
            <div className="flex flex-col leading-tight">
                <div className="text-3xl font-semibold ">ORVBA</div>
                <div className="text-sm "> On-Road Vehicle Breakdown Assistance</div>
            </div>
        </div>

        <div>{NavLinks()}</div>
       
        <div className="flex gap-3 items-center">
          
            <div className="flex gap-1 items-center" >
                <div>Akshad Mali</div>
                <Avatar src="avatar.png" alt="it's me" />
            </div>
            <div className="bg-mine-shaft-900 p-1.5 rounded-full">
            <IconSettings stroke={1.5}/>
            </div>
            <div className="bg-mine-shaft-900 p-1.5 rounded-full">
            <Indicator color="bright-sun.4" offset={5} processing size={9}>
            <IconBell stroke={1.5}/>
            </Indicator>
            </div>
        </div>
    </div>

}
export default Header;