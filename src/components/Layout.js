import React from 'react'

const Layout = ({ children , className }) => {
  return (
    <div className={` bg-light w-full h-full inline-block z-0 p-32 ${className}`}>
        {children}
    </div>
  )
}

export default Layout