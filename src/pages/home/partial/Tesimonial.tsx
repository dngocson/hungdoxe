import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Carousel from "../../../components/_Common/Carousel";
import {
  TestimonialCardCustomer,
  TestimonialCardSocial,
} from "../component/TestimonialCard";

const testimonialInfo = [
  {
    id: 0,
    testimonial:
      " ChungAuto là cơ sở độ xe mà tôi rất yêu thích vì nơi đây có nhiều loại sản phẩm chính hãng, chất lượng cao, thợ kỹ thuật chuyên nghiệp và làm việc rất nhiệt tình. ",
    description: " Chủ kênh Youtube Mê Xe ",
    name: " Anh Lê Hùng ",
    image: "https://cdn.chungauto.vn/uploads/profile/viet-anh-tipcar-tv.jpg",
  },
  {
    id: 1,
    testimonial:
      " ChungAuto chắc chắn là một trong những cơ sở độ xe ô tô uy tín tại Việt Nam ChungAuto chắc chắn là một trong những cơ sở độ xe ô tô uy tín tại Việt Nam. Nhân viên tại đây có chuyên môn cao, luôn tận tình tư vấn, hướng dẫn và hỗ trợ tôi. ",
    description: " Chủ kênh Youtube Tipcar TV ",
    name: " Anh Mạnh Linh ",
    image: "https://cdn.chungauto.vn/uploads/profile/viet-anh-tipcar-tv.jpg",
  },
  {
    id: 2,
    testimonial:
      " Những lần độ xe tại ChungAuto khiến tôi hài lòng ngoài mong đợi. Xin cảm ơn đội ngũ ChungAuto đã giúp chiếc xe của tôi trở nên hiện đại và sang trọng hơn nhiều lần. ",
    description: " Chủ kênh Youtube Tipcar TV ",
    name: " Anh Việt Anh ",
    image: "https://cdn.chungauto.vn/uploads/profile/viet-anh-tipcar-tv.jpg",
  },
];

const SocialInfo = [
  {
    id: 0,
    title: "Cafef.vn: Bọc ghế da ô tô đẹp, sang trọng tại Chung Auto",
    description:
      "Bọc ghế da ô tô sẽ làm tăng tính thẩm mỹ cho chiếc xe hơi, bởi ghế da mang lại vẻ sang trọng và đẳng cấp cho nội thất xe, giúp xe trở nên sang trọng và cao cấp hơn. Ghế da có khả năng chống thấm nước và bụi bẩn tốt hơn so với ghế nỉ, nên việc vệ sinh cũng dễ dàng hơn, chỉ cần lau chùi bằng khăn ẩm là có thể loại bỏ bụi bẩn và nước bẩn trên ghế. Ghế da có độ bền cao hơn so với ghế nỉ, giúp bảo vệ ghế xe tốt hơn.",
    image:
      "https://cdn.chungauto.vn/uploads/tin-tuc-1/dan-ppf-cho-xe-oto-426x221.jpg",
  },
  {
    id: 1,
    title: "Baodanang.vn: ChungAuto - Địa chỉ dán phim PPF ô-tô uy tín",
    description:
      "Phim PPF - Paint Protection Film là phim bảo vệ sơn, được làm từ vật liệu nhựa polyurethane hoặc urethane, có độ dẻo dai và khả năng chống chịu cao, được dán lên bề mặt sơn xe để bảo vệ xe khỏi các tác động bên ngoài. Thông thường, độ dày của phim PPF dao động từ 0.125 - 0.3mm. Phim PPF càng dày thì khả năng bảo vệ xe càng tốt.",
    image:
      "https://cdn.chungauto.vn/uploads/man-hinh-zestech/zestech-zx10-ra-lenh-giong-noi-426x221.jpg",
  },
  {
    id: 2,
    title: "Genk.vn: ChungAuto - Địa chỉ lắp màn hình Zestech uy tín",
    description:
      "Bọc ghế da ô tô sẽ làm tăng tính thẩm mỹ cho chiếc xe hơi, bởi ghế da mang lại vẻ sang trọng và đẳng cấp cho nội thất xe, giúp xe trở nên sang trọng và cao cấp hơn. Ghế da có khả năng chống thấm nước và bụi bẩn tốt hơn so với ghế nỉ, nên việc vệ sinh cũng dễ dàng hơn, chỉ cần lau chùi bằng khăn ẩm là có thể loại bỏ bụi bẩn và nước bẩn trên ghế. Ghế da có độ bền cao hơn so với ghế nỉ, giúp bảo vệ ghế xe tốt hơn.",
    image:
      "https://cdn.chungauto.vn/uploads/boc-ghe-da/boc-ghe-da-oto-chungauto-426x221.jpg",
  },
];
const Tesimonial = () => {
  return (
    <div>
      <div className="mt-8 space-y-7 bg-testimonial object-fill py-20 text-center text-white">
        <h2 className="text-4xl uppercase ">phản hồi khách hàng</h2>
        <p>
          Sản phẩm của ChungAuto được tin tưởng bởi nhiều khách hàng, trong đó
          có những chuyên gia, người nổi tiếng trong ngành xe ô tô.
        </p>

        <Carousel
          setting={{
            slidesToShow: 3,
            swipeToSlide: true,
            slidesToScroll: 1,
            speed: 250,
            dots: true,
            infinite: true,
          }}
          generateKey={(item) => item.id + ""}
          customArrowContainerClassname={"w-[98%]"}
          customArrowClassname={
            "p-2 rounded-full  text-3xl bg-neutral border shadow-[5px_5px_5px_rgba(0,0,0,0.5)] hover:bg-transparent hover:shadow-none"
          }
          leftArrowIcon={<IoIosArrowBack />}
          rightArrowIcon={<IoIosArrowForward />}
          items={testimonialInfo}
        >
          {(testimonial) => (
            <TestimonialCardCustomer
              testimonial={testimonial.testimonial}
              description={testimonial.description}
              name={testimonial.name}
              image={testimonial.image}
            />
          )}
        </Carousel>
      </div>

      <div className="mt-8 space-y-20 bg-social object-center py-20 text-center text-white">
        <h2 className="text-4xl font-bold uppercase text-black">
          BÁO CHÍ NÓI GÌ Về CHUNGAUTO
        </h2>

        <Carousel
          setting={{
            slidesToShow: 3,
            swipeToSlide: true,
            slidesToScroll: 1,
            speed: 250,
            dots: true,
            infinite: true,
          }}
          generateKey={(item) => item.id + ""}
          customArrowContainerClassname={"w-[98%]"}
          customArrowClassname={
            "p-2 rounded-full text-3xl bg-neutral border shadow-[5px_5px_5px_rgba(0,0,0,0.5)] hover:bg-transparent hover:shadow-none"
          }
          leftArrowIcon={<IoIosArrowBack />}
          rightArrowIcon={<IoIosArrowForward />}
          items={SocialInfo}
        >
          {(testimonial) => (
            <TestimonialCardSocial
              title={testimonial.title}
              description={testimonial.description}
              image={testimonial.image}
            />
          )}
        </Carousel>
      </div>
    </div>
  );
};

export default Tesimonial;
