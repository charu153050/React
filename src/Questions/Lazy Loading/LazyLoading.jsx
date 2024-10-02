import React,{Suspense,lazy} from 'react'
const LazyComponent = lazy(()=>import ('./LazyComponent') )


const LazyLoading =()=>{
    return(
        <div>
      <h4>Lazy Loading Example</h4>
      <Suspense fallback={<div>Loading Lazy Component..............</div>}>
        <LazyComponent/>
      </Suspense>
        </div>
    )
}

export default LazyLoading