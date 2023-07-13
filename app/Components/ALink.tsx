import Link from "next/link";

export default function ALink({
  children,
  link,
  target
}: {
  children: React.ReactNode;
  link: string;
  target?: string;
}) {
  return (
    <Link href={link} target={target}>
      <div className="inline-block group transition duration-300 cursor-pointer">
        <div className="box">{children}</div>
        <div className="w-0 h-0.5 group-hover:w-full transition-all duration-500 bg-sky-600"></div>
      </div>
    </Link>
  );
}
