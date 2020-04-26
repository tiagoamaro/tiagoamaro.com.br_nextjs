import PropTypes from 'prop-types'

export default function PostBody ({ content }) {
  return <div dangerouslySetInnerHTML={{ __html: content }} />
}

PostBody.propTypes = {
  content: PropTypes.string.isRequired
}
