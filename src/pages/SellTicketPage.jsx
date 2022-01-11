import React from "react";
import { Link } from "react-router-dom";
import { Card, Grid, Image } from "semantic-ui-react";

const SellTicketPage = () => {
    return (
        <div>
            <h1>ขายบัตร</h1>
            <Grid relaxed columns={3} >
                <Grid.Column>
                    <Card href="create/day" >
                        <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
                        <h2>บัตรรายวัน</h2>
                    </Card>
                </Grid.Column>
                <Grid.Column>
                    <Card href="create/day" >
                        <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
                        <h2>บัตรรายเดือน</h2>
                    </Card>
                </Grid.Column>
                <Grid.Column>
                    <Card href="create/day" >
                        <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
                        <h2>บัตรรายปี</h2>
                    </Card>
                </Grid.Column>
            </Grid>
        </div>
    )
}

export default SellTicketPage;