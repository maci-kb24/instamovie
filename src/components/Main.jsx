import PropTypes from 'prop-types'

const Main = ({children}) => {
    return (
        <main>
            <div className="container mx-auto px-6">
                {children}
            </div>
        </main>
    )
}

Main.propTypes = {
    children: PropTypes.node
}

export default Main