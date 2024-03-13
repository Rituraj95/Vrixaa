import React from 'react'
import './Page3.css'
import Searchbox2 from './Searchbox2'
import vs from './Asset/vs.png'
import learning from './Asset/learning1.png'
import learningg from './Asset/learning2.png'


export default function Page3() {
  return (
    <>
    
    <div className='page3'>

<h1 className='headingText'>Explore Our Online Learning</h1>
<div className='searchbox'>
    <Searchbox2></Searchbox2>
</div>
<div className='cardd'>
<div className='card'>   
<img src={vs} alt="" />
    <h1>Visual learning</h1>
    <p>Incorporate diagrams and charts to explain concepts visually</p>
</div>

<div className='card'>   
<img src={learning} alt="" />
    <h1>Visual learning</h1>
    <p>Incorporate diagrams and charts to explain concepts visually</p>
</div>

<div className='card'>   
<img src={learningg} alt="" />
    <h1>Visual learning</h1>
    <p>Incorporate diagrams and charts to explain concepts visually</p>
</div>



</div>

      
    </div>
    </>

    
  )
}
