import React from 'react'
import { IconHome, IconBrandYoutube , IconVideoPlus} from '@tabler/icons-react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Sidebar = () => {

  const isSidebarOpen = useSelector((store) => store.app.isSidebarOpen)

 const sidebarLinksPrimary = [
  {
    title : "Home",
    icon : <IconHome className="h-7 w-7"/>,
    href : "/"
  },
  {
    title : "Shorts",
    icon : <IconVideoPlus className="h-7 w-7"/>,
    href : "/"
  },
  {
    title : "Videos",
    icon : <IconBrandYoutube className="h-6 w-6"/>,
    href : "/"
  },
]

  
if(!isSidebarOpen) return null;

  return (
    //sidebar for md and lg screens
    <div className=" hidden md:flex px-1 py-11 font-lato bg-neutral-50 shadow-sm rounded-md mt-5 z-10 sticky top-[80px]">
     <div className="flex flex-col items-center justify-center gap-9">
      {sidebarLinksPrimary.map((link)=>(
       <Link to={link.href} key={link.title} className="flex flex-col gap-0.5 items-center p-2 hover:bg-neutral-200 cursor-pointer rounded-md transition-all duration-200">
        {link.icon}
         <h2  className="text-sm">{link.title}</h2>
         </Link>
        ))}
        </div>
    </div>
  )
}
 


export default Sidebar