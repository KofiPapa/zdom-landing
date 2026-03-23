import { type ButtonHTMLAttributes, type AnchorHTMLAttributes } from 'react'

type Variant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'dark'
type Size = 'sm' | 'md' | 'lg'

const variantClasses: Record<Variant, string> = {
  primary: 'bg-primary text-white shadow-lg shadow-primary/20 hover:bg-primary-dark hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 active:translate-y-0 btn-shimmer',
  secondary: 'bg-secondary text-white shadow-lg shadow-secondary/20 hover:bg-secondary-dark hover:shadow-xl hover:-translate-y-0.5 btn-shimmer',
  outline: 'border-2 border-accent text-accent hover:bg-accent hover:text-white hover:-translate-y-0.5',
  ghost: 'text-gray-700 hover:text-primary hover:bg-orange-50',
  dark: 'bg-accent text-white shadow-lg hover:bg-gray-800 hover:-translate-y-0.5',
}

const sizeClasses: Record<Size, string> = {
  sm: 'px-5 py-2 text-sm',
  md: 'px-7 py-3 text-base',
  lg: 'px-9 py-4 text-lg',
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
  const classes = `inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-300 cursor-pointer ${variantClasses[variant]} ${sizeClasses[size]} ${className}`

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
