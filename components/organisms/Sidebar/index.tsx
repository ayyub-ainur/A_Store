import React from 'react'
import Profile from './Profile'
import Footer from './Footer'
import MenuItem from './MenuItem'

const Sidebar = () => {
  return (
    <section className="sidebar">
      <div className="content pt-50 pb-30 ps-30">
        <Profile />
        <div className="menus">
            <MenuItem title='Overview' active />
            <MenuItem title='Transactions' />
            <MenuItem title='Messages' />
            <MenuItem title='Card' />
            <MenuItem title='Rewards' />
            <MenuItem title='Settings' />
            <MenuItem title='Log Out' />
        </div>
        <Footer />
      </div>
    </section>
  )
}

export default Sidebar
