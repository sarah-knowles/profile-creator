import React, { useState } from 'react'
import { connect } from 'react-redux'
import { fetchFormDetails } from '../actions'


function BasicDetails(props) {
  const [state, setState] = useState({
    name: '',
    phone: '',
    email: '',
    profileIntro: ''
  })

  const dispatchHandler = () => {
    props.dispatch(fetchFormDetails(state))
  }

  const handleChange = (evt) => {
    const { name, value } = evt.target
    setState({ ...state, [name]: value })
  }

  return (
    <div>
      <div className='basicDetails' >
        <h3>Basic Details</h3>
        <label id="Name">Name:</label>
        <input aria-labelledby="Name" type='text' name="name" id={0} value={state.name} onChange={handleChange} onBlur={dispatchHandler}></input>
        <label>Phone:</label>
        <input type='text' name="phone" id={1} value={state.phone} onChange={handleChange} onBlur={dispatchHandler}></input>
        <label>Email:</label>
        <input type='text' name="email" id={2} value={state.email} onChange={handleChange} onBlur={dispatchHandler}></input>
      </div >

      <div className='profileIntro'>
        <h3>Profile Intro</h3>
        <label>Profile Intro:</label>
        <input type='text' name="profileIntro" value={state.profileIntro} onChange={handleChange} onBlur={dispatchHandler}></input>
      </div>
    </div>
  )
}

export default connect()(BasicDetails)