import React, {useState} from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import products from "../../products.json";
// import Button from '@mui/material/Button';
// import SendIcon from '@mui/icons-material/Send';
import {useNavigate} from 'react-router-dom';
import "./jewelery.css";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Jewelery() {
    const [isClickj, setIsClickj] = useState(false);
    const navigatej = useNavigate();
    const handleClickj = (el) => {
        setIsClickj(true);
        navigatej('/page2',{state:{image: el.image, title: el.title, price: el.price, description: el.description, rate: el.rating.rate, count: el.rating.count}});
    }
  const dispJewels = (
    <div class="aligning3">
        {
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={3}>
                    <Grid item xs />
                    <Grid item xs={8}>
                    <Item>
                        <h2>Jewellery</h2>
                        {products.map(el => {
                            if(el.category === "jewelery"){
                                return (
                                    <div>
                                        <div class="hover3">
                                            <img src={el.image} alt={el.title} onClick={()=>{handleClickj(el)}}/>
                                        </div>
                                        <h3 class="title3">{el.title}</h3>
                                        {/* <Button variant="text" endIcon={<SendIcon />} onClick={()=>{handleClickj(el)}}>View Details</Button> */}
                                    </div>
                                );
                            }
                        })}
                    </Item>
                    </Grid>
                    <Grid item xs />
                </Grid>
            </Box>
        }
    </div>
  );
  return (
    <div>{!isClickj && dispJewels}</div>
  )
}
