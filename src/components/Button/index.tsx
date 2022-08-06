import React from 'react'
import { ButtonHTMLAttributes } from 'react'

import * as S from './styles'

export type ButtonTypes = ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = {
  children: React.ReactNode | string | null
  size?: 'small' | 'xmedium' | 'medium' | 'large' | 'fit'
  color?:
    | 'primary'
    | 'secondary'
    | 'alert'
    | 'darker'
    | 'white'
    | 'ghost'
    | 'linear'
  isBold?: boolean
  isFull?: boolean
} & ButtonTypes

const Button = ({
  children,
  size = 'small',
  color = 'primary',
  isBold = true,
  isFull = false,
  ...props
}: ButtonProps) => {
  return (
    <S.Button
      {...props}
      isFull={isFull}
      isBold={isBold}
      color={color}
      size={size}
    >
      {children}
    </S.Button>
  )
}

export default Button
