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
  image=MC,
  rating,
  premiered,
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
  {rating.average
 != null && 
  <span style={{
  border:"1px solid red", 
  color: "red", 
  margin:"5px"
  }}>{rating.average}</span>
  }
  {premiered != null && 
  <div style={{
    color:"green",
    margin:"5px"
  }}
  >{premiered}</div>}
  </Typography>
  <Typography>
  <button onClick={()=>makeClik(id)}>click me</button>
  </Typography>
  </CardContent>
  </CardActionArea>
  </Card>);}