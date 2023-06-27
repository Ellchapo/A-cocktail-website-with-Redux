import React from 'react'
import Layout from './Layout'

const PageNotFound = () => {
  const logo = "https://i0.wp.com/learn.onemonth.com/wp-content/uploads/2017/08/1-10.png?w=845&ssl=1"
  return (
    <Layout>
      <div className='container d-flex'></div>
      <img src={logo} alt='logo'></img>
    </Layout>
  )
}

export default PageNotFound