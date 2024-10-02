import React from 'react'

const MovieCard =({myData})=>{
    const {id, title, body} = myData
    return (
        <div className="card">
        <div className="card-body">
            <h5 className="card-title">{id}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{body.substr(0, 150)}</h6>
            <p className="card-text btn btn-success my-3">{title.substr(0,15)}</p>
        </div>
    </div>
    )
}
export default MovieCard