import Link from 'next/link';
import Image from 'next/image';
import styled from "styled-components";

export default function HeaderComponent() {
  return (
    <Header>
      <Link href='/'>
        <Image 
          src='/assets/logo.svg'
          width={85}
          height={24}
        />
      </Link>
      <HeaderItem>
        <Item href='#project'>Projects</Item>
        <Item href='#technologies'>Technologies</Item>
        <Item href='#about'>About</Item>
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
const Item = styled(Link)`
  font-size: 14px;
  font-weight: 700;
`
