import { useState } from 'react'
import PropTypes from 'prop-types'
import './index.scss'

const Accordion = ({ items, openItems }) => {
  const [selected, setSelected] = useState(openItems || new Array(items.length))

  const changeVisibility = (index) => {
    const visibility = [...selected]
    visibility[index] = !visibility[index]
    setSelected(visibility)
  }

  return (
    <div className="accordion">
        {items.map((item, i) => (
        <div className='item' key={i}>
            <div className='title' onClick={() => changeVisibility(i)}>
              <h2>{item.title}</h2>
              <span>{selected[i] ? '-' : '+'}</span>
            </div>
            <div className={selected[i] ? 'content show' : 'content'}>{item.content}</div>
        </div>
        ))}
    </div>
  );
}

Accordion.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape(
            {
                title: PropTypes.string.isRequired,
                content: PropTypes.string.isRequired
            }
        )
    ).isRequired,
    openItems: PropTypes.array
}
export default Accordion