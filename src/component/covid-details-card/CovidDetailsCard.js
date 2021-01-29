import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CovidDetailsCard({ country }) {

    const [covidDetails, setCovidDetails] = useState({ confirmed: '', recovered: '', deaths: '' });

    useEffect(() => {
        const fetchCovidDataForCountry = async () => {
            const covidDetails = await axios.get(`https://covid19.mathdro.id/api/countries/${country}`);
            console.log(covidDetails.data);
            setCovidDetails(covidDetails.data);
        }
        fetchCovidDataForCountry();

    }, [])

    const formatNumber = (value) => {
        return value && value.toFixed(2).replace(/(\d)(?=(\d{2})+\d\.)/g, '$1,');
    }
    return (
        <div className="card border-left-primary shadow h-100 py-2">
            <div className="card-body">
                <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                        <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                            {country}</div>
                        <div className="h5 mb-0 font-we ight-bold text-gray-800">Confirmed :{formatNumber(covidDetails.confirmed.value)}</div>
                        <div className="h5 mb-0 font-we ight-bold text-gray-800">Recovered : {formatNumber(covidDetails.recovered.value)}</div>
                        <div className="h5 mb-0 font-we ight-bold text-gray-800">Deaths : {formatNumber(covidDetails.deaths.value)}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CovidDetailsCard
