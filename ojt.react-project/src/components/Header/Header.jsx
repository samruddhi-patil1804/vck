import './Header.css';
import {Link} from 'react-router-dom';

const Header = () =>{
 return(
      <div>
            <header>
                
        
                

               


            
                <nav>
<Link to="/home">Vivekanand College</Link>
                    
                    <Link to="/home">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/courses">Courses</Link>
                    <Link to="/contact">Contact</Link>
                  <Link to="/admission" className='button'>Apply Now</Link>
                  
                     </nav>
                     


                     



                     


            </header>
      </div>
 )  

}
export default Header;