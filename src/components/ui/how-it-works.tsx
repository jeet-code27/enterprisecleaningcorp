
import { ContainerScroll, CardSticky } from "@/components/ui/cards-stack";

const PROCESS_PHASES = [
  {
    id: "process-1",
    title: "Keep Your Business Clean With Our Updated Steam Cleaning Process",
    description:
      "We use the best methods and products to ensure a clean and healthy environment for your employees, customers and guests.",
  },
  {
    id: "process-2",
    title: "Flood Clean-up",
    description:
      "We hold a successful track record of satisfying our customers and getting back their bond money.",
  },
  {
    id: "process-3",
    title: "Special Cleaning",
    description:
      "We use the most excellent quality tools and equipment to get all the dust and dirt out of your premises.",
  },
  {
    id: "process-4",
    title: "Daily & Nightly Janitorial Services",
    description:
      "We use biodegradable products which do not harm the environment, pets or humans in any way.",
  },
];

export const HowItWorks = () => {
  return (
    <div className="w-full min-h-svh place-content-center bg-white px-6 text-foreground xl:px-12 py-24">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 md:gap-12 xl:gap-24">
        <div className="left-0 top-0 md:sticky md:h-svh md:py-24 flex flex-col justify-center">
          <div>
            <h5 className="text-sm uppercase tracking-widest font-bold" style={{ color: "#00B8FF" }}>How it Works</h5>
            <h2 className="mb-6 mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              How it Works <br />
              <span style={{ color: "#00B8FF" }}>With Us</span>
            </h2>
            <p className="max-w-prose text-lg text-muted-foreground mt-6 mb-10">
              Let us use our years of experience, skilled employees, and advanced procedures to ensure a clean and healthy environment for your employees, customers and guests.
            </p>
            <div className="relative w-full max-w-[400px] aspect-square rounded-3xl overflow-hidden border-8 border-white shadow-2xl">
              <img 
                src="/images/girl-holding-bucket.png" 
                alt="Professional cleaner holding a bucket" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        
        <ContainerScroll className="min-h-[400vh] space-y-8 py-12 md:py-24">
          {PROCESS_PHASES.map((phase, index) => (
            <CardSticky
              key={phase.id}
              index={index + 2}
              className="rounded-3xl border border-border/50 p-8 sm:p-10 shadow-xl bg-card text-card-foreground backdrop-blur-md"
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-border/50 pb-6 mb-6">
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">
                  {phase.title}
                </h3>
                <span className="text-4xl sm:text-5xl font-extrabold text-brand-blue/20">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <p className="text-muted-foreground text-lg leading-relaxed">
                {phase.description}
              </p>
            </CardSticky>
          ))}
        </ContainerScroll>
      </div>
    </div>
  );
};
