import React from 'react'
import { StyledTable, THead, TBody, TFoot, TH, TR, TD } from './styles'

interface IProps {
  color?: 'primary' | 'secondary' | 'tertiary' | 'gray' | 'white'
  children: React.ReactNode
}

export const Table = ({ children, ...rest }: IProps) => {
  return <StyledTable {...rest}>{children}</StyledTable>
}

// eslint-disable-next-line react/display-name
Table.Head = ({ children, ...rest }: IProps) => {
  return <THead {...rest}>{children}</THead>
}

// eslint-disable-next-line react/display-name
Table.Body = ({ children, ...rest }: IProps) => {
  return <TBody {...rest}>{children}</TBody>
}

// eslint-disable-next-line react/display-name
Table.Foot = ({ children, ...rest }: IProps) => {
  return <TFoot {...rest}>{children}</TFoot>
}

// eslint-disable-next-line react/display-name
Table.TH = ({ children, ...rest }: IProps) => {
  return <TH {...rest}>{children}</TH>
}

// eslint-disable-next-line react/display-name
Table.TR = ({ children, ...rest }: IProps) => {
  return <TR {...rest}>{children}</TR>
}

// eslint-disable-next-line react/display-name
Table.TD = ({ children, ...rest }: IProps) => {
  return <TD {...rest}>{children}</TD>
}
