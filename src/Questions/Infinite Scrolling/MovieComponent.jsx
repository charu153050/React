import React from 'react'
import MovieCard from './MovieCard'

const MovieComponent =({movieInfo})=>{
    return (
        <div className='container my-3'>
             <h2>List of Cards</h2>
            <div className='row'>
                {movieInfo.map((data, i) => {
                    return (
                        <div key={i} className='col-4 my-3'>
                            
                            <MovieCard myData={data}/>
                        </div>
                    )
                })}

            </div>

        </div>
    )
}

export default MovieComponent