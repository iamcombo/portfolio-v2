import styled from "styled-components";

export default function SectionD_Component() {
  return (
    <SectionD id='about'>
      <Container>
        <Line />
        <Title>About Me</Title>
        <Text>
          A Programmer who is ready to learn and adapt. Web Developer based in
          Cambodia. JavaScript / Vue.js / Nuxt.js / React.js / Next.js{" "}
        </Text>
        <About>
          <LeftSide>
            <div>
              <SubTitle>2017</SubTitle>
              <Text>Student at Royal University of Phnom Penh</Text>
            </div>
            <div>
              <SubTitle>2020</SubTitle>
              <Text>Worked as a Front-end Developer</Text>
            </div>
            <div>
              <SubTitle>2021</SubTitle>
              <Text>Worked as a Full-Stack Developer</Text>
            </div>
          </LeftSide>
          <RightSide>
            <svg
              id="visual"
              viewBox="0 0 900 600"
              width="900"
              height="600"
              xmlns="http://www.w3.org/2000/svg"
              // xmlns:xlink="http://www.w3.org/1999/xlink"
              version="1.1"
            >
              <g transform="translate(456.3962412599541 334.95986728076224)">
                <path id='blob1'
                  d="M111.9 -131.6C142.2 -81.6 162.1 -40.8 173.7 11.5C185.2 63.9 188.4 127.8 158.1 153.3C127.8 178.8 63.9 165.9 8.8 157C-46.2 148.2 -92.4 143.4 -130.7 117.9C-169.1 92.4 -199.5 46.2 -194.1 5.4C-188.7 -35.4 -147.4 -70.7 -109 -120.7C-70.7 -170.7 -35.4 -235.4 2.7 -238.1C40.8 -240.8 81.6 -181.6 111.9 -131.6"
                  fill="#FFC300"
                ></path>
              </g>
            </svg>
          </RightSide>
        </About>
      </Container>
      <Footer />
    </SectionD>
  );
}

const SectionD = styled.div`
  padding: 40px 0;
  height: 500px;
`;
const Container = styled.div`
  max-width: 1216px;
  margin: 0 auto;
`;
const Line = styled.div`
  width: 60px;
  height: 10px;
  border-radius: 8px;
  background-color: #ffc300;
`;
const Title = styled.p`
  font-size: 32px;
  margin: 0px;
`;
const SubTitle = styled.p`
  font-size: 24px;
  margin: 0;
`;
const Text = styled.p`
  font-size: 14px;
  width: 500px;
  color: #959aa0;
`;
const About = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const LeftSide = styled.div`
  flex: 50%;
  /* display: flex; */
  justify-content: space-evenly;
`;
const RightSide = styled.div`
  flex: 50%;
`;
const Footer = styled.div`
  min-height: 500px;
  width: 100%;
  background: url(assets/background4.svg) no-repeat;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
`;
