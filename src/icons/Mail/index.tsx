import theme from 'styles/theme'

const Mail = () => {
  return (
    <>
      <svg viewBox="0 0 26 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M24.6 3.9 13 .5 1.4 3.9c-.5.2-.9.6-.9 1.2v15.4c0 .7.6 1.2 1.2 1.2h22.5c.7 0 1.2-.6 1.2-1.2V5.1c.1-.6-.3-1-.8-1.2ZM23 19.2h-8.7V18H23v1.2Zm0-2.5h-8.7v-1.2H23v1.2ZM13 8.6 1.8 5.2 13 1.8l11.2 3.4L13 8.6Z"
          fill={theme.colors.white}
        />
      </svg>
    </>
  )
}

export default Mail
