import React from 'react'
import { IconFileDescription, IconMusic , IconBike, IconCircleDottedLetterD, IconDeviceTv, IconClock} from '@tabler/icons-react'

const SlideSidebar = () => {

  const sidebarLinks = [
    {
      title : "Subscription",
      icon: <IconFileDescription className="w-6 h-6"/>,
      content :
      [
      {
        heading : "Music",
        icon: <IconMusic className="w-4 h-4"/>,
        href : "/",
      },
      {
        heading : "Sports",
        icon: <IconBike className= "w-4 h-4"/>,
        href : "/"
      },
      {
        heading : " Dancing",
        icon: <IconCircleDottedLetterD className="w-4 h-4"/>,
        href : "/"
      },
      {
        heading : "Movies",
        icon: <IconDeviceTv className="w-4 h-4"/>,
        href : "/"
      },
    ]
    },
    {
      title : "Watch Later",
      icon: <IconClock className="w-6 h-6"/>,
      content :
      [
      {
        heading : "Music",
        icon: <IconMusic className="w-4 h-4"/>,
        href : "/",
      },
      {
        heading : "Sports",
        icon: <IconBike className="w-4 h-4"/>,
        href : "/"
      },
      {
        heading : "Dancing",
        icon: <IconCircleDottedLetterD className="w-4 h-4"/>,
        href : "/"
      },
      {
        heading : "Movies",
        icon: <IconDeviceTv className="w-4 h-4"/>,
        href : "/"
      },
    ]
    },
  ]
  

  return (
    <div className="h-dvh w-60 bg-neutral-50 shadow-sm z-50">
        <div className="ml-[6px] md:ml-[22px] mt-6 flex flex-col gap-6 mr-[6px] md:mr-[22px]">
           {sidebarLinks.map((section)=>(
             <div key={section.title}>
                <div className="flex gap-1.5 md:gap-2 items-center "> 
                  <div>{section.icon}</div>
                  <h2 className="font-lato text-base font-bold">{section.title}</h2>
                </div>
                

                <div className="flex flex-col gap-1 mt-3 pl-1 md:pl-0">
               {section.content.map((item)=>(
              <a key={item.heading} className="flex items-center justify-start gap-[9px] md:gap-3.5">
                    <div>{item.icon}</div>
                    <div className="font-lato text-sm">{item.heading}</div>
                  </a>
                   ))}
                   </div>
                   <div className="h-px w-full bg-neutral-300 mt-2"></div> 
             </div>
            ))}
        </div>
    </div>
  )
}

export default SlideSidebar