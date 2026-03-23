import { type ButtonHTMLAttributes, type AnchorHTMLAttributes } from 'react'

type Variant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'white'
type Size = 'sm' | 'md' | 'lg'

const variantClasses: Record<Variant, string> = {
  primary: 'bg-gradient-to-r from-primary via-primary-light to-secondary text-white shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-0.5 active:translate-y-0 btn-shimmer',
  secondary: 'bg-gradient-to-r from-secondary to-secondary-light text-white shadow-lg shadow-secondary/25 hover:shadow-xl hover:shadow-secondary/40 hover:-translate-y-0.5 btn-shimmer',
  outline: 'border border-white/20 text-white hover:bg-white/10 hover:border-white/30 hover:-translate-y-0.5',
  ghost: 'text-gray-300 hover:text-white hover:bg-white/5',
  white: 'bg-white text-surface font-bold shadow-lg hover:shadow-xl hover:shadow-white/20 hover:-translate-y-0.5',
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
