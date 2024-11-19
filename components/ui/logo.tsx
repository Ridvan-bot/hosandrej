import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.jpg";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex shrink-0" aria-label="Hos Andrej">
      <Image src={logo} alt="Hos Andrej" width={32} height={32} />
    </Link>
  );
}