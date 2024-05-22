import PropTypes from 'prop-types'

const Menu = ({children}) => {
  return (
    <div className="menu flex items-center">
    {children}
  </div>
  )
}

Menu.propTypes = {
  children: PropTypes.node
}

export default Menu