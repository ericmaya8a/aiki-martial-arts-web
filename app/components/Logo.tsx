import Image from "next/image";
import Link from "next/link";
import logo from "../../public/images/logo.png";
import { urls } from "../constants";

const logoSizes: { [key: string]: number } = {
  xs: 40,
  sm: 100,
  md: 150,
  lg: 200,
  xl: 250,
};

type LogoProps = {
  className?: string;
  href?: string;
  isLink?: boolean;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
};

export function Logo({
  className,
  href = urls.HOME,
  isLink,
  size = "md",
}: LogoProps) {
  const src = logo;
  const imageProps = {
    className,
    height: 10,
    priority: true,
    src,
    width: logoSizes[size],
  };

  return (
    <>
      {isLink ? (
        <Link href={href}>
          <Image {...imageProps} alt="logo" />
        </Link>
      ) : (
        <Image {...imageProps} alt="logo" />
      )}
    </>
  );
}
