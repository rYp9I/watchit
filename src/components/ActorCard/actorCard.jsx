import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ActorCard({
    id,
    name,
    deskription, 
    image,
    consClik}){
        return(
    <Card sx={{ 
        maxWidth: 345,
        backgroundColor:"#ffe599",
        "& :hover": {backgroundColor:"#d34b9b"} }}>
      <CardMedia
  component="img"
  height="140"
  image= {image}
  alt="prof"
  />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {name}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        {deskription}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={()=>consClik(id)}>profil</Button>
      </CardActions>
    </Card>
  );
}