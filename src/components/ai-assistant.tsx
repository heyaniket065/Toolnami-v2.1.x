import React, { useState, useRef, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import {
  Sparkles,
  X,
  Send,
  RotateCcw,
  ShieldCheck,
  ExternalLink,
  ChevronDown,
  Bot,
  Zap,
} from "lucide-react";
import { FormattedMarkdown } from "@/components/ui/formatted-markdown";
import { getToolBySlug } from "../lib/complete-tools";

type SuggestedTool = {
  slug: string;
  title: string;
  to: string;
  summary: string;
  image: string;
  categoryLabel: string;
};

type ChatMessage = {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: string;
  suggestedTools?: SuggestedTool[];
};

const INITIAL_MESSAGES: ChatMessage[] = [
  {
    id: "welcome-1",
    role: "assistant",
    content:
      "Hello! I am your **ToolNami On-Site Expert**. I have full context of all **80 free tools**, privacy safeguards, supported formats, and navigation.\n\nHow can I help you today?",
    timestamp: "Just now",
    suggestedTools: [
      {
        slug: "pdf-compressor",
        title: "PDF Compressor",
        to: "/tools/pdf-compressor",
        summary: "Reduce PDF file size by up to 90% while keeping high visual clarity.",
        image: "/assets/tools/3d-pdf-compressor.png",
        categoryLabel: "PDF Tools",
      },
      {
        slug: "password-generator",
        title: "Password Generator",
        to: "/tools/password-generator",
        summary: "Generate ultra-secure, cryptographically random passwords.",
        image: "/assets/tools/password-generator.png",
        categoryLabel: "Developer Tools",
      },
    ],
  },
];

const QUICK_PROMPTS = [
  "How do I compress a PDF?",
  "Generate a strong password",
  "Which tool removes backgrounds?",
  "Is my document data private?",
  "Show developer tools",
  "Calculate my loan EMI",
];

export function AiAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>(INITIAL_MESSAGES);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen && !isMinimized) {
      scrollToBottom();
      inputRef.current?.focus();
    }
  }, [isOpen, isMinimized, messages]);

  const handleSend = async (textToSend?: string) => {
    const text = (textToSend || inputValue).trim();
    if (!text || isLoading) return;

    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      role: "user",
      content: text,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [...messages, userMessage].map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      const assistantMessage: ChatMessage = {
        id: `assistant-${Date.now()}`,
        role: "assistant",
        content: data.reply || "I am here to help you navigate ToolNami's 80 tools.",
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        suggestedTools: data.suggestedTools || [],
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch {
      // Graceful client-side fallback
      const fallbackTools = findClientFallbackTools(text);
      const assistantMessage: ChatMessage = {
        id: `assistant-${Date.now()}`,
        role: "assistant",
        content:
          "ToolNami provides 80 dedicated browser tools for PDF, Image, Text, and Code. All operations run 100% locally on your machine with zero server uploads.",
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        suggestedTools: fallbackTools,
      };
      setMessages((prev) => [...prev, assistantMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setMessages(INITIAL_MESSAGES);
  };

  function findClientFallbackTools(query: string): SuggestedTool[] {
    const q = query.toLowerCase();
    const slugs = [
      "pdf-compressor",
      "pdf-merge",
      "image-compressor",
      "password-generator",
      "qr-code-generator",
    ];
    const matched = slugs
      .map((s) => getToolBySlug(s))
      .filter((t): t is NonNullable<typeof t> => !!t)
      .filter((t) => t.title.toLowerCase().includes(q) || t.slug.includes(q) || q.length < 5)
      .slice(0, 2);

    return matched.map((t) => ({
      slug: t.slug,
      title: t.title,
      to: t.to,
      summary: t.summary,
      image: t.image,
      categoryLabel: t.categoryLabel,
    }));
  }

  return (
    <>
      {/* Floating Launcher Button */}
      {!isOpen && (
        <div className="fixed bottom-6 right-6 z-50">
          <button
            onClick={() => {
              setIsOpen(true);
              setIsMinimized(false);
            }}
            id="ai-assistant-launcher"
            className="group relative flex items-center gap-3 px-4 py-3.5 rounded-full bg-card/95 hover:bg-card text-foreground backdrop-blur-xl border border-primary/40 shadow-2xl shadow-primary/20 hover:shadow-primary/30 transition-all duration-300 transform hover:scale-105 active:scale-95"
            aria-label="Open ToolNami AI Assistant"
          >
            {/* Glowing ambient ring */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-amber-500 to-primary rounded-full blur opacity-50 group-hover:opacity-100 transition duration-500 -z-10 animate-pulse" />

            <div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-primary to-primary/80 text-primary-foreground shadow-inner">
              <Bot className="w-4 h-4" />
              <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500"></span>
              </span>
            </div>

            <div className="text-left hidden sm:block">
              <div className="text-xs font-bold text-foreground flex items-center gap-1.5 leading-tight">
                ToolNami AI
                <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-primary/10 text-primary border border-primary/20 font-bold">
                  80 Tools
                </span>
              </div>
              <div className="text-[11px] text-muted-foreground font-medium">
                Ask assistant &amp; guides
              </div>
            </div>
          </button>
        </div>
      )}

      {/* Expanded Chat Window */}
      {isOpen && (
        <div
          id="ai-assistant-modal"
          className={`fixed z-50 transition-all duration-300 ${
            isMinimized
              ? "bottom-6 right-6 w-72 rounded-2xl bg-card/95 border border-border shadow-2xl p-3"
              : "bottom-4 right-4 sm:bottom-6 sm:right-6 w-[calc(100vw-2rem)] sm:w-[420px] h-[580px] max-h-[85vh] rounded-3xl bg-card/95 backdrop-blur-2xl border border-border shadow-2xl shadow-black/20 dark:shadow-black/60 flex flex-col overflow-hidden text-foreground"
          }`}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3.5 bg-muted/60 dark:bg-muted/30 border-b border-border select-none">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center text-primary-foreground shadow-sm">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <div className="text-sm font-bold text-foreground flex items-center gap-1.5">
                  ToolNami Assistant
                  <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                </div>
                <div className="text-[11px] text-muted-foreground flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-emerald-500" />
                  80 Tools • 100% Client-Side Safe
                </div>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={handleReset}
                title="Restart Chat"
                className="p-1.5 text-muted-foreground hover:text-foreground rounded-lg hover:bg-muted transition-colors"
                aria-label="Reset Conversation"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsMinimized(!isMinimized)}
                title={isMinimized ? "Expand" : "Minimize"}
                className="p-1.5 text-muted-foreground hover:text-foreground rounded-lg hover:bg-muted transition-colors"
                aria-label="Minimize"
              >
                <ChevronDown
                  className={`w-4 h-4 transform transition-transform ${isMinimized ? "rotate-180" : ""}`}
                />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                title="Close"
                className="p-1.5 text-muted-foreground hover:text-foreground rounded-lg hover:bg-muted transition-colors"
                aria-label="Close Assistant"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {!isMinimized && (
            <>
              {/* Message List */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-border">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex flex-col ${message.role === "user" ? "items-end" : "items-start"}`}
                  >
                    <div
                      className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 shadow-sm text-sm ${
                        message.role === "user"
                          ? "bg-primary text-primary-foreground rounded-tr-sm"
                          : "bg-muted/70 text-foreground border border-border rounded-tl-sm"
                      }`}
                    >
                      {message.role === "assistant" ? (
                        <FormattedMarkdown
                          content={message.content}
                          onLinkClick={() => setIsOpen(false)}
                          className="text-foreground text-sm leading-relaxed"
                        />
                      ) : (
                        <p className="leading-relaxed">{message.content}</p>
                      )}

                      {/* Attached Tool Recommendation Cards */}
                      {message.suggestedTools && message.suggestedTools.length > 0 && (
                        <div className="mt-3 pt-3 border-t border-border space-y-2">
                          <div className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1">
                            <Zap className="w-3 h-3 text-amber-500" />
                            Recommended Tools
                          </div>
                          {message.suggestedTools.map((tool) => (
                            <Link
                              key={tool.slug}
                              to={tool.to}
                              onClick={() => setIsOpen(false)}
                              className="group block p-2 rounded-xl bg-card hover:bg-muted/80 border border-border transition-all text-left"
                            >
                              <div className="flex items-center gap-2.5">
                                <div className="w-12 h-8 rounded-md overflow-hidden bg-muted flex-shrink-0 border border-border">
                                  <img
                                    src={tool.image}
                                    alt={tool.title}
                                    className="w-full h-full object-contain block"
                                    referrerPolicy="no-referrer"
                                  />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="text-xs font-semibold text-foreground group-hover:text-primary transition-colors flex items-center justify-between">
                                    <span className="truncate">{tool.title}</span>
                                    <span className="text-[10px] text-primary font-mono ml-1 font-bold">
                                      Open →
                                    </span>
                                  </div>
                                  <div className="text-[11px] text-muted-foreground truncate">
                                    {tool.summary}
                                  </div>
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                    <span className="text-[10px] text-muted-foreground mt-1 px-1">
                      {message.timestamp}
                    </span>
                  </div>
                ))}

                {isLoading && (
                  <div className="flex items-center gap-2 text-muted-foreground text-xs px-2 py-1">
                    <div className="w-2 h-2 rounded-full bg-primary animate-ping"></div>
                    <span>Consulting ToolNami directory...</span>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Quick Prompt Chips */}
              <div className="px-3 py-2 bg-muted/30 border-t border-border overflow-x-auto whitespace-nowrap scrollbar-none flex gap-1.5">
                {QUICK_PROMPTS.map((prompt) => (
                  <button
                    key={prompt}
                    onClick={() => handleSend(prompt)}
                    disabled={isLoading}
                    className="text-xs px-2.5 py-1 rounded-full bg-muted/80 hover:bg-muted text-foreground border border-border transition-colors flex-shrink-0 active:scale-95 disabled:opacity-50 font-medium"
                  >
                    {prompt}
                  </button>
                ))}
              </div>

              {/* Input Form */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend();
                }}
                className="p-3 bg-muted/40 border-t border-border flex items-center gap-2"
              >
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Ask about any tool, format, or privacy..."
                  disabled={isLoading}
                  className="flex-1 bg-card text-foreground placeholder-muted-foreground text-sm px-3.5 py-2.5 rounded-xl border border-border focus:outline-none focus:border-primary transition-colors disabled:opacity-50"
                />
                <button
                  type="submit"
                  disabled={!inputValue.trim() || isLoading}
                  className="p-2.5 rounded-xl bg-primary hover:bg-primary/90 disabled:bg-muted disabled:text-muted-foreground text-primary-foreground font-medium transition-colors shadow-md disabled:shadow-none"
                  aria-label="Send Message"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </>
          )}
        </div>
      )}
    </>
  );
}
