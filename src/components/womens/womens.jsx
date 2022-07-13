import React, {useState} from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import products from "../../products.json";
import {useNavigate} from 'react-router-dom';
import "./womens.css";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Womens() {
    const [isClick, setIsClick] = useState(false);
    const navigatew = useNavigate();
    const handleClick = (el) => {
        setIsClick(true);
        navigatew('/page2',{state:{image: el.image, title: el.title, price: el.price, description: el.description, rate: el.rating.rate, count: el.rating.count}});
    }
 const dispWomens = (
    <div class="aligning2">
        {
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={3}>
                    <Grid item xs />
                    <Grid item xs={8}>
                    <Item>
                        <h2>Women's Clothing</h2>
                        {products.map(el => {
                            if(el.category === "women's clothing"){
                                return (
                                    <div>
                                        <div class="hover2">
                                            <img src={el.image} alt={el.title} onClick={()=>{handleClick(el)}}/>
                                        </div>
                                        <h3 class="title2">{el.title}</h3>
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
    <div>{!isClick && dispWomens}</div>
  )
}
