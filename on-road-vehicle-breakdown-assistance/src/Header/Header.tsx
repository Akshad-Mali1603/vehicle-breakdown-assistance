import { Avatar, Indicator } from "@mantine/core";
import { IconBell, IconCarGarage, IconSettings } from "@tabler/icons-react";
import NavLinks from "./NavLinks";

const Header = () => {
    return (
        <div className="w-full bg-black text-white px-6 h-20 flex justify-between items-center">

            {/* Logo + Title */}
            <div className="flex gap-2 items-center text-bright-sun-400">
                <IconCarGarage className="w-12 h-12" stroke={2.5} />
                <div className="flex flex-col leading-tight">
                    <div className="text-3xl font-semibold">ORVBA</div>
                    <div className="text-sm">On-Road Vehicle Breakdown Assistance</div>
                </div>
            </div>

            {/* Nav Links */}
            <NavLinks />

            {/* Right side */}
            <div className="flex gap-3 items-center">
                {/* User */}
                <div className="flex gap-2 items-center">
                    <span>Akshad Mali</span>
                    <div className="flex overflow-hidden justify-center items-center bg-mine-shaft-900 w-10 h-10 rounded-full cursor-pointer hover:bg-mine-shaft-800">
                        <Avatar
                            src="avatar.png"
                            alt="it's me"
                            radius="xl"
                            className="object-cover w-full h-full"
                        />
                    </div>

                </div>

                {/* Settings */}
                <div className="bg-mine-shaft-900 p-2 rounded-full cursor-pointer hover:bg-mine-shaft-800">
                    <IconSettings stroke={1.5} />
                </div>

                {/* Notifications */}
                <Indicator color="yellow" offset={5} processing size={9}>
                    <div className="bg-mine-shaft-900 p-2 rounded-full cursor-pointer hover:bg-mine-shaft-800">
                        <IconBell stroke={1.5} />
                    </div>
                </Indicator>
            </div>
        </div>
    );
};

export default Header;
