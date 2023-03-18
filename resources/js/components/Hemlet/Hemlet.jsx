import React, { Children } from 'react'

export default function Hemlet(props) {
    document.title = "RentCar -" + props.title;

  return (
    <div className='w-100'>{props.Children}</div>
  )
}
