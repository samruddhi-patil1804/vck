
import Header from "../components/Header/Header";

const AdmissionPage = () =>{
 return(
      <div>
        <Header/>
            <div>
                <h1>Admissions at Vivekanand College</h1>
                <p>Welcome to the Admissions page of Vivekanand College! We are delighted you're considering joining our vibrant academic community. Our admission process is designed to be straightforward and accessible.</p>
                <p>Please review the eligibility criteria and key dates below for the upcoming academic year. For any queries, feel free to contact our admissions office.</p>

                <h2>Eligibility Criteria for Undergraduate Programs</h2><hr/>
                <table>
                    <tr>
                        <th>Program	</th>
                          <th>  Minimum Qualification</th>	
                           <th> Required Subjects</th>	
                          <th>  Minimum Marks (%)</th>
                    </tr>
                    <tr>
                        <th>B.Sc. Computer Science	</th>
                         <th>   10+2 (or equivalent)	</th>
                         <th>   Physics, Chemistry, Maths</th>	
                         <th>   50%</th>
                    </tr>

                    <tr>
                        <th>B.Com. Accounting & Finance	</th>
                         <th>   10+2 (or equivalent)</th>	
                         <th>   Commerce Stream	</th>
                         <th>   45%</th>

                    </tr>

                    <tr>
                        <th>B.A. English Literature	</th>
                         <th>   10+2 (or equivalent)</th>	
                         <th>   Any Stream	</th>
                        <th> 40%</th>
                    </tr>
                     </table>
                <h2>Application Process</h2><hr/>
              <ol>
               <li> Online Application: Fill out the application form available on our portal.</li>
               <li> Document Submission: Upload scanned copies of required documents (mark sheets, ID proof, etc.).</li>
               <li> Entrance Exam (if applicable):Appear for the college's entrance examination.</li>
              <li>  Merit List & Interview: Check the merit list and attend the interview if shortlisted.</li>
              <li>  Fee Payment: Complete the admission by paying the required fees.</li>
</ol>
<p>For detailed information on postgraduate program admissions, specific program syllabi, and fee structures, please visit our Courses page or Contact us directly.</p>

            </div>


      </div>
 )  

}
export default AdmissionPage;

