import styled from 'styled-components';

export default function SectionA_Component() {
  return (
    <Container>
      <SectionA>
        <LeftSide>
          <h1>Welcome to</h1>
          <h2>My Personal Portfolio</h2>
          <p>A Programmer who is ready to learn and adapt. Web Developer based in Cambodia. JavaScript / Vue.js / Nuxt.js / React.js / Next.js</p>
          <BtnResume>Download Resume</BtnResume>
        </LeftSide>
        <div></div>
      </SectionA>
    </Container>
  )
}

const Container = styled.div`
  max-width: 1216px;
  height: 100%;
  margin: 0 auto;
`
const SectionA = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 160px;
` 
const LeftSide = styled.div`
  width: 520px;
  h1 {
    font-size: 56px;
    margin-bottom: 0px;
  }
  h2 {
    font-size: 32px;
    margin: 0px;
  }
  p {
    font-size: 14px;
    margin-bottom: 40px;
  }
`
const BtnResume = styled.button`
  background-color: #FFC300;
  color: #806200;
  height: 50px;
  width: 200px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
` 