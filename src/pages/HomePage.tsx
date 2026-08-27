import {
  ArrowRight,
  Code2,
  Github,
  Layers3,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router";

const HomePage = () => {
  const features = [
    {
      icon: <Layers3 size={20} />,
      title: "Reusable",
      description: "Ready-to-use components for your React projects.",
    },
    {
      icon: <Sparkles size={20} />,
      title: "Customizable",
      description: "Simple APIs and styles that are easy to customize.",
    },
    {
      icon: <Code2 size={20} />,
      title: "Developer Friendly",
      description: "Built with React, TypeScript and Tailwind CSS.",
    },
  ];

  const components = [
    {
      name: "Button",
      description: "Flexible buttons with variants and animations.",
      path: "/components/button",
    },
    {
      name: "Card",
      description: "Clean and customizable content cards.",
      path: "/components/card",
    },
    {
      name: "Modal",
      description: "Simple dialogs and interactive overlays.",
      path: "/components/modal",
    },
    {
      name: "Input",
      description: "Flexible inputs for modern forms.",
      path: "/components/input",
    },
    {
      name: "Carousel",
      description: "Interactive sliders with smooth transitions.",
      path: "/components/carousel",
    },
    {
      name: "Tooltip",
      description: "Helpful information for your interface.",
      path: "/components/tooltip",
    },
    {
      name: "Layer",
      description: "Slide-over panels and overlay drawers.",
      path: "/components/layer",
    },
  ];

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="border-b border-gray-200 dark:border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-24 text-center">
          <div className="mx-auto mb-5 flex w-fit items-center gap-2 rounded-full border border-gray-200 px-4 py-2 text-sm text-gray-500 dark:border-white/10 dark:text-gray-400">
            <Sparkles size={15} />
            React Component Library
          </div>

          <h1 className="text-5xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
            Build beautiful
            <span className="block text-blue-600 dark:text-blue-400">
              interfaces with EaseUI.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 dark:text-gray-400">
            A collection of reusable React components designed to help you
            build modern interfaces faster.
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <Link
              to="/components/button"
              className="flex items-center gap-2 rounded-lg bg-gray-900 px-5 py-3 font-medium text-white transition hover:bg-gray-700 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200"
            >
              Explore Components
              <ArrowRight size={17} />
            </Link>

            <a
              href="https://github.com/PrachiStack/Easeui-project"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-lg border border-gray-200 px-5 py-3 font-medium text-gray-700 transition hover:bg-gray-50 dark:border-white/10 dark:text-white dark:hover:bg-white/5"
            >
              <Github size={17} />
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Why EaseUI?
          </h2>

          <p className="mt-3 text-gray-600 dark:text-gray-400">
            Simple building blocks for modern React applications.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-xl border border-gray-200 bg-white p-6 dark:border-white/10 dark:bg-white/[0.03]"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
                {feature.icon}
              </div>

              <h3 className="font-semibold text-gray-900 dark:text-white">
                {feature.title}
              </h3>

              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Components */}
      <section className="border-y border-gray-200 bg-gray-50 dark:border-white/10 dark:bg-white/[0.02]">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <p className="text-sm font-medium text-blue-600 dark:text-blue-400">
                Components
              </p>

              <h2 className="mt-2 text-3xl font-bold text-gray-900 dark:text-white">
                Explore EaseUI
              </h2>

              <p className="mt-2 text-gray-600 dark:text-gray-400">
                Start building with reusable components.
              </p>
            </div>

            <Link
              to="/components/button"
              className="hidden items-center gap-1 text-sm font-medium text-gray-900 sm:flex dark:text-white"
            >
              View all
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {components.map((component) => (
              <Link
                key={component.name}
                to={component.path}
                className="group rounded-xl border border-gray-200 bg-white p-5 transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/[0.03]"
              >
                <div className="mb-6 flex h-24 items-center justify-center rounded-lg bg-gray-50 dark:bg-white/[0.03]">
                  <span className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm dark:border-white/10 dark:bg-[#18181b] dark:text-white group-hover:border-blue-500 transition-colors">
                    {component.name}
                  </span>
                </div>

                <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {component.name}
                </h3>

                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  {component.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
          Start building with EaseUI.
        </h2>

        <p className="mx-auto mt-3 max-w-lg text-gray-600 dark:text-gray-400">
          Explore the components and create your next interface faster.
        </p>

        <Link
          to="/components/button"
          className="mt-7 inline-flex items-center gap-2 rounded-lg bg-gray-900 px-5 py-3 font-medium text-white dark:bg-white dark:text-gray-900"
        >
          Explore Components
          <ArrowRight size={17} />
        </Link>
      </section>
    </div>
  );
};

export default HomePage;
