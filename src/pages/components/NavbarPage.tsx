import ComponentDemo from "../ComponentsDemo";
import PropsTable from "@/components/Personal/PropsTable";
import { Navbar } from "@/components/navbar/Navbar";

const NavbarPage = () => {
  const lightUsageCode = `import { Navbar } from "dev-ease-ui";

<Navbar variant="light" size="default" />`;

  const darkUsageCode = `import { Navbar } from "dev-ease-ui";

<Navbar variant="dark" size="default" />`;

  const primaryUsageCode = `import { Navbar } from "dev-ease-ui";

<Navbar variant="primary" size="default" />`;

  const glassUsageCode = `import { Navbar } from "dev-ease-ui";

<Navbar variant="glass" size="default" />`;

  const propsData = [
    {
      prop: "variant",
      type: '"light" | "dark" | "primary" | "glass"',
      default: '"light"',
      description: "Visual style theme variant of the navbar header",
    },
    {
      prop: "size",
      type: '"sm" | "default" | "lg" | "xl"',
      default: '"default"',
      description: "Height dimension of the navbar container",
    },
    {
      prop: "animation",
      type: '"fadeIn" | "scaleIn" | "slideUp" | "bounceIn" | "none"',
      default: '"fadeIn"',
      description: "Entrance animation effect on mount",
    },
    {
      prop: "hoverAnimation",
      type: '"jiggle" | "scale" | "bounce" | "none"',
      default: '"none"',
      description: "Hover animation effect on container interaction",
    },
    {
      prop: "asChild",
      type: "boolean",
      default: "false",
      description: "Renders as child element using Radix Slot",
    },
    {
      prop: "className",
      type: "string",
      default: '""',
      description: "Custom CSS class names for styling overrides",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-12">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
          Navbar
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          A flexible header navigation bar component with built-in theme variants, size options, and smooth entry animations.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Light Variant
        </h2>
        <ComponentDemo code={lightUsageCode}>
          <div className="w-full">
            <Navbar variant="light" size="default" />
          </div>
        </ComponentDemo>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Dark Variant
        </h2>
        <ComponentDemo code={darkUsageCode}>
          <div className="w-full">
            <Navbar variant="dark" size="default" />
          </div>
        </ComponentDemo>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Primary Variant
        </h2>
        <ComponentDemo code={primaryUsageCode}>
          <div className="w-full">
            <Navbar variant="primary" size="default" />
          </div>
        </ComponentDemo>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Glassmorphism Variant
        </h2>
        <ComponentDemo code={glassUsageCode}>
          <div className="w-full p-6 bg-gradient-to-r from-slate-900 via-indigo-950 to-blue-900 rounded-xl">
            <Navbar variant="glass" size="default" />
          </div>
        </ComponentDemo>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          API Reference
        </h2>
        <PropsTable data={propsData} />
      </section>
    </div>
  );
};

export default NavbarPage;
