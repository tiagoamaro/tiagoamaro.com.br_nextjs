import PropTypes from 'prop-types'

export default function PostTitle ({ date, title }) {
  return (
    <>
      <h1>{title}</h1>
      <h2>{date}</h2>
    </>
  )
}

PostTitle.propTypes = {
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}
