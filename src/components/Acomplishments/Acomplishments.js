import React , {useState} from 'react';
import CountUp, { startAnimation } from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';


const data = [
  { number: 15, text: 'Accomplished Courses'},
  { number: 5, text: 'Projects in the WebDev', },
  { number: 12, text: 'Github Followers', },
  { number: 150, text: 'LinkedIn Contacts', }
];


export default function Acomplishments() {
  const [state, setState] = useState(true);

  return (
    <Section>

  <SectionTitle>Personal Accomplishments</SectionTitle>
  <Boxes>
    {data.map((card,index)=>(

      <Box key={index}>
        <BoxNum>  
  <>

  <CountUp end={card.number} duration={1.75} onEnd= {() => {
  setState(false);
  }} >
    {({ countUpRef, start }) => (
        <VisibilitySensor active={state} onChange={start} delayedCall>
            <span ref={countUpRef} />
        </VisibilitySensor>
    )}
</CountUp>
  </>+</BoxNum>
        <BoxText>{card.text}</BoxText>
      </Box>
    ))}
  </Boxes>

</Section>
  )
}