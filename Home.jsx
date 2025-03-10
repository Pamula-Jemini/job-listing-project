import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import jobsData from "../data/jobs.json";

const Home = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    setJobs(jobsData);
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Job Listings</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {jobs.map((job) => (
          <div key={job.id} className="border p-4 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold">{job.title}</h2>
            <p className="text-gray-600">{job.company}</p>
            <p className="text-gray-600">{job.location}</p>
            <p className="text-sm text-blue-500">{job.status}</p>
          </div>
        ))}
      </div>
      <Link to="/candidate">
        <button className="mt-6 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
          Candidate Details
        </button>
      </Link>
    </div>
  );
};

export default Home;