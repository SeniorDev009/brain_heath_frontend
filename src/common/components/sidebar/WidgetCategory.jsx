import Link from "next/link";
import Image from "next/image";
import Select from 'react-select';
import { useState } from 'react'
import { useEffect } from "react";
const gender = [
  { value: '', label: 'Select Gender' },
  { value: 'male', label: 'Male' },
  { value: 'female', label: 'Female' },
  { value: 'both', label: 'Both' }
]
const age = [
  { value: '', label: 'Select Age' },
  { value: '10', label: '10-20' },
  { value: '20-30', label: '20-30' },
  { value: '30-40', label: '30-40' },
  { value: '30-40', label: '30-40' }
]
const concern = [
  { value: '', label: 'Brain Health concern' },
  { value: 'yes', label: 'Yes' },
  { value: 'no', label: 'No' }
]
const WidgetCategory = () => {
  const [selectedGender, setSelectedGender] = useState(null);
  const [selectedAge, setSelectedAge] = useState(null);
  const [selectedConcern, setSelectedConcern] = useState(null);

  const handleChange = (selectedOption) => {
    setSelectedGender(selectedOption);
  };
  const handleAgeChange = (selectedOption) => {
    setSelectedAge(selectedOption);
  };
  const handleConcerChange = (selectedOption) => {
    setSelectedConcern(selectedOption);
  };
  return (
    <div>
      <div className="mb-4">
        <label className="lead text-dark">Select Gender</label>
        <Select
          className="basic-single"
          defaultValue={gender[0].label}
          isClearable={true}
          isSearchable={true}
          options={gender}
          onChange={handleChange}
        />
      </div>
      <div className="mt-0">
        <label className="lead text-dark">Select Age</label>
        <Select
          className="basic-single"
          defaultValue={age[0].label}
          isClearable={true}
          isSearchable={true}
          options={age}
          onChange={handleAgeChange}
        />
      </div>

      <div className="mt-4">
        <label className="lead text-dark">Brain Health Concern</label>
        <Select
          className="basic-single"
          defaultValue={concern[0].label}
          isClearable={true}
          isSearchable={true}
          options={concern}
          onChange={handleConcerChange}
        />
      </div>
      <div className="mt-4">
        <label className="lead text-dark">Race/ethnicity</label>
        <input
          type='text'
          style={{ height: '4.5rem', borderRadius: '4px' }}
        />
      </div>
      <div className="mt-4">
        <label className="lead text-dark">Location (zip code)</label>
        <input
          type='text'
          style={{ height: '4.5rem', borderRadius: '4px' }}
        />
      </div>
    </div>
  );
};

export default WidgetCategory;
