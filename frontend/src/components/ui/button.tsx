"use client"

import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-lg border border-transparent bg-clip-padding text-sm font-bold whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/50 active:translate-y-0.5 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: "bg-[#1c1d1f] text-white hover:bg-black dark:bg-primary dark:text-primary-foreground dark:hover:bg-primary/90",
        outline:
          "border-[#1c1d1f] bg-transparent text-[#1c1d1f] hover:bg-[#1c1d1f]/5 dark:border-white dark:text-white dark:hover:bg-white/10",
        secondary:
          "bg-primary text-white hover:bg-primary/90",
        ghost:
          "hover:bg-[#1c1d1f]/5 hover:text-[#1c1d1f] dark:hover:bg-white/10 dark:hover:text-white",
        destructive:
          "bg-destructive text-white hover:bg-destructive/90",
        link: "text-[#a435f0] underline-offset-4 hover:underline",
      },
      size: {
        default:
          "h-12 px-6",
        xs: "h-8 px-3 text-xs",
        sm: "h-10 px-4 text-sm",
        lg: "h-14 px-8 text-base",
        icon: "size-10",
        "icon-xs": "size-6",
        "icon-sm": "size-8",
        "icon-lg": "size-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
