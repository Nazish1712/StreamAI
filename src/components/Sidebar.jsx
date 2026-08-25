import React from 'react'
import { IconHome, IconBrandYoutube , IconVideoPlus} from '@tabler/icons-react'

const Sidebar = () => {

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

 

  return (
    //sidebar for md and lg screens
    <div className=" hidden md:flex px-1 py-12 font-lato bg-neutral-50 shadow-sm rounded-md mt-3 z-10">
     <div className="flex flex-col items-center justify-center gap-9">
      {sidebarLinksPrimary.map((link)=>(
       <div key={link.title} className="flex flex-col gap-0.5 items-center p-2 hover:bg-neutral-200 cursor-pointer rounded-md transition-all duration-200">
        {link.icon}
         <h2  className="text-sm">{link.title}</h2>
         </div>
        ))}
        </div>
    </div>
  )
}
 


export default Sidebar