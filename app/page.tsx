import SidebarDemo, { CustomSidebar } from '@/components/CustomSidebar'
import Dashboard from '@/components/Dashboard'


import React from 'react'

async function page() {

  return (

    <div className='bg-gray-200 w-full text-black flex '>
      <CustomSidebar>
        <Dashboard />
      </CustomSidebar>
    </div>
  )
}

export default page
