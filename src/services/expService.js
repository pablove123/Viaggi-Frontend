import * as tokenService from './tokenService'

const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/experience`

async function getAllExperiences() {
  const res = await fetch(BASE_URL, {
    headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
  })
  return await res.json()
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

const create = async (experienceData) => {
  try {
    const res = await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(experienceData)
    })
    return res.json()
  } catch (error) {
    console.log(error);
  }
}

const update = async (experienceData) => {
  try {
    const res = await fetch(`${BASE_URL}/${experienceData._id}`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(experienceData)
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

async function addPhoto(photoData, puppyId) {
  const res = await fetch(`${BASE_URL}/${puppyId}/add-photo`, {
    method: 'PUT',
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`
    },
    body: photoData
  })
	return await res.json()
}

const createReview = async (id, experienceData) => {
  try {
    const res = await fetch(`${BASE_URL}/${id}/review`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(experienceData)
    })
    return res.json()
  } catch (error) {
    console.log(error);
  }
}

export { 
  getAllExperiences,
  show,
  create,
  update, 
  addPhoto,
  createReview
}