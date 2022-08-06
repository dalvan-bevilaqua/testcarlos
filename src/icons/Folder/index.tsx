import theme from 'styles/theme'

const Folder = () => {
  return (
    <>
      <svg viewBox="0 0 26 23" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M2.1.9h6.2c.3 0 .6.1.8.4l1.4 1.9c.2.3.5.4.8.4h12.9c.6 0 1 .5 1 1v16.1c0 .6-.5 1-1 1H2.1c-.6 0-1-.5-1-1V1.9c0-.5.4-1 1-1z"
          fill={theme.colors.gray.base}
          stroke={theme.colors.gray.dark}
          strokeWidth="0.6069"
          strokeMiterlimit="10"
        />
      </svg>
    </>
  )
}

export default Folder
