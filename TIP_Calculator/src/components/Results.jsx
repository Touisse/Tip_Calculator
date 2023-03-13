import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 90%;
  height: 90%;
`;
const Stack = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem 0;
`;
const Title = styled.h5`
  color: white;
  font-family: "Roboto Mono", monospace;
  font-weight: 700;
  display: flex;
  flex-direction: column;
`;
const Amount = styled.h1`
  font-family: "Roboto Mono", monospace;
  font-weight: 700;
  font-size: 28px;
  color: hsl(172, 67%, 45%);
`;
const Button = styled.button`
  background-color: hsl(172, 67%, 45%);
  color: hsl(183, 100%, 15%);
  font-family: "Roboto Mono", monospace;
  font-weight: 700;
  font-size: 13px;
  border: none;
  border-radius: 10px;
  padding: 0.5rem 2rem;
  margin-top: 4rem;
  cursor: pointer;
  &:hover {
    background-color: white;
  }
`;
const Span = styled.span`
  color: #adaaaa;
`;

const Results = ({ data, setData }) => {
  const { bill, tip, people } = data;
  const AmountTip = (bill * tip) / 100 / parseFloat(people);
  const AmountTotal =
    (parseFloat(AmountTip) + parseFloat(bill)) / parseFloat(people);
  console.log(AmountTip);
  console.log(AmountTotal);
  const handleReset = () => {
    setData({
      bill: "0",
      people: "1",
      tip: "0",
    });
  };

  return (
    <Container>
      <Stack>
        <Title>
          Tip amount <Span> / person</Span>
        </Title>
        <Amount>${AmountTip}</Amount>
      </Stack>
      <Stack>
        <Title>
          Total <Span> / person</Span>
        </Title>
        <Amount>${AmountTotal}</Amount>
      </Stack>
      <Button onClick={handleReset}>RESET</Button>
    </Container>
  );
};

export default Results;
