import React from 'react'
import CardItem from './CardItem/CardItem'
import './cards.css'
//import '../Firebase/Firebase'

function Cards() {
 
  return (
    <div className='cards'>
    <h1>Check out these covers!</h1>
    <div className="cards__container">
        <div className="cards__wrapper">
            <ul className="cards__items">
                <CardItem 
                  src="images/img-2.jpg"
                  text="travel and shit"
                  label='label'
                  path='/services'
                />
                <CardItem 
                  src="images/img-2.jpg"
                  text="nothing"
                  label='label'
                  path='/services'
                />
                <CardItem 
                  src="images/health.jpg"
                  text="For Affordable Medical Cover!"
                  label='Medicare'
                  path='/services'
                />
            </ul>
            <ul className="cards__items">
                
            </ul>
            <ul className="cards__items">
                <CardItem 
                  src="images/vehicle.jpg"
                  text="Get Cover for your motor vehicle"
                  label='Motor Insurace'
                  path='/services'
                />
            </ul>
            <ul className="cards__items">
                <CardItem 
                  src="images/home.jpg"
                  text="Get your home covered"
                  label='Home Cover'
                  path='/services'
                />
            </ul>
        </div>
    </div>

    </div>
  )
}

export default Cards