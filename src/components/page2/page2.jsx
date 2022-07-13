import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import StarRatingComponent from 'react-star-rating-component';
import {useLocation} from 'react-router-dom';
import "./page2.css";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary
}));

const Item2 = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "left",
    color: theme.palette.text.secondary
}));

export default function Page2() {
    const location = useLocation();
  return (
    <div class="aligning5">
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={3}>
            <Grid item xs></Grid>
            <Grid item xs={8}>
            <Item>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        <Grid item md={4}>
                            <Item>
                                <img src={location.state.image} alt="Product-image" class="image-style"/>
                            </Item>
                        </Grid>
                        <Grid item md={8}>
                            <Item2>
                                <h3>{location.state.title}</h3>
                                <h4> ${location.state.price} </h4>
                                <p>{location.state.description}</p>
                                <StarRatingComponent editing = {false} starCount={5} value={location.state.rate} /> 
                                <p>{location.state.count} ratings</p>
                            </Item2>
                        </Grid>
                    </Grid>
                </Box>
            </Item>
            </Grid>
            <Grid item xs></Grid>
        </Grid>
        </Box>
    </div>
  );
}
