import React from 'react'
import '../Components/Title.css';

function Title({title}) {
  return (
    <div className='tilte-styles'>
        <h4>{title}</h4>
    </div>
  )
}

export default Title