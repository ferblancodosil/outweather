import PropTypes from 'prop-types'
import './index.scss'

const Card = ({ topComponent, bottomComponent }) => {
    return <div className="card">
        {topComponent}
        {bottomComponent}
    </div>
}

Card.propTypes = {
    topComponent: PropTypes.node,
    bottomComponent: PropTypes.node,
}

export default Card