import React from 'react';

// FIX: Refactored ButtonProps to be a direct discriminated union by including
// common properties (`children`, `variant`) in each member of the union.
// This helps TypeScript correctly infer types for `...rest` props after narrowing,
// resolving errors with incompatible attributes between `<a>` and `<button>`.
type ButtonAsButton = {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  href?: undefined;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

type ButtonAsAnchor = {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  href: string;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

type ButtonProps = ButtonAsButton | ButtonAsAnchor;

// This component was refactored to fix a redeclaration error.
// By using a proper if/else block, we can correctly scope our destructured props
// and avoid a syntax error, while still allowing TypeScript to narrow the types.
const Button: React.FC<ButtonProps> = (props) => {
  // FIX: Moved all destructuring and className logic inside the type-narrowed blocks.
  // Destructuring `props` before it's narrowed inside the `if/else` can confuse
  // TypeScript's control flow analysis, leading to incorrect type inference for `...rest`.
  // By performing all operations on `props` within the blocks where its type is certain,
  // we ensure that the `...rest` props are correctly typed for either `<a>` or `<button>`.
  const baseStyles = 'inline-block text-center px-6 py-3 font-bold rounded-md shadow-lg transform transition-transform duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variantStyles = {
    primary: 'bg-primary-green text-white hover:bg-green-900 focus:ring-primary-green',
    secondary: 'bg-accent-gold text-white hover:bg-yellow-700 focus:ring-accent-gold',
  };

  if (props.href) {
    // If href is present, TypeScript knows `props` is `ButtonAsAnchor`.
    const { children, variant = 'primary', className = '', ...rest } = props;
    const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${className}`;
    return (
      <a {...rest} className={combinedClassName}>
        {children}
      </a>
    );
  } else {
    // If href is not present, it's `ButtonAsButton`.
    const { children, variant = 'primary', className = '', href, ...rest } = props;
    const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${className}`;
    return (
      <button {...rest} className={combinedClassName}>
        {children}
      </button>
    );
  }
};

export default Button;
