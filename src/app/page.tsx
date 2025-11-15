import { PicGallery } from './components/PicGallery'
import { PicCarousel } from './components/Carousel'
import Footer from './components/Footer'
import About from './components/About'
import ScrollToTop from './components/ScrollToTop'
import DisplayItems from './components/DisplayItems'




const page = () => {
  return (
    <div>
      <PicGallery />
      <DisplayItems />
      <About />
      <PicCarousel />
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default page