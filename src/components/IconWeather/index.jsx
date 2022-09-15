import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

const IconWeather = ({ weather, className, temperature }) => {
    const [icon, setIcon] = useState(null)

    const loadImage = async imageName => {
        setIcon(null)
        const image = await import(`./assets/${imageName}.png`)
        setIcon(image.default)
    }

    useEffect(() => {
        loadImage(weather)
    }, [weather])
    
    return icon ? <><img src={icon} alt={weather} className={className}/> {Math.round(temperature)}ºC</>:  null
}

IconWeather.propTypes = {
    weather: PropTypes.oneOf(['Rain', 'Clouds', 'Clear', 'Snow', 'Storm']).isRequired,
    temperature: PropTypes.number.isRequired,
    className: PropTypes.string
}

export default IconWeather;