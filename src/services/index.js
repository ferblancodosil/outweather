import { getLocation, getCity } from '../services/location'
import { getWeather, getMyWeather } from '../services/weather'
import { uploadData } from './upload'
import { getPosts, addPost } from './posts'

const api = {
    location: {
        getLocation,
        getCity
    },
    weather: {
        getWeather,
        getMyWeather
    },
    upload: {
        uploadData
    },
    posts: {
        getPosts,
        addPost
    }
}

export default api