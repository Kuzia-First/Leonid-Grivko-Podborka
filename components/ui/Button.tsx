import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
};

const Button: React.FC<ButtonProps> = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  size = 'md', 
  className = '',
  type = 'button' 
}) => {
  const baseStyles = 'font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-offset-background tracking-wide uppercase text-center';
  
  const variantStyles = {
    primary: 'bg-primary text-white hover:brightness-110 focus:ring-primary/50',
    outline: 'bg-transparent border-2 border-textOnDark text-textOnDark hover:bg-textOnDark hover:text-background focus:ring-textOnDark/50',
  };

  const sizeStyles = {
    sm: 'py-2 px-6 text-sm',
    md: 'py-3 px-8 text-base',
    lg: 'py-4 px-10 text-lg',
  };
  
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      <span className="relative z-10">{children}</span>
    </button>
  );
};

export default Button;