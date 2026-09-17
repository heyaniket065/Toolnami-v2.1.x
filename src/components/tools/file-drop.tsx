import { UploadCloud } from "lucide-react";
import { useRef, useState } from "react";

export function FileDrop({
  accept,
  multiple = false,
  label,
  hint,
  onFiles,
}: {
  accept: string;
  multiple?: boolean;
  label: string;
  hint: string;
  onFiles: (files: File[]) => void;
}) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [over, setOver] = useState(false);

  const emit = (list: FileList | null) => {
    if (!list || list.length === 0) return;
    onFiles(Array.from(list));
  };

  return (
    <div
      onDragOver={(e) => {
        e.preventDefault();
        setOver(true);
      }}
      onDragLeave={() => setOver(false)}
      onDrop={(e) => {
        e.preventDefault();
        setOver(false);
        emit(e.dataTransfer.files);
      }}
      className={`rounded-2xl border-2 border-dashed p-6 text-center transition-all duration-300 sm:p-10 ${
        over ? "border-primary bg-primary-soft" : "border-border bg-background"
      }`}
    >
      <span className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-primary-soft text-primary">
        <UploadCloud className="size-6" />
      </span>
      <p className="mt-4 text-sm font-semibold sm:text-base">{label}</p>
      <p className="mx-auto mt-1.5 max-w-xs text-xs text-muted-foreground sm:text-sm">{hint}</p>

      <button
        type="button"
        onClick={() => inputRef.current?.click()}
        className="mt-5 inline-flex items-center justify-center rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110 active:scale-95"
      >
        Choose file{multiple ? "s" : ""}
      </button>

      <input
        ref={inputRef}
        type="file"
        accept={accept}
        multiple={multiple}
        aria-label={label}
        className="hidden"
        onChange={(e) => {
          emit(e.target.files);
          e.target.value = "";
        }}
      />
    </div>
  );
}

export function ToolAlert({
  tone = "error",
  children,
}: {
  tone?: "error" | "success";
  children: React.ReactNode;
}) {
  return (
    <p
      role="status"
      className={`mt-4 rounded-xl border px-4 py-3 text-sm ${
        tone === "error"
          ? "border-destructive/30 bg-destructive/5 text-destructive"
          : "border-primary/30 bg-primary-soft text-primary"
      }`}
    >
      {children}
    </p>
  );
}
