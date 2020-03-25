import React from "react"
import resume from "../../resume.json"
import GlobeIcon from "./globe-icon"
import AtIcon from "./at-icon"
import {
  GlobalStyle,
  Wrapper,
  TagList,
  Header,
  HeaderTitle,
  HeaderSubtitle,
  HeaderContacts,
  Separator,
  Content,
  ContentSection,
  ContentTitle,
  Job,
  JobDetails,
  CompanyName,
  JobDescription
} from "./components"

const renderTech = (tech, index) => <li key={index}>{tech}</li>

const renderInternationalExperience = (experience, index) => (
  <Job key={index}>
    <div>
      <CompanyName>
        {`${experience.country} - ${experience.company}`}
      </CompanyName>
      <JobDetails>{experience.period}</JobDetails>
    </div>
    <JobDescription>
      <p>{experience.description}</p>
    </JobDescription>
  </Job>
)

const renderHistory = (job, index) => (
  <Job key={index}>
    <div>
      <CompanyName>{job.company}</CompanyName>
      <JobDetails>{`${job.position}, ${job.period}`}</JobDetails>
    </div>
    <JobDescription>
      <p>{job.description}</p>
      <TagList>{job.techs.map(renderTech)}</TagList>
    </JobDescription>
  </Job>
)

const PrintableResume = () => {
  return (
    <Wrapper>
      <GlobalStyle />
      <link href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@300;500&family=Roboto:wght@500;700;900"
        rel="stylesheet"
        type="text/css"
      />
      <Header>
        <div>
          <HeaderTitle>Ariel Cavalcante</HeaderTitle>
          <HeaderSubtitle>Designer Web</HeaderSubtitle>
        </div>
        <HeaderContacts>
          <li>
            <GlobeIcon /> https://arielcavalcante.com
          </li>
          <li>
            <AtIcon /> ariel.usabilidade@gmail.com
          </li>
        </HeaderContacts>
      </Header>
      <Separator />
      <Content>
        <aside>
          <ContentSection>
            <ContentTitle>Personal Info</ContentTitle>
            <ul>
              <li>26 years old</li>
              <li>Single</li>
              <li>Fortaleza / CE - Brazil</li>
              <li>Native Portuguese</li>
              <li>Fluent English</li>
            </ul>
          </ContentSection>
          <ContentSection>
            <ContentTitle>I already work with</ContentTitle>
            <TagList>{resume.techs.workWith.map(renderTech)}</TagList>
          </ContentSection>
          <ContentSection>
            <ContentTitle>I would also work with</ContentTitle>
            <TagList>{resume.techs.wouldWorkWith.map(renderTech)}</TagList>
          </ContentSection>
          <ContentSection>
            <ContentTitle>International Experience</ContentTitle>
            {resume.internationalExperience.map(renderInternationalExperience)}
          </ContentSection>
        </aside>
        <main>
          <ContentSection>
            <ContentTitle>Professional Experience</ContentTitle>
            {resume.history.map(renderHistory)}
          </ContentSection>
        </main>
      </Content>
    </Wrapper>
  )
}

export default PrintableResume
