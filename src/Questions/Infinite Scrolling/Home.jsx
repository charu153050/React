import React ,{useState,useEffect} from 'react'
import axios from 'axios'
import MovieComponent from './MovieComponent'
import Loading from './Loading'
 

const Home =()=>{

    const[card,setCard]=useState([])
    const[page,setPage]=useState(1)
    const[loading,setLoading]=useState(true)
     const getCardData =async()=>{
        const res = await axios(`https://jsonplaceholder.typicode.com/posts?_limit=9&_page=${page}`)
        const data =  res.data
        // console.log(data)
        setCard((prev)=>[...prev,...data])
        setLoading(false)
     }

     const handleInfiniteScroll =()=>{
        const scrollTop = document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight;
        const innerWidth = window.innerHeight
        try{
            if(scrollHeight <= scrollTop+innerWidth){
                setLoading(true)
                setPage((prev)=>prev+1)
              }

        }catch(e){
           console.log(e)
        }
        
     }

    useEffect(()=>{
        getCardData()
    },[page])

    useEffect(()=>{
        window.addEventListener("scroll",handleInfiniteScroll)
        return ()=>{
            window.removeEventListener("scroll",handleInfiniteScroll)
        }

    },[])

    
    return(
        <div>
        <MovieComponent movieInfo={card}/>
        {loading && <Loading/>}
        </div>
    )
}

export default Home