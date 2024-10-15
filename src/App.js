import logo from './logo.svg';
import './App.css';
import  Navigation  from './components/navigetion/navigation';
import MediaCard from './components/MediaCard/MediaCard';
import { Grid } from '@mui/material';
import { Padding } from '@mui/icons-material';
import { useEffect, useState } from 'react';
import AppActor from './components/ActorCard/AppActor';
import Footer from './components/footer/footer';
import axios from 'axios';

// когда мы обернем все в грид контейнер она будет красиво в строчку
function App() {
  const [selectFilm, setSelectFilm]=useState(null);
  const [apiData, setApiData]= useState([]);
  const [search, setSearch]=useState("");
  console.log(apiData);
  useEffect(()=>{
    async function makeReqest(){
      try{
        if(search.length>=3){
        const response = await axios.get(`https://api.tvmaze.com/search/shows?q=${search}`);
        setApiData(response.data);
      }
      if(search.length===0){
        setApiData([]);
      }
    }catch (error) {
        console.error(error);      
    } 
    } makeReqest();
  },[search]);
  const handlerCarrClick=(id)=>{
    setSelectFilm(id);
  };

  const handleSearch=(e)=>{
    setSearch(e.target.value)
  };
  return (
  <div className="App">
  <Navigation/>
  <input id="navigation-input" type='text' value={search} onChange={handleSearch} />
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
    </div>
  );
}
export default App;