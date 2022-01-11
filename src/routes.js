import React from 'react';

//pages
const Dashboard = React.lazy(() => import('./pages/Dashboard'));
const Member = React.lazy(() => import('./pages/MembersPage'));
const Ticket = React.lazy(() => import('./pages/TicketPage'));
const SellTicketPage = React.lazy(() => import('./pages/SellTicketPage'));

const routes = [
  { path: 'dashboard', element: Dashboard },
  { path: 'member', element: Member },
  { path: 'ticket', element: Ticket },
  { path: 'ticket/Create', element: SellTicketPage }
]

export default routes;