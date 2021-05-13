import Grid from "@material-ui/core/Grid";

import TileCard from "../../UI/TileCard/TileCard";
const OrderSummary = (props) => {
    return (
        <Grid item xs={12} md={4} lg={12} spacing={3}>
            <TileCard className={props.className} content={[
                "Today's Orders: 10",
                "Current Week Order: 450"
                ]} />
            <TileCard className={props.className} content={[
                "Today's Orders: 10",
                "Current Week Order: 450"
                ]} />
            <TileCard className={props.className} content={[
                "Today's Orders: 10",
                "Current Week Order: 450"
                ]} />
            <TileCard className={props.className} content={[
                "Today's Orders: 10",
                "Current Week Order: 450"
                ]} />
        </Grid>
    )
}

export default OrderSummary;