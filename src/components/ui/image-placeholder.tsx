import * as React from "react";
import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ImagePlaceholderProps extends React.ComponentProps<"div"> {
  /** ex: "aspect-square", "aspect-[4/5]", "aspect-video" */
  ratio?: string;
  label?: string;
}

/**
 * Reserva o espaço e a proporção de uma foto real (equipe, escritório, etc.)
 * até que o cliente envie as imagens definitivas — evita reflow de layout
 * quando as fotos forem substituídas.
 */
function ImagePlaceholder({
  ratio = "aspect-[4/5]",
  label = "Foto",
  className,
  ...props
}: ImagePlaceholderProps) {
  return (
    <div
      role="img"
      aria-label={label}
      className={cn(
        ratio,
        "flex flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-border-subtle bg-secondary/40 text-muted-foreground",
        className,
      )}
      {...props}
    >
      <ImageIcon className="w-6 h-6" />
      <span className="text-xs">{label}</span>
    </div>
  );
}

export { ImagePlaceholder };
