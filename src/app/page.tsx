import Editor from '@/components/editor';
import Featured from '@/components/featured';
import Footer from '@/components/footer';
import Header from '@/components/header';
import Hero from '@/components/hero';
import Seller from '@/components/seller';
import Summer from '@/components/summer';
import Vita from '@/components/vita';

const Home = () => {
  return (
    <div>
    
      <Header/>
      <Hero/>
      <Editor/>
      <Seller/>
      <Vita/>
      <Summer/>
      <Featured/>
      <Footer/>
    
    </div>
  
  )
}

export default Home;
