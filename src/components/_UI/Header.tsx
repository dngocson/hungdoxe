import {
  AiFillEnvironment,
  AiFillPhone,
  AiFillYoutube,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { cn } from "../../utils/cn";
import MenuBar from "../../libs/MenuBar";
import { mock_MenuBar } from "../../constants/mockData";

interface IHeader {
  data: {
    logo: string;
    hotline: string;
    location: string;
    facebook_link: string;
    youtube_link: string;
    twitter_link: string;
    instagram_link: string;
  };
}

const Header = ({ data }: IHeader) => {
  return (
    <div>
      <div className="bg-accent-content py-4">
        <div className="container mx-auto flex items-center justify-between">
          <img src={data.logo} alt="logo" />
          <button className="btn btn-outline text-base-100 hover:bg-base-100 hover:text-accent-content">
            <AiOutlineShoppingCart className="text-2xl" />
            <span>Giỏ hàng</span>
          </button>
          <button
            className={cn([
              "btn btn-outline",
              "border-none hover:bg-accent-content",
            ])}
          >
            <AiFillPhone className="text-2xl text-base-100" />
            <span className="text-base-100">Hotline: {data.hotline}</span>
          </button>
          <button
            className={cn([
              "btn btn-outline ",
              "border-none hover:bg-accent-content ",
            ])}
          >
            <AiFillEnvironment className="text-2xl text-base-100" />
            <span className="text-base-100">Tìm cửa hàng</span>
          </button>

          <div className="flex items-center justify-between gap-4">
            <button>
              <FaFacebook className="text-3xl text-base-100" />
            </button>
            <button>
              <AiFillYoutube className="rounded-full bg-base-100 p-1 text-3xl text-accent-content" />
            </button>
            <button>
              <FaTwitter className="rounded-full bg-base-100 p-[4px] text-3xl text-accent-content" />
            </button>
            <button>
              <FaInstagram className="rounded-full bg-base-100 p-[4px] text-3xl text-accent-content" />
            </button>
          </div>
        </div>
      </div>
      <div className="bg-error">
        <MenuBar items={mock_MenuBar} />
      </div>
    </div>
  );
};

export default Header;
