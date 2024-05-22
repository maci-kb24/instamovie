import PropTypes from 'prop-types'

const Header = ({children}) => {
  return (
    <header>
        <div className="navbar  container flex items-center justify-between px-10 py-4 gap-6">
        {children}
        </div>
    </header>
  )
}

Header.propTypes = {
    children: PropTypes.node
}

export default Header