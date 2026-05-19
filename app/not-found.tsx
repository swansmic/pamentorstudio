import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] py-24 px-6 text-center">
      <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-6">
        404
      </p>
      <h1 className="font-heading text-4xl md:text-5xl font-semibold text-foreground mb-6">
        Page not found.
      </h1>
      <p className="text-lg text-muted-foreground max-w-md mb-10 leading-relaxed">
        The page you are looking for does not exist or has been moved.
        Start from the homepage or navigate using the menu above.
      </p>
      <Link
        href="/"
        className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground text-sm font-medium rounded hover:bg-primary/90 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring"
      >
        Return home
      </Link>
    </div>
  );
}
