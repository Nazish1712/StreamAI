import React from 'react'
import { 
  IconFileDescription, 
  IconMusic, 
  IconBike, 
  IconCircleDottedLetterD, 
  IconDeviceTv, 
  IconClock, 
  IconHome, 
  IconVideoPlus, 
  IconBrandYoutube 
} from '@tabler/icons-react'
import { useSelector, useDispatch } from 'react-redux'
import { motion, AnimatePresence } from 'framer-motion'
import { toggleMenu } from '../utils/appSlice'

const SlideSidebar = () => {
  const dispatch = useDispatch()
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen)

  const sidebarLinksPrimary = [
    {
      title: "Home",
      icon: <IconHome className="h-6 w-6" />,
      href: "/"
    },
    {
      title: "Shorts",
      icon: <IconVideoPlus className="h-6 w-6" />,
      href: "/"
    },
    {
      title: "Videos",
      icon: <IconBrandYoutube className="h-5 w-5" />,
      href: "/"
    },
  ]

  const sidebarLinks = [
    {
      title: "Subscription",
      icon: <IconFileDescription className="w-6 h-6" />,
      content: [
        {
          heading: "Music",
          icon: <IconMusic className="w-4 h-4" />,
          href: "/",
        },
        {
          heading: "Sports",
          icon: <IconBike className="w-4 h-4" />,
          href: "/"
        },
        {
          heading: "Dancing",
          icon: <IconCircleDottedLetterD className="w-4 h-4" />,
          href: "/"
        },
        {
          heading: "Movies",
          icon: <IconDeviceTv className="w-4 h-4" />,
          href: "/"
        },
      ]
    },
    {
      title: "Watch Later",
      icon: <IconClock className="w-6 h-6" />,
      content: [
        {
          heading: "Music",
          icon: <IconMusic className="w-4 h-4" />,
          href: "/",
        },
        {
          heading: "Sports",
          icon: <IconBike className="w-4 h-4" />,
          href: "/"
        },
        {
          heading: "Dancing",
          icon: <IconCircleDottedLetterD className="w-4 h-4" />,
          href: "/"
        },
        {
          heading: "Movies",
          icon: <IconDeviceTv className="w-4 h-4" />,
          href: "/"
        },
      ]
    },
  ]

  return (
    <AnimatePresence>
      {isMenuOpen && (
        <>
          {/* Dark Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            onClick={() => dispatch(toggleMenu())}
            className="fixed inset-0 bg-black/50 backdrop-blur-[1.5px] z-[998] cursor-pointer"
          />

          {/* Sliding Drawer */}
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{
              duration: 0.3,
              ease: "easeInOut"
            }}
            className="fixed left-0 top-0 h-dvh w-60 bg-neutral-50 shadow-2xl z-[999] overflow-y-auto"
          >
            <div className="ml-[6px] md:ml-[22px] mt-6 flex flex-col gap-6 mr-[6px] md:mr-[22px] pb-8">
              {/* Primary Navigation */}
              <div className="flex flex-col gap-3">
                {sidebarLinksPrimary.map((link) => (
                  <a
                    key={link.title}
                    href={link.href}
                    className="flex gap-1.5 md:gap-2 items-center cursor-pointer hover:bg-neutral-200 rounded-sm transition-all duration-200 p-1"
                  >
                    <div>{link.icon}</div>
                    <h2 className="font-lato font-bold text-base text-gray-900">{link.title}</h2>
                  </a>
                ))}
              </div>

              {/* Categorized Sections */}
              {sidebarLinks.map((section) => (
                <div key={section.title}>
                  <div className="flex gap-1.5 md:gap-2 items-center cursor-pointer hover:bg-neutral-200 rounded-sm transition-all duration-200 p-1">
                    <div>{section.icon}</div>
                    <h2 className="font-lato text-base font-bold text-gray-900">{section.title}</h2>
                  </div>

                  <div className="flex flex-col gap-1 mt-3 pl-1 md:pl-0">
                    {section.content.map((item) => (
                      <a
                        key={item.heading}
                        href={item.href}
                        className="flex items-center justify-start gap-[9px] md:gap-3.5 cursor-pointer hover:bg-neutral-200 rounded-sm transition-all duration-200 p-1 text-gray-800"
                      >
                        <div>{item.icon}</div>
                        <div className="font-lato text-sm">{item.heading}</div>
                      </a>
                    ))}
                  </div>

                  <div className="h-px w-full bg-neutral-300 mt-2"></div>
                </div>
              ))}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default SlideSidebar

