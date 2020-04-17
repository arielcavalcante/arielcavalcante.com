import React from "react"
import styled from "styled-components"
import Media from "react-media"
import Tag from "../tag"
import theme from "../../theme"
import resume from "../../resume.json"

const Wrapper = styled.div`
  @media (min-width: ${theme.breakpoint}rem) {
    display: flex;
    width: 100%;
  }
`

const Sidebar = styled.div`
  @media (min-width: ${theme.breakpoint}rem) {
    min-width: 17.5rem;
    max-width: 17.5rem;
  }
`

const Body = styled.div`
  @media (min-width: ${theme.breakpoint}rem) {
    padding-left: 1.5rem;
    flex-grow: 1;
  }
`

const JobSection = styled.div`
  &:not(:last-child) {
    border-bottom: .0625rem solid ${theme.lighterColor};
    padding-bottom: 1.875rem;
    margin-bottom: 1.875rem;
  }
`

const SectionTitle = styled.h3`
  font-family: ${theme.titleFont};
`

const TechSection = styled.div`
  margin-bottom: 2.5rem;
`

const JobDetails = styled.h4`
  font-size: 0.875rem;
  margin-top: 0.325rem;
  color: ${theme.workplaceTitle};
`

const TechList = styled.div`
  margin-top: 1rem;
  margin-bottom: 3rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: baseline;
`

// const FreelancingInfo = styled.div`
//   margin-top: 15rem;
//   font-size: 1rem;
//     @media (max-width: ${theme.breakpoint}rem) {
//       margin-top: 3rem;
//     }
// `

const MobileHeader = styled.div`
  font-size: 1.625rem;
  font-family: ${theme.titleFont};
  font-weight: 500;
  color: ${theme.workplaceTitle}
  margin-bottom: 1.875rem;

  &:not(:first-of-type) {
    margin-top: 3rem;
  }
`

const renderTech = (tech, index) => (
  <Tag key={index} small>
    {tech}
  </Tag>
)

const renderJob = (
  { position, company, period, description, techs },
  index
) => (
  <JobSection key={index}>
    <SectionTitle>{company}</SectionTitle>
    <JobDetails>{`${position} | ${period}`}</JobDetails>
    <p>{description}</p>
    <TechList>{techs.map(renderTech)}</TechList>
  </JobSection>
)

// const renderFreelanceInfo = ({ renderSectionTitle = true } = {}) => (
//   <TechSection>
//     {renderSectionTitle && <SectionTitle>Freelancing Work</SectionTitle>}
//     <FreelancingInfo>
//       <p>
//         <span>
//           I also work as a freelancer and I've worked with many clients over the
//           years. You can see some of these projects{" "}
//         </span>
//         <Link to="/work">here</Link>
//         <span>.</span>
//       </p>
//       <p>
//         <span>Get in </span>
//         {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
//         <a href="#" onClick={scrollToBottom}>
//           touch
//         </a>
//         <span>
//           {" "}
//           if you think that I can help you with your project, I'm sure that I
//           can!
//         </span>
//       </p>
//     </FreelancingInfo>
//   </TechSection>
// )

const Resume = () => (
  <Media query={{ minWidth: theme.breakpoint }}>
    {desktop => (
      <Wrapper>
        <Sidebar>
          {!desktop && <MobileHeader>My Stack</MobileHeader>}
          <TechSection>
            <SectionTitle>I already work with</SectionTitle>
            <TechList>{resume.techs.workWith.map(renderTech)}</TechList>
          </TechSection>
          <TechSection>
            <SectionTitle>I would also work with</SectionTitle>
            <TechList>{resume.techs.wouldWorkWith.map(renderTech)}</TechList>
          </TechSection>
          <TechSection>
            <SectionTitle>I can't work without</SectionTitle>
            <TechList>{resume.techs.wouldntWorkWithout.map(renderTech)}</TechList>
          </TechSection>
          {/* {desktop && renderFreelanceInfo()} */}
        </Sidebar>
        {!desktop && <MobileHeader>Job History</MobileHeader>}
        <Body>{resume.history.map(renderJob)}</Body>
        {/* !desktop && (
          <>
            <MobileHeader>Freelancing Work</MobileHeader>
            {renderFreelanceInfo({ renderSectionTitle: false })}
          </> 
        ) */}
      </Wrapper>
    )}
  </Media>
)

export default Resume