import React from 'react';

// FIX: Refactored props for the polymorphic Button component to resolve type errors.
// The props are now defined as a discriminated union where element-specific attributes
// (`<button>` vs `<a>`) are cleanly separated. This allows TypeScript's type narrowing
// to work correctly with the `...rest` operator, ensuring only valid attributes are
// passed to the underlying DOM element and eliminating type conflicts.
type ButtonAsButton = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: never;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
};

type ButtonAsAnchor = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
};

type ButtonProps = ButtonAsButton | ButtonAsAnchor;

// FIX: The component's implementation was updated to correctly handle the discriminated union props.
// By accepting the full `props` object instead of destructuring `...rest` in the signature,
// TypeScript's control-flow analysis can correctly narrow the type of `props` within conditional
// blocks. This ensures that `...rest` contains only valid attributes for either an `<a>` or `<button>`
// element, resolving the type conflict.
const Button: React.FC<ButtonProps> = (props) => {
  const { variant = 'primary', size = 'md', className, children } = props;
  
  const baseStyles = 'inline-block text-center font-semibold rounded-md shadow-lg transform transition-transform duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const sizeStyles = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base'
  };
  
  const variantStyles = {
    primary: 'bg-primary-green text-white hover:bg-green-900 focus:ring-primary-green',
    secondary: 'bg-accent-gold text-white hover:bg-yellow-700 focus:ring-accent-gold',
  };

  const combinedClassName = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className || ''}`;

  if ('href' in props) {
    // Here, `props` is narrowed to `ButtonAsAnchor`.
    const { children, variant, size, className, href, onClick, ...rest } = props;

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      // Handle smooth scrolling for in-page anchor links
      if (href.startsWith('#')) {
        e.preventDefault();
        const targetElement = document.querySelector(href);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
      // If a custom onClick is provided, call it as well
      if (onClick) {
        // FIX: Corrected a type error where TypeScript's control-flow analysis failed to narrow
        // the type of the destructured `onClick` property. An explicit type assertion to
        // `React.MouseEventHandler<HTMLAnchorElement>` is used to ensure the event handler is
        // called with the correct event type, resolving the conflict within the discriminated union.
        (onClick as React.MouseEventHandler<HTMLAnchorElement>)(e);
      }
    };

    // FIX: A type assertion is used on `rest` to resolve a TypeScript error. This is necessary because
    // TypeScript has limitations in narrowing union types with conflicting properties (like event handlers)
    // when using the spread operator in JSX. This ensures type safety.
    const anchorProps = rest as Omit<ButtonAsAnchor, 'children' | 'variant' | 'size' | 'className' | 'href' | 'onClick'>;
    return (
      <a href={href} {...anchorProps} className={combinedClassName} onClick={handleClick}>
        {children}
      </a>
    );
  } else {
    // Here, `props` is narrowed to `ButtonAsButton`.
    // We destructure `variant` and `href` to exclude them from `rest`.
    const { children, variant, size, className, href, ...rest } = props;
    // FIX: A type assertion is used on `rest` to resolve a TypeScript error, similar to the anchor case above.
    const buttonProps = rest as Omit<ButtonAsButton, 'children' | 'variant' | 'size' | 'className' | 'href'>;
    return (
      <button {...buttonProps} className={combinedClassName}>
        {children}
      </button>
    );
  }
};

export default Button;
