import React, { useState } from 'react'
import { connect } from 'react-redux'
import { fetchOldEmploymentHistory } from '../actions'

function OldEmploymentHistory(props) {
  const [state, setState] = useState({
    oldEmploymentHistory: [{
      oldEmployer: '',
      oldEmploymentDate: '',
      oldRole: ''
    }]
  })

  const dispatchHandler = () => {
    props.dispatch(fetchOldEmploymentHistory(state))
  }

  const handleChange = (evt) => {
    evt.preventDefault()
    const { name, value, id, className } = evt.target
    state.oldEmploymentHistory[id][name] = value
    setState({ ...state })
  }

  const addMore = (evt) => {
    if (evt.key === "Enter") {
      evt.preventDefault()
    }
    setState({
      ...state,
      oldEmploymentHistory: [...state.oldEmploymentHistory, {
        oldEmployer: '',
        oldEmploymentDate: '',
        oldRole: ''
      }]
    })
  }

  return (

    <div className='oldEmploymentHistory'>
      <h3>Older Employment History</h3>
      {
        state.oldEmploymentHistory.map((el, idx) => {
          return (
            <div key={idx}>
              <label>Employer #{idx + 1}:</label>
              <input
                type='text'
                id={idx}
                className="oldEmploymentHistory"
                name="oldEmployer"
                value={el.oldEmployer}
                onChange={handleChange}
                onBlur={dispatchHandler}>
              </input>

              <label>Employment Date</label>
              <input
                type='text'
                id={idx}
                className="oldEmploymentHistory"
                name="oldEmploymentDate"
                value={el.oldEmploymentDate}
                onChange={handleChange}
                onBlur={dispatchHandler}>
              </input>

              <label>Role:</label>
              <input
                type='text'
                id={idx}
                className="oldEmploymentHistory"
                name="oldRole"
                value={el.oldRole}
                onChange={handleChange}
                onBlur={dispatchHandler}>
              </input>
            </div>
          )
        })
      }
      <button className='addOldEmploymentHistory' type='button' onClick={addMore}>Add More</button>
    </div >
  )
}
export default connect()(OldEmploymentHistory)