import React from 'react'

function Card({ title, value }) {

    const formatNumber = (value) => {
        return value && value.toFixed(2).replace(/(\d)(?=(\d{2})+\d\.)/g, '$1,');
    }
    return (
        <div className="card border-left-primary shadow h-100 py-2">
            <div className="card-body">
                <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                        <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                            {title}</div>
                        <div className="h5 mb-0 font-weight-bold text-gray-800">{formatNumber(value)}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
