import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'


const Countries = ({ countriesPromise }) => {

    const [visitedCountries, setVisitedCountries] = useState([])

    const countries = use(countriesPromise);

    const handleVisitedCountries = (country) => {
        console.log('country visited', country)
    }

    return (
        <div>
            <h2>Traveling Countries: {countries.length}</h2>
            <div className='countries'>
                {
                    countries.map(country => <Country
                        key={country.cca3}
                        handleVisitedCountries={handleVisitedCountries}
                        country={country}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;