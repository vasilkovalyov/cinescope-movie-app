import { ComponentProps } from 'react';

import { cn } from '@/lib/utils';
import { VariantProps, cva } from 'class-variance-authority';

export const inputVariants = cva({
  variants: {
    size: {
      sm: 'h-36px',
      md: 'h-40px',
      lg: 'h-44px',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

export type InputVariants = VariantProps<typeof inputVariants>;

export type InputProps = ComponentProps<'input'> & InputVariants;

function Input({ className, type, ...props }: InputProps) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        'h-[40px] w-full min-w-0 rounded-[12px] border border-input border-[rgba(255,255,255,0.08)] bg-accent-bg-1 px-[16px] py-0 transition-colors outline-none placeholder:text-muted-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-input/50 disabled:opacity-50 focus:border-primary/40 text-light',
        inputVariants,
        className,
      )}
      {...props}
    />
  );
}

export { Input };
