import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { MC } from '../../constans/constans';


export default function MediaCard({
  id,
  title, 
  deskription, 
  image=MC,
  status,
  makeClik}) {
  return (
  <Card sx={{ 
  maxWidth: 345,
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
  </Typography>
  <Typography variant="body2" color="text.secondary">
  {deskription}
  <button onClick={()=>makeClik(id)}>click me</button>
  </Typography>
  </CardContent>
  </CardActionArea>
  </Card>);}