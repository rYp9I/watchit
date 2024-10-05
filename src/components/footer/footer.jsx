import InstagramIcon from '@mui/icons-material/Instagram';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import FacebookIcon from '@mui/icons-material/Facebook';
import "./footer.css";
const Footer=()=>{
 return(
    <div className='footer'>
        <div className='box'>
        <div className='div-child'>
        <div className='section_1'>
            <div className='follow'>
                <span>Follow Us:</span>
                </div> 
          <div className='icons'>
                <div className='circle'>silenko_yulia13<FacebookIcon sx={{width:'2rem', height: '2rem'}}/></div>
                <div className='circle'>Юлия Почапская<InstagramIcon sx={{width:'2rem', height: '2rem'}}/></div>
                <div className='circle'>us@gmail.com<AlternateEmailIcon sx={{width:'2rem', height: '2rem'}}/></div>              
          </div>
        </div>
        </div>
        <div className='div-child'>
        <div className='section_2'>
            <div className='follow'>
                <span>Watchit App:</span>
             </div>
            <div className='get_it'>
            <div><img className='images1' src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png' alt='google play'></img></div>
            <div><img className='images2' src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/800px-Download_on_the_App_Store_Badge.svg.png' alt='app store'></img></div>           
            </div>
        </div>
        </div>
        </div>
            <div className='section_3'>
                <div className='follow'>
                <span> Privacy Policy:</span>
            </div>
            <div className='paragraph'>
                <p>©2024 WATCHIT. All Right Reserved. All videos and shows on this platform are trademarks of, and all related images and content are the property of, 
                <b>Yulia Silenko Inc.</b> Duplication and copy of this is strictly prohibited. All rights reserved.</p>
            </div>           
        </div>
     </div>   
 )
};
export default Footer;