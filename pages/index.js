import Herosection from '../components/herosection/Herosection';
import CardSection from '../components/section/CardSection';

export default function Home() {
  return (
    <main>
      <Herosection />
      <CardSection heading={'Featured Funds'} />
    </main>
  )
}
