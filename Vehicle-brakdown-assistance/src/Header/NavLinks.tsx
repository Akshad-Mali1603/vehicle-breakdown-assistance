
import { Link, useLocation } from "react-router-dom"

const NavLinks=()=>{
    const links=[
        { name: "Request Breakdown Assistance", url: "Request-Breakdown-Assistance" },
        { name: "View My Requests", url: "View-My-Requests" },
        { name: "Mechanic Offers", url: "Mechanic-Offers" },
        { name: "My Bookings", url: "My-Bookings" },
        { name: "About Us", url: "About-Us" }
    ]
    const location= useLocation();
    return <div className="flex gap-5 items-center h-full text-mine-shaft-200">
      {
        links.map((link, index)=><div className={`${location.pathname=="/"+link.url?"border-bright-sun-300 text-bright-sun-400 duration-300 hover:translate-y-2":"border-transparent"} flex border-t-[3px] hover:text-bright-sun-400 cursor-pointer items-center h-full`}>
        <Link key={index} to={`/${link.url}`}>{link.name}</Link>
         </div>)
      }
       </div>
}
export default NavLinks