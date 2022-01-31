import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
import Typewriter from 'typewriter-effect'

const Hero = (props) => (
<Section row nopadding>
  <LeftSection>
    <SectionTitle main center >
    <div style={{fontSize: "55" , lineHeight: "1.2"}}><div><p>Hey, I am</p></div>
   <Typewriter
  options={{
    strings: ['Neji Ghazouani', 'a Web Developer','into Data Science'],
    autoStart: true,
    loop: true,
  }}
/> 
</div>
    </SectionTitle>
    <SectionText>
    I am an Applied Computer Science Student<br/>
    at HTW Berlin
    </SectionText>
    <Button onClick={() => window.open('https://www.linkedin.com/in/m-neji-ghazouani/', '_blank')}>Learn More
    </Button>

  </LeftSection>
</Section>
);

export default Hero;