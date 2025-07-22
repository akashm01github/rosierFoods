import React from 'react'
import Nav from './components/Nav'
import ResponsiveFooter from './components/ResponsiveFooter'
import MainRoutes from './routes/MainRoutes'
import ScrollToTop from './components/ScrollToTop.JSX'



const App = () => {
  return (
    <div>
      <Nav/>
      <ScrollToTop />
      <MainRoutes/>
      <ResponsiveFooter/>
    </div>
  )
}

export default App