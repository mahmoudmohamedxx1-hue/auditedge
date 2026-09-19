"use client"

import { useAppStore } from "@/store/useAppStore"
import { Toaster as Sonner, ToasterProps } from "sonner"

/**
 * Themed toaster — follows the app's own light/dark store field (v16)
 * rather than next-themes, so toasts always match the toggled theme.
 */
const Toaster = ({ ...props }: ToasterProps) => {
  const theme = useAppStore((s) => s.theme)

  return (
    <Sonner
      theme={theme}
      className="toaster group"
      style={
        {
          "--normal-bg": "var(--popover)",
          "--normal-text": "var(--popover-foreground)",
          "--normal-border": "var(--border)",
        } as React.CSSProperties
      }
      {...props}
    />
  )
}

export { Toaster }
