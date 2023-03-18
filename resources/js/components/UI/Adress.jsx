import React from 'react';
import "../styles/adress.css"

export default function Adress( ) {
  return (
    <div className='w-100'>
        <div className='add'>
            
                <div className='w-50 adress-it'>
                    <div className=''>
                        <div>
                            <h5>Adress :</h5>
                            <p>Safi, Morocco</p>
                        </div>
                        <div>
                            <h5>Phone Number :</h5>
                            <p>+212665474399</p>
                        </div>
                        <div>
                            <h5>Workimg Hours</h5>
                            <p>Mon-Sat : 9:00 - 7:00pm</p>
                        </div>
                    </div>
                </div>
            
            <div className='w-50 adress_item'>
                <div className='title'>Our mission</div>
                <h4 className='m-4 title-a'>At "Rent Car", we want to give you with the best  experience possible.</h4>
                <p>From researching the car you want to test driving your options, were here to help with our knowledgeable sales staff and an impressive selection of cars.</p>
            </div>
        </div>
    </div>
  )
}
