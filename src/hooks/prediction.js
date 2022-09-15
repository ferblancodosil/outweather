import { useState, useEffect } from 'react'
import api from '../services'

export const usePrediction = () => {
    const [prediction, setPrediction] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        const loadData = async () => {
            setIsLoading(true)
            const myPrediction = await api.weather.getMyWeather()
            setPrediction(myPrediction)
        }
        loadData()
    }, [])

    useEffect(() => {
        if (prediction) {
            setIsLoading(false)
        }
    }, [prediction])

    return { prediction, isLoading }
}