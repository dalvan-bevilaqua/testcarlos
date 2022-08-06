import theme from 'styles/theme'

const Directory = () => {
  return (
    <>
      <svg viewBox="0 0 25 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0)" fill="currentColor">
          <path d="M1.6.138h5.1c.3 0 .6.1.7.3l1.2 1.5c.1.3.4.4.6.4h10.6c.5 0 .8.4.8.8v13.2c0 .5-.4.8-.8.8H1.6c-.5 0-.8-.4-.8-.8V.938c0-.4.4-.8.8-.8z" />
          <path
            d="M6.7 7.338h5.1c.3 0 .4.1.5.3l.2 1.5c0 .2.2.3.5.3h10.6c.5 0 .6.4.3.8l-4 6.9H.8l4.5-9.1c.3-.3.9-.7 1.4-.7z"
            stroke={theme.colors.white}
            strokeMiterlimit="10"
          />
        </g>
        <defs>
          <clipPath id="clip0">
            <path
              fill={theme.colors.white}
              transform="translate(0 .138)"
              d="M0 0h24.6v17.6H0z"
            />
          </clipPath>
        </defs>
      </svg>
    </>
  )
}

export default Directory
