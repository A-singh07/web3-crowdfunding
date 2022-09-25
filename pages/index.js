import Herosection from '../components/herosection/Herosection';
import CardSection from '../components/section/CardSection';
import ThemeSection from '../components/section/ThemeSection';
import TestimonySection from '../components/testimonySection/TestimonySection';
// data
import { fundsData } from '../data/fundDetails';
import { landingThemeSection, fundThemeSection, testimonyData } from '../data/landingData';

export default function Home() {
  return (
    <main>
      <Herosection />
      <CardSection
        heading={'Featured Funds'}
        fundsData={fundsData}
        style={{ paddingBottom: '6rem' }}
      />
      <ThemeSection
        data={landingThemeSection}
      />
      <TestimonySection
        heading={'Hear it from them'}
        cardData={testimonyData}
      />
      <ThemeSection
        data={fundThemeSection}
      />
    </main>
  )
}
