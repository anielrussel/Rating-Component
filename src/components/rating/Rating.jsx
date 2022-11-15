import React from 'react'
import './rating.css'
import star from '../../images/icon-star.svg'
import { Link } from 'react-router-dom'
import Thanks from '../thanks/Thanks'


const Rating = () => {
  return (
    <div className='rating-card'>
      <div className='rating-card-image'>
        <img src={star} alt='star' />
        </div>
          <div className='rating-card-text'>
            <h1>How did we do?</h1>
            <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
          </div>
        <div className='rating-card-buttons'>
          <button className='btn1'>1</button>
          <button className='btn2'>2</button>
          <button className='btn3'>3</button>
          <button className='btn4'>4</button>
          <button className='btn5'>5</button>
        </div>
        <div className='submit'>
        <Link to='/thanks' element={<Thanks />} ><button>SUBMIT</button></Link>
        </div>
    </div>
  )
}

export default Rating