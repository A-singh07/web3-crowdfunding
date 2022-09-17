import Herosection from '../components/herosection/Herosection';
import CardSection from '../components/section/CardSection';
// data
import { fundsData } from '../data/fundDetails';

export default function Home() {
  return (
    <main>
      <Herosection />
      <CardSection heading={'Featured Funds'} fundsData={fundsData} />
    </main>
  )
}
