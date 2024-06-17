import { StarFilledIcon } from "@radix-ui/react-icons";

interface ITestimonialCardCustomer
  extends React.HTMLAttributes<HTMLDivElement> {
  image: string;
  name: string;
  description: string;
  testimonial: string;
}

const TestimonialCardCustomer = ({
  image,
  name,
  description,
  testimonial,
  ...props
}: ITestimonialCardCustomer) => {
  return (
    <div className="h-full px-2" {...props}>
      <div className="flex h-full min-w-full max-w-[350px] flex-col rounded-xl bg-white p-8 text-black">
        <div className="space-y-6">
          <div className="flex items-center gap-5 ">
            <img src={image} className="h-20 w-20 rounded-full" alt="avatar" />
            <div className="flex flex-col items-start space-y-2">
              <p className="text-xl font-bold">{name}</p>
              <p className="text-sm">{description}</p>
              <div className="flex gap-2 text-error">
                <StarFilledIcon className="h-5 w-5" />
                <StarFilledIcon className="h-5 w-5" />
                <StarFilledIcon className="h-5 w-5" />
                <StarFilledIcon className="h-5 w-5" />
                <StarFilledIcon className="h-5 w-5" />
              </div>
            </div>
          </div>
          <p>{testimonial}</p>
        </div>
        <img
          className="mt-auto h-12 w-12 "
          src="images/feedback-icon.svg"
          alt=""
        />
      </div>
    </div>
  );
};

interface ITestimonialCardSocial extends React.HTMLAttributes<HTMLDivElement> {
  image: string;
  title: string;
  description: string;
}

const TestimonialCardSocial = ({
  title,
  description,
  image,
  ...props
}: ITestimonialCardSocial) => {
  return (
    <div className="h-full px-2" {...props}>
      <div className=" flex h-full max-w-[350px] flex-col overflow-hidden rounded-xl bg-white text-start text-black ">
        <div className="space-y-6">
          <img src={image} className="" alt="avatar" />
          <div className="space-y-4 p-4">
            <p className="text-md font-bold uppercase ">{title}</p>
            <p className="line-clamp-2">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export { TestimonialCardCustomer, TestimonialCardSocial };
