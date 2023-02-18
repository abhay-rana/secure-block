import React from 'react'
import { useLocation } from 'wouter'

import HomeHeader from 'components/home/home-header'
import DashboardHeader from 'components/dashboard/dashboard-header'

const Header = () => {
    const [location, setLocation] = useLocation()
    return <>{location === '/' ? <HomeHeader /> : <DashboardHeader />}</>
}

export default Header
