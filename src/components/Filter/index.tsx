import Button from 'components/Button'
import ComboBox from 'components/ComboBox'
import MediaMatch from 'components/MediaMatch'
import { useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import * as S from './styles'

type FilterByCategory = {
  id: string
  name: string
}

export type FilterProps = {
  color?: 'primary' | 'secondary'
  items?: FilterByCategory[]
  onSelect?: (id: string | number) => void
}

export const Filter = ({
  items = [],
  onSelect,
  color = 'primary'
}: FilterProps) => {
  const [collapsed, setCollapsed] = useState(true)
  const [selectedIndex, setSelectedIndex] = useState(0)

  const handleClick = (id: string | number, index: number) => {
    setSelectedIndex(index)
    !!onSelect && onSelect(id)
  }

  const hasDropButton = items!.length > 4
  const hasScroll = !collapsed && items!.length > 8
  return (
    <>
      <MediaMatch greaterThan="large">
        <S.Wrapper>
          <S.Grid hasScroll={hasScroll}>
            {(collapsed ? items.slice(0, 4) : items).map((item, index) => {
              const isActive = selectedIndex === index
              return (
                <Button
                  key={index}
                  size="fit"
                  color={isActive ? color : 'ghost'}
                  onClick={() => handleClick(item.id, index)}
                >
                  <S.Content isActive={isActive}>
                    <b>{`${index + 1}.`}</b> <span>{item.name}</span>
                  </S.Content>
                </Button>
              )
            })}
          </S.Grid>
          {hasDropButton && (
            <S.ButtonWrapper isCollapsed={collapsed} hasScroll={hasScroll}>
              <Button
                color="ghost"
                size="fit"
                onClick={() => setCollapsed(!collapsed)}
              >
                <S.ArrowIcon isCollapsed={collapsed}>
                  <IoIosArrowDown size={24} />
                </S.ArrowIcon>
              </Button>
            </S.ButtonWrapper>
          )}
        </S.Wrapper>
      </MediaMatch>
      <MediaMatch lessThan="large">
        <S.Wrapper hasDropButton={false}>
          <ComboBox options={items} onSelect={(id) => handleClick(id, 0)} />
        </S.Wrapper>
      </MediaMatch>
    </>
  )
}

export default Filter
