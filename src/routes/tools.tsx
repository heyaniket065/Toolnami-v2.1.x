import { Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/tools")({
  component: ToolsLayout,
});

function ToolsLayout() {
  return <Outlet />;
}
