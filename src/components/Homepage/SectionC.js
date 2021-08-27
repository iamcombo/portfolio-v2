import styled from 'styled-components';
import Image from 'next/image';

export default function SectionC_Component() {
  return (
    <SectionC id='technologies'>
      <Container>
        <Line />
        <Title>Technologies</Title>
        <Text>I’ve worked with a range technologies in the web development world. From Frontend to Backend and Design</Text>
        <SubTitle>Front-end Technologies</SubTitle>
        <Frontend>
          <Card>
            <Image 
              src='/assets/reactjs.svg'
              width={171}
              height={57}
            />
          </Card>
          <Card>
            <Image 
              src='/assets/nextjs.svg'
              width={171}
              height={57}
            />
          </Card>
        </Frontend>
        <SubTitle>Back-end Technologies</SubTitle>
        <Backend>
          <Card>
            <Image 
              src='/assets/nodejs.png'
              width={171}
              height={57}
            />
          </Card>
          <Card>
            <Image 
              src='/assets/expressjs.png'
              width={171}
              height={57}
            />
          </Card>
          <Card>
            <Image 
              src='/assets/mongodb.png'
              width={171}
              height={57}
            />
          </Card>
        </Backend>
        <SubTitle>Design Technologies</SubTitle>
        <Card>
          <Image 
            src='/assets/figma.png'
            width={171}
            height={80}
          />
        </Card>
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
  display: flex;
  align-items: center;
  justify-content: center;
  width: 244px;
  height: 130px;
  background-color: #FFF;
  border: 1px solid #FFC300;
  margin-right: 10px;
`