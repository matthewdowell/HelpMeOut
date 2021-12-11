import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import JobAvailableCard from '../JobAvailableCard';
import JobPostedCard from '../JobPostedCard';
import ListManager from '../ListManager';
import Contractors from '../Contractors';
import AppContext from '../../hooks/context';
import Search from '../Search.jsx';
import { getContractors, getUser, getJobs } from '../../utils';
import Contractors from '../Contractors';

const Main = function Main() {
  const { user } = useContext(AppContext);
  // console.log(user);


  //set state necessary for API data
  const [jobsPosted, setJobsPosted] = useState([]);
  const [contractorList, setContractorList] = useState([]);
  const [jobsAvailable, setJobsAvailable] = useState([]);
  const [jobsAccepted, setJobsAccepted] = useState([]);
  const [searchFeedData, setSearchFeedData] = useState([]);
  const [contractorListClicked, setContractorListClicked] = useState(true);

  //current userfeed -> defaults to client view
  //current searchFeed ->

  const userBtns = (<div><button>Client</button> <button>Contractor</button></div>);
  const searchFeedButtons = (<div>
    <button onClick={() => { setSearchFeedData(contractorList); setContractorListClicked(true)}}>Contractors</button>
    <button onClick={() => { setSearchFeedData(jobsAvailable); setContractorListClicked(false)}}>Jobs Available</button>
  </div>);

  //get jobs posted by user from API
  useEffect(() => {
    getUser(user.id).then((results) => {
      setJobsPosted(results.client_tasks);
      setJobsAccepted(results.contractor_tasks);
    })
    .catch(err => console.error(err));
    getContractors().then((results) => {
      setContractorList(results)}).catch(err => console.error(err));
    getJobs().then(setJobsAvailable).catch(err => console.error(err));
  }, [])

  //NOTE: We should create some type of interface that can toggle these lists dynamically, below is placeholder
  return (
    <div>
      <div style={{border: '1px solid black'}} className='userPosts'>
        {user.contractor ? userBtns : null}
        {/* currentfeed === false ? jobsPosted : jobs accepted */}
        <ListManager data={jobsPosted}>
          <JobPostedCard />
        </ListManager>
        <ListManager data={jobsAccepted}>
          <JobPostedCard />
        </ListManager>
      </div>
      <div style={{border: '1px solid black'}} className='searchList'>
        {user.contractor && searchFeedButtons}
        {contractorListClicked
          ? <ListManager data={contractorList}>
              <Contractors />
            </ListManager>
          : <ListManager data={jobsAvailable}>
              <jobsAvailableCard />
            </ListManager>}
      </div>
    </div>
  );
};

export default Main;
