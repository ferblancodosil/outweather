import { usePrediction } from '../../../hooks/prediction'
import cbw from 'clothes-by-weather'
import { useEffect } from 'react'
import { useState } from 'react'
import './index.scss'
import Card from './Card'

const Body = () => {
    const { prediction } = usePrediction()
    const [ outfit, setOutfit ] = useState(null)

    useEffect(() => {
        if (prediction) {
            const output = cbw({
                temperature: prediction.temperature,
                pop: prediction.pop,
                description: prediction.description.toLowerCase(),
                windGust: prediction.windGust,
            })
            setOutfit([...output.upperbody, output.lowerbody, output.shoes, ...output.misc])
        }
    }, [prediction])
    
    return outfit && <div className='outfit'>
        {outfit.map(item => (
            <Card className="item" clothes={item}/>    
        ))}
    </div>
}

export default Body