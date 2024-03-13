import React from 'react'
import './maincontent4.css'
import pic1 from './Asset/pic1.png'
import pic2 from './Asset/pic2.png'
import pic3 from './Asset/pic3.png'
import pic4 from './Asset/pic4.png'


export default function Maincontent4() {
  return (
  
    <div className='galtext' >

    
    <div >  
        <div>
        <img src={pic1} alt="" />
        <img src={pic2} alt="" />
        </div>
        <div>
        <img src={pic4} alt="" />
        <img src={pic3} alt="" />
        </div>
    </div>

    <div className='text'>
        <h2>Projects Building</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis quaerat asperiores minus odit nesciunt odio id. Beatae dolores laborum rem consequatur quas iste molestiae fugiat voluptas tenetur. Eligendi, optio reiciendis.</p>
    </div>


    </div>


  )
}
