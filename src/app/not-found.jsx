import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-ivory flex items-center justify-center text-center px-5">
      <div>
        <p className="font-serif text-[8rem] leading-none text-beige font-light">
          404
        </p>
        <h2 className="font-serif text-3xl text-green mb-4">
          Lost in the Bush?
        </h2>
        <p className="text-gray-500 mb-8 max-w-sm mx-auto">
          It seems this trail doesn&apos;t lead anywhere. Let&apos;s get you
          back on track.
        </p>
        <Link href="/" className="btn btn-primary">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
