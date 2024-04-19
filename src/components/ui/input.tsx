import * as React from 'react';

import { cn } from '@/lib/utils';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'flex h-[60px] w-[700px] rounded-[10px] border border-input bg-transparent px-6 py-1 text-[18px] font-medium shadow-sm transition-colors placeholder:text-abu focus:outline-none focus:border-ungu focus:ring-2 focus:ring-ungu',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = 'Input';

export { Input };
