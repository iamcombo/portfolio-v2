import styled from 'styled-components';

export default function SectionB_Component() {
  return (
    <Container id="project">
      <Line />
      <Title>Projects</Title>
      <SectionB>
        <LeftSide />
        <RightSide>
          <div>
            <Card></Card>
            <h2>Project Title</h2>
            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
            <Button>Source Code</Button>
          </div>
          <div>
            <Card></Card>
            <h2>Project Title</h2>
            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
            <Button>Source Code</Button>
          </div>
        </RightSide>
      </SectionB>
    </Container>
  )
}

const Container = styled.div`
  max-width: 1216px;
  height: 900px;
  margin: 0 auto;
`
const Line = styled.div`
  width: 60px;
  height: 10px;
  border-radius: 8px;
  background-color: #FFC300; 
`
const Title = styled.p`
  font-size: 32px;
  margin: 0px;
` 
const SectionB = styled.div`
  margin-top: 80px;
  padding-bottom: 120px;
  display: flex;
  justify-content: space-between;
  background: url(assets/background2.svg) no-repeat; 
`
const LeftSide = styled.div`
  flex: 50%;  
`
const RightSide = styled.div`
  display: flex;
  flex: 50%;
  justify-content: space-evenly;
  text-align: center;
`
const Card = styled.div`
  width: 300px;
  height: 200px;
  border: 1px solid #FFC300;
  background-color: #001D3D;
`
const Button = styled.button`
  background-color: #FFC300;
  color: #806200;
  height: 50px;
  width: 200px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
` 