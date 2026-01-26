import Image from "next/image";
import Link from "next/link";

type FeatureCardProps = {
  title: string;
  description: string;
  href: string;
  imageSrc: string;
  imageAlt?: string;
  priority?: boolean;
};

export default function FeatureCard({
  title,
  description,
  href,
  imageSrc,
  imageAlt,
  priority = false,
}: FeatureCardProps) {
  return (
    <Link
      href={href}
      className="group overflow-hidden rounded-3xl border hover:bg-gray-50"
    >
      <div className="relative h-44 w-full">
        <Image
          src={imageSrc}
          alt={imageAlt ?? title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          priority={priority}
        />
      </div>
      <div className="p-6">
        <p className="text-lg font-bold">{title}</p>
        <p className="mt-2 text-sm text-gray-600">{description}</p>
        <p className="mt-4 text-sm font-semibold">Explore →</p>
      </div>
    </Link>
  );
}
