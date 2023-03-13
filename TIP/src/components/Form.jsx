import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: white;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  gap: 1.5rem;
`;
const Label = styled.label`
  color: hsl(184, 14%, 56%);
  font-weight: 700;
  font-size: 16px;
  width: 100%;
  text-align: left;
`;
const InputContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  background-color: hsl(185, 41%, 84%);
  border-radius: 5px;
`;

const IconWrapper = styled.span`
  padding-right: 8px;
`;

const DollarIconStyled = styled.img`
  width: 10px;
  height: 15px;
  margin-left: 0.5rem;
`;

const PriceInput = styled.input`
  background-color: hsl(185, 41%, 84%);
  font-family: "Roboto Mono", monospace;
  color: black;
  font-weight: 700;
  font-size: 13px;
  width: 100%;
  border: none;
  border-radius: 5px;
  padding: 0.5rem 2rem;
  cursor: pointer;
  text-align: right;
  outline-style: none;
  list-style: none;
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ::placeholder {
    color: hsl(183, 100%, 15%);
  }
`;

const ButtonsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: space-between;
  width: 100%;
  gap: 1rem;
`;
const Button = styled.button`
  background-color: hsl(183, 100%, 15%);
  color: white;
  font-family: "Roboto Mono", monospace;
  font-weight: 700;
  font-size: 15px;
  border: none;
  border-radius: 5px;
  padding: 0.5rem 2rem;
  cursor: pointer;
  &:hover {
    background-color: hsl(172, 67%, 45%);
  }
`;
const ButtonInput = styled.input`
  background-color: hsl(185, 41%, 84%);
  color: white;
  font-family: "Roboto Mono", monospace;
  font-weight: 700;
  font-size: 12px;
  border: none;
  width: 100%;
  padding: 0.5rem 2rem;
  cursor: pointer;
  text-align: center;
  outline-style: none;
  list-style: none;
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ::placeholder {
    color: gray;
    font-size: 10px;
    text-align: center;
  }
`;
const FormSection = () => {
  return (
    <Container>
      <Form>
        <Label>Bill</Label>
        <InputContainer>
          <IconWrapper>
            <DollarIconStyled src="../../images/icon-dollar.svg" />
          </IconWrapper>
          <PriceInput type="number" placeholder="0" required />
        </InputContainer>
        <Label>Select Tip %</Label>
        <ButtonsContainer>
          <Button>5%</Button>
          <Button>10%</Button>
          <Button>15%</Button>
          <Button>25%</Button>
          <Button>50%</Button>
          <ButtonInput type="number" placeholder="Custom" />
        </ButtonsContainer>
        <Label>Number of people</Label>
        <InputContainer>
          <IconWrapper>
            <DollarIconStyled src="../../images/icon-person.svg" />
          </IconWrapper>
          <PriceInput type="number" placeholder="0" required />
        </InputContainer>
      </Form>
    </Container>
  );
};

export default FormSection;
