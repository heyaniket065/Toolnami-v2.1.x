import { type ReactNode, useMemo } from "react";
import { Link } from "@tanstack/react-router";
import { ExternalLink } from "lucide-react";

interface FormattedMarkdownProps {
  content: string;
  className?: string;
  onLinkClick?: () => void;
}

/**
 * Parses inline text including:
 * - Markdown & WhatsApp bold: **text** and *text*
 * - Markdown & WhatsApp italic: _text_
 * - Strikethrough: ~text~ and ~~text~~
 * - Inline code: `text`
 * - Markdown links: [Label](url) or **[Label](url)**
 */
function parseInlineFormatting(
  text: string,
  onLinkClick?: () => void,
  keyPrefix: string = "inline",
): ReactNode[] {
  if (!text) return [];

  // Regex that captures:
  // 1. Markdown links: \[([^\]]+)\]\(([^)]+)\)
  // 2. Bold double asterisks: \*\*([^*]+)\*\*
  // 3. WhatsApp single asterisks bold (word bounded): (?<=^|[\s(])\*([^*\n]+)\*(?=[\s.,!?:;)]|$)
  // 4. WhatsApp / Markdown italic underscores: (?<=^|[\s(])_([^_\n]+)_(?=[\s.,!?:;)]|$)
  // 5. Strikethrough: ~+([^~\n]+)~+
  // 6. Inline code: `([^`\n]+)`
  const tokenRegex =
    /(\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*|(?<=^|[\s(])\*([^*\n]+)\*(?=[\s.,!?:;)]|$)|(?<=^|[\s(])_([^_\n]+)_(?=[\s.,!?:;)]|$)|~+([^~\n]+)~+|`([^`\n]+)`)/g;

  const elements: ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let idx = 0;

  while ((match = tokenRegex.exec(text)) !== null) {
    const matchIndex = match.index;
    if (matchIndex > lastIndex) {
      elements.push(
        <span key={`${keyPrefix}-txt-${idx++}`}>{text.substring(lastIndex, matchIndex)}</span>,
      );
    }

    const fullMatch = match[0];
    const linkText = match[2];
    const linkHref = match[3];
    const boldDouble = match[4];
    const boldSingle = match[5];
    const italicUnder = match[6];
    const strikeText = match[7];
    const codeText = match[8];

    if (linkHref) {
      // It's a markdown link [Label](url)
      const isInternal = linkHref.startsWith("/") || linkHref.startsWith("#");
      elements.push(
        <Link
          key={`${keyPrefix}-link-${idx++}`}
          to={linkHref}
          onClick={onLinkClick}
          className="inline-flex items-center gap-1 font-semibold text-primary underline underline-offset-2 decoration-primary/40 hover:text-primary hover:decoration-primary transition-colors cursor-pointer"
        >
          <span>{linkText}</span>
          {!isInternal && <ExternalLink className="size-3 inline opacity-70" />}
        </Link>,
      );
    } else if (boldDouble !== undefined || boldSingle !== undefined) {
      const boldContent = boldDouble ?? boldSingle;
      // Recursively parse inline styles inside bold if any (e.g. bold link)
      elements.push(
        <strong
          key={`${keyPrefix}-b-${idx++}`}
          className="font-bold text-foreground tracking-tight"
        >
          {parseInlineFormatting(boldContent, onLinkClick, `${keyPrefix}-sub-b`)}
        </strong>,
      );
    } else if (italicUnder !== undefined) {
      elements.push(
        <em key={`${keyPrefix}-em-${idx++}`} className="italic text-foreground/90 font-medium">
          {parseInlineFormatting(italicUnder, onLinkClick, `${keyPrefix}-sub-em`)}
        </em>,
      );
    } else if (strikeText !== undefined) {
      elements.push(
        <del
          key={`${keyPrefix}-del-${idx++}`}
          className="line-through text-muted-foreground opacity-80"
        >
          {strikeText}
        </del>,
      );
    } else if (codeText !== undefined) {
      elements.push(
        <code
          key={`${keyPrefix}-code-${idx++}`}
          className="px-1.5 py-0.5 rounded-md bg-muted font-mono text-[13px] text-primary font-semibold border border-border/60"
        >
          {codeText}
        </code>,
      );
    } else {
      elements.push(<span key={`${keyPrefix}-raw-${idx++}`}>{fullMatch}</span>);
    }

    lastIndex = matchIndex + fullMatch.length;
  }

  if (lastIndex < text.length) {
    elements.push(<span key={`${keyPrefix}-txt-end`}>{text.substring(lastIndex)}</span>);
  }

  return elements;
}

/**
 * Robust, high-fidelity markdown & WhatsApp-style text renderer.
 * Handles headings (hiding ### and styling as proper bold headers),
 * WhatsApp formatting (*bold*, _italic_, ~strike~), lists, links,
 * and horizontal rules without raw syntax clutter.
 */
export function FormattedMarkdown({
  content,
  className = "",
  onLinkClick,
}: FormattedMarkdownProps) {
  const renderedBlocks = useMemo(() => {
    if (!content) return null;

    // Clean up content: normalize CRLF
    const normalized = content.replace(/\r\n/g, "\n");
    const rawLines = normalized.split("\n");

    const blocks: ReactNode[] = [];
    let currentList: { type: "ol" | "ul"; items: { num?: string; text: string }[] } | null = null;

    const flushList = (blockIdx: number) => {
      if (!currentList) return;
      if (currentList.type === "ol") {
        blocks.push(
          <ol
            key={`list-${blockIdx}`}
            className="my-3 space-y-2 pl-5 list-decimal text-foreground/90 text-sm sm:text-base leading-relaxed"
          >
            {currentList.items.map((item, i) => (
              <li key={`li-${i}`} className="pl-1">
                {parseInlineFormatting(item.text, onLinkClick, `ol-${blockIdx}-${i}`)}
              </li>
            ))}
          </ol>,
        );
      } else {
        blocks.push(
          <ul
            key={`list-${blockIdx}`}
            className="my-3 space-y-2 pl-5 list-disc text-foreground/90 text-sm sm:text-base leading-relaxed"
          >
            {currentList.items.map((item, i) => (
              <li key={`li-${i}`} className="pl-1">
                {parseInlineFormatting(item.text, onLinkClick, `ul-${blockIdx}-${i}`)}
              </li>
            ))}
          </ul>,
        );
      }
      currentList = null;
    };

    let blockCounter = 0;

    for (let i = 0; i < rawLines.length; i++) {
      const line = rawLines[i].trimEnd();

      // Check for horizontal dividers: --- or ***
      if (/^(\s*[-*_]\s*){3,}$/.test(line)) {
        flushList(blockCounter++);
        blocks.push(<hr key={`hr-${blockCounter++}`} className="my-4 border-t border-border/70" />);
        continue;
      }

      // Check for Headings: #, ##, ###, ####, #####
      const headingMatch = line.match(/^(#{1,6})\s+(.*)$/);
      if (headingMatch) {
        flushList(blockCounter++);
        const level = headingMatch[1].length;
        let rawTitle = headingMatch[2].trim();

        // Strip leading/trailing bold markers if the entire heading was wrapped in **title**
        if (rawTitle.startsWith("**") && rawTitle.endsWith("**") && rawTitle.length > 4) {
          rawTitle = rawTitle.slice(2, -2).trim();
        }

        const titleNodes = parseInlineFormatting(rawTitle, onLinkClick, `h-${blockCounter}`);

        if (level === 1) {
          blocks.push(
            <h1
              key={`h1-${blockCounter++}`}
              className="mt-5 mb-2.5 text-xl sm:text-2xl font-black tracking-tight text-foreground border-b border-border/60 pb-2"
            >
              {titleNodes}
            </h1>,
          );
        } else if (level === 2) {
          blocks.push(
            <h2
              key={`h2-${blockCounter++}`}
              className="mt-4 mb-2 text-lg sm:text-xl font-extrabold tracking-tight text-foreground"
            >
              {titleNodes}
            </h2>,
          );
        } else {
          // Level 3, 4, 5, 6
          blocks.push(
            <h3
              key={`h3-${blockCounter++}`}
              className="mt-3.5 mb-1.5 text-base sm:text-lg font-bold tracking-tight text-foreground flex items-center gap-1.5"
            >
              <span className="inline-block w-1.5 h-4 bg-primary rounded-full flex-shrink-0" />
              <span>{titleNodes}</span>
            </h3>,
          );
        }
        continue;
      }

      // Check for Numbered List: 1. Item or 1) Item
      const olMatch = line.match(/^(\d+)[.)]\s+(.*)$/);
      if (olMatch) {
        if (!currentList || currentList.type !== "ol") {
          flushList(blockCounter++);
          currentList = { type: "ol", items: [] };
        }
        currentList.items.push({ num: olMatch[1], text: olMatch[2] });
        continue;
      }

      // Check for Bullet List: - Item or * Item (with space)
      const ulMatch = line.match(/^[-*•]\s+(.*)$/);
      if (ulMatch) {
        if (!currentList || currentList.type !== "ul") {
          flushList(blockCounter++);
          currentList = { type: "ul", items: [] };
        }
        currentList.items.push({ text: ulMatch[1] });
        continue;
      }

      // Check for Blockquote: > text
      const quoteMatch = line.match(/^>\s*(.*)$/);
      if (quoteMatch) {
        flushList(blockCounter++);
        blocks.push(
          <blockquote
            key={`quote-${blockCounter++}`}
            className="my-2.5 pl-4 py-1.5 border-l-4 border-primary/70 bg-muted/40 rounded-r-xl text-foreground/90 italic text-sm sm:text-base"
          >
            {parseInlineFormatting(quoteMatch[1], onLinkClick, `quote-${blockCounter}`)}
          </blockquote>,
        );
        continue;
      }

      // Empty line
      if (line.trim() === "") {
        flushList(blockCounter++);
        // Add subtle paragraph gap
        continue;
      }

      // Standard paragraph line
      flushList(blockCounter++);
      blocks.push(
        <p
          key={`p-${blockCounter++}`}
          className="my-2 text-sm sm:text-base leading-relaxed text-foreground/90 break-words"
        >
          {parseInlineFormatting(line, onLinkClick, `p-line-${blockCounter}`)}
        </p>,
      );
    }

    flushList(blockCounter++);

    return blocks;
  }, [content, onLinkClick]);

  return (
    <div
      className={`formatted-content space-y-1 font-sans text-foreground select-text ${className}`}
    >
      {renderedBlocks}
    </div>
  );
}
