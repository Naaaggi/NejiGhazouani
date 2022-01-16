import React from 'react';
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

const Acomplishments = () => (

<Section>

  <SectionTitle>Personal Accomplishments</SectionTitle>
  <Boxes>
    {data.map((card,index)=>(

      <Box key={index}>
        <BoxNum>  
  <>
        <CountUp redraw={true}  start={0} duration={1.75} end={card.number}>
        {({ countUpRef, start }) => (
            <VisibilitySensor onChange={start} delayedCall>
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

);

export default Acomplishments;
