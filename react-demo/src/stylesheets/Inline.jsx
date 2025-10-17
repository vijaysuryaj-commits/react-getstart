import React from 'react'

function Inline() {
    let style={
        fontSize:"30px",
        color:"blue"
    }
  return (
    <div><h1 style={style}>
        Inline
        </h1 >
        <h1 className='heading'>child component</h1>
         {/* <h1 className={styles.style}>Module css</h1> error styles is not defined */}
        </div>
        
  )
}

export default Inline