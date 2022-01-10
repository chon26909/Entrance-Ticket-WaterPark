import React, { useState } from 'react'
import { Outlet } from 'react-router-dom';

//components
import Sidebar from '../components/Common/Sidebar';

const AdminLayout = () => {

    const [activeSidebar, SetActiveSidebar] = useState(true);

    return (
        <div>
            <Sidebar activeSidebar={activeSidebar} />
            <div style={{ marginLeft: activeSidebar ? '230px' : '0', padding: '1.5rem 2rem' }}>
                <Outlet />
            </div>
        </div>

    )
}

export default AdminLayout
