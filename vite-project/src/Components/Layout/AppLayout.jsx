import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet, useNavigation } from 'react-router-dom'
import Loading from './Loading'

const AppLayout = () => {
  const navigation = useNavigation();
  console.log(navigation)

  if (navigation.state === "loading") return <Loading/>
  
  return (
    <div>
     <Header/>

     <br /><br /><br /><br />
      <Outlet/>
      <br />
      <Footer/>
    </div>
  )
}

export default AppLayout
