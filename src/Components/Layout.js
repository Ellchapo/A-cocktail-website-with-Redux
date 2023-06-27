import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Layout = ({children}) => {
  return (
    <>
    <Header/>
    <div  className='content mw-100'>
    {children}
    </div>
    <Footer/>
    </>
  )
}

export default Layout