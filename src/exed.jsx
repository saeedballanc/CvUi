
import { useState } from 'react';
import './App.css'







  const ExEd = () => {



    const [move1 , setMove1] = useState(true);
    const [move2 , setMove2] = useState(true);



    return <>
    

    <div className='container-two'>
        


        <div className='experience'
        
          onMouseEnter={()=>setMove1(false)}
          onMouseLeave={()=>setMove1(true)}
          >
         


          <div className='title-one'>

           <span>

            <svg className='logo-1' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
   <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3" />
             </svg>

       </span>

           <h6>experience</h6> 
          </div>

          <div>
           <span><p>Lorem</p><p>Avril 2023</p></span>
           <span><p>Lorem</p><p>Avril 2023</p></span>
           <span><p>Lorem</p><p>Avril 2023</p></span>
          </div>

        </div>






          <div className={` ${move1 ? 'ball' : 'left'} || ${move2 ? 'ball' : 'right'}`}></div>






        <div className='education'
        
         onMouseEnter={()=>setMove2(false)}
         onMouseLeave={()=>setMove2(true)}
        >
          
        <div className='title-two'>

           <span>
            
            <svg className="logo-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
     <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
            </svg>

           </span>


           <h6>education</h6> 
          </div>

          <div>
           <span><p>Lorem</p><p>Avril 2023</p></span>
           <span><p>Lorem</p><p>Avril 2023</p></span>
           <span><p>Lorem</p><p>Avril 2023</p></span>
          </div>

        </div>
        


      </div>

    </>

  }


   
  export default ExEd;