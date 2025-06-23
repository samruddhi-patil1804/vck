import {Link} from "react-router-dom";
import Header from "../components/Header/Header";

const CoursesPages = () =>{
    return(
        <div>
            <Header/>
            <h1>Our Academic Programs</h1>
             <p>Vivekanand College offers a comprehensive range of undergraduate and postgraduate programs designed to equip students with the knowledge and skills demanded by today's dynamic global landscape. Our curriculum is regularly updated to reflect industry trends and academic advancements.</p>


             <h2>Discover Campus Life</h2><hr/>
             <video src="\video\7683336-hd_1920_1080_30fps.mp4" height="500px" width="800px" controls/>




            <h2>Undergraduate Programs (UG)</h2><hr/>
            <ul>
                <li>*Bachelor of Science (B.Sc.)*</li>
                <li>Computer Science (3 years)</li>
                <li>Information Technology (3 years)</li>
                <li>Biotechnology (3 years)</li>
                <li>*Bachelor of Commerce (B.Com)*</li>
                <li>Accounting & Finance (3 years)</li>
                <li>Banking & Insurance (3 years)</li>
                <li>*Bachelor of Arts (B.A.)*</li>
                <li>English Literature (3 years)</li>
                <li>Psychology (3 years)</li>
            </ul>
                <h2>Postgraduate Programs (PG)</h2><hr/>
            <ul>
                <li>*Master of Science (M.Sc.)*</li>
               <li>Computer Science (2 years)</li>
               <li> Information Technology (2 years)</li>
               <li>*Master of Commerce (M.Com)* (2 years)</li>
               <li>*Master of Arts (M.A.)* (2 years)</li>
            </ul>

            <h2>Program Details & Fee Structure (Annual)</h2>
            <table>
                    <tr>
                        <th>Program Type</th>	
                        <th>Course Name	Duration</th>	
                        <th> Annual Fee (INR)	</th>
                        <th>Eligibility</th>

                    </tr>

                    <tr>
                         <th>UG	</th>
                          <th>  B.Sc. Computer Science	</th>
                          <th>  3 Years	₹ 85,000	</th>
                        <th> 10+2 with PCM (50%)</th>

                    </tr>
           
                    <tr>
                        <th>UG	</th>
                        <th>  B.Com. Accounting & Finance</th>	
                        <th>   3 Years	₹ 70,000</th>	
                        <th>   10+2 Commerce (45%)</th>

                    </tr>
           
                    <tr>
                        <th>PG	</th>
                         <th>   M.Sc. Information Technology</th>	
                          <th>  2 Years	₹ 95,000</th>	
                          <th>  B.Sc. IT/CS (50%)</th>
            
                     </tr>
           
            </table>
        
        
        <h2>Specialized & Vocational Courses</h2><hr/>
        <p>In addition to traditional degree programs, we offer various certificate and diploma courses in areas like Digital Marketing, Web Development, Data Analytics, and Soft Skills Development, providing specialized training for career enhancement.</p>
    
        <p>Explore detailed syllabi and admission criteria on our Admissions page.</p>

                  
                   <Link to="/contact" className='button'>Inquire About Courses</Link>
                
          

        </div>
    )
}
export default CoursesPages;