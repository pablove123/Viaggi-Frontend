import * as tokenService from './tokenService'

const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/itineraries`


const create = async (itiData) => {
  try {
    const res = await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(itiData)
    })
    return res.json()
  } catch (error) {
    console.log(error);
  }
}

const addToItinerary = async (itineraryId, experienceId) => {
  try {
    const res = await fetch(`${BASE_URL}/${itineraryId}/experiences/${experienceId}`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
      },
    })
    return res.json()
  } catch (error) {
    console.log(error);
  }
}

const show = async (id) => {
  try {
    const res = await fetch(`${BASE_URL}/${id}`, {
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

export{
  create,
  addToItinerary, 
  show
}