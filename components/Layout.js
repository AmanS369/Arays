import React from 'react'
import Headers from './Headers'
import Footers from './Footers'
import Head from 'next/head';
const Layout = ({children,title}) => {
  return (
    <div>
        <Head>
            <title>{title}</title>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossOrigin="anonymous"/>
        </Head>
      <Headers/>
      {children}
      <Footers/>
    </div>
  )
}

export default Layout
