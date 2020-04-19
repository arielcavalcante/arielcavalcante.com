import React from "react"
import Link from "gatsby-link"
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

const renderEducationalInformation = (experience, index) => (
  <Job key={index}>
    <div>
      <CompanyName>
        {`${experience.university} - ${experience.longName}`}
      </CompanyName>
      <JobDetails>{experience.period}</JobDetails>
    </div>
    <JobDescription>
      <p>{experience.course}</p>
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
      <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;500;900&family=Roboto+Slab:wght@700"
        rel="stylesheet"
        type="text/css"
      />
      <Header>
        <div>
          <HeaderTitle>Ariel Cavalcante</HeaderTitle>
          <HeaderSubtitle>Product Designer</HeaderSubtitle>
        </div>
        <HeaderContacts>
          <li>
            <GlobeIcon />
            <Link to="/">
              arielcavalcante.io
            </Link>
          </li>
          <li>
            <AtIcon /> 
            <a href="mailto:ariel.usabilidade@gmail.com">
              ariel.usabilidade@gmail.com
            </a>
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
              <li>Brazil</li>
              <li>Native Portuguese</li>
              <li>Fluent English</li>
            </ul>
          </ContentSection>
        <ContentSection>
            <ContentTitle>Education</ContentTitle>
            {resume.educationalInformation.map(renderEducationalInformation)}
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
            <ContentTitle>I can't work without</ContentTitle>
            <TagList>{resume.techs.wouldntWorkWithout.map(renderTech)}
            </TagList>
          </ContentSection>
        </aside>
        <main>
        <ContentSection>
            <ContentTitle>International Experience</ContentTitle>
            {resume.internationalExperience.map(renderInternationalExperience)}
          </ContentSection>
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
