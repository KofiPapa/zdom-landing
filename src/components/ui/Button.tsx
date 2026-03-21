import { type ButtonHTMLAttributes, type AnchorHTMLAttributes } from 'react'

type Variant = 'primary' | 'secondary' | 'outline' | 'ghost'
type Size = 'sm' | 'md' | 'lg'

const variantClasses: Record<Variant, string> = {
  primary: 'bg-primary text-white hover:bg-primary-dark shadow-lg shadow-primary/25',
  secondary: 'bg-secondary text-white hover:bg-secondary-dark shadow-lg shadow-secondary/25',
  outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white',
  ghost: 'text-gray-700 hover:text-primary hover:bg-gray-100',
}

const sizeClasses: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-2.5 text-base',
  lg: 'px-8 py-3.5 text-lg',
}

type ButtonProps = {
  variant?: Variant
  size?: Size
  href?: string
} & ButtonHTMLAttributes<HTMLButtonElement> & Partial<AnchorHTMLAttributes<HTMLAnchorElement>>

export default function Button({
  variant = 'primary',
  size = 'md',
  href,
  className = '',
  children,
  ...props
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200 cursor-pointer ${variantClasses[variant]} ${sizeClasses[size]} ${className}`

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  )
}
