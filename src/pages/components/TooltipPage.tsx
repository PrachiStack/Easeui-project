import ComponentDemo from "../ComponentsDemo";
import PropsTable from "@/components/Personal/PropsTable";
import { Tooltip } from "@/components/Tooltip";
import { Button } from "@/components/Button/Button";

const TooltipPage = () => {
  const positionsCode = `import { Tooltip, Button } from "dev-ease-ui";

<Tooltip content="Tooltip on Top" position="top">
  <Button variant="outline">Top</Button>
</Tooltip>

<Tooltip content="Tooltip on Right" position="right">
  <Button variant="outline">Right</Button>
</Tooltip>

<Tooltip content="Tooltip on Bottom" position="bottom">
  <Button variant="outline">Bottom</Button>
</Tooltip>

<Tooltip content="Tooltip on Left" position="left">
  <Button variant="outline">Left</Button>
</Tooltip>`;

  const variantsCode = `import { Tooltip, Button } from "dev-ease-ui";

<Tooltip content="Dark Tooltip" variant="dark">
  <Button variant="dark">Dark</Button>
</Tooltip>

<Tooltip content="Info Message" variant="info">
  <Button variant="primary">Info</Button>
</Tooltip>

<Tooltip content="Saved Successfully!" variant="success">
  <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">Success</Button>
</Tooltip>

<Tooltip content="Action cannot be undone!" variant="danger">
  <Button className="bg-rose-600 hover:bg-rose-700 text-white">Danger</Button>
</Tooltip>`;

  const triggerCode = `import { Tooltip, Button } from "dev-ease-ui";

{/* Hover Trigger */}
<Tooltip content="Appears on mouse hover" trigger="hover">
  <Button variant="primary">Hover Me</Button>
</Tooltip>

{/* Click Trigger */}
<Tooltip content="Click again or outside to hide" trigger="click" variant="info">
  <Button variant="outline">Click Me</Button>
</Tooltip>`;

  const propsData = [
    {
      prop: "children",
      type: "ReactNode",
      default: "-",
      description: "Trigger element that activates the tooltip",
    },
    {
      prop: "content",
      type: "ReactNode",
      default: "-",
      description: "Text or component content displayed inside the tooltip",
    },
    {
      prop: "position",
      type: '"top" | "bottom" | "left" | "right"',
      default: '"top"',
      description: "Placement relative to the target element",
    },
    {
      prop: "trigger",
      type: '"hover" | "click"',
      default: '"hover"',
      description: "User interaction mode to display the tooltip",
    },
    {
      prop: "delay",
      type: "number",
      default: "150",
      description: "Delay in milliseconds before showing tooltip on hover",
    },
    {
      prop: "variant",
      type: '"dark" | "light" | "info" | "success" | "danger"',
      default: '"dark"',
      description: "Color theme variant",
    },
    {
      prop: "disabled",
      type: "boolean",
      default: "false",
      description: "Disable tooltip popup",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-12">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">Tooltip</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          A popup hint component that provides extra information on hover or click.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Positions</h2>
        <ComponentDemo code={positionsCode}>
          <div className="flex flex-wrap items-center justify-center gap-6 py-4">
            <Tooltip content="Tooltip on Top" position="top">
              <Button variant="outline">Top</Button>
            </Tooltip>
            <Tooltip content="Tooltip on Right" position="right">
              <Button variant="outline">Right</Button>
            </Tooltip>
            <Tooltip content="Tooltip on Bottom" position="bottom">
              <Button variant="outline">Bottom</Button>
            </Tooltip>
            <Tooltip content="Tooltip on Left" position="left">
              <Button variant="outline">Left</Button>
            </Tooltip>
          </div>
        </ComponentDemo>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Color Variants</h2>
        <ComponentDemo code={variantsCode}>
          <div className="flex flex-wrap items-center justify-center gap-6 py-4">
            <Tooltip content="Dark Tooltip" variant="dark">
              <Button variant="dark">Dark</Button>
            </Tooltip>
            <Tooltip content="Info Message" variant="info">
              <Button variant="primary">Info</Button>
            </Tooltip>
            <Tooltip content="Saved Successfully!" variant="success">
              <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
                Success
              </Button>
            </Tooltip>
            <Tooltip content="Action cannot be undone!" variant="danger">
              <Button className="bg-rose-600 hover:bg-rose-700 text-white">
                Danger
              </Button>
            </Tooltip>
          </div>
        </ComponentDemo>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Trigger Modes (Hover vs Click)</h2>
        <ComponentDemo code={triggerCode}>
          <div className="flex flex-wrap items-center justify-center gap-8 py-4">
            <Tooltip content="Appears on mouse hover" trigger="hover">
              <Button variant="primary">Hover Me</Button>
            </Tooltip>

            <Tooltip
              content="Click again or outside to dismiss"
              trigger="click"
              variant="info"
            >
              <Button variant="outline">Click Me</Button>
            </Tooltip>
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

export default TooltipPage;
