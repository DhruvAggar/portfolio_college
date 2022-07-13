import React from 'react'
import avatar from "../assets/AvatarMaker.svg"


const Hero = () => {
    const flexbox={
        display:"flex",
        height:"400px",
        color:"white",
    }
  return (
    <section style={flexbox}>
        <img src={avatar} alt='profile pic'style={{ width:"300px"}}/>
        <div style={{}}>
        <h1 style={{paddingTop:"50px", paddingBottom:"20px"}}>Hi, This is Ashish Bhandari_</h1>
        <p style={{textAlign:"left", paddingLeft:"150px", paddingRight:"50px",fontSize:"20px"}}>A budding computer engineer and developer, currently pursuing computer science as a pre-final year student at DTC, Delhi, India.</p>
        <p style={{textAlign:"left", paddingLeft:"150px", paddingRight:"50px",fontSize:"20px"}}>I am good at problem solving and analytical thinking. I participate in coding contests regularly to brush up my core DSA skills, simultaneously working on my development skills to build eye-catching and usable websites.</p>
        </div>
    </section>
  )
}

export default Hero