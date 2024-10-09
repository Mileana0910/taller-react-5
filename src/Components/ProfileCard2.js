import React from "react";
import styled from "styled-components";
import img from "../Assets/Milena.jpg";

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  aling-items: center;
  padding-top: 50px;
`;
const Card = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  max-width: 300px;
  text-align: center;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`;
const Name = styled.h2`
  font-size: 24px;
  color: #333;
`;
const Description = styled.p`
  font-size: 16px;
  color: #666;
`;
const Button = styled.button`
  background-color: #49183f;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  cursor: pointer;

  &:hover {
    background-color: #218838;
  }
`;

const ProductCard2 = () => {
  return (
    <CardContainer>
      <Card>
        <img src={img} alt="Profile " />
        <Name>Milena Vásquez</Name>
        <Description>Desarrollo Web FrontEnd React & Redux</Description>
        <Button>Registrar</Button>
      </Card>
    </CardContainer>
  );
};

export default ProductCard2;
