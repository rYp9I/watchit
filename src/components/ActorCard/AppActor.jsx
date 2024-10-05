
import ActorCard from './actorCard';
import { Grid } from '@mui/material';

import { useState } from 'react';
const multgirl=[
    {
      id: 5,
      image: "https://scontent.fprg3-1.fna.fbcdn.net/v/t39.30808-6/332158322_178055068303880_6175475004414601722_n.jpg?stp=cp6_dst-jpg&_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=Q_Z3m-sA9A0Q7kNvgFmeKYK&_nc_ht=scontent.fprg3-1.fna&_nc_gid=AEd19okvlOj6eBCzf9-Qmcm&oh=00_AYBF1uJRKgWIBLSoNdNjuWpjTcv67Z2IVSytiLLqt8cldQ&oe=66FB5FFE",
      name:" nikol",
      deskription:"i am Nikolka little perdolka ", 
      time: "5 min"
     },
     {
      id: 6,
      image: "https://scontent.fprg3-1.fna.fbcdn.net/v/t39.30808-6/334090299_759292342640509_9188494022709232561_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=bGDdRleziOsQ7kNvgHLFSy0&_nc_ht=scontent.fprg3-1.fna&_nc_gid=AaNa46ltu6Ak6szML-IHJKk&oh=00_AYDsgiUtmhIbpwlhl1yFWjkTZGXf5F-XVD9yFvlMw1GlIQ&oe=66FB438C",
      name:" kotik",
      deskription:"i am valery krasny kitty ", 
      time: "1 min"
     },
     {
      id: 7,
      image: "https://scontent.fprg3-1.fna.fbcdn.net/v/t39.30808-6/440853425_344282848667890_1584518142579586312_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=DGJfXdMTCnQQ7kNvgErpF1f&_nc_ht=scontent.fprg3-1.fna&_nc_gid=AHaoik5fnmCCbXGgC-QQOQg&oh=00_AYBu4yilm5LZGCx8PCqWXNq4DhQOUjn6X28D6FlZjU7QwQ&oe=66FB4A07",
      name:" yula",
      deskription:"i am  libi ctrigat i grivolivit ", 
      time: "53 min"
     },
     {
      id: 8,
      image: "https://scontent.fprg3-1.fna.fbcdn.net/v/t39.30808-6/454343439_122160832010176147_6934328387912354407_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=OYRJj_45oCQQ7kNvgEE5auS&_nc_ht=scontent.fprg3-1.fna&_nc_gid=ACQH4k8xYkNClrz032nEmXM&oh=00_AYBfpBtMKaRt0obPcFqHCyF0J3-Q-tY9zq4NZBkEZGdeYg&oe=66FB5EC7",
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

   