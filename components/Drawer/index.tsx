import React from 'react'
import { Props } from './props'
import headerNavLinks from '@/data/headerNavLinks'
import Link from '../Link'

export const Drawer: React.FC<Props> = (props) => {
  const { status, setNavShow } = props

  const onToggleNav = () => {
    if (status) {
      document.body.style.overflow = 'auto'
    } else {
      // Prevent scrolling
      document.body.style.overflow = 'hidden'
    }
    return !status
  }

  return (
    <div className="drawer">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <label htmlFor="my-drawer" className="btn drawer-button">
          <div className="relative group">
            <div className="">
              <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
                <div className="bg-white h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:rotate-[42deg]"></div>
                <div className="bg-white h-[2px] w-1/2 rounded transform transition-all duration-300 group-focus:-translate-x-10"></div>
                <div className="bg-white h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:-rotate-[42deg]"></div>
              </div>
            </div>
          </div>
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
          {/* Sidebar content here */}
          {headerNavLinks.map((link) => (
            <div key={link.title} className="px-12 py-4">
              <Link
                href={link.href}
                className="text-2xl font-bold tracking-widest text-gray-900 dark:text-gray-100"
              >
                {link?.title}
              </Link>
            </div>
          ))}
        </ul>
      </div>
    </div>
  )
}
