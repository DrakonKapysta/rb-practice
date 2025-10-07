import { Input as HeroUIInput } from '@heroui/input';
import { forwardRef } from 'react';
import type { InputProps as HeroUIInputProps } from '@heroui/input';

export interface IInputProps extends HeroUIInputProps {
  label?: string;
  placeholder?: string;
  isRequired?: boolean;
  isDisabled?: boolean;
  isInvalid?: boolean;
  errorMessage?: string;
  description?: string;
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
}

export const Input = forwardRef<HTMLInputElement, IInputProps>(
  ({ 
    label, 
    placeholder, 
    isRequired, 
    isDisabled, 
    isInvalid, 
    errorMessage, 
    description,
    startContent,
    endContent,
    ...props 
  }, ref) => {
    return (
      <HeroUIInput
        ref={ref}
        label={label}
        placeholder={placeholder}
        isRequired={isRequired}
        isDisabled={isDisabled}
        isInvalid={isInvalid}
        errorMessage={errorMessage}
        description={description}
        startContent={startContent}
        endContent={endContent}
        {...props}
      />
    );
  }
);

Input.displayName = 'Input';
