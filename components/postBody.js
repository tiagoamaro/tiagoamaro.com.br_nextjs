import PropTypes from 'prop-types'

export default function Post ({ content }) {
  return <div dangerouslySetInnerHTML={{ __html: content }} />
}

Post.propTypes = {
  content: PropTypes.string.isRequired
}
