import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Link } from "react-router-dom";
import logo from './logo.svg'
import './App.css'

function Home(){
    const [posts, setPosts] = useState<any[]>([])
    

    const hour = new Date().getHours();
    const welcomeTypes = ['Good morning', 'Good afternoon', 'Good evening'];
    let welcomeText = '';
    if (hour < 12) welcomeText = welcomeTypes[0];
    else if (hour < 18) welcomeText = welcomeTypes[1];
    else welcomeText = welcomeTypes[2];
  
  
  
  
  
  
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
      <div   className="bg-warning">
        <div className="container ">
          <nav
            style={{ height: 100 }}
            className="navbar navbar-expand-lg navbar-light bg-warning fixed-top border border-dark"
          >
            <div className="container-fluid">
              <svg
                style={{ marginLeft: 200 }}
                viewBox="0 0 5555 680"
                className="bo bp"
                width={300}
              >
                <path d="M594.79 308.2c0 163.76-131.85 296.52-294.5 296.52S5.8 472 5.8 308.2 137.65 11.69 300.29 11.69s294.5 132.75 294.5 296.51M917.86 308.2c0 154.16-65.93 279.12-147.25 279.12s-147.25-125-147.25-279.12S689.29 29.08 770.61 29.08s147.25 125 147.25 279.12M1050 308.2c0 138.12-23.19 250.08-51.79 250.08s-51.79-112-51.79-250.08 23.19-250.08 51.8-250.08S1050 170.09 1050 308.2M1862.77 37.4l.82-.18v-6.35h-167.48l-155.51 365.5-155.51-365.5h-180.48v6.35l.81.18c30.57 6.9 46.09 17.19 46.09 54.3v434.45c0 37.11-15.58 47.4-46.15 54.3l-.81.18V587H1327v-6.35l-.81-.18c-30.57-6.9-46.09-17.19-46.09-54.3V116.9L1479.87 587h11.33l205.59-483.21V536.9c-2.62 29.31-18 38.36-45.68 44.61l-.82.19v6.3h213.3v-6.3l-.82-.19c-27.71-6.25-43.46-15.3-46.08-44.61l-.14-445.2h.14c0-37.11 15.52-47.4 46.08-54.3m97.43 287.8c3.49-78.06 31.52-134.4 78.56-135.37 14.51.24 26.68 5 36.14 14.16 20.1 19.51 29.55 60.28 28.09 121.21zm-2.11 22h250v-1.05c-.71-59.69-18-106.12-51.34-138-28.82-27.55-71.49-42.71-116.31-42.71h-1c-23.26 0-51.79 5.64-72.09 15.86-23.11 10.7-43.49 26.7-60.45 47.7-27.3 33.83-43.84 79.55-47.86 130.93-.13 1.54-.24 3.08-.35 4.62s-.18 2.92-.25 4.39a332.64 332.64 0 0 0-.36 21.69C1860.79 507 1923.65 600 2035.3 600c98 0 155.07-71.64 169.3-167.8l-7.19-2.53c-25 51.68-69.9 83-121 79.18-69.76-5.22-123.2-75.95-118.35-161.63m532.69 157.68c-8.2 19.45-25.31 30.15-48.24 30.15s-43.89-15.74-58.78-44.34c-16-30.7-24.42-74.1-24.42-125.51 0-107 33.28-176.21 84.79-176.21 21.57 0 38.55 10.7 46.65 29.37zm165.84 76.28c-30.57-7.23-46.09-18-46.09-57V5.28L2424.77 60v6.7l1.14-.09c25.62-2.07 43 1.47 53.09 10.79 7.9 7.3 11.75 18.5 11.75 34.26v71.14c-18.31-11.69-40.09-17.38-66.52-17.38-53.6 0-102.59 22.57-137.92 63.56-36.83 42.72-56.3 101.1-56.3 168.81C2230 518.72 2289.53 600 2378.13 600c51.83 0 93.53-28.4 112.62-76.3V588h166.65v-6.66zm159.29-505.33c0-37.76-28.47-66.24-66.24-66.24-37.59 0-67 29.1-67 66.24s29.44 66.24 67 66.24c37.77 0 66.24-28.48 66.24-66.24m43.84 505.33c-30.57-7.23-46.09-18-46.09-57h-.13V166.65l-166.66 47.85v6.5l1 .09c36.06 3.21 45.93 15.63 45.93 57.77V588h166.8v-6.66zm427.05 0c-30.57-7.23-46.09-18-46.09-57V166.65L3082 212.92v6.52l.94.1c29.48 3.1 38 16.23 38 58.56v226c-9.83 19.45-28.27 31-50.61 31.78-36.23 0-56.18-24.47-56.18-68.9V166.66l-166.66 47.85V221l1 .09c36.06 3.2 45.94 15.62 45.94 57.77v191.27a214.48 214.48 0 0 0 3.47 39.82l3 13.05c14.11 50.56 51.08 77 109 77 49.06 0 92.06-30.37 111-77.89v66h166.66v-6.66zM3934.2 588v-6.67l-.81-.19c-33.17-7.65-46.09-22.07-46.09-51.43v-243.2c0-75.83-42.59-121.09-113.93-121.09-52 0-95.85 30.05-112.73 76.86-13.41-49.6-52-76.86-109.06-76.86-50.12 0-89.4 26.45-106.25 71.13v-69.87l-166.66 45.89v6.54l1 .09c35.63 3.16 45.93 15.94 45.93 57V588h155.5v-6.66l-.82-.2c-26.46-6.22-35-17.56-35-46.66V255.72c7-16.35 21.11-35.72 49-35.72 34.64 0 52.2 24 52.2 71.28V588h155.54v-6.66l-.82-.2c-26.46-6.22-35-17.56-35-46.66v-248a160.45 160.45 0 0 0-2.2-27.68c7.42-17.77 22.34-38.8 51.37-38.8 35.13 0 52.2 23.31 52.2 71.28V588z"></path>
              </svg>
              <div
                className="collapse navbar-collapse col-2 offset-4"
                id="navbarNav"
              >
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a
                      className="nav-link active px-3 lead"
                      aria-current="page"
                      href="#"
                    >
                      <strong>Our Story</strong>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active px-3 lead">
                     <Link to="/create"> <strong>Create New Post</strong></Link>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active px-3 lead" href="#">
                      <strong>Sign In</strong>
                    </a>
                  </li>
                  <li className="nav-item px-4">
                    <a className="nav-link btn btn-success text-light" href="#">
                      Get Started
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>

        <div style={{ marginTop: 100 }} className="bg-warning">
          <div className="container pb-3">
            <div className="row">
              <div className="jumbotron col-8">
                <h1 className="display-1">
                  <strong>Where good ideas </strong>
                </h1>
                <h1 className="display-1">
                  <strong>find you</strong>
                </h1>
                <p className="lead pt-5">
                  <strong>
                    Read and share new perspectives on just about any topic.
                    Everyone???s
                  </strong>{" "}
                </p>
                <p className="lead">
                  <strong>
                    {" "}
                    welcome.{" "}
                    <a className="text-dark" href="">
                      Learn more.
                    </a>
                  </strong>{" "}
                </p>
                <p className="lead">
                  <a className="btn btn-outline-dark btn-lg" href="#" role="button">
                    Get Started
                  </a>
                </p>
              </div>
              <div className="col-4">
                <img
                  className="rounded-circle"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5DkU7_qelDREH_017L0OfxIntyo77zfm91w&usqp=CAU"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>

        <hr className="my-4" />
      </div>

      

      <hr />

      <div className="container pt-5">
        <div className="row">
            

          <section className="col-8 pb-5">
           {posts.map(post=>{
            return(
                <>
                
                
              <article key={post.id} className="row py-4">
              
               
              <div className="col-8">
                <img
                  src={post.users.user_photoURl}
                  alt=""
                 width="30px"height="30px"/>
                <span className="px-1">
                  <strong> {post.users.username}</strong>
                </span>
                <h2 className="py-3">
                  <strong>
                    {post.title}
                  </strong>
                </h2>
                <p className="lead">
                  {post.paragraph}
                </p>
                <p className="lead fs-6">
                  4 min read{" "}
                  <svg
                    className="star-15px_svg__svgIcon-use"
                    width={15}
                    height={15}
                    viewBox="0 0 15 15"
                  >
                    <path d="M7.44 2.32c.03-.1.09-.1.12 0l1.2 3.53a.29.29 0 0 0 .26.2h3.88c.11 0 .13.04.04.1L9.8 8.33a.27.27 0 0 0-.1.29l1.2 3.53c.03.1-.01.13-.1.07l-3.14-2.18a.3.3 0 0 0-.32 0L4.2 12.22c-.1.06-.14.03-.1-.07l1.2-3.53a.27.27 0 0 0-.1-.3L2.06 6.16c-.1-.06-.07-.12.03-.12h3.89a.29.29 0 0 0 .26-.19l1.2-3.52z"></path>
                  </svg>
                </p>
                <svg
                  width={25}
                  height={25}
                  viewBox="0 0 25 25"
                  className="lm offset-11"
                >
                  <path
                    d="M19 6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14.66h.01c.01.1.05.2.12.28a.5.5 0 0 0 .7.03l5.67-4.12 5.66 4.13a.5.5 0 0 0 .71-.03.5.5 0 0 0 .12-.29H19V6zm-6.84 9.97L7 19.64V6a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v13.64l-5.16-3.67a.49.49 0 0 0-.68 0z"
                    fillRule="evenodd"
                  />
                </svg>
              </div>
              <div className="col-4">
                <img
                  src={post.image_url}
                  alt=""
                />
              </div>
              
              
            </article>
            
            </>
           
            )
           })}
            
            
            
            
          </section>

          <aside className="col-4">
            <h6 className="pb-2">DISCOVER MORE OF WHAT MATTERS TO YOU</h6>
            <ul className="list-inline aside-buttons">
              <li className="list-inline-item px-2 py-2">
                <a href="" className="btn btn-md btn btn-outline-secondary">
                  Self
                </a>
              </li>
              <li className="list-inline-item px-2 py-2">
                <a href="" className="btn btn-md btn btn-outline-secondary">
                  Relationship
                </a>
              </li>
              <li className="list-inline-item px-2 py-2">
                <a href="" className="btn btn-md btn btn-outline-secondary">
                  Data Science
                </a>
              </li>
              <li className="list-inline-item px-2 py-2">
                <a href="" className="btn btn-md btn btn-outline-secondary">
                  Programming
                </a>
              </li>
              <li className="list-inline-item px-2 py-2">
                <a href="" className="btn btn-md btn btn-outline-secondary">
                  Productivity
                </a>
              </li>
              <li className="list-inline-item px-2 py-2">
                <a href="" className="btn btn-md btn btn-outline-secondary">
                  Javascript
                </a>
              </li>
              <li className="list-inline-item px-2 py-2">
                <a href="" className="btn btn-md btn btn-outline-secondary">
                  Machine Learning
                </a>
              </li>
              <li className="list-inline-item px-2 py-2">
                <a href="" className="btn btn-md btn btn-outline-secondary">
                  Politics
                </a>
              </li>
              <li className="list-inline-item px-2 py-2">
                <a href="" className="btn btn-md btn btn-outline-secondary">
                  Healt
                </a>
              </li>
              <br />
              <a className="text-success" href="">
                <h5>See all topics </h5>
              </a>
              <hr />
            </ul>
          </aside>
        </div>
      </div>
    </>

    )
}

export default Home

