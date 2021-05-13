import classes from "./Body.module.css";
import React from "react";

import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

import OrderSummary from "../../components/OrderSummary/OrderSummary";
import OrdersChart from "../../components/OrdersChart/OrdersChart";

const Body = props => {
    return (
        <React.Fragment>
            <main className={classes.main}>
                <Container maxWidth="lg">
                    <Grid container></Grid>
                    <OrderSummary className={classes["MuiCard-root"]} />
                    <OrdersChart />
                </Container>
            </main>
        </React.Fragment>
    )
}

export default Body;