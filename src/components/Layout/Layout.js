import React from 'react'
import Header from './Header'

const Layout = ({ children }) => {
  return (
    <div className='flex flex-col h-[100vh]'>
        <Header />
        <div className='h-[80%]'>
            {children}
        </div>
    </div>
  )
}

export default Layout