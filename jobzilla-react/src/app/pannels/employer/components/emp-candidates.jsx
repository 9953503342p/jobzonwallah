import React, { useState, useEffect } from 'react';
import axios from 'axios';
import JobZImage from "../../../common/jobz-img";
import Cookies from 'js-cookie';

import { employer, empRoute, publicUser } from "../../../../globals/route-names";
import { loadScript } from "../../../../globals/constants";
import { NavLink } from 'react-router-dom';

function EmpCandidatesPage() {

    useState(()=> {
        loadScript("js/custom.js");

    })
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const employerId = Cookies.get('employeeid'); // Fetch employer ID from cookies

  useEffect(() => {
    if (!employerId) {
      setError('Employer ID is missing in cookies');
      console.log('employer ID is missing')
      setLoading(false);
      return;
    }

    const fetchApplications = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/apply-job`, {
          withCredentials: true, // Include cookies in the request
        });
        setApplications(response.data); // Set the applications data
      } catch (err) {
        setError('Error fetching data'); // Handle error
      } finally {
        setLoading(false); // Set loading to false after data is fetched
      }
    };

    fetchApplications();
  }, [employerId]);

  console.log(applications)

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }


    return (
        <>
            <div className="wt-admin-right-page-header clearfix">
                <h2>Candidates</h2>
                <div className="breadcrumbs"><a href="#">Home</a><a href="#">Dasboard</a><span>Candidates</span></div>
            </div>
            <div className="twm-pro-view-chart-wrap">
                <div className="col-lg-12 col-md-12 mb-4">
                    <div className="panel panel-default site-bg-white m-t30">
                        <div className="panel-heading wt-panel-heading p-a20">
                            <h4 className="panel-tittle m-a0"><i className="far fa-list-alt" />All Candidates</h4>
                        </div>
                        <div className="panel-body wt-panel-body">
                            <div className="twm-D_table p-a20 table-responsive">
                                <table id="candidate_data_table" className="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th><input type="checkbox" id="candidate_select_all" /></th>
                                            <th>Name</th>
                                            <th>Applied for</th>
                                            <th>Date</th>
                                            {/* <th>Question</th>
                                            <th>Answer</th> */}
                                            <th>Status</th>
                                            <th />
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {/*1*/}
                                        {applications.length === 0 ? (
          <tr><td colSpan="6">No applications found.</td></tr>
        ) : (
          applications.map((application) => (
            <tr key={application._id}>
              <td><input type="checkbox" /></td>
              <td>
                <div className="twm-DT-candidates-list">
                  <div className="twm-media">
                    <div className="twm-media-pic">
                      {/* Displaying candidate image */}
                      <img src={`http://localhost:8080/${application.userId.Profileimage}`} alt={application.name} />
                    </div>
                  </div>
                  <div className="twm-mid-content">
                    <a href="#" className="twm-job-title">
                      <h4>{application.name}</h4>
                      <p className="twm-candidate-address">
                        <i className="feather-map-pin" /> {application.userId.Country || 'Location Not Available'}
                      </p>
                    </a>
                  </div>
                </div>
              </td>
              <td>{application.JobId.jobcategory || 'N/A'}</td>
              <td>{new Date(application.createdAt).toLocaleString()}</td>
              {/* <td>  {application.questionsAndAnswers.map((qa, index) => (
          <div key={index}>{`${index+1})   ` }{qa.question}</div>
        ))}</td> */}
        {/* <td>
        {application.questionsAndAnswers.map((qa, index) => (
          <div key={index}>{`${index+1})  `}{qa.answer}</div>
        ))}
        </td> */}
              <td>
                <div className="twm-jobs-category">
                  <span className={application.status === 'Approved' ? 'twm-bg-green' : 'twm-bg-red'}>
                    {application.status || 'Pending'}
                  </span>
                </div>
              </td>
              <td>
                <div className="twm-table-controls">
                  <ul className="twm-DT-controls-icon list-unstyled">
                    <li>
                    <NavLink to={empRoute(employer.Question.replace(":_id", application._id))}>
  <button title="View profile" data-bs-toggle="tooltip" data-bs-placement="top">
    <span className="fa fa-eye" />
  </button>
</NavLink>

                   
                    </li>
                    <li>
                      <button title="Send message" data-bs-toggle="tooltip" data-bs-placement="top">
                        <span className="far fa-envelope-open" />
                      </button>
                    </li>
                    <li>
                      <button title="Delete" data-bs-toggle="tooltip" data-bs-placement="top">
                        <span className="far fa-trash-alt" />
                      </button>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
          ))
        )}
                                        {/*2*/}
                                        <tr>
                                            <td><input type="checkbox" /></td>
                                            <td>
                                                <div className="twm-DT-candidates-list">
                                                    <div className="twm-media">
                                                        <div className="twm-media-pic">
                                                            <JobZImage src="images/candidates/pic2.jpg" alt="#" />
                                                        </div>
                                                    </div>
                                                    <div className="twm-mid-content">
                                                        <a href="#" className="twm-job-title">
                                                            <h4>Peter Hawkins</h4>
                                                            <p className="twm-candidate-address">
                                                                <i className="feather-map-pin" />New York
                                                            </p>
                                                        </a>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>Medical Professed</td>
                                            <td>16/06/2023 at 11:35 am</td>
                                            <td><div className="twm-jobs-category"><span className="twm-bg-golden">Pending</span></div></td>
                                            <td>
                                                <div className="twm-table-controls">
                                                    <ul className="twm-DT-controls-icon list-unstyled">
                                                        <li>
                                                            <button title="View profile" data-bs-toggle="tooltip" data-bs-placement="top">
                                                                <span className="fa fa-eye" />
                                                            </button>
                                                        </li>
                                                        <li>
                                                            <button title="Send message" data-bs-toggle="tooltip" data-bs-placement="top">
                                                                <span className="far fa-envelope-open" />
                                                            </button>
                                                        </li>
                                                        <li>
                                                            <button title="Delete" data-bs-toggle="tooltip" data-bs-placement="top">
                                                                <span className="far fa-trash-alt" />
                                                            </button>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </td>
                                        </tr>
                                        {/*3*/}
                                        <tr>
                                            <td><input type="checkbox" /></td>
                                            <td>
                                                <div className="twm-DT-candidates-list">
                                                    <div className="twm-media">
                                                        <div className="twm-media-pic">
                                                            <JobZImage src="images/candidates/pic3.jpg" alt="#" />
                                                        </div>
                                                    </div>
                                                    <div className="twm-mid-content">
                                                        <a href="#" className="twm-job-title">
                                                            <h4>Ralph Johnson</h4>
                                                            <p className="twm-candidate-address">
                                                                <i className="feather-map-pin" />New York
                                                            </p>
                                                        </a>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>Bank Manager</td>
                                            <td>17/06/2023 at 01:15 pm</td>
                                            <td><div className="twm-jobs-category"><span className="twm-bg-red">Rejects</span></div></td>
                                            <td>
                                                <div className="twm-table-controls">
                                                    <ul className="twm-DT-controls-icon list-unstyled">
                                                        <li>
                                                            <button title="View profile" data-bs-toggle="tooltip" data-bs-placement="top">
                                                                <span className="fa fa-eye" />
                                                            </button>
                                                        </li>
                                                        <li>
                                                            <button title="Send message" data-bs-toggle="tooltip" data-bs-placement="top">
                                                                <span className="far fa-envelope-open" />
                                                            </button>
                                                        </li>
                                                        <li>
                                                            <button title="Delete" data-bs-toggle="tooltip" data-bs-placement="top">
                                                                <span className="far fa-trash-alt" />
                                                            </button>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </td>
                                        </tr>
                                        {/*4*/}
                                        <tr>
                                            <td><input type="checkbox" /></td>
                                            <td>
                                                <div className="twm-DT-candidates-list">
                                                    <div className="twm-media">
                                                        <div className="twm-media-pic">
                                                            <JobZImage src="images/candidates/pic4.jpg" alt="#" />
                                                        </div>
                                                    </div>
                                                    <div className="twm-mid-content">
                                                        <a href="#" className="twm-job-title">
                                                            <h4>Randall Henderson</h4>
                                                            <p className="twm-candidate-address">
                                                                <i className="feather-map-pin" />New York
                                                            </p>
                                                        </a>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>IT Contractor</td>
                                            <td>18/06/2023 at 10:35 am</td>
                                            <td><div className="twm-jobs-category"><span className="twm-bg-golden">Pending</span></div></td>
                                            <td>
                                                <div className="twm-table-controls">
                                                    <ul className="twm-DT-controls-icon list-unstyled">
                                                        <li>
                                                            <button title="View profile" data-bs-toggle="tooltip" data-bs-placement="top">
                                                                <span className="fa fa-eye" />
                                                            </button>
                                                        </li>
                                                        <li>
                                                            <button title="Send message" data-bs-toggle="tooltip" data-bs-placement="top">
                                                                <span className="far fa-envelope-open" />
                                                            </button>
                                                        </li>
                                                        <li>
                                                            <button title="Delete" data-bs-toggle="tooltip" data-bs-placement="top">
                                                                <span className="far fa-trash-alt" />
                                                            </button>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </td>
                                        </tr>
                                        {/*5*/}
                                        <tr>
                                            <td><input type="checkbox" /></td>
                                            <td>
                                                <div className="twm-DT-candidates-list">
                                                    <div className="twm-media">
                                                        <div className="twm-media-pic">
                                                            <JobZImage src="images/candidates/pic5.jpg" alt="#" />
                                                        </div>
                                                    </div>
                                                    <div className="twm-mid-content">
                                                        <a href="#" className="twm-job-title">
                                                            <h4>Randall Warren</h4>
                                                            <p className="twm-candidate-address">
                                                                <i className="feather-map-pin" />New York
                                                            </p>
                                                        </a>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>Digital &amp; Creative</td>
                                            <td>22/06/2023 at 10:35 am</td>
                                            <td><div className="twm-jobs-category"><span className="twm-bg-green">Approved</span></div></td>
                                            <td>
                                                <div className="twm-table-controls">
                                                    <ul className="twm-DT-controls-icon list-unstyled">
                                                        <li>
                                                            <button title="View profile" data-bs-toggle="tooltip" data-bs-placement="top">
                                                                <span className="fa fa-eye" />
                                                            </button>
                                                        </li>
                                                        <li>
                                                            <button title="Send message" data-bs-toggle="tooltip" data-bs-placement="top">
                                                                <span className="far fa-envelope-open" />
                                                            </button>
                                                        </li>
                                                        <li>
                                                            <button title="Delete" data-bs-toggle="tooltip" data-bs-placement="top">
                                                                <span className="far fa-trash-alt" />
                                                            </button>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </td>
                                        </tr>
                                        {/*6*/}
                                        <tr>
                                            <td><input type="checkbox" /></td>
                                            <td>
                                                <div className="twm-DT-candidates-list">
                                                    <div className="twm-media">
                                                        <div className="twm-media-pic">
                                                            <JobZImage src="images/candidates/pic6.jpg" alt="#" />
                                                        </div>
                                                    </div>
                                                    <div className="twm-mid-content">
                                                        <a href="#" className="twm-job-title">
                                                            <h4>Wanda Montgomery </h4>
                                                            <p className="twm-candidate-address">
                                                                <i className="feather-map-pin" />New York
                                                            </p>
                                                        </a>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>UI Designer</td>
                                            <td>15/06/2023 at 10:35 am</td>
                                            <td><div className="twm-jobs-category"><span className="twm-bg-green">Approved</span></div></td>
                                            <td>
                                                <div className="twm-table-controls">
                                                    <ul className="twm-DT-controls-icon list-unstyled">
                                                        <li>
                                                            <button title="View profile" data-bs-toggle="tooltip" data-bs-placement="top">
                                                                <span className="fa fa-eye" />
                                                            </button>
                                                        </li>
                                                        <li>
                                                            <button title="Send message" data-bs-toggle="tooltip" data-bs-placement="top">
                                                                <span className="far fa-envelope-open" />
                                                            </button>
                                                        </li>
                                                        <li>
                                                            <button title="Delete" data-bs-toggle="tooltip" data-bs-placement="top">
                                                                <span className="far fa-trash-alt" />
                                                            </button>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </td>
                                        </tr>
                                        {/*7*/}
                                        <tr>
                                            <td><input type="checkbox" /></td>
                                            <td>
                                                <div className="twm-DT-candidates-list">
                                                    <div className="twm-media">
                                                        <div className="twm-media-pic">
                                                            <JobZImage src="images/candidates/pic7.jpg" alt="#" />
                                                        </div>
                                                    </div>
                                                    <div className="twm-mid-content">
                                                        <a href="#" className="twm-job-title">
                                                            <h4>Wanda Montgomery </h4>
                                                            <p className="twm-candidate-address">
                                                                <i className="feather-map-pin" />New York
                                                            </p>
                                                        </a>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>UI Designer</td>
                                            <td>15/06/2023 at 10:35 am</td>
                                            <td><div className="twm-jobs-category"><span className="twm-bg-green">Approved</span></div></td>
                                            <td>
                                                <div className="twm-table-controls">
                                                    <ul className="twm-DT-controls-icon list-unstyled">
                                                        <li>
                                                            <button title="View profile" data-bs-toggle="tooltip" data-bs-placement="top">
                                                                <span className="fa fa-eye" />
                                                            </button>
                                                        </li>
                                                        <li>
                                                            <button title="Send message" data-bs-toggle="tooltip" data-bs-placement="top">
                                                                <span className="far fa-envelope-open" />
                                                            </button>
                                                        </li>
                                                        <li>
                                                            <button title="Delete" data-bs-toggle="tooltip" data-bs-placement="top">
                                                                <span className="far fa-trash-alt" />
                                                            </button>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </td>
                                        </tr>
                                        {/*8*/}
                                        <tr>
                                            <td><input type="checkbox" /></td>
                                            <td>
                                                <div className="twm-DT-candidates-list">
                                                    <div className="twm-media">
                                                        <div className="twm-media-pic">
                                                            <JobZImage src="images/candidates/pic8.jpg" alt="#" />
                                                        </div>
                                                    </div>
                                                    <div className="twm-mid-content">
                                                        <a href="#" className="twm-job-title">
                                                            <h4>Wanda Montgomery </h4>
                                                            <p className="twm-candidate-address">
                                                                <i className="feather-map-pin" />New York
                                                            </p>
                                                        </a>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>UI Designer</td>
                                            <td>15/06/2023 at 10:35 am</td>
                                            <td><div className="twm-jobs-category"><span className="twm-bg-green">Approved</span></div></td>
                                            <td>
                                                <div className="twm-table-controls">
                                                    <ul className="twm-DT-controls-icon list-unstyled">
                                                        <li>
                                                            <button title="View profile" data-bs-toggle="tooltip" data-bs-placement="top">
                                                                <span className="fa fa-eye" />
                                                            </button>
                                                        </li>
                                                        <li>
                                                            <button title="Send message" data-bs-toggle="tooltip" data-bs-placement="top">
                                                                <span className="far fa-envelope-open" />
                                                            </button>
                                                        </li>
                                                        <li>
                                                            <button title="Delete" data-bs-toggle="tooltip" data-bs-placement="top">
                                                                <span className="far fa-trash-alt" />
                                                            </button>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </td>
                                        </tr>
                                        {/*9*/}
                                        <tr>
                                            <td><input type="checkbox" /></td>
                                            <td>
                                                <div className="twm-DT-candidates-list">
                                                    <div className="twm-media">
                                                        <div className="twm-media-pic">
                                                            <JobZImage src="images/candidates/pic1.jpg" alt="#" />
                                                        </div>
                                                    </div>
                                                    <div className="twm-mid-content">
                                                        <a href="#" className="twm-job-title">
                                                            <h4>Wanda Montgomery </h4>
                                                            <p className="twm-candidate-address">
                                                                <i className="feather-map-pin" />New York
                                                            </p>
                                                        </a>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>UI Designer</td>
                                            <td>15/06/2023 at 10:35 am</td>
                                            <td><div className="twm-jobs-category"><span className="twm-bg-green">Approved</span></div></td>
                                            <td>
                                                <div className="twm-table-controls">
                                                    <ul className="twm-DT-controls-icon list-unstyled">
                                                        <li>
                                                            <button title="View profile" data-bs-toggle="tooltip" data-bs-placement="top">
                                                                <span className="fa fa-eye" />
                                                            </button>
                                                        </li>
                                                        <li>
                                                            <button title="Send message" data-bs-toggle="tooltip" data-bs-placement="top">
                                                                <span className="far fa-envelope-open" />
                                                            </button>
                                                        </li>
                                                        <li>
                                                            <button title="Delete" data-bs-toggle="tooltip" data-bs-placement="top">
                                                                <span className="far fa-trash-alt" />
                                                            </button>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </td>
                                        </tr>
                                        {/*10*/}
                                        <tr>
                                            <td><input type="checkbox" /></td>
                                            <td>
                                                <div className="twm-DT-candidates-list">
                                                    <div className="twm-media">
                                                        <div className="twm-media-pic">
                                                            <JobZImage src="images/candidates/pic2.jpg" alt="#" />
                                                        </div>
                                                    </div>
                                                    <div className="twm-mid-content">
                                                        <a href="#" className="twm-job-title">
                                                            <h4>Peter Hawkins</h4>
                                                            <p className="twm-candidate-address">
                                                                <i className="feather-map-pin" />New York
                                                            </p>
                                                        </a>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>Medical Professed</td>
                                            <td>16/06/2023 at 11:35 am</td>
                                            <td><div className="twm-jobs-category"><span className="twm-bg-golden">Pending</span></div></td>
                                            <td>
                                                <div className="twm-table-controls">
                                                    <ul className="twm-DT-controls-icon list-unstyled">
                                                        <li>
                                                            <button title="View profile" data-bs-toggle="tooltip" data-bs-placement="top">
                                                                <span className="fa fa-eye" />
                                                            </button>
                                                        </li>
                                                        <li>
                                                            <button title="Send message" data-bs-toggle="tooltip" data-bs-placement="top">
                                                                <span className="far fa-envelope-open" />
                                                            </button>
                                                        </li>
                                                        <li>
                                                            <button title="Delete" data-bs-toggle="tooltip" data-bs-placement="top">
                                                                <span className="far fa-trash-alt" />
                                                            </button>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </td>
                                        </tr>
                                        {/*11*/}
                                        <tr>
                                            <td><input type="checkbox" /></td>
                                            <td>
                                                <div className="twm-DT-candidates-list">
                                                    <div className="twm-media">
                                                        <div className="twm-media-pic">
                                                            <JobZImage src="images/candidates/pic3.jpg" alt="#" />
                                                        </div>
                                                    </div>
                                                    <div className="twm-mid-content">
                                                        <a href="#" className="twm-job-title">
                                                            <h4>Ralph Johnson</h4>
                                                            <p className="twm-candidate-address">
                                                                <i className="feather-map-pin" />New York
                                                            </p>
                                                        </a>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>Bank Manager</td>
                                            <td>17/06/2023 at 01:15 pm</td>
                                            <td><div className="twm-jobs-category"><span className="twm-bg-red">Rejects</span></div></td>
                                            <td>
                                                <div className="twm-table-controls">
                                                    <ul className="twm-DT-controls-icon list-unstyled">
                                                        <li>
                                                            <button title="View profile" data-bs-toggle="tooltip" data-bs-placement="top">
                                                                <span className="fa fa-eye" />
                                                            </button>
                                                        </li>
                                                        <li>
                                                            <button title="Send message" data-bs-toggle="tooltip" data-bs-placement="top">
                                                                <span className="far fa-envelope-open" />
                                                            </button>
                                                        </li>
                                                        <li>
                                                            <button title="Delete" data-bs-toggle="tooltip" data-bs-placement="top">
                                                                <span className="far fa-trash-alt" />
                                                            </button>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </td>
                                        </tr>
                                        {/*12*/}
                                        <tr>
                                            <td><input type="checkbox" /></td>
                                            <td>
                                                <div className="twm-DT-candidates-list">
                                                    <div className="twm-media">
                                                        <div className="twm-media-pic">
                                                            <JobZImage src="images/candidates/pic4.jpg" alt="#" />
                                                        </div>
                                                    </div>
                                                    <div className="twm-mid-content">
                                                        <a href="#" className="twm-job-title">
                                                            <h4>Randall Henderson</h4>
                                                            <p className="twm-candidate-address">
                                                                <i className="feather-map-pin" />New York
                                                            </p>
                                                        </a>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>IT Contractor</td>
                                            <td>18/06/2023 at 10:35 am</td>
                                            <td><div className="twm-jobs-category"><span className="twm-bg-golden">Pending</span></div></td>
                                            <td>
                                                <div className="twm-table-controls">
                                                    <ul className="twm-DT-controls-icon list-unstyled">
                                                        <li>
                                                            <button title="View profile" data-bs-toggle="tooltip" data-bs-placement="top">
                                                                <span className="fa fa-eye" />
                                                            </button>
                                                        </li>
                                                        <li>
                                                            <button title="Send message" data-bs-toggle="tooltip" data-bs-placement="top">
                                                                <span className="far fa-envelope-open" />
                                                            </button>
                                                        </li>
                                                        <li>
                                                            <button title="Delete" data-bs-toggle="tooltip" data-bs-placement="top">
                                                                <span className="far fa-trash-alt" />
                                                            </button>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </td>
                                        </tr>
                                        {/*13*/}
                                        <tr>
                                            <td><input type="checkbox" /></td>
                                            <td>
                                                <div className="twm-DT-candidates-list">
                                                    <div className="twm-media">
                                                        <div className="twm-media-pic">
                                                            <JobZImage src="images/candidates/pic5.jpg" alt="#" />
                                                        </div>
                                                    </div>
                                                    <div className="twm-mid-content">
                                                        <a href="#" className="twm-job-title">
                                                            <h4>Randall Warren</h4>
                                                            <p className="twm-candidate-address">
                                                                <i className="feather-map-pin" />New York
                                                            </p>
                                                        </a>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>Digital &amp; Creative</td>
                                            <td>22/06/2023 at 10:35 am</td>
                                            <td><div className="twm-jobs-category"><span className="twm-bg-green">Approved</span></div></td>
                                            <td>
                                                <div className="twm-table-controls">
                                                    <ul className="twm-DT-controls-icon list-unstyled">
                                                        <li>
                                                            <button title="View profile" data-bs-toggle="tooltip" data-bs-placement="top">
                                                                <span className="fa fa-eye" />
                                                            </button>
                                                        </li>
                                                        <li>
                                                            <button title="Send message" data-bs-toggle="tooltip" data-bs-placement="top">
                                                                <span className="far fa-envelope-open" />
                                                            </button>
                                                        </li>
                                                        <li>
                                                            <button title="Delete" data-bs-toggle="tooltip" data-bs-placement="top">
                                                                <span className="far fa-trash-alt" />
                                                            </button>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <th />
                                            <th>Name</th>
                                            <th>Applied for</th>
                                            <th>Date</th>
                                            <th>Status</th>
                                            <th />
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default EmpCandidatesPage;