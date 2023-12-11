// Style your elements here
// Style your elements here
import styled from 'styled-components'

export const MainContainer = styled.div`
  background-color: #ffffff;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    background-color: #ffffff;
    min-height: 100vh;
    background-size: cover;
    display: flex;
    flex-direction: row;
  }
`

export const ContentContainer = styled.div`
  background-color: #3b4b69;
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  @media (min-width: 768px) {
    background-color: #3b4b69;
    width: 50%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
`

export const MainHeading = styled.h1`
  color: #ffffff;
  text-decoration: underline;
  text-decoration-color: #ffd773;
  text-align: center;
`

export const CardContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/hooks/credit-card-bg.png');
  height: 250px;
  width: 350px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const NameContainer = styled.div`
  margin-left: 20px;
`

export const NumPara = styled.p`
  color: #d3d9e0;
  font-size: 30px;
  margin-left: 20px;
`

export const CardHolder = styled.p`
  color: #c3cad9;
`

export const NamePara = styled.p`
  color: #d3d9e0;
`

export const InputMainContainer = styled.div`
  background-color: transparent;
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    background-color: transparent;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

export const InputContainer = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  box-shadow: 1px 1px 1px 1px #c3cad9;
  border-radius: 10px;
`

export const PaymentMethod = styled.h1`
  color: #344e7a;
  font-size: 20px;
  margin-bottom: 30px;
  font-weight: 500;
`

export const InputNumber = styled.input`
  border: 1px solid #c3cad9;
  outline: none;
  padding-left: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-right: 10px;
  margin-bottom: 30px;
  border-radius: 10px;
  width: 80%;
`

export const InputName = styled.input`
  border: 1px solid #c3cad9;
  outline: none;
  padding-left: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-right: 10px;
  margin-bottom: 30px;
  border-radius: 10px;
  width: 80%;
`
