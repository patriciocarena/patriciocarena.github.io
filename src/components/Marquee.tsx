const starColors = [
  "text-neo-pink",
  "text-neo-yellow",
  "text-neo-green",
  "text-neo-blue",
  "text-neo-orange",
  "text-neo-purple",
];

// Infinite skills band. The list is rendered twice and the track slides by
// exactly half its width, so the loop is seamless. Decorative: the same skills
// are listed elsewhere on the page, so it's hidden from assistive tech.
const Marquee = ({ items }: { items: string[] }) => (
  <div
    className="relative overflow-hidden border-y-[3px] border-foreground bg-primary py-3.5 text-primary-foreground"
    aria-hidden="true"
  >
    <div className="flex w-max animate-marquee will-change-transform">
      {[0, 1].map((copy) => (
        <ul key={copy} className="flex shrink-0 items-center">
          {items.map((item, i) => (
            <li
              key={item}
              className="flex items-center whitespace-nowrap text-sm md:text-base font-bold uppercase tracking-[0.14em]"
            >
              <span className="px-6 md:px-8">{item}</span>
              <span className={starColors[i % starColors.length]}>✦</span>
            </li>
          ))}
        </ul>
      ))}
    </div>
  </div>
);

export default Marquee;
