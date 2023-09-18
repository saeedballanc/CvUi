

import { useState } from 'react';
import ExEd from './exed';
import Hexagon from './hexagon';
import SideBar from './sideBar'
import './webgi.css'
import programingSkill from './programingSkill';
import softwareSkill from './softwareSkill';





function App() {



  const [budanYaNabudan , setBudanYaNabudan] = useState(true || false)
  const [hide , setHide] = useState(true)
  


  return<>

    
  

{budanYaNabudan ? <Hexagon /> : ''}
{budanYaNabudan ? '' : <Hexagon />}

  


  <SideBar hide={hide}/>


  <ExEd />




<div>

     <button className='button' onClick={()=>setHide(!hide)}></button>
     <button className='button' onClick={()=>setHide(!hide)}></button>
     <button className='button' onClick={()=>setHide(!hide)}></button>

</div>




     <div className='paye'>
      <h4>I am a front-end developer, but I have basic knowledge in cases other than the front-end that I mentioned</h4>
     </div>

    
    

    
      
    {budanYaNabudan ? 
   


   <div className='container-three'>
  


   <div className='software-skills'>
   
   
     <div className='title-three'>
        <span></span>
        <h6 onClick={()=>setBudanYaNabudan(false)}><ion-icon name="build"></ion-icon></h6> 
       </div>
   
   
       <ul>
         <li>html5</li>
         <li>css3</li>
         <li>tailwind/bootstrap</li>
         <li>js</li>
         <li>react</li>
         <li>next(js)</li>
         <li>node(js)/express(js)</li>
         <li>mongoDB</li>
         <li>mysql</li>
         <li>react Query</li>
         <li>graphQl</li>
       </ul>
   
   
        
   
   
        
   
        <div className='columns'>
         
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
   
        </div>
   
   
   </div>
   
   
   
   
   
   
   
   
   
   <div className='programing-skills'>
   
   
       <div className='title-four'>
        <span></span>
        {/* <h6>Software Skills</h6>  */}
       </div>
   
   
   </div>
   
   
   
   </div>     
   
   
   






   
   :    
   
   






  
  
  <div className={ budanYaNabudan ? '' : 'container-four'}>




    <div className='title-four'>
      <span></span>
      <h6 onClick={()=>setBudanYaNabudan(true)}><ion-icon name="code"></ion-icon></h6> 
      </div>




      <div className='bahune'>
        <h5>i learned this but very long past and i forgot but if you need im work this im learn very fast.</h5>
      </div>



    <div className='basket'></div>



  <div className='box box-1' >
    <div className='percent' >
      
      <svg>
        <circle cx="70" cy="70" r="70"></circle>
        <circle cx="70" cy="70" r="70"></circle>
      </svg>

      <div className='number'>
        <h2> 87<span>%</span> </h2>
      </div>
    </div>

      <h2 className='text'>Photoshop</h2>

  </div>



  
  <div className='box box-2'>
    <div className='percent'>
      
      <svg>
        <circle cx="70" cy="70" r="70"></circle>
        <circle cx="70" cy="70" r="70"></circle>
      </svg>

      <div className='number'>
        <h2> 40<span>%</span> </h2>
      </div>
    </div>

      <h2 className='text'>Ilustrator</h2>

  </div>




  <div className='box box-3'>
    <div className='percent'>
      
      <svg>
        <circle cx="70" cy="70" r="70"></circle>
        <circle cx="70" cy="70" r="70"></circle>
      </svg>

      <div className='number'>
        <h2> 65<span>%</span> </h2>
      </div>
    </div>

      <h2 className='text'>Premiere</h2>

  </div>




  <div className='box box-4'>
    <div className='percent'>
      
      <svg>
        <circle cx="70" cy="70" r="70"></circle>
        <circle cx="70" cy="70" r="70"></circle>
      </svg>

      <div className='number'>
        <h2> 30<span>%</span> </h2>
      </div>
    </div>

      <h2 className='text'>AfterEffect</h2>

  </div>




  <div className='box box-5'>
    <div className='percent'>
      
      <svg>
        <circle cx="70" cy="70" r="70"></circle>
        <circle cx="70" cy="70" r="70"></circle>
      </svg>

      <div className='number'>
        <h2> 50<span>%</span> </h2>
      </div>
    </div>

      <h2 className='text'>Word</h2>

  </div>




  <div className='box box-6'>
    <div className='percent'>
      
      <svg>
        <circle cx="70" cy="70" r="70"></circle>
        <circle cx="70" cy="70" r="70"></circle>
      </svg>

      <div className='number'>
        <h2> 56<span>%</span> </h2>
      </div>
    </div>

      <h2 className='text'>PowerPoint</h2>

  </div>




  <div className='box box-7'>
    <div className='percent'>
      
      <svg>
        <circle cx="70" cy="70" r="70"></circle>
        <circle cx="70" cy="70" r="70"></circle>
      </svg>

      <div className='number'>
        <h2> 35<span>%</span> </h2>
      </div>
    </div>

      <h2 className='text'>Exel</h2>

  </div>




  <div className='box box-8'>
    <div className='percent'>
      
      <svg>
        <circle cx="70" cy="70" r="70"></circle>
        <circle cx="70" cy="70" r="70"></circle>
      </svg>

      <div className='number'>
        <h2> 72<span>%</span> </h2>
      </div>
    </div>

      <h2 className='text'>Figma</h2>

  </div>




 </div>
  

   }









   





   


  <div className='container-five'>



      <div className='bahune'>
        <h5>i learned this but very long past and i forgot but if you need im work this im learn very fast.</h5>
      </div>




  <div className='box box-1' >
    <div className='percent' >
      <div className='number'>
        <h2> 87<span>%</span> </h2>
      </div>
    </div>

      <h2 className='text'>Photoshop</h2>

  </div>



  
  <div className='box box-2'>
    <div className='percent'>
      <div className='number'>
        <h2> 40<span>%</span> </h2>
      </div>
    </div>

      <h2 className='text'>Ilustrator</h2>

  </div>




  <div className='box box-3'>
    <div className='percent'>
      <div className='number'>
        <h2> 65<span>%</span> </h2>
      </div>
    </div>

      <h2 className='text'>Premiere</h2>

  </div>




  <div className='box box-4'>
    <div className='percent'>
      <div className='number'>
        <h2> 30<span>%</span> </h2>
      </div>
    </div>

      <h2 className='text'>AfterEffect</h2>

  </div>




  <div className='box box-5'>
    <div className='percent'>
      <div className='number'>
        <h2> 50<span>%</span> </h2>
      </div>
    </div>

      <h2 className='text'>Word</h2>

  </div>




  <div className='box box-6'>
    <div className='percent'>
      <div className='number'>
        <h2> 56<span>%</span> </h2>
      </div>
    </div>

      <h2 className='text'>PowerPoint</h2>

  </div>




  <div className='box box-7'>
    <div className='percent'>
      <div className='number'>
        <h2> 35<span>%</span> </h2>
      </div>
    </div>

      <h2 className='text'>Exel</h2>

  </div>




  <div className='box box-8'>
    <div className='percent'>
      <div className='number'>
        <h2> 72<span>%</span> </h2>
      </div>
    </div>

      <h2 className='text'>Figma</h2>

  </div>




 </div>
  


    </>
}


export default App;
