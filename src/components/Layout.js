import React from 'react'

const Layout = ({ children , className }) => {
  return (
    <div className={` w-full h-full inline-block z-0 py-24 px-32  ${className}`}>
        {children}
    </div>
  )
}

export default Layout