import { ChangeEvent } from 'react'
import * as S from './styles'

type OptionProp = {
  id: string
  name: string
}

export type ComboBoxProps = {
  options: OptionProp[]
  selectedIndex?: number
  description?: string
  onSelect?: (value: number | string) => void
}

const ComboBox = ({ options, description, onSelect }: ComboBoxProps) => {
  const handleSelect = (index: number) => {
    !!onSelect && onSelect(options[index].id)
  }
  return (
    <S.Select
      onChange={(event: ChangeEvent<HTMLSelectElement>) => {
        handleSelect(event.target.selectedIndex)
      }}
    >
      {description && (
        <S.Option value={description} disabled>
          {description}
        </S.Option>
      )}
      {options?.map((option, index) => (
        <S.Option value={option.name} key={index}>
          {option.name}
        </S.Option>
      ))}
    </S.Select>
  )
}

export default ComboBox
