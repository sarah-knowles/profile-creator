import request from 'superagent'
// import {addBasicDetails} from '../actions'

const rootUrl = '/api/v1'

export function postDetailsToDatabase(details) {
  console.log('api launched: ', details)
  return request
    .post(`${rootUrl}/detailsRoutes`)
    .send(details)
    .then(res => {
      return res.body
    })
}

export function postEmploymentHistoryToDatabase(history) {
  return request
    .post(`${rootUrl}/detailsRoutes/history`)
    .send(history)
    .then(res => {
      return res.body
    })
}

export function postOldEmploymentHistoryToDatabase(oldHistory) {
  return request
    .post(`${rootUrl}/detailsRoutes/oldHistory`)
    .send(oldHistory)
    .then(res => {
      return res.body
    })
}

export function getDetails() {
  console.log('api launched')
  return request
    .get(`${rootUrl}/detailsRoutes`)
    .then(res => {
      return res.body
    })
}