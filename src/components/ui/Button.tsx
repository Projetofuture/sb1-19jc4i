import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
  children: React.ReactNode;
}

const Button = ({ 
  variant = 'primary', 
  fullWidth = false, 
  children, 
  className = '',
  ...props 
}: ButtonProps) => {
  const baseStyles = 'px-6 py-3 rounded-lg transition-colors duration-200';
  const variants = {
    primary: 'bg-black text-white hover:bg-gray-900',
    secondary: 'bg-orange-500 text-white hover:bg-orange-600',
    outline: 'border-2 border-black text-black hover:bg-black hover:text-white'
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;