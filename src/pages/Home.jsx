import { useEffect, useState, useRef } from 'react';
import useRequest from '../hooks/useRequest';
import { Grid } from '@mui/material';
import AppActor from '../components/ActorCard/AppActor';
import MediaCard from '../components/MediaCard/MediaCard';
import Footer from '../components/footer/footer'

function Home(){
    const [selectFilm, setSelectFilm]=useState(null);
  const [search, setSearch]=useState("");
  const apiData = useRequest(search);
  const searchRef=useRef("");
  useEffect(()=>{
    searchRef.current.focus();
  },[])
 
  const handlerCarrClick=(id)=>{
    setSelectFilm(id);
  };

  const handleSearch=(e)=>{
    setSearch(e.target.value)
  };
  return (
    <>
  <input id="navigation-input" type='text' value={search} onChange={handleSearch} ref={searchRef}/>
  <Grid container spacing={2} sx={{padding: "20px"}}>
  {apiData.map(({show},  index)=>(
  <Grid item xs={3} key={index}> 
  <MediaCard
                id={show.id} 
                makeClik={handlerCarrClick}// Передается виде атрибута
                title={show.name} // передадим все свойства каждого фильма
                image={show.image?show.image.medium : ""}
                premiered={show.premiered}
                rating={show.rating }

             />
            </Grid>
           ))} 
        </Grid>  
   <AppActor/>   
   <Footer/> 
   </>
  );
}
export default Home
