import styled from 'styled-components';

export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height:45%;
  padding-top: 30px;
  img{
    width:260px;
    height: 260px;
  }
`;

export const Button = styled.button`
  display: block;
  width: 80%;
  margin: 25px auto;
  height: 45px;
  padding: 5px 15px;
  border-radius: 10px;
  color: white;
  font-size:18px;
  background: rgb(150,115,230);
  background: -moz-linear-gradient(270deg, rgba(150,115,230,1) 0%, rgba(115,128,230,1) 100%);
  background: -webkit-linear-gradient(270deg, rgba(150,115,230,1) 0%, rgba(115,128,230,1) 100%);
  background: linear-gradient(270deg, rgba(150,115,230,1) 0%, rgba(115,128,230,1) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#9673e6",endColorstr="#7380e6",GradientType=1);
`;

export const HeaderText = styled.h1`
  color: white;
  font-size: 24px;
  font-weight: 700;
  letter-spacing: 1.5px;
`;