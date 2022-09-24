import React from 'react'
import loading from '../Components_styling/loading.gif'
export default function Spinner() {
  return (
    <div style={{margin:"auto"}}>
        <img src={loading} alt="" />
    </div>
  )
}
