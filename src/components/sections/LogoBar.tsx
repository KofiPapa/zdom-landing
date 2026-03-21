import Container from '../ui/Container'

const logos = [
  'Walmart', 'Marriott', 'Nike', 'Starbucks', 'Target',
  'Hilton', 'McDonald\'s', 'Best Buy', 'CVS Health', 'Whole Foods',
]

export default function LogoBar() {
  return (
    <section className="py-12 bg-white border-y border-gray-100">
      <Container>
        <p className="text-center text-sm text-gray-500 font-medium mb-8 uppercase tracking-wider">
          Trusted by leading brands worldwide
        </p>
      </Container>
      <div className="overflow-hidden">
        <div className="animate-marquee flex items-center gap-16 whitespace-nowrap">
          {[...logos, ...logos].map((name, i) => (
            <div
              key={i}
              className="flex items-center justify-center px-6"
            >
              <span className="text-xl font-bold text-gray-300 tracking-wide select-none">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
