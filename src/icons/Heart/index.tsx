import theme from 'styles/theme'

const Heart = () => {
  return (
    <>
      <svg
        style={{ transform: 'translate3d(-1px, 2px, 0)' }}
        viewBox="0 0 25 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.4 21.3c-.1 0-.2 0-.4-.1-.1 0-.1-.1-.2-.1-.4-.2-10.1-5.8-10.5-12.8C2.2 7.1 2 4.4 4 2.2 5.6.5 7.8.1 8.9.1c1.6 0 3.2.9 4.3 1.8C14.3 1 15.9.1 17.5.1c1.2 0 3.3.4 5 2.1 2 2.1 1.8 4.9 1.7 6.1-.4 7-10 12.5-10.4 12.8-.1 0-.1.1-.2.1.1.1-.1.1-.2.1z"
          fill={theme.colors.white}
        />
        <path
          d="M12.9 15.5c-.3 0-.6-.2-.8-.5L8.8 7.7 7 10.6c-.2.2-.4.4-.7.4H.8c-.5 0-.8-.4-.8-.8 0-.5.4-.8.8-.8h5l2.4-3.8c.2-.3.4-.4.8-.4.3 0 .6.2.7.5l3.2 7.1 1.3-2.8c.1-.3.4-.5.8-.5h4.3c.5 0 .8.4.8.8 0 .5-.4.8-.8.8h-3.8L13.6 15c-.1.3-.4.5-.7.5z"
          fill="currentColor"
        />
      </svg>
    </>
  )
}

export default Heart