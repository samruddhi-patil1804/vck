import { Link } from "react-router-dom";
import Header from "../components/Header/Header";
import AdmissionPage from "./AdmissionPage";

const HomePage = () => {
 return(
      <div>
        <Header/>
        <div>

                   <img src="\images\header-new.png" height="300px" width="1000px"/>
                   <h1> Welcome to Vivekanad College!</h1>
                    <Link to="/admission" className='button'>Apply Now</Link>
          
                    
                    <p>*Vivekanand College* is a premier educational institution dedicated to fostering academic excellence, innovation, and holistic development. Established in [Year of Establishment, e.g., 1980], we have proudly served generations of students, empowering them to achieve their full potential. </p>
                    <p>At Vivekanand College, we believe in a vibrant learning environment that extends beyond textbooks. Our state-of-the-art facilities, experienced faculty, and diverse student community create a unique ecosystem where curiosity thrives and future leaders are shaped.</p>
                    <h2>Why Choose Vivekanand College?</h2>
                    <ul>
                        <li> *Legacy of Excellence:* Decades of commitment to quality education   </li>
                        <li> *Experienced Faculty:* Learn from renowned experts and passionate educators  </li>
                        <li> *Modern Facilities:* Well-equipped labs, expansive library, and comfortable campus.   </li>
                        <li> *Holistic Development:* Focus on co-curricular activities, sports, and community service.</li>
                        <li> *Strong Placements:* Excellent career opportunities with leading companies.</li>
                   
                   </ul>

                   <h2>Campus Life & Facilities</h2><hr/>
                   <img src="\images\vck2.jpeg" height="200px"/>
                   <img src="\images\vck.avif" height="200px" />
                        
                   <h2>Ready to start your journey with us?</h2>
          <Link to="/courses" className='button'>Explore courses</Link>

                </div>
                   </div>
 )  

}
export default HomePage;