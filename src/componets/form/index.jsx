import React from 'react';

//Img 
import imgform from '../../static/image/form/imgM1.png';
import iconform1 from '../../static/image/form/iconM1.svg';
import iconform2 from '../../static/image/form/iconM2.svg';
import iconform3 from '../../static/image/form/iconM3.svg';
//Styled Components
import {
    ContainerForm,
    Header,
    FormContainer,
    InputContainer,
    ButtonContainer
} from './styled';

function Form() {
    return(
        <ContainerForm>
            <Header>
                <h2>Let's make it happen</h2>
            </Header>
            <FormContainer>
                <form>
                    <img src={imgform} alt="Form"/>
                    <InputContainer>
                        <img src={iconform1} alt=""/>
                        <input type="text" placeholder="Phone"/>
                    </InputContainer>
                    <InputContainer>
                        <img src={iconform2} alt=""/>
                        <input type="text" placeholder="Email"/>
                    </InputContainer>
                    <InputContainer>
                        <img src={iconform3} alt="" />
                        <input type="text" placeholder="Company web page"/>
                    </InputContainer>
                    <ButtonContainer>
                        <button>Button</button>
                    </ButtonContainer>
                </form>
            </FormContainer>
        </ContainerForm>
    );
}
export default Form;