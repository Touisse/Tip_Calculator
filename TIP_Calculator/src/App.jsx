import { useState } from "react";
import styled from "styled-components";
import FormSection from "./components/Form";
import Results from "./components/Results";

const Section = styled.div`
  background-color: hsl(185, 41%, 84%);
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  font-family: "Roboto Mono", monospace;
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 10px;
  width: 60%;
  height: 30%;
  @media screen and (max-width: 768px) {
    width: 80%;
    height: 60%;
    flex-direction: column;
  }
  @media screen and (max-width: 600px) and (max-width: 768px) {
    width: 90%;
    height: 80%;
  }
`;
const Title = styled.img`
  margin-bottom: 1rem;
`;
const Left = styled.div`
  flex: 1;
  background-color: hsl(183, 100%, 15%);
  height: 90%;
  width: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  color: white;
  margin-right: 1.5rem;
  margin-left: 1.5rem;
  @media screen and (max-width: 768px) {
    width: 90%;
    flex-direction: column;
    margin-bottom: 1rem;
    margin-top: 1.5rem;
  }
`;
const Right = styled.div`
  flex: 1;
  background-color: hsl(183, 100%, 15%);
  height: 90%;
  width: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  color: white;
  margin-right: 1.5rem;
  margin-left: 1.5rem;
  @media screen and (max-width: 768px) {
    width: 90%;
    flex-direction: column;
    margin-bottom: 1rem;
  }
`;

function App() {
  const [data, setData] = useState({
    bill: "0",
    people: "1",
    tip: "0",
    activeButton: "0",
  });

  return (
    <Section>
      <Title src="../images/logo.svg" alt="title" />
      <Container>
        <Left>
          <FormSection data={data} setData={setData} />
        </Left>
        <Right>
          <Results data={data} setData={setData} />
        </Right>
      </Container>
    </Section>
  );
}

export default App;
