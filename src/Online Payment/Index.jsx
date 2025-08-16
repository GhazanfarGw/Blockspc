import React from 'react'
import Dashboard from "./Dashboard"
import Anywhere from "./Anywhere"
import Subr from "./Subr"
import About from "./About"
import Slider from "./Slider"
import Header from "../Home/header"
import Footer from "../Home/Footer"

export default function Index() {
  return (
    <>
    <Header/>
    <Dashboard/>
    <Anywhere/>
    <Slider/>
    <About/>
    <Subr/>
    <Footer/>
    </>
  )
}
