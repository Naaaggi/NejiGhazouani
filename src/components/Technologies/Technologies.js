import React from 'react';
import { DiAppcelerator, DiAptana, DiAtom, DiAws, DiCisco, DiCloud9, DiDatabase, DiDigitalOcean, DiFirebase, DiJavascript, DiMagento, DiMaterializecss, DiOpenshift, DiRaphael, DiReact, DiSenchatouch, DiStreamline, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
    <Section id="tech">
      
      <SectionDivider/>
      <br/>
      <br/>
      <SectionTitle>Technologies</SectionTitle>
      <SectionText>
        I've worked with a lot of technolgies in the web development world and data science universe.
        From Back-end to Data visualization.
      </SectionText>
      <List>
        <ListItem>
          <DiReact size="3rem" />
          <ListContainer>
            <ListTitle>Front-End</ListTitle>
            <ListParagraph>
              Experience with <br/>
              React.js
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <DiDatabase size="3rem" />
          <ListContainer>
            <ListTitle>Back-End</ListTitle>
            <ListParagraph>
              Experience with <br/>
              Node.js and Databases
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <DiOpenshift size="3rem" />
          <ListContainer>
            <ListTitle>Data Visualization</ListTitle>
            <ListParagraph>
              Experience with <br/>
              Matlab
            </ListParagraph>
          </ListContainer>
        </ListItem>
      </List>
    </Section>
);

export default Technologies;
