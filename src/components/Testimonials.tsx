import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const avatars = [
  { src: "https://avatars.githubusercontent.com/u/126257294?v=4", fallback: "SD" },
  { src: "https://avatars.githubusercontent.com/u/132531341?v=4", fallback: "EC" },
  { src: "https://avatars.githubusercontent.com/u/243631677?s=130&v=4", fallback: "CN" },
  { src: "https://avatars.githubusercontent.com/u/188943289?s=130&v=4", fallback: "CN" },
];

const reviews = [
  { name: "Sarah M.", role: "Enthusiastic Learner", text: "ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning." },
  { name: "James L.", role: "Lifelong Learner", text: "I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development." },
  { name: "Alex B.", role: "Inspired Creator", text: "As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally." },
];

const bg = [
  "radial-gradient(600px circle at 50% 15%, rgba(203,252,1,.45), transparent 70%)",
  "radial-gradient(500px circle at 100% 40%, rgba(203,252,1,.45), transparent 70%)",
  "radial-gradient(600px circle at 0% 100%, rgba(0,59,226,.25), transparent 70%)",
  "#fff",
].join(",");

export default function Testimonials() {
  return (
    <section className="overflow-hidden" style={{ background: bg }}>
      <div className="max-w-7xl mx-auto px-16 py-24">
        <div className="grid lg:grid-cols-2 items-center gap-16">
          <h2 className="text-5xl font-semibold text-black leading-tight">
            Discover What Our <br /> Community Is Saying
          </h2>
          <p className="text-base leading-7 text-slate-600">
            At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly from those who have experienced the transformative journey of learning and creating on our platform. Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished creators.
          </p>
        </div>

        <div className="mt-16 flex justify-between gap-10">
          {reviews.map((r, i) => (
            <Card key={r.name} className="w-93.5 h-108 rounded-3xl border-none bg-white shadow-none">
              <CardContent className="p-6">
                <Avatar className="w-20 h-20">
                  <AvatarImage src={avatars[i].src} />
                  <AvatarFallback>{avatars[i].fallback}</AvatarFallback>
                </Avatar>
                <h3 className="mt-6 text-lg font-semibold text-black">{r.name}</h3>
                <p className="text-sm text-blue-700">{r.role}</p>
                <p className="mt-6 text-base leading-7 text-slate-600">&quot;{r.text}&quot;</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}