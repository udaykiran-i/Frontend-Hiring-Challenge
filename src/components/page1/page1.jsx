import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import {useNavigate} from 'react-router-dom';
import "./page1.css";

export default function Page1() {
  const [isSelected, setIsSelected] = useState(false);
  const pageNavigate = useNavigate();
  const handleClickMens = () => {
    setIsSelected(true);
    pageNavigate('/mens');
  }
  const handleClickWomens = () => {
    setIsSelected(true);
    pageNavigate('/womens');
  }
  const handleClickJewels = () => {
    setIsSelected(true);
    pageNavigate('/jewelery');
  }
  const handleClickElectronics = () => {
    setIsSelected(true);
    pageNavigate('/electronics');
  }
  const dispPage = (
    <div class="positioning">
        <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={3}>
                    <Grid item xs />
                    <Grid item xs={6}>
                        <div class="container">
                            <img src={require("../images/mens.jpg")} onClick={()=>{handleClickMens()}} class="image"/>
                            <div class="middle">
                              <div class="text">Men's Clothing</div>
                            </div>
                        </div>
                        <div class="container">
                            <img src={require("../images/womens.jpg")} onClick={()=>{handleClickWomens()}} class="image"/>
                            <div class="middle2">
                              <div class="text">Women's Clothing</div>
                            </div>
                        </div>
                        <div class="container">
                            <img src={require("../images/jewelery.jpg")} onClick={()=>{handleClickJewels()}} class="image"/>
                            <div class="middle3">
                              <div class="text">Jewellery</div>
                            </div>
                        </div>
                        <div class="container">
                            <img src={require("../images/electronics.jpg")} onClick={()=>{handleClickElectronics()}} class="image"/>
                            <div class="middle4">
                              <div class="text">Electronics</div>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs />
                </Grid>
            </Box>
    </div>
  );
  return (
    <div>{!isSelected && dispPage}</div>
  )
}
