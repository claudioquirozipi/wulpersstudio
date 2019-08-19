import React from 'react';

//Components
import LeftRight from '../../../../components/leftRight';

//Styled-Components
import {
    ContainerText,
    MicroSalChichaSC,
} from '../../../studio/componets/imgtext/style';
import {
    H1Title
} from './styled';
//Assets
import img1 from './img/ilustracion01.svg';
import img2 from './img/ilustracion02.svg';
import img3 from './img/ilustracion03.svg';
import img4 from './img/ilustracion04.svg';
import img5 from './img/ilustracion05.jpg';
import img6 from './img/ilustracion06.svg';

function ImgText() {
    return(
        <main>
            <H1Title>What we do</H1Title>
            <LeftRight src={img1}>
                <ContainerText>
                    <h2>Team Leader</h2>
                    <p>It coordinates and supervises the entire team. Managing all their KPIs to have the most successful performance from each of them. Reporting and notifying all this to the client. </p>
                    <MicroSalChichaSC />
                </ContainerText>
            </LeftRight>
            <LeftRight src={img2} reverse>
            <ContainerText>
                    <h2>Sales Agent </h2>
                    <p>It contacts each potential client that the prospecting team gives. Trying to interest each of them to proceed with a meeting and finally an invoice. </p>
                    <MicroSalChichaSC />
                </ContainerText>
            </LeftRight>
            <LeftRight src={img3} >
            <ContainerText>
                    <h2>Creative </h2>
                    <p>It creates the necessary content and communication flow for all the channels the team will reach the potential clients. So the message could be successful. </p>
                    <MicroSalChichaSC />
                </ContainerText>
            </LeftRight>
            <LeftRight src={img4} reverse>
            <ContainerText>
                    <h2>Marketing Analyst</h2>
                    <p>It analyzes every conversion in each step of the sales funnel (CRO). Making possible calibrate strategies on the move. Also, coordinate marketing operators. </p>
                    <MicroSalChichaSC />
                </ContainerText>
            </LeftRight>
            <LeftRight src={img5}>
                <ContainerText>
                    <h2>Data Miner </h2>
                    <p>It searches for useful information about each company and their decision-maker. Giving this data to the commercial team to reach directly each potential client. </p>
                    <MicroSalChichaSC />
                </ContainerText>
            </LeftRight>
            <LeftRight src={img6} reverse>
                <ContainerText>
                    <h2>Linkedin CM</h2>
                    <p>It reaches each potential client into Linkedin and Sales Navigator. Using different tools and strategies to increase this network with well-segmented prospects.</p>
                    <MicroSalChichaSC />
                </ContainerText>
            </LeftRight>
        </main>
    )
}

export default ImgText;