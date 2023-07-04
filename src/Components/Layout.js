import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Layout = ({children}) => {
  return (
    <>
    <Header/>
    <div  className='content mw-100 bg-secondary mt-0'>
    {children}
    </div>
    <Footer/>
    </>
  )
}

export default Layout
