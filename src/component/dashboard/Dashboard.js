import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../card/Card';

function Dashboard() {


    const [covidDetails, setCovidDetails] = useState({ recovered: '', confirmed: '', deaths: '' });
    useEffect(() => {
        const fetchCovidDetails = async () => {
            const covidDetails = await axios.get('https://covid19.mathdro.id/api/');
            setCovidDetails(covidDetails.data);
        }
        fetchCovidDetails();
    }, [])
    return (
        < div className="container-fluid">
            <div className="row">
                <div className="col-xl-4 col-md-6 mb-4">
                    <Card title='Total Confirmed' value={covidDetails.confirmed.value} colorclassName='text-primary'></Card>
                </div>
                <div className="col-xl-4 col-md-6 mb-4">
                    <Card title='Total Recovered' value={covidDetails.recovered.value} colorclassName='text-success'></Card>
                </div>
                <div className="col-xl-4 col-md-6 mb-4">
                    <Card title='Total Deaths' value={covidDetails.deaths.value} colorclassName='text-info'></Card>
                </div>
            </div>
        </div >
    )
}

export default Dashboard
