import theme from 'styles/theme'

const Info = () => {
  return (
    <>
      <svg viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M17.8 34.238c-9.4 0-17-7.6-17-17s7.6-17 17-17 17 7.6 17 17c0 9.3-7.6 17-17 17Z"
          fill="currentColor"
        />
        <path
          d="M17.8 4.238c-7.1 0-13 5.8-13 13 0 7.1 5.8 13 13 13 7.1 0 13-5.8 13-13s-5.8-13-13-13Zm0 2.9c1.4-.1 2.5 1.2 2.4 2.6l-.5 9.5c-.1 1-.9 1.8-1.9 1.8-1 0-1.9-.8-1.9-1.8l-.5-9.5c-.1-.7.2-2.5 2.4-2.6Zm0 20.1c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5c0 1.5-1.1 2.5-2.5 2.5Z"
          fill={theme.colors.white}
        />
      </svg>
    </>
  )
}

export default Info
