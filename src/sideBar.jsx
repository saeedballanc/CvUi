

import './App.css';








const SideBar = ({hide}) => {

    

    return<>



    


   <div className={hide ? 'hide' : 'show'}>
    


    <div className="container">
       
           
       <div className="back-logo">
           
           <img src="../public/leaf-logo5.png" alt="" />
           <img src="../public/Alogo-leaf.png" alt="" draggable="false"/>
           <img src="../public/leaf-1.png" draggable="false"/>
           <img src="../public/leaf-2.png" draggable="false"/>
           <img src="../public/leaf-3.png" draggable="false"/>
           <img src="../public/leaf-4.png" draggable="false"/>
           <img src="../public/leaf-5.png" draggable="false"/>
           <img src="../public/leaf-6.png" draggable="false"/>
           <img src="../public/leaf-7.png" draggable="false"/>
           <img src="../public/leaf-8.png" draggable="false"/>
           <img src="../public/leaf-9.png" draggable="false"/>
           <img src="../public/leaf-10.png" draggable="false"/>
           <img src="../public/leaf-11.png" draggable="false"/>
           <img src="../public/leaf-12.png" draggable="false"/>
           {/* <p>Web Dev <br/> and <br/> UI/UX Designer</p> */}

       </div>
       
       <div className="about-me">
             
             <h6>About me</h6>
             <p>Qui aliqua incididunt anim do ipsum non consequat exercitation nisi exercitation mollit labore ipsum. Adipisicing id proident occaecat aliquip.</p>

       </div>
       
       <div className="contact-me">
           
           <h6>Contact me</h6>

           <div className='container-contact'>

            <ul>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="logo-contact">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </li>


                <li>
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="logo-contact">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                 </svg>
                </li>


                <li>
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="logo-contact">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                 </svg>
                </li>


                <li>
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="logo-contact">
  <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                 </svg>
                </li>

            </ul>



            <ul>
                <li> 0944 564 6987 </li>
                <li> Iran, Karaj </li>
                <li> saeedballanc@gmail.com </li>
                <li><a href="digikala.com">Link/WhatsUp</a></li>
            </ul>
           </div>

       </div>
       
       <div className="follow-me">

           <ul>

            <li><ion-icon name="logo-youtube"></ion-icon></li>

            <li><ion-icon name="logo-instagram"></ion-icon></li>

            <li><ion-icon name="logo-linkedin"></ion-icon></li>

           </ul>

       </div>
       
       
    </div>

    </div>

  </>
}
 
export default SideBar;