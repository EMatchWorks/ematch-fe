import React from 'react'
import { Outlet } from 'react-router-dom'
import MainLayout from '../../layouts/MainLayout'

const Main = () => {
  return (
    <>
        <MainLayout />
        <Outlet />
    </>
  )
}

export default Main