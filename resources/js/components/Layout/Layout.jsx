import React, { Fragment } from 'react'
import Routers from "../../routes/Routers"
import Footer from '../Footer/Footer'
import NavBar from '../Header/NavBar'

export default function Layout() {
  return (
    <Fragment>
        <NavBar />
        <div>
            <Routers />
        </div>
        <Footer />
    </Fragment>
  )
}
