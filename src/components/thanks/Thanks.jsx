import React from 'react'
import './thanks.css'
import thankyou from '../../images/illustration-thank-you.svg'

const Thanks = () => {
  return (
    <div className='thanks-card'>
      <img src={thankyou} alt='' />
      <div className='thanks-selected'>
        <h3>You selected 4 out of 5</h3>
        </div>
        <div className='thanks-text'>
          <h1>Thank you!</h1>
          <p>We appreciate you taking the time to give a rating.
            If you ever need more support, don't hesitate to get in touch!
          </p>
        </div>
    </div>
  )
}

export default Thanks