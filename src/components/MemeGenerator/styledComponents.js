// Style your components here
import styled from 'styled-components/macro'

export const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const MemeGeneratorContainer = styled.div`
  width: 100%;
  max-width: 550px;
  padding-top: 32px;
  padding-left: 24px;
  padding-right: 24px;
  padding-bottom: 32px;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    width: 85%;
    max-width: 1140px;
  }
`

export const Heading = styled.h1`
  text-align: center;
  color: #35469c;
  font-family: 'Open Sans';
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 16px;
  @media screen and (min-width: 768px) {
    text-align: left;
    font-size: 36px;
  }
`

export const FormAndMemeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (min-width: 768px) {
    flex-direction: row-reverse;
  }
`

export const MemeContainer = styled.div`
  text-align: center;
  background-image: url(${props => props.backgroundImage});
  background-size: cover;
  height: 300px;
  padding-left: 10px;
  padding-right: 10px;
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  @media screen and (min-width: 768px) {
    width: 48%;
    margin-top: 5px;
    margin-bottom: 20px;
  }
`

export const TextContent = styled.p`
  color: #ffffff;
  font-family: 'Open Sans';
  font-size: ${props => props.activeFontSizeId}px;
  font-weight: 600;
`

export const MemeGeneratorForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (min-width: 768px) {
    width: 40%;
  }
`

export const CustomLabel = styled.label`
  color: #7e858e;
  font-family: 'Open Sans';
  font-size: 12px;
  line-height: 1.4;
  font-weight: 500;
  margin-bottom: 0;
`

export const CustomInput = styled.input`
  color: #5a7184;
  background-color: #ffffff;
  font-family: 'Open Sans';
  height: 40px;
  border: 1px solid #d7dfe9;
  border-radius: 5px;
  padding-top: 12px;
  padding-left: 14px;
  paddong-right: 14px;
  padding-bottom: 12px;
  margin-top: 5px;
  margin-bottom: 20px;
  outline: none;
`

export const CustomSelect = styled.select`
  color: #5a7184;
  background-color: #ffffff;
  font-family: 'Open Sans';
  height: 40px;
  border: 1px solid #d7dfe9;
  border-radius: 5px;
  padding: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  outline: none;
`

export const CustomOption = styled.option`
  font-size: 16px;
  padding-top: 12px;
  padding-left: 14px;
  padding-right: 14px;
  padding-bottom: 12px;
`

export const GenerateButton = styled.button`
  color: #ffffff;
  background-color: #0b69ff;
  font-family: 'Open Sans';
  font-size: 14px;
  font-weight: 600;
  min-width: 25px;
  max-width: 150px;
  border: none;
  border-radius: 6px;
  padding-top: 12px;
  padding-left: 24px;
  paddong-right: 24px;
  padding-bottom: 12px;
  margin-top: 15px;
  outline: none;
  cursor: pointer;
`
