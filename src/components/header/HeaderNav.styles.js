import styled from "styled-components";

export const Header = styled.header`
  z-index: 999;
  position: fixed;
  width: 100%;
  height: 90px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;
  background-color: #fff;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.1);

  @media screen and (max-width: 768px) {
    padding: 0 30px;
  }
`;
export const InnerWrapper = styled.div`
  display: flex;
  align-items: center;
`;
export const Logo = styled.h1`
  width: 60px;
  height: 60px;
  margin-right: 30px;
`;
export const LogoImage = styled.img`
  width: 100%;
  height: 100%;
`;
export const InputWrapper = styled.div`
  position: relative;
  width: 400px;
  height: 46px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const InputSearch = styled.input`
  width: 400px;
  height: 46px;
  border: 2px solid #60bba7;
  border-radius: 50px;
  padding: 13px 22px;
  font-size: 16px;
  outline: none;

  &::placeholder {
    font-size: 16px;
    color: #767676;
  }
`;
export const InputImage = styled.img`
  position: absolute;
  top: 50%;
  right: 15px;
  transform: translateY(-50%);
  width: 19px;
  height: 19px;
`;

export const MenuWrapper = styled.div`
  display: flex;
  align-items: center;
`;
export const CartWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 50px;
  height: 50px;
`;
export const CartImage = styled.img`
  width: 32px;
  height: 32px;
`;
export const CartText = styled.span`
  font-size: 12px;
  color: #767676;
`;
export const MyPageWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 56px;
  height: 50px;
  margin-left: 20px;
`;
export const MyPageImage = styled.img`
  width: 32px;
  height: 32px;
`;
export const MyPageText = styled.span`
  font-size: 12px;
  color: #767676;
`;
