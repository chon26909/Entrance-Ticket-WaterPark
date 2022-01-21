import React from 'react'
import SellTicketChart from '../components/Widget/SellTicketChart'
import SummaryDashBoard from '../components/Common/SummaryDashBoard';

const Dashboard = () => {

    return (
        <div>
          <h2>Dashboard</h2>
          <SummaryDashBoard/>
          <SellTicketChart/>
        </div>
    )
}

export default Dashboard
