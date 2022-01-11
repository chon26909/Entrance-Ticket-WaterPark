import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import { Button, Grid } from 'semantic-ui-react'

import AdminLayout from '../layouts/AdminLayout';

import SellTicketPage from './SellTicketPage';


const TicketPage = () => {
    return (
        <div>
            <h1>จัดการบัตร</h1>
            <Grid columns={2} >
                <Grid.Column>
                    <Link to='create' >
                        <Button color='twitter' size='big'>
                            ขายบัตร
                        </Button>
                    </Link>
                </Grid.Column>

            </Grid>

        </div>
    )
}

export default TicketPage
