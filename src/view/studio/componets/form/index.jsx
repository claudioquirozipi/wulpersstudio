import React,{useState} from 'react';
import firebase from 'firebase';

//Img 
import imgform from '../../image/form/imgM1.png';
import iconform1 from '../../image/form/iconM1.svg';
import iconform2 from '../../image/form/iconM2.svg';
import iconform3 from '../../image/form/iconM3.svg';
//Styled Components
import {
    ContainerForm,
    Header,
    FormContainer,
    InputContainer,
    ButtonContainer
} from './styled';

var db = firebase.firestore();

function handleSubmit(e, phone, email, web) {
    e.preventDefault();
    db.collection("studio").add({
        phone: phone,
        email: email,
        web: web
    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
        alert("Suscrito correctamente");
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
        alert("Ocurrió un error")
    });
}

function Form() {
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [web, setWeb] = useState("");
    function handlePhone(e) {setPhone(e.target.value)};
    function handleEmail(e) {setEmail(e.target.value)};
    function handleWeb(e) {setWeb(e.target.value)};

    return(
        <ContainerForm>
            <Header>
                <h2>Let's make it happen</h2>
            </Header>
            <FormContainer>
                <form onSubmit={(e) => handleSubmit(e, phone, email, web)}>
                    <img src={imgform} alt="Form"/>
                    <InputContainer>
                        <img src={iconform1} alt=""/>
                        <input type="number" placeholder="Phone" onChange={handlePhone} required/>
                    </InputContainer>
                    <InputContainer>
                        <img src={iconform2} alt=""/>
                        <input type="text" placeholder="Email" onChange={handleEmail} required/>
                    </InputContainer>
                    <InputContainer>
                        <img src={iconform3} alt="" />
                        <input type="text" placeholder="Web company" onChange={handleWeb} required/>
                    </InputContainer>
                    <ButtonContainer>
                        <button>Send</button>
                    </ButtonContainer>
                </form>
            </FormContainer>
        </ContainerForm>
    );
}
export default Form;