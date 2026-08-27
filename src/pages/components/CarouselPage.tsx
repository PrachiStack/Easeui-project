import ComponentDemo from "../ComponentsDemo";
import PropsTable from "@/components/Personal/PropsTable";
import { Carousel, CarouselItem } from "@/components/Carousel";

const CarouselPage = () => {
  const basicUsageCode = `import { Carousel, CarouselItem } from "dev-ease-ui";

<Carousel className="h-64 rounded-xl shadow-lg">
  <CarouselItem className="bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center text-white text-2xl font-bold">
    Slide 1: Welcome to EaseUI
  </CarouselItem>
  <CarouselItem className="bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center text-white text-2xl font-bold">
    Slide 2: Dynamic Components
  </CarouselItem>
  <CarouselItem className="bg-gradient-to-r from-emerald-600 to-teal-600 flex items-center justify-center text-white text-2xl font-bold">
    Slide 3: Seamless Integration
  </CarouselItem>
</Carousel>`;

  const autoPlayUsageCode = `import { Carousel, CarouselItem } from "dev-ease-ui";

<Carousel autoPlay={true} autoPlayInterval={2500} pauseOnHover={true} className="h-64 rounded-xl shadow-lg">
  <CarouselItem className="bg-slate-800 text-white flex flex-col items-center justify-center gap-2">
    <h3 className="text-2xl font-bold">Auto-Playing Carousel</h3>
    <p className="text-slate-300">Switches automatically every 2.5 seconds</p>
  </CarouselItem>
  <CarouselItem className="bg-slate-900 text-white flex flex-col items-center justify-center gap-2">
    <h3 className="text-2xl font-bold">Pause on Hover</h3>
    <p className="text-slate-300">Hover over me to pause transitions</p>
  </CarouselItem>
</Carousel>`;

  const propsData = [
    {
      prop: "children",
      type: "ReactNode",
      default: "-",
      description: "CarouselItem nodes to render as slides",
    },
    {
      prop: "loop",
      type: "boolean",
      default: "true",
      description: "Whether the carousel loops back to the start after reaching the end",
    },
    {
      prop: "initialIndex",
      type: "number",
      default: "0",
      description: "Index of the slide displayed by default",
    },
    {
      prop: "autoPlay",
      type: "boolean",
      default: "false",
      description: "Enable automatic transition between slides",
    },
    {
      prop: "autoPlayInterval",
      type: "number",
      default: "3000",
      description: "Duration in milliseconds between auto-play transitions",
    },
    {
      prop: "pauseOnHover",
      type: "boolean",
      default: "true",
      description: "Pauses auto-play while the user hovers over the carousel",
    },
    {
      prop: "showArrows",
      type: "boolean",
      default: "true",
      description: "Show previous and next navigation arrow buttons",
    },
    {
      prop: "showIndicators",
      type: "boolean",
      default: "true",
      description: "Show dot navigation indicators at the bottom",
    },
    {
      prop: "className",
      type: "string",
      default: '""',
      description: "Custom CSS classes for the container",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-12">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">Carousel</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          A touch-friendly, responsive carousel slider component with support for auto-play, indicator dots, and gesture controls.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Basic Usage</h2>
        <ComponentDemo code={basicUsageCode}>
          <div className="w-full max-w-2xl">
            <Carousel className="h-64 rounded-xl shadow-lg overflow-hidden">
              <CarouselItem className="bg-gradient-to-r from-blue-600 to-indigo-600 flex flex-col items-center justify-center text-white">
                <h3 className="text-2xl font-bold">Slide 1: Welcome to EaseUI</h3>
                <p className="text-blue-100 mt-2">Smooth transition and touch swipe support</p>
              </CarouselItem>
              <CarouselItem className="bg-gradient-to-r from-purple-600 to-pink-600 flex flex-col items-center justify-center text-white">
                <h3 className="text-2xl font-bold">Slide 2: Dynamic Components</h3>
                <p className="text-purple-100 mt-2">Customizable styles and indicators</p>
              </CarouselItem>
              <CarouselItem className="bg-gradient-to-r from-emerald-600 to-teal-600 flex flex-col items-center justify-center text-white">
                <h3 className="text-2xl font-bold">Slide 3: Seamless Integration</h3>
                <p className="text-emerald-100 mt-2">Built with React and Tailwind CSS</p>
              </CarouselItem>
            </Carousel>
          </div>
        </ComponentDemo>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Auto-Play & Pause on Hover</h2>
        <ComponentDemo code={autoPlayUsageCode}>
          <div className="w-full max-w-2xl">
            <Carousel
              autoPlay={true}
              autoPlayInterval={2500}
              pauseOnHover={true}
              className="h-64 rounded-xl shadow-lg overflow-hidden"
            >
              <CarouselItem className="bg-slate-800 text-white flex flex-col items-center justify-center gap-2">
                <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs font-semibold uppercase tracking-wider">
                  Feature 1
                </span>
                <h3 className="text-2xl font-bold">Auto-Playing Carousel</h3>
                <p className="text-slate-400">Switches slides automatically every 2.5 seconds</p>
              </CarouselItem>
              <CarouselItem className="bg-slate-900 text-white flex flex-col items-center justify-center gap-2">
                <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-xs font-semibold uppercase tracking-wider">
                  Feature 2
                </span>
                <h3 className="text-2xl font-bold">Pause on Hover</h3>
                <p className="text-slate-400">Hover mouse cursor over this box to freeze auto-play</p>
              </CarouselItem>
            </Carousel>
          </div>
        </ComponentDemo>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">API Reference</h2>
        <PropsTable data={propsData} />
      </section>
    </div>
  );
};

export default CarouselPage;
