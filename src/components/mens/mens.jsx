import  React, {useState} from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import products from "../../products.json";
import {useNavigate} from 'react-router-dom';
import "./mens.css";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Mens() {
    const [isClicked, setIsClicked] = useState(false);
    const navigate = useNavigate();
    const handleClicked = (el) => {
        setIsClicked(true);
        navigate('/page2',{state:{image: el.image, title: el.title, price: el.price, description: el.description, rate: el.rating.rate, count: el.rating.count}});
    }
  const dispMens = (
    <div class="aligning">
        {
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={3}>
                    <Grid item xs />
                    <Grid item xs={8}>
                    <Item>
                        <h2>Men's Clothing</h2>
                        {products.map(el => {
                            if(el.category === "men's clothing"){
                                return (
                                    <div>
                                        <div class="hover">
                                            <img src={el.image} alt={el.title} onClick={()=>{handleClicked(el)}}/>
                                        </div>
                                        <h3 class="title">{el.title}</h3>
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
    <div>{!isClicked && dispMens}</div>
  )
}
