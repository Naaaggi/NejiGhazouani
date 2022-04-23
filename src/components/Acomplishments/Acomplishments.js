import React, { useState } from "react";
import CountUp, { startAnimation } from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./AcomplishmentsStyles";

const data = [
  { number: 20, text: "Accomplished Courses" },
  { number: 10, text: "Projects in the WebDev" },
  { number: 20, text: "Github Followers" },
  { number: 400, text: "LinkedIn Contacts" },
];

export default function Acomplishments() {
  const [state, setState] = useState(true);
  let counter = 0;
  return (
    <Section>
      <SectionTitle>Personal Accomplishments</SectionTitle>
      <Boxes>
        {data.map((card, index) => (
          <Box key={index}>
            <BoxNum>
              <>
                <CountUp
                  end={card.number}
                  duration={1.75}
                  onEnd={() => {
                    counter++;
                    if (counter === 1) {
                      setState(false);
                    }
                  }}
                >
                  {({ countUpRef, start }) => (
                    <VisibilitySensor
                      active={state}
                      onChange={(ifVisible)=>{
                        if(ifVisible){
                          start();
                        }
                      }}
                      delayedCall
                    >
                      <span ref={countUpRef} />
                    </VisibilitySensor>
                  )}
                </CountUp>
              </>
              +
            </BoxNum>
            <BoxText>{card.text}</BoxText>
          </Box>
        ))}
      </Boxes>
    </Section>
  );
}
