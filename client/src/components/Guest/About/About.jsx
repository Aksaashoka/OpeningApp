import React from 'react';
import './About.css'


export default function About(){
  const data = [​
  {name= "Melina Zellweger",linkedin="https://www.linkedin.com/in/melina-zellweger-/",github="https://github.com/zmelina99",image='./Images/Melina.png'},
  {name="Luciano de Pascua",linkedin="https://www.linkedin.com/in/lucianodepasqua/",github="https://github.com/ldepasqua",image='./Images/lucho.png'},
  {name="Nahuel Gomez",linkedin="https://www.linkedin.com/in/nelgoez/",github="https://github.com/nelgoez",image='./Images/nahu.jpg'},
  {name= "Julian Vazquez",linkedin="https://www.linkedin.com/in/julianvazquezdev/".github="https://github.com/jumjules42",image='./Images/juli.jpg'},
  {name="Leon Vila",linkedin="https://www.linkedin.com/in/leonvila/",github="https://github.com/leonvila98",image='./Images/leon.jpg'},
  {name="Sebastian Sanchez",linkedin="https://www.linkedin.com/in/sebastiansanchezisame/",github="https://github.com/SebaSanchezI",image='./Images/sebas.jpg'},
  {name="Edith Losada",linkedin="https://www.linkedin.com/in/edithlosada/",github="https://github.com/Ululette/",image='./Images/edith.png'} 
].  

return (
  <div className="row">
    <CardContact Info={data}/>
  </div>
  );


{/* <div className="row">

  <div className="col-sm-6">
 
    <div className="ih-item circle colored effect3 left_to_right">
        <div className="img"><img src={Melina} alt="img"/></div>
        <div className="info">
          <h3>Melina Zellweger</h3>
          <a href="https://www.linkedin.com/in/melina-zellweger-/">
         <img alt="Linkedin" src={linked}
         width="150" height="70"/>
           </a>
           <a href="https://github.com/zmelina99">
         <img alt="Github" src={github}
         width="150" height="70"/>
           </a>
        </div></div> 
 
  </div>
  
  <div className="col-sm-6">
 
    <div className="ih-item circle colored effect3 left_to_right">
        <div className="img"><img src={edith} alt="img"/></div>
        <div className="info">
          <h3>Edith Losada</h3>
          <a href="https://www.linkedin.com/in/edithlosada/">
         <img alt="Linkedin" src={linked}
         width="150" height="70"/>
           </a>
           <a href="https://github.com/Ululette/">
         <img alt="Github" src="./Images/github.png"
         width="150" height="70"/>
           </a>
        </div></div>
 
  </div>
  
  <div className="col-sm-6">
 
    <div className="ih-item circle colored effect3 left_to_right">
        <div className="img"><img src={juli} alt="img"/></div>
        <div className="info">
          <h3>Julian Vazquez</h3>
          <a href="https://www.linkedin.com/in/julianvazquezdev/">
         <img alt="Linkedin" src={linked}
         width="150" height="70"/>
           </a>
           <a href="https://github.com/jumjules42">
         <img alt="Github" src="./Images/github.png"
         width="150" height="70"/>/Images/github.png
           </a>
        </div></div>
 
  </div>
  
  <div className="col-sm-6">
 
    <div className="ih-item circle colored effect3 left_to_right">
        <div className="img"><img src={nahu} alt="img"/></div>
        <div className="info">
          <h3>Nahuel Gomez</h3>
          <a href="https://www.linkedin.com/in/nelgoez/">
         <img alt="Linkedin" src={linked}
         width="150" height="70"/>
           </a>
           <a href="https://github.com/nelgoez">
         <img alt="Github" src="./Images/github.png"
         width="150" height="70"/>
           </a>
        </div></div>
 
  </div>
  
  <div className="col-sm-6">
 
    <div className="ih-item circle colored effect3 left_to_right">
        <div className="img"><img src={leon} alt="img"/></div>
        <div className="info">
          <h3>Leon Vila</h3>
          <a href="https://www.linkedin.com/in/leonvila/">
         <img alt="Linkedin" src={linked}
         width="150" height="70"/>
           </a>
           <a href="https://github.com/leonvila98">
         <img alt="Github" src="./Images/github.png"
         width="150" height="70"/>
           </a>
        </div></div>
 
  </div>
  
  <div className="col-sm-6">
 
    <div className="ih-item circle colored effect3 left_to_right">
        <div className="img"><img src={alan} alt="img"/></div>
        <div className="info">
          <h3>Alan Diaz</h3>
          <a href="https://www.linkedin.com/in/alan-diaz-7dev/">
         <img alt="Linkedin" src={linked}
         width="150" height="70"/>
           </a>
           <a href="https://github.com/Aksaashoka">
         <img alt="Github" src="./Images/github.png"
         width="150" height="70"/>
           </a>        
           </div></div>
 
  </div>
  
  <div className="col-sm-6">
 
    <div className="ih-item circle colored effect3 left_to_right">
        <div className="img"><img src={sebas} alt="img"/></div>
        <div className="info">
          <h3>Sebastian Sanchez</h3>
          <a href="https://www.linkedin.com/in/sebastiansanchezisame/">
         <img alt="Linkedin" src={linked}
         width="150" height="70"/>
           </a>
           <a href="https://github.com/SebaSanchezI">
         <img alt="Github" src="./Images/github.png"
         width="150" height="70"/>
           </a>           </div></div>
           </div>    
  <div className="col-sm-6">
 
 <div className="ih-item circle colored effect3 left_to_right">
     <div className="img"><img src={lucho} alt="img"/></div>
     <div className="info">
       <h3>Luciano De Pasqua</h3>
       <a href="https://www.linkedin.com/in/lucianodepasqua/">
      <img alt="Linkedin" src={linked}
      width="150" height="70"/>
        </a>
        <a href="https://github.com/ldepasqua">
      <img alt="Github" src="./Images/github.png"
      width="150" height="70"/>
        </a>           </div></div> 
 
 </div> 
 </div>  */}
 }