import Navigation from "../components/navigetion/navigation";
import { Grid } from '@mui/material';
import { Outlet } from "react-router-dom";

function Main (){
    return (
        <div className="App">
        <Navigation/>
        <Grid container>
            <Outlet/>
        </Grid>
        </div>
        );
    }
    export default Main;