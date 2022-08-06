import theme from 'styles/theme'
import * as S from './styles'

type WavesProps = {
  color?: 'primary' | 'gray'
}

export const Waves = ({ color = 'primary' }: WavesProps) => {
  const getColors = {
    primary: {
      light: theme.colors.primary.lighter,
      dark: theme.colors.primary.darker
    },
    gray: {
      light: theme.colors.gray.base,
      dark: theme.colors.gray.base
    }
  }
  const lightColor = getColors[color].light
  const darkColor = getColors[color].dark

  return (
    <>
      <S.LeftSVG>
        <svg
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 508 212"
        >
          <path
            d="M0 .7c5.5 1.4 11 3 16.5 4.8 69.8 22.6 125.7 68.3 161.8 126 31.3 50 92.3 73.4 149 57 42.6-12.3 89.2-12.4 134.6 2.2 16.3 5.3 31.7 12.2 45.9 20.6H0V.7z"
            fill="url(#paint0_linear)"
          />
          <defs>
            <linearGradient
              id="paint0_linear"
              x1="-313.427"
              y1="21.111"
              x2="663.545"
              y2="285.901"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset=".44" stopColor={lightColor} />
              <stop offset=".993" stopColor={darkColor} />
            </linearGradient>
          </defs>
        </svg>
      </S.LeftSVG>
      <S.RightSVG>
        <svg
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 509 212"
        >
          <path
            d="M508.1.7c-5.5 1.4-11 3-16.5 4.8-69.8 22.6-125.7 68.3-161.8 126-31.3 50-92.3 73.4-149 57-42.6-12.3-89.2-12.4-134.6 2.2C29.9 196 14.5 202.9.3 211.3h507.8V.7z"
            fill="url(#paint0_linear)"
          />
          <defs>
            <linearGradient
              id="paint0_linear"
              x1="821.511"
              y1="21.111"
              x2="-155.461"
              y2="285.901"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset=".44" stopColor={lightColor} />
              <stop offset=".993" stopColor={darkColor} />
            </linearGradient>
          </defs>
        </svg>
      </S.RightSVG>
    </>
  )
}

export default Waves
