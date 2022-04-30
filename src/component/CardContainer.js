import '../component/Page.css';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function CardContainer(props) {
    console.log(props.pic.props.src);
    return (
        <Card sx={{ margin: 3 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    style={{ width: "400px" }}
                    height="140"
                    image={props.pic.props.src}
                    alt="green iguana"
                />
                <CardContent style={{ backgroundColor: "black" }}>
                    <Typography gutterBottom variant="h6" component="div" style={{ color: "white" }}>
                        {props.title}
                    </Typography>
                    <Typography variant="container" color="text.primary" style={{ color: "white" }}>
                        <div className="container">
                            <p style={{ margin: "0px", color: 'white', fontWeight: "bold" }}>{props.tag}</p>
                            <p style={{ margin: "0px" }}>{props.subtitle}</p>
                        </div>
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
