import logo from './logo.svg';
import './App.css';
import React from 'react';
// import { useState } from 'react';

function DiseaseList() {
  return (
    <div>
      <button className="dropdown-header">Disease name &#x25B2;</button>
      <div className="dropdown-list">
        <div>Ebola</div>
        <div>Covid-19</div>
        <div>Tuberculosis</div>
        <div>Cancer</div>
      </div>
    </div>
  );
}

function CountryList() {
  return (
    <div>
      <button className="dropdown-header">Country name &#x25B2;</button>
      <div className="dropdown-list">
        <div>South Africa</div>
        <div>Russia</div>
        <div>Spain</div>
        <div>Japan</div>
      </div>
    </div>
  );
}

function FillOutInformation() {
  return (
    <div className="form-container">
      <h2>Fill Out Information</h2>
      <div className="lists-row">
        <DiseaseList />
        <CountryList />
      </div>
      <button className="submit-btn">Submit</button>
    </div>
  );
}

export default function MainFunction() {
  return (
    <div className="main-function"> 
      <h1>Main Function</h1>
      <FillOutInformation />
      {/* You can add a placeholder for the answer box */}
      <div className="answer-box">Answer will be provided here</div>
    </div>
  );
}
