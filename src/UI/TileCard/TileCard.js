import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        background: "#311b92",
        display: "inline-block",
        marginRight: "0.5em",
        width: "24.1%"
    },
    content: {
        color: "#fff"
    }
});

const TileCard = props => {
    const classes = useStyles();

    return (
        <Card className={classes.root} variant="outlined">
            <CardContent className={classes.content}>
                <Typography variant="h6" component="h2">
                    {props.content[0]}
                </Typography>
                <Typography variant="h6" component="p">
                    {props.content[1]}
                </Typography>
            </CardContent>
        </Card>
    );
}

export default TileCard;