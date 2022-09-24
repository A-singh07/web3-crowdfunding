import Herosection from '../components/herosection/Herosection';
import CardSection from '../components/section/CardSection';
import ThemeSection from '../components/section/ThemeSection';
// data
import { fundsData } from '../data/fundDetails';
import { landingThemeSection } from '../data/landingData';

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
    </main>
  )
}
