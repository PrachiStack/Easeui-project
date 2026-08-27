import { useState } from "react";
import ComponentDemo from "../ComponentsDemo";
import PropsTable from "@/components/Personal/PropsTable";
import { Layer } from "@/components/Layer";
import { Button } from "@/components/Button/Button";

const LayerPage = () => {
  const [rightDrawer, setRightDrawer] = useState(false);
  const [leftDrawer, setLeftDrawer] = useState(false);
  const [bottomSheet, setBottomSheet] = useState(false);
  const [centerLayer, setCenterLayer] = useState(false);

  const usageCode = `import { useState } from "react";
import { Layer, Button } from "dev-ease-ui";

const [rightDrawer, setRightDrawer] = useState(false);
const [leftDrawer, setLeftDrawer] = useState(false);

{/* Right Drawer Layer */}
<Button onClick={() => setRightDrawer(true)}>Open Right Drawer</Button>
<Layer
  isOpen={rightDrawer}
  onClose={() => setRightDrawer(false)}
  title="Account Settings"
  position="right"
  size="md"
  footer={
    <>
      <Button variant="outline" onClick={() => setRightDrawer(false)}>Cancel</Button>
      <Button variant="primary" onClick={() => setRightDrawer(false)}>Save Changes</Button>
    </>
  }
>
  <p>Manage profile preferences, privacy controls, and application settings here.</p>
</Layer>`;

  const propsData = [
    {
      prop: "isOpen",
      type: "boolean",
      default: "false",
      description: "Controls the visibility of the layer",
    },
    {
      prop: "onClose",
      type: "() => void",
      default: "-",
      description: "Callback triggered when closing overlay or pressing ESC",
    },
    {
      prop: "title",
      type: "ReactNode",
      default: "-",
      description: "Title heading rendered in the header section",
    },
    {
      prop: "children",
      type: "ReactNode",
      default: "-",
      description: "Main content displayed inside the layer body",
    },
    {
      prop: "footer",
      type: "ReactNode",
      default: "-",
      description: "Action buttons or elements rendered in the layer footer",
    },
    {
      prop: "position",
      type: '"left" | "right" | "top" | "bottom" | "center"',
      default: '"right"',
      description: "Direction from which the layer panel slides in",
    },
    {
      prop: "size",
      type: '"sm" | "md" | "lg" | "xl" | "full"',
      default: '"md"',
      description: "Width or height dimension of the layer container",
    },
    {
      prop: "showCloseButton",
      type: "boolean",
      default: "true",
      description: "Renders the close (X) icon in the top right corner",
    },
    {
      prop: "closeOnOverlayClick",
      type: "boolean",
      default: "true",
      description: "Closes the layer when clicking the background backdrop",
    },
    {
      prop: "closeOnEsc",
      type: "boolean",
      default: "true",
      description: "Closes the layer when pressing the Escape key",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-12">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">Layer / Drawer</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          A flexible slide-over panel component useful for side drawers, overlays, mobile sheets, and popover layers.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Positions & Variations</h2>
        <ComponentDemo code={usageCode}>
          <div className="flex flex-wrap gap-4 items-center justify-center py-4">
            {/* Right Drawer */}
            <Button variant="primary" onClick={() => setRightDrawer(true)}>
              Right Drawer
            </Button>

            {/* Left Drawer */}
            <Button variant="outline" onClick={() => setLeftDrawer(true)}>
              Left Navigation Panel
            </Button>

            {/* Bottom Sheet */}
            <Button variant="dark" onClick={() => setBottomSheet(true)}>
              Bottom Sheet
            </Button>

            {/* Center Overlay Layer */}
            <Button
              className="bg-indigo-600 hover:bg-indigo-700 text-white"
              onClick={() => setCenterLayer(true)}
            >
              Center Layer
            </Button>
          </div>

          {/* Right Layer Modal */}
          <Layer
            isOpen={rightDrawer}
            onClose={() => setRightDrawer(false)}
            title="User Profile & Settings"
            position="right"
            size="md"
            footer={
              <>
                <Button variant="outline" onClick={() => setRightDrawer(false)}>
                  Cancel
                </Button>
                <Button variant="primary" onClick={() => setRightDrawer(false)}>
                  Save Changes
                </Button>
              </>
            }
          >
            <div className="space-y-4">
              <p className="text-sm text-gray-600">
                This is a right slide-over layer panel. Perfect for forms, settings, and detail views.
              </p>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Display Name</label>
                <input
                  type="text"
                  defaultValue="Prachi"
                  className="w-full px-3 py-2 border rounded-md border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Email Address</label>
                <input
                  type="email"
                  defaultValue="prachi@example.com"
                  className="w-full px-3 py-2 border rounded-md border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </Layer>

          {/* Left Layer */}
          <Layer
            isOpen={leftDrawer}
            onClose={() => setLeftDrawer(false)}
            title="Navigation Menu"
            position="left"
            size="sm"
          >
            <nav className="flex flex-col gap-2 font-medium">
              <a href="#" className="p-2 hover:bg-gray-100 rounded-md">
                🏠 Home Dashboard
              </a>
              <a href="#" className="p-2 hover:bg-gray-100 rounded-md">
                📊 Analytics
              </a>
              <a href="#" className="p-2 hover:bg-gray-100 rounded-md">
                ⚙️ System Preferences
              </a>
              <a href="#" className="p-2 hover:bg-gray-100 rounded-md text-rose-600">
                🚪 Log Out
              </a>
            </nav>
          </Layer>

          {/* Bottom Sheet Layer */}
          <Layer
            isOpen={bottomSheet}
            onClose={() => setBottomSheet(false)}
            title="Mobile Quick Actions"
            position="bottom"
            size="sm"
          >
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="p-4 border rounded-lg hover:bg-gray-50 cursor-pointer">
                <div className="text-2xl">⚡</div>
                <div className="text-sm font-medium mt-1">Instant Pay</div>
              </div>
              <div className="p-4 border rounded-lg hover:bg-gray-50 cursor-pointer">
                <div className="text-2xl">📩</div>
                <div className="text-sm font-medium mt-1">Send Invite</div>
              </div>
              <div className="p-4 border rounded-lg hover:bg-gray-50 cursor-pointer">
                <div className="text-2xl">🔒</div>
                <div className="text-sm font-medium mt-1">Security</div>
              </div>
            </div>
          </Layer>

          {/* Center Layer */}
          <Layer
            isOpen={centerLayer}
            onClose={() => setCenterLayer(false)}
            title="Confirmation Required"
            position="center"
            size="sm"
            footer={
              <Button variant="primary" onClick={() => setCenterLayer(false)}>
                Understand & Close
              </Button>
            }
          >
            <p className="text-gray-600">
              Center layers render smoothly in the middle of the viewport, styled cleanly with backdrop blur and backdrop click handlers.
            </p>
          </Layer>
        </ComponentDemo>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">API Reference</h2>
        <PropsTable data={propsData} />
      </section>
    </div>
  );
};

export default LayerPage;
