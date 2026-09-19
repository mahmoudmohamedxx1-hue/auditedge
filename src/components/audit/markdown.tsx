"use client"

import ReactMarkdown from "react-markdown"
import { cn } from "@/lib/utils"

/** Claude-style markdown rendering for AI tutor responses. */
export function Markdown({ content, className }: { content: string; className?: string }) {
  return (
    <div
      dir="auto"
      className={cn(
        "text-[14px] leading-[1.75] text-foreground/85",
        "[&_p]:mt-0 [&_p+p]:mt-3.5",
        "[&_h1]:mt-5 [&_h1]:mb-2 [&_h1]:font-serif [&_h1]:text-[19px] [&_h1]:font-semibold [&_h1]:tracking-tight [&_h1]:text-foreground [&_h1]:first:mt-0",
        "[&_h2]:mt-5 [&_h2]:mb-2 [&_h2]:font-serif [&_h2]:text-[17px] [&_h2]:font-semibold [&_h2]:tracking-tight [&_h2]:text-foreground [&_h2]:first:mt-0",
        "[&_h3]:mt-4 [&_h3]:mb-1.5 [&_h3]:text-[14.5px] [&_h3]:font-semibold [&_h3]:text-foreground [&_h3]:first:mt-0",
        "[&_ul]:mt-2.5 [&_ul]:space-y-1.5 [&_ol]:mt-2.5 [&_ol]:space-y-1.5 [&_ol]:list-decimal [&_ol]:pl-5",
        "[&_li]:pl-1",
        "[&_strong]:font-semibold [&_strong]:text-foreground",
        "[&_a]:text-primary [&_a]:underline [&_a]:decoration-primary/30 [&_a]:underline-offset-2 hover:[&_a]:decoration-primary",
        "[&_blockquote]:mt-3 [&_blockquote]:border-l-2 [&_blockquote]:border-primary/40 [&_blockquote]:pl-3.5 [&_blockquote]:text-foreground/80 [&_blockquote]:italic",
        "[&_code]:rounded-md [&_code]:bg-secondary [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:font-mono [&_code]:text-[12.5px] [&_code]:text-clay-deep",
        "[&_pre]:mt-3 [&_pre]:overflow-x-auto [&_pre]:rounded-xl [&_pre]:border [&_pre]:bg-secondary/70 [&_pre]:p-3.5 [&_pre]:text-[12.5px] [&_pre]:leading-relaxed",
        "[&_pre_code]:bg-transparent [&_pre_code]:p-0",
        "[&_hr]:my-4 [&_hr]:border-border",
        "[&_table]:mt-3 [&_table]:w-full [&_table]:border-collapse",
        "[&_th]:border [&_th]:border-border [&_th]:bg-secondary/60 [&_th]:px-2.5 [&_th]:py-1.5 [&_th]:text-left [&_th]:text-[12.5px] [&_th]:font-semibold",
        "[&_td]:border [&_td]:border-border [&_td]:px-2.5 [&_td]:py-1.5 [&_td]:text-[12.5px]",
        className
      )}
    >
      <ReactMarkdown
        components={{
          ul: ({ children }) => <ul className="list-disc pl-5">{children}</ul>,
          a: ({ href, children }) => (
            <a href={href} target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-2">
              {children}
            </a>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  )
}
