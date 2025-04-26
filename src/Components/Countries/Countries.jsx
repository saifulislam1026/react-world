import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'


const Countries = ({ countriesPromise }) => {

    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitedFlags, setVisitedFlags] = useState([]);

    const countries = use(countriesPromise);

    const handleVisitedFlag = (flag) => {
        const newVisitedFlags = [...visitedFlags, flag];
        setVisitedFlags(newVisitedFlags);
    }

    const handleVisitedCountries = (country) => {
        console.log('country visited', country);
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);
    }

    return (
        <div>
            <h2>Traveling Countries: {countries.length}</h2>
            <h3>Travel so far: {visitedCountries.length}</h3>
            <div className='visited-flags-container'>
                {
                    visitedFlags.map((flag, index) => <img key={index} src={flag}></img>)
                }
            </div>
            <ol>
                {
                    visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
                }
            </ol>
            <div className='countries'>
                {
                    countries.map(country => <Country
                        key={country.cca3}
                        handleVisitedCountries={handleVisitedCountries}
                        handleVisitedFlag={handleVisitedFlag}
                        country={country}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;