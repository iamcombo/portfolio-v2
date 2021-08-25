import styled from "styled-components";
import Image from 'next/image'

export default function HeaderComponent() {
  return (
    <Header>
      <Image 
        src='/assets/logo.svg'
        width={85}
        height={24}
      />
      <HeaderItem>
        <Item>Projects</Item>
        <Item>Technologies</Item>
        <Item>About</Item>
      </HeaderItem>
    </Header>
  )
}

const Header = styled.header`
  max-width: 1216px;
  height: 60px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const HeaderItem = styled.div`
  width: 400px;
  display: flex;
  justify-content: space-evenly;
`
const Item = styled.span`
  font-size: 14px;
  font-weight: 700;
`
