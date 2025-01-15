import React, { useEffect, useState } from "react";
import JobZImage from "../../../../common/jobz-img";
import { NavLink } from "react-router-dom";
import SectionPagination from "../common/section-pagination";
import { publicUser } from "../../../../../globals/route-names";

function SectionJobsGrid() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/post-job")
      .then((response) => response.json())
      .then((data) => setJobs(data))
      .catch((error) => console.error("Error fetching jobs:", error));
  }, []);


  function getDateDifference(startDate) {
    const now = new Date();
  
    // Check if startDate is in 'DD/MM/YYYY' format and convert to 'YYYY-MM-DD'
    const dateParts = startDate.split('/'); // Split by '/'
    
    // Validate the date parts and convert to 'YYYY-MM-DD' format
    if (dateParts.length === 3) {
      const formattedStartDate = `${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`;
      startDate = formattedStartDate;
    }
  
    const start = new Date(startDate);
  
    // Check if the date is valid
    if (isNaN(start)) {
      console.error('Invalid start date:', startDate);
      return { diffDays: 0, diffMonths: 0 }; // Return default values if invalid
    }
  
    const diffTime = now - start;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    const diffMonths = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 30)); // Approximate months
  
    return { diffDays, diffMonths };
  }
  


  return (
    <>
        <div className="row">
            {/*Block one*/}
            {/* <div className="col-lg-6 col-md-12 m-b30">
                <div className="twm-jobs-grid-style1">
                    <div className="twm-media">
                        <JobZImage src="images/jobs-company/pic1.jpg" alt="#" />
                    </div>
                    <span className="twm-job-post-duration">1 days ago</span>
                    <div className="twm-jobs-category green"><span className="twm-bg-green">New</span></div>
                    <div className="twm-mid-content">
                        <NavLink to={publicUser.jobs.DETAIL1} className="twm-job-title">
                            <h4>Senior Web Designer , Developer</h4>
                        </NavLink>
                        <p className="twm-job-address">1363-1385 Sunset Blvd Los Angeles, CA 90026, USA</p>
                        <a href="https://themeforest.net/user/thewebmax/portfolio" className="twm-job-websites site-text-primary">https://thewebmax.com</a>
                    </div>
                    <div className="twm-right-content">
                        <div className="twm-jobs-amount">$2500 <span>/ Month</span></div>
                        <NavLink to={publicUser.jobs.DETAIL1} className="twm-jobs-browse site-text-primary">Browse Job</NavLink>
                    </div>
                </div>
            </div> */}
            {/*Block two*/}
            {/* <div className="col-lg-6 col-md-12 m-b30">
                <div className="twm-jobs-grid-style1">
                    <div className="twm-media">
                        <JobZImage src="images/jobs-company/pic2.jpg" alt="#" />
                    </div>
                    <span className="twm-job-post-duration">15 days ago</span>
                    <div className="twm-jobs-category green"><span className="twm-bg-brown">Intership</span></div>
                    <div className="twm-mid-content">
                        <NavLink to={publicUser.jobs.DETAIL1} className="twm-job-title">
                            <h4>Senior Rolling Stock Technician</h4>
                        </NavLink>
                        <p className="twm-job-address">1363-1385 Sunset Blvd Los Angeles, CA 90026, USA</p>
                        <a href="https://themeforest.net/user/thewebmax/portfolio" className="twm-job-websites site-text-primary">https://thewebmax.com</a>
                    </div>
                    <div className="twm-right-content">
                        <div className="twm-jobs-amount">$7 <span>/ Hour</span></div>
                        <NavLink to={publicUser.jobs.DETAIL1} className="twm-jobs-browse site-text-primary">Browse Job</NavLink>
                    </div>
                </div>
            </div> */}
            {/*Block three*/}
            {/* <div className="col-lg-6 col-md-12 m-b30">
                <div className="twm-jobs-grid-style1">
                    <div className="twm-media">
                        <JobZImage src="images/jobs-company/pic3.jpg" alt="#" />
                    </div>
                    <span className="twm-job-post-duration">6 Month ago</span>
                    <div className="twm-jobs-category green"><span className="twm-bg-purple">Fulltime</span></div>
                    <div className="twm-mid-content">
                        <NavLink to={publicUser.jobs.DETAIL1} className="twm-job-title">
                            <h4 className="twm-job-title">IT Department Manager</h4>
                        </NavLink>
                        <p className="twm-job-address">1363-1385 Sunset Blvd Los Angeles, CA 90026, USA</p>
                        <a href="https://themeforest.net/user/thewebmax/portfolio" className="twm-job-websites site-text-primary">https://thewebmax.com</a>
                    </div>
                    <div className="twm-right-content">
                        <div className="twm-jobs-amount">$2500 <span>/ Month</span></div>
                        <NavLink to={publicUser.jobs.DETAIL1} className="twm-jobs-browse site-text-primary">Browse Job</NavLink>
                    </div>
                </div>
            </div> */}
            {/*Block Four*/}
            {/* <div className="col-lg-6 col-md-12 m-b30">
                <div className="twm-jobs-grid-style1">
                    <div className="twm-media">
                        <JobZImage src="images/jobs-company/pic4.jpg" alt="#" />
                    </div>
                    <span className="twm-job-post-duration">2 days ago</span>
                    <div className="twm-jobs-category green"><span className="twm-bg-sky">Freelancer</span></div>
                    <div className="twm-mid-content">
                        <NavLink to={publicUser.jobs.DETAIL1} className="twm-job-title">
                            <h4 className="twm-job-title">Art Production Specialist</h4>
                        </NavLink>
                        <p className="twm-job-address">1363-1385 Sunset Blvd Los Angeles, CA 90026, USA</p>
                        <a href="https://themeforest.net/user/thewebmax/portfolio" className="twm-job-websites site-text-primary">https://thewebmax.com</a>
                    </div>
                    <div className="twm-right-content">
                        <div className="twm-jobs-amount">$1800 <span>/ Month</span></div>
                        <NavLink to={publicUser.jobs.DETAIL1} className="twm-jobs-browse site-text-primary">Browse Job</NavLink>
                    </div>
                </div>
            </div> */}
            {/*Block Five*/}
            {/* <div className="masonry-item col-lg-6 col-md-12 m-b30">
                <div className="twm-jobs-grid-style1">
                    <div className="twm-media">
                        <JobZImage src="images/jobs-company/pic5.jpg" alt="#" />
                    </div>
                    <span className="twm-job-post-duration">1 days ago</span>
                    <div className="twm-jobs-category green"><span className="twm-bg-golden">Temporary</span></div>
                    <div className="twm-mid-content">
                        <NavLink to={publicUser.jobs.DETAIL1} className="twm-job-title">
                            <h4 className="twm-job-title">Recreation &amp; Fitness Worker</h4>
                        </NavLink>
                        <p className="twm-job-address">1363-1385 Sunset Blvd Los Angeles, CA 90026, USA</p>
                        <a href="https://themeforest.net/user/thewebmax/portfolio" className="twm-job-websites site-text-primary">https://thewebmax.com</a>
                    </div>
                    <div className="twm-right-content">
                        <div className="twm-jobs-amount">$1000 <span>/ Month</span></div>
                        <NavLink to={publicUser.jobs.DETAIL1} className="twm-jobs-browse site-text-primary">Browse Job</NavLink>
                    </div>
                </div>
            </div> */}
            {/*Block Six*/}
            {/* <div className="masonry-item col-lg-6 col-md-12 m-b30">
                <div className="twm-jobs-grid-style1">
                    <div className="twm-media">
                        <JobZImage src="images/jobs-company/pic1.jpg" alt="#" />
                    </div>
                    <span className="twm-job-post-duration">1 days ago</span>
                    <div className="twm-jobs-category green"><span className="twm-bg-green">New</span></div>
                    <div className="twm-mid-content">
                        <NavLink to={publicUser.jobs.DETAIL1} className="twm-job-title">
                            <h4>Senior Web Designer , Developer</h4>
                        </NavLink>
                        <p className="twm-job-address">1363-1385 Sunset Blvd Los Angeles, CA 90026, USA</p>
                        <a href="https://themeforest.net/user/thewebmax/portfolio" className="twm-job-websites site-text-primary">https://thewebmax.com</a>
                    </div>
                    <div className="twm-right-content">
                        <div className="twm-jobs-amount">$19 <span>/ Hour</span></div>
                        <NavLink to={publicUser.jobs.DETAIL1} className="twm-jobs-browse site-text-primary">Browse Job</NavLink>
                    </div>
                </div>
            </div> */}
            {/*Block Seven*/}
            {/* <div className="col-lg-6 col-md-12 m-b30">
                <div className="twm-jobs-grid-style1">
                    <div className="twm-media">
                        <JobZImage src="images/jobs-company/pic1.jpg" alt="#" />
                    </div>
                    <span className="twm-job-post-duration">1 days ago</span>
                    <div className="twm-jobs-category green"><span className="twm-bg-green">New</span></div>
                    <div className="twm-mid-content">
                        <NavLink to={publicUser.jobs.DETAIL1} className="twm-job-title">
                            <h4>Senior Web Designer , Developer</h4>
                        </NavLink>
                        <p className="twm-job-address">1363-1385 Sunset Blvd Los Angeles, CA 90026, USA</p>
                        <a href="https://themeforest.net/user/thewebmax/portfolio" className="twm-job-websites site-text-primary">https://thewebmax.com</a>
                    </div>
                    <div className="twm-right-content">
                        <div className="twm-jobs-amount">$2500 <span>/ Month</span></div>
                        <NavLink to={publicUser.jobs.DETAIL1} className="twm-jobs-browse site-text-primary">Browse Job</NavLink>
                    </div>
                </div>
            </div> */}
            {/*Block Eight*/}
            {/* <div className="col-lg-6 col-md-12 m-b30">
                <div className="twm-jobs-grid-style1">
                    <div className="twm-media">
                        <JobZImage src="images/jobs-company/pic2.jpg" alt="#" />
                    </div>
                    <span className="twm-job-post-duration">15 days ago</span>
                    <div className="twm-jobs-category green"><span className="twm-bg-brown">Intership</span></div>
                    <div className="twm-mid-content">
                        <NavLink to={publicUser.jobs.DETAIL1} className="twm-job-title">
                            <h4>Senior Rolling Stock Technician</h4>
                        </NavLink>
                        <p className="twm-job-address">1363-1385 Sunset Blvd Los Angeles, CA 90026, USA</p>
                        <a href="https://themeforest.net/user/thewebmax/portfolio" className="twm-job-websites site-text-primary">https://thewebmax.com</a>
                    </div>
                    <div className="twm-right-content">
                        <div className="twm-jobs-amount">$7 <span>/ Hour</span></div>
                        <NavLink to={publicUser.jobs.DETAIL1} className="twm-jobs-browse site-text-primary">Browse Job</NavLink>
                    </div>
                </div>
            </div> */}
            {/*Block Nine*/}
            {/* <div className="col-lg-6 col-md-12 m-b30">
                <div className="twm-jobs-grid-style1">
                    <div className="twm-media">
                        <JobZImage src="images/jobs-company/pic3.jpg" alt="#" />
                    </div>
                    <span className="twm-job-post-duration">6 Month ago</span>
                    <div className="twm-jobs-category green"><span className="twm-bg-purple">Fulltime</span></div>
                    <div className="twm-mid-content">
                        <NavLink to={publicUser.jobs.DETAIL1} className="twm-job-title">
                            <h4 className="twm-job-title">IT Department Manager</h4>
                        </NavLink>
                        <p className="twm-job-address">1363-1385 Sunset Blvd Los Angeles, CA 90026, USA</p>
                        <a href="https://themeforest.net/user/thewebmax/portfolio" className="twm-job-websites site-text-primary">https://thewebmax.com</a>
                    </div>
                    <div className="twm-right-content">
                        <div className="twm-jobs-amount">$2500 <span>/ Month</span></div>
                        <NavLink to={publicUser.jobs.DETAIL1} className="twm-jobs-browse site-text-primary">Browse Job</NavLink>
                    </div>
                </div>
            </div> */}
            {/*Block ten*/}
           
            {jobs.map((job) => {
    console.log("Start Date: ", job.startDate);  // Check if it's in the right format
    const { diffDays, diffMonths } = getDateDifference(job.startDate); // Destructure here
  
    // Handle edge case for NaN values
    const displayDays = isNaN(diffDays) ? 0 : diffDays;
    const displayMonths = isNaN(diffMonths) ? 0 : diffMonths;
  return (
    <div  className="col-lg-6 col-md-12 m-b30">
     {/* <NavLink to={`/job-detail/${job._id}`}> */}
           <div className="twm-jobs-grid-style1" >
        <div className="twm-media">
          <img src={`http://localhost:8080/${job.userId.companylogo}`} alt={job.userId._id} />
        </div>

        <span className="twm-job-post-duration">
        {displayMonths > 0
            ? `${displayMonths}month${displayMonths > 1 ? 's' : ''} ago`
            : `${displayDays} day${displayDays > 1 ? 's' : ''} ago`}
        </span>

        <div className="twm-jobs-category green">
          <span className="twm-bg-sky">{job.jobtype}</span>
        </div>

        <div className="twm-mid-content">
            <NavLink to={`/job-detail/${job._id}`} className="twm-job-title">
            <h4 className="twm-job-title">{job.jobcategory}</h4>
          </NavLink>
          <p className="twm-job-address">{job.location}</p>
          <a href={job.website} className="twm-job-websites site-text-primary">
            {job.website}
          </a>
        </div>

        <div className="twm-right-content">
          <div className="twm-jobs-amount">{job.offeredsalary} <span>/ Month</span></div>
          <NavLink to={`/job-detail/${job._id}`} className="twm-job-title">
            Browse Job
          </NavLink>
        </div>
      </div>
      {/* </NavLink> */}

    
    </div>
  );
})}

    </div>
     
        <SectionPagination />
    </>
)
}

export default SectionJobsGrid;
