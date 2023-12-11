// Write your code here
import {useState} from 'react'

import {
  MainContainer,
  ContentContainer,
  MainHeading,
  CardContainer,
  NameContainer,
  NumPara,
  NamePara,
  CardHolder,
  InputMainContainer,
  InputContainer,
  PaymentMethod,
  InputNumber,
  InputName,
} from './styledComponents'

const CreditCard = () => {
  const [name, setName] = useState('')

  const [number, setNumber] = useState('')

  const onChangeName = event => {
    const cardHolder = event.target.value.toUpperCase()
    setName(cardHolder)
  }

  const onChangeNumber = event => {
    setNumber(event.target.value)
  }

  return (
    <MainContainer>
      <ContentContainer>
        <MainHeading>CREDIT CARD</MainHeading>
        <CardContainer data-testid="creditCard">
          <NumPara>{number}</NumPara>
          <NameContainer>
            <CardHolder>CARDHOLDER NAME</CardHolder>
            <NamePara>{name}</NamePara>
          </NameContainer>
        </CardContainer>
      </ContentContainer>
      <InputMainContainer>
        <InputContainer>
          <PaymentMethod>Payment Method</PaymentMethod>
          <InputNumber
            type="text"
            onChange={onChangeNumber}
            placeholder="Card Number"
          />
          <InputName
            type="text"
            onChange={onChangeName}
            placeholder="Cardholder Name"
          />
        </InputContainer>
      </InputMainContainer>
    </MainContainer>
  )
}
export default CreditCard
