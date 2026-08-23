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

const sidebarLinksSecondary = [
  {
    title : "Subscription",
    content :
    [
    {
      heading : "Music",
      href : "/",
    },
    {
      heading : "Sports",
      href : "/"
    },
    {
      heading : "Gaming",
      href : "/"
    },
    {
      heading : "Movies",
      href : "/"
    },
  ]
  },
  {
    title : "Watch Later",
    content :
    [
    {
      heading : "Music",
      href : "/",
    },
    {
      heading : "Sports",
      href : "/"
    },
    {
      heading : "Gaming",
      href : "/"
    },
    {
      heading : "Movies",
      href : "/"
    },
  ]
  },
]

  return (
    //sidebar for md and lg screens
    <div className=" hidden md:flex px-3 py-6 font-lato bg-neutral-50 shadow-sm rounded-md mt-2">
     <div className="flex flex-col items-center justify-center gap-9">
      {sidebarLinksPrimary.map((link)=>(
       <div className="flex flex-col gap-0.5 items-center">
        {link.icon}
         <h2 key={link.title} className="text-sm">{link.title}</h2>
         </div>
        ))}
        </div>
    </div>
  )
}

export default Sidebar