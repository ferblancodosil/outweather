import './index.scss';
import { usePrediction } from '../../../hooks/prediction'
import IconWeather from '../../../components/IconWeather';
import Location from '../../../components/Location';
import Clock from '../../../components/Clock';

const Header = () => {
    const {prediction, isLoading} = usePrediction()
    
    return isLoading ? 'Loading data' : <div className='header'>
        <IconWeather weather={prediction.description} temperature={prediction.temperature} className="icon"></IconWeather>
        <Location city={prediction.city.name} className="location"></Location>
        <Clock className="clock"></Clock>
    </div>
}
export default Header