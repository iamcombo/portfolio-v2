import styled from 'styled-components';

export default function SectionC_Component() {
  return (
    <SectionC>
      <Container>
        <Line />
        <Title>Technologies</Title>
        <Text>I’ve worked with a range technologies in the web development world. From Frontend to Backend and Design</Text>
        <SubTitle>Front-end Technologies</SubTitle>
        <Frontend>
          <Card></Card>
          <Card></Card>
        </Frontend>
        <SubTitle>Back-end Technologies</SubTitle>
        <Backend>
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </Backend>
        <SubTitle>Design Technologies</SubTitle>
        <Card></Card>
      </Container>
    </SectionC>
  )
}

const SectionC = styled.div`
  min-height: 800px;
  /* background: url(assets/background3.svg) no-repeat;  */
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
`
const Container = styled.div`
  max-width: 1216px;
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
const Text = styled.p`
  font-size: 14px;
  width: 400px;
`
const SubTitle = styled.p`
  font-size: 16px;
  font-weight: 700;
`
const Frontend = styled.div`
  display: flex;
`
const Backend = styled.div`
  display: flex;
`
const Card = styled.div`
  width: 244px;
  height: 130px;
  border: 1px solid #FFC300;
  background-color: #001D3D;
  margin-right: 10px;
`