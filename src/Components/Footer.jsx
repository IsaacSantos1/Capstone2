import  Footerr from '../assets/Foot/Footerr.png'
import  Footer1 from '../assets/Foot/Footer-1.png'
import  Footer2 from '../assets/Foot/Footer-2.png'

function Footer(){
    return(
<picture>
            <source media="(min-width: 1200px)" srcSet={Footerr} />
            <source media="(min-width: 800px)" srcSet={Footer1} />
            <img src={Footer2} alt="Footer" />
        </picture>
    )
}
export default Footer;