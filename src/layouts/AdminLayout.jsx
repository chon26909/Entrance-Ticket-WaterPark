import React from 'react'
import { Outlet, Route, Routes } from 'react-router-dom';

//components

import Sidebar from '../components/Common/Sidebar';



const AdminLayout = () => {
    return (
        <>
            <Sidebar activeSidebar={false} />
            <div style={{ marginLeft: '220px' }}>
                <Outlet/>
            </div>
        </>

    )
}

export default AdminLayout
