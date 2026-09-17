import { useNavigate } from "@tanstack/react-router";
import { Search } from "lucide-react";
import { useState } from "react";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const SUGGESTIONS = ["PDF Merger", "Image Compressor", "JSON Formatter", "Password Generator"];

export function SearchDialog() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  const go = (q: string) => {
    setOpen(false);
    setValue("");
    navigate({ to: "/tools", search: { q: q || undefined, page: 1 } });
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Search tools"
        className="inline-flex size-10 items-center justify-center rounded-full border border-border bg-card text-foreground transition-all duration-300 hover:border-primary/40 hover:text-primary focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none active:scale-95"
      >
        <Search className="size-[18px]" />
      </button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="rounded-2xl sm:max-w-lg">
          <DialogHeader>
            <DialogTitle className="text-lg">Search ToolNami</DialogTitle>
          </DialogHeader>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              go(value);
            }}
            className="space-y-4"
          >
            <div className="flex items-center gap-2 rounded-xl border border-input bg-background px-3 focus-within:border-primary/50 focus-within:ring-2 focus-within:ring-ring/30">
              <Search className="size-4 text-muted-foreground" />
              <input
                autoFocus
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="Search for a tool, e.g. compress image"
                className="h-11 w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {SUGGESTIONS.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => go(s)}
                  className="rounded-full border border-border px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-primary/40 hover:bg-primary-soft hover:text-primary"
                >
                  {s}
                </button>
              ))}
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}
