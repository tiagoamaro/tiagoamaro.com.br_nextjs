import PropTypes from 'prop-types'

export default function PostTitle ({ title }) {
  return <h1>{title}</h1>
}

PostTitle.propTypes = {
  title: PropTypes.string.isRequired
}
