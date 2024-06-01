import Container from "../../components/_Common/Container";
import PageBreaker from "../../components/_Common/PageBreaker";
import { section_one } from "../../constants/mockData";
import CarouselContainer from "./partial/CarouselContainer";
import HomeImage from "./partial/HomeImage";
import Newsletter from "./partial/Newsletter";
import SaleOffItems from "./partial/SaleOffItems";
import Section from "./partial/Section";
import Tesimonial from "./partial/Tesimonial";

const Home = () => {
  return (
    <div className="container mx-auto">
      <Container>
        {/* HOME IMAGE */}
        <HomeImage />

        {/* Carousel*/}
        <CarouselContainer />
        <PageBreaker className="my-4" label="SẢN PHẨM KHUYẾN MÃI TỐT NHẤT" />

        {/* Item Showcase*/}
        <SaleOffItems />
        <Section
          items={section_one.items}
          itemsLabels={section_one.itemsLabels}
          label="NỘI THẤT Ô TÔ"
        />
        <Section
          items={section_one.items}
          itemsLabels={section_one.itemsLabels}
          label="Ngoại thất ô tô"
        />

        {/* Testimonial*/}
        <Tesimonial />

        {/* NewsLetter*/}
        <Newsletter />
      </Container>
    </div>
  );
};

export default Home;
