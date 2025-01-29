import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";

const reviews = [
  {
    name: "Manish Kumar",
    username: "@manish",
    body: "I am truly impressed with Nagarjun's ability to make software testing concepts both interesting and relevant. He provided real-world examples and case studies, which helped me understand the practical applications. I feel much more confident in my ability to pursue a career in software testing after completing this course.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Vani",
    username: "@vani",
    body: "The course content was comprehensive, covering a wide range of topics from manual testing to automation testing. Nagarjun was always available to answer questions and provide personalized guidance. I would highly recommend to anyone looking to enhance their software testing skills.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "Gowtham",
    username: "@gowtham",
    body: "I especially appreciated Nagarjun's emphasis on hands-on experience. The practical exercises and projects provided valuable real-world experience and helped me develop the necessary skills for a successful career in software testing.",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Rahul",
    username: "@rahul",
    body: "The hands-on exercises were the highlight of the course. Nagarjun provided excellent guidance and support as we worked through real-world scenarios. I gained valuable practical experience that I can immediately apply to my current role.",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Madhavi",
    username: "@madhavi",
    body: "Nagarjun fostered a very supportive and collaborative learning environment. The open discussions and peer feedback were incredibly valuable. I learned a lot from my fellow classmates, as well as from Nagarjun's expert guidance.",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "Siva Prasad",
    username: "@Siva",
    body: "The course materials were well-organized, comprehensive, and easy to follow. I especially appreciated the real-world examples and case studies that Nagarjun provided. This helped me understand the practical applications of the concepts learned in the classroom.",
    img: "https://avatar.vercel.sh/james",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium">
            {name}
          </figcaption>
          <p className="text-xs font-medium">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}