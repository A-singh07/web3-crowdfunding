import React from 'react';
import HerosectionAbout from '../components/herosection/HerosectionAbout';
import SectionMission from '../components/section/SectionMission';
import SectionRegular from '../components/section/SectionRegular';
import ThemeSection from '../components/section/ThemeSection';
// Data
import { heroSection, missionData, nextGenSection, aboutThemeSection } from '../data/aboutData'

const About = () => {

  return (
    <main>
      <HerosectionAbout
        data={heroSection}
      />
      <SectionMission
        data={missionData}
      />
      <SectionRegular
        data={nextGenSection}
      />
      <ThemeSection
        data={aboutThemeSection}
      />
    </main>
  )
}

export default About
