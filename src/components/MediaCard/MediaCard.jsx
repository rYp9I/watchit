import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { MC } from '../../constans/constans';
import "./Media.css";

export default function MediaCard({
  id,
  title, 
  deskription, 
  image=MC,
  status,
  time,
  makeClik}) {
  return (
  <Card sx={{ 
  Width: 345,
  height: 350,
  backgroundColor:"#d8cece",
  "& :hover": {backgroundColor:"red"} }}>
  <CardActionArea>
  <CardMedia
  component="img"
  height="140"
  image= {image}
  alt="green iguana"
  />
  <CardContent>
  <Typography gutterBottom variant="h5" component="div">
  {title}
  {status ==='ended' &&
  <span style={{
  border:"1px solid red", 
  color: "red", 
  margin:"5px"
  }}>ended</span>
  }
  {time != null && 
  <div style={{
    color:"green",
    margin:"5px"
  }}
  >{time}</div>}
  </Typography>
  
  <Typography variant="body2" color="text.secondary">
  {deskription } </Typography>
  <Typography>
  <button onClick={()=>makeClik(id)}>click me</button>
  </Typography>
  </CardContent>
  </CardActionArea>
  </Card>);}