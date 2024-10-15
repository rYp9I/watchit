
import ActorCard from './actorCard';
import { Grid } from '@mui/material';
import { useState } from 'react';
import { nika, valer, mil, love} from '../../constans/constans';

const multgirl=[
    {
      id: 5,
      image: nika,
      name:" nikol",
      deskription:"i am Nikolka little perdolka ", 
      time: "5 min"
     },
     {
      id: 6,
      image: valer,
      name:" kotik",
      deskription:"i am valery krasny kitty ", 
      time: "1 min"
     },
     {
      id: 7,
      image: mil,
      name:" yula",
      deskription:"i am  libi ctrigat i grivolivit ", 
      time: "53 min"
     },
     {
      id: 8,
      image: love,
      name:" mila",
      deskription:"i am mila little zadrotina", 
      time: "33 min"
     },
    ];
    function AppActor() {
        const [selectFilm, setselectFilm]=useState(null);
        const handlerActorClick=(id)=>{ //Сделаем функции в App.js
          setselectFilm(id)
        };
        return (
        <div className='actor'>
        <Grid container spacing={2} sx={{padding: "20px"}}>
        {multgirl.map(({id, name, deskription, image}, index)=>(
        <Grid item xs={3} key={index}> 
        <ActorCard
                      id={id} 
                      consClik={handlerActorClick}// Передается виде атрибута
                      name={name} // передадим все свойства каждого фильма
                      deskription={deskription}
                      image={image}
                   />
                 </Grid>
                 ))} 
              </Grid>  
              </div>
        );
      }
export default AppActor;

   