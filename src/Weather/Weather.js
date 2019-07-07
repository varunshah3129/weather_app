import React from 'react';

const Weather =(props)=>{
    return(
        <div className="col-md-6">
            {props.country && props.city && <div className="card-body"><p><strong>Location:</strong> {props.city}, {props.country}</p></div>}
            {props.temperatureC && <div className="card-body"><p onClick={props.click}><strong>Temperature:</strong> {props.temperatureF} &#8457; <span>/</span> {props.temperatureC} &#8451;</p></div>}
            {props.humidity && <div className="card-body"><p><strong>Humidity:</strong> {props.humidity}</p></div>}
            {props.description && <div className="card-body"><p><strong>Conditions:</strong>  {props.description}</p></div>}
            {props.error && <div className="card-body"><p>{props.error}</p></div>}

        </div>

    )
}

export default Weather;