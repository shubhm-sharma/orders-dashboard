import Grid from "@material-ui/core/Grid"

import ChartUI from "../../UI/ChartUI/ChartUI";


const OrdersChart = props => {
    return (
        <Grid item xs={12} md={4} lg={12} spacing={3}>
            <ChartUI style={{marginTop: "1em"}} />
        </Grid>
    )
}

export default OrdersChart;