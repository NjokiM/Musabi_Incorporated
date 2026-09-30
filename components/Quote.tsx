export default function Quote({ children }: { children: string }) {
  return (
    <blockquote className="border-l-2 border-charcoal/30 pl-6 font-editorial text-2xl italic leading-relaxed text-charcoal/80">
      {children}
    </blockquote>
  );
}
