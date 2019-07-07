import React from 'react';



const Forms =(props)=>{
    return (
        <div className="row">
            <div className="col-md-6">


            <form  onSubmit={props.loadWeather}>
                <div className="form-group">
                    <label >City:</label>
                    <input className="form-control" type="text" name="city" placeholder="City..." />
                </div>
                <div>
                    <label>Country:</label>
                    <input className="form-control" type="text" name="country" placeholder="Country..." />

                </div>
                <br/><p> <button className="btn-outline-primary">Get Weather</button> </p>
            </form>
            </div>
        </div>

    )

}
export default Forms;