import JobZImage from "../../../../common/jobz-img";
import { NavLink } from "react-router-dom";
import { publicUser } from "../../../../../globals/route-names";
import SectionPagination from "../common/section-pagination";
import React, { useEffect, useState } from 'react';
function SectionJobsList() {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
      const fetchJobs = async () => {
        try {
          const response = await fetch('http://localhost:8080/post-job'); // Fetch the candidate data
          const data = await response.json(); // Convert the response to JSON
          setJobs(data); // Store the fetched data in state
        } catch (err) {
          console.error('Error fetching job data', err); // Handle any errors
        }
      };
  
      fetchJobs();
    }, []);
    
    return (
        <>
            <div>
                <div className="twm-jobs-list-wrap">
                <ul>
      {jobs.map((job, index) => (
         <NavLink to={`/job-detail/${job._id}`} >
        <li key={index}>
          <div className="twm-jobs-list-style1 mb-5">
            <div className="twm-media"> 
                 <img  src={`http://localhost:8080/${job.userId.companylogo}`} alt={job.userId}  style={{ height: "100px", width: "100px",  objectFit:'contain'}} />
            </div>
            <div className="twm-mid-content">
              <NavLink to={`/job-detail/${job._id}`} className="twm-job-title">
                <h4>{job.Jobcategory} <span className="twm-job-post-duration"> {job.startDate}</span></h4>
              </NavLink>
              <p className="twm-job-address">{job.country}</p>
              <a href={job.website} className="twm-job-websites site-text-primary">{job.website}</a>
            </div>
            <div className="twm-right-content">
              <div className={`twm-jobs-category ${job.Jobcategory ? job.category : 'default-category'}`}>
                <span className="twm-bg-green">{job.Jobcategory || 'Default'}</span>
              </div>
              <div className="twm-jobs-amount">
                {job.offeredsalary} <span>/ Month</span>
              </div>
              <NavLink to={`/job-detail/${job._id}`} className="twm-jobs-browse site-text-primary">
                Browse Job
              </NavLink>
            </div>
          </div>
        </li>
        </NavLink>
      ))}
    </ul>
                </div>
                <SectionPagination />
            </div>

        </>
    )
}

export default SectionJobsList;