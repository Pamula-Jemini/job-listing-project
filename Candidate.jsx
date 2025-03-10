import React, { useState } from "react";

const Candidate = () => {
  const [candidates, setCandidates] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    resume: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCandidate = {
      name: formData.name,
      email: formData.email,
      resume: formData.resume ? formData.resume.name : "No file uploaded",
    };
    setCandidates([...candidates, newCandidate]);
    setFormData({ name: "", email: "", resume: null });
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Upload Candidate Details</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Resume</label>
          <input
            type="file"
            name="resume"
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Submit
        </button>
      </form>

      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4">Submitted Candidates</h2>
        {candidates.map((candidate, index) => (
          <div key={index} className="border p-4 rounded-lg shadow-sm mb-4">
            <p><strong>Name:</strong> {candidate.name}</p>
            <p><strong>Email:</strong> {candidate.email}</p>
            <p><strong>Resume:</strong> {candidate.resume}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Candidate;