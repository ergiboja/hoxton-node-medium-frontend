import './app.css'
import {Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

function SingleProductPage(){
    const [posts, setPosts] = useState<any[]>([])

    const{postId}= useParams();
    const post = posts.find((post)=>post.id===postId)
    
    useEffect(() => {
        fetch('http://localhost:4000/post')
          .then(response => response.json())
          .then(data => {
            setPosts(data)
            console.log(data)
    
          })
    
      }, []);


    return(
        <>
        </>


    )
}


export default SingleProductPage