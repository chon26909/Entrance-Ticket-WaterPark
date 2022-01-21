import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Grid } from 'semantic-ui-react'

const TicketPage = () => {
    return (
        <div>
            <h1>จัดการบัตร</h1>
            <Grid columns={2} >
                <Grid.Column>
                    <Link to='create' >
                        {/* <Button color='twitter' size='big'> */}
                            ขายบัตร
                        {/* </Button> */}
                    </Link>
                </Grid.Column>

            </Grid>

        </div>
    )
}

export default TicketPage
