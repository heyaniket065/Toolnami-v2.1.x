import { Outlet, createFileRoute, redirect } from "@tanstack/react-router";
import { auth } from "@/lib/firebase";

export const Route = createFileRoute("/_authenticated")({
  ssr: false,
  beforeLoad: async () => {
    // Wait briefly if auth is still initializing on page refresh
    if (!auth.currentUser) {
      await new Promise<void>((resolve) => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
          unsubscribe();
          resolve();
        });
        // Timeout after 1.5s so we don't hang if user is definitely logged out
        setTimeout(() => resolve(), 1500);
      });
    }

    if (!auth.currentUser) {
      throw redirect({ to: "/auth", search: { mode: "login" } });
    }

    return { user: auth.currentUser };
  },
  component: () => <Outlet />,
});
