import logo from './logo.svg';
import './App.css';
import  Navigation  from './components/navigetion/navigation';
import MediaCard from './components/MediaCard/MediaCard';
import { Grid } from '@mui/material';
import { DEFOLD_IMG, Logo, STRONG_IMG } from './constans/constans';
import { Padding } from '@mui/icons-material';
import { useState } from 'react';
const mockData = [
  { 
   id: 1,
   title:"iron Man",
   deskription:"zaz chel",
   image: DEFOLD_IMG,
   status:"ended"
  },
  { id: 2,
    title:" strong",
    deskription:" strong strong ",
    image: STRONG_IMG,
    status:"ended"
   },
   {
    id: 3,
    title:" barbie",
    deskription:" I am Barbie", 
   },
   {
    id: 4,
    title:" Sherlock Holmes",
    deskription:"i am Sherlock Holmes", 
   },
];
// когда мы обернем все в грид контейнер она будет красиво в строчку
function App() {
  const [selectFilm, setselectFilm]=useState(null);
  const handlerCarrClick=(id)=>{ //Сделаем функции в App.js
    setselectFilm(id)
  };
  return (
  <div className="App">
  <Navigation/>
  <h2>{selectFilm}</h2>
  <Grid container spacing={2} sx={{padding: "20px"}}>
  {mockData.map(({id, title, deskription, image, status}, index)=>(
  <Grid item xs={3} key={index}> 
  <MediaCard
                id={id} 
                makeClik={handlerCarrClick}// Передается виде атрибута
                title={title} // передадим все свойства каждого фильма
                deskription={deskription}
                image={image}
                status={status}
             />
            </Grid>
           ))} 
        </Grid>
    </div>
  );
}

export default App;
