import { NavLink } from "react-router-dom";
import SectionJobsSidebar1 from "../../sections/jobs/sidebar/section-jobs-sidebar1";
import SectionRecordsFilter from "../../sections/common/section-records-filter";
import SectionPagination from "../../sections/common/section-pagination";
import { useEffect, useState } from "react";
import axios from "axios";
import { loadScript } from "../../../../../globals/constants";

function CandidateGridPage() {

    const _filterConfig = {
        prefix: "Showing",
        type: "Candidates",
        total: "2,150",
        showRange: false,
        showingUpto: ""
    };

    const [candidates, setCandidates] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [candidatesPerPage, setCandidatesPerPage] = useState(10);

    useEffect(() => {
        loadScript("js/custom.js");

        // Fetch the candidate data from the API
        axios.get('http://localhost:8080/candidate')
            .then((response) => {
                if (Array.isArray(response.data)) {
                    setCandidates(response.data);
                } else {
                    setCandidates([]);
                    console.error('Response data is not an array');
                }
            })
            .catch((error) => {
                console.error('There was an error fetching the candidates:', error);
                setCandidates([]); // Optionally clear the candidates list if the fetch fails
            });
    }, []);

    // Pagination Logic: Slice the candidates based on the current page and candidatesPerPage
    const indexOfLastCandidate = currentPage * candidatesPerPage;
    const indexOfFirstCandidate = indexOfLastCandidate - candidatesPerPage;
    const currentCandidates = candidates.slice(indexOfFirstCandidate, indexOfLastCandidate);

    // Handle page change
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    // Handle candidates per page change
    const handleCandidatesPerPageChange = (event) => {
        setCandidatesPerPage(Number(event.target.value));
        setCurrentPage(1); // Reset to the first page
    };

    return (
        <div className="section-full p-t120 p-b90 site-bg-white">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-12 rightSidebar">
                        <SectionJobsSidebar1 />
                    </div>
                    <div className="col-lg-8 col-md-12">
                        <SectionRecordsFilter   
                            _config={_filterConfig}
                            onCandidatesPerPageChange={handleCandidatesPerPageChange} 
                        />
                        <div className="twm-candidates-grid-wrap">
                            <div className="row">
                                {currentCandidates.length > 0 ? (
                                    currentCandidates.map((candidate) => (
                                        <div className="col-lg-6 col-md-6" key={candidate._id}>
                                            <a href={`/can-detail/${candidate._id}`}>
                                                <div className="twm-candidates-grid-style1 mb-5">
                                                    <div className="twm-media">
                                                        <div className="twm-media-pic">
                                                            <img
                                                                src={`http://localhost:8080/${candidate.Profileimage}` || 'images/logo-12.jpeg'}
                                                                style={{ objectFit: 'contain' }}
                                                                alt="Candidate"
                                                            />
                                                        </div>
                                                        <div className="twm-candidates-tag">
                                                            {candidate.Qualification && <span>Featured</span>}
                                                        </div>
                                                    </div>
                                                    <div className="twm-mid-content">
                                                        <NavLink to={`/can-detail/${candidate._id}`} className="twm-job-title">
                                                            <h4>{candidate.Username}</h4>
                                                        </NavLink>
                                                        <p>{candidate.Jobcategory}</p>
                                                        <NavLink to={`/can-detail/${candidate._id}`} className="twm-view-prifile site-text-primary">
                                                            View Profile
                                                        </NavLink>
                                                        <div className="twm-fot-content">
                                                            <div className="twm-left-info">
                                                                <p className="twm-candidate-address">
                                                                    <i className="feather-map-pin" />
                                                                    {candidate.Country}
                                                                </p>
                                                                <div className="twm-jobs-vacancies">
                                                                    {candidate.Expectedsalery} <span>/ Month</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    ))
                                ) : (
                                    <p>No candidates available</p>
                                )}
                            </div>
                        </div>
                        <SectionPagination
                            totalItems={candidates.length}
                            perPage={candidatesPerPage} 
                            currentPage={currentPage}
                            paginate={paginate}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CandidateGridPage;
