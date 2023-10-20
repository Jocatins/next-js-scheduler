import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
	return (
		<nav>
			<Image
				src="/vercel.svg"
				alt="Vercel Logo"
				className="dark:invert"
				width={100}
				height={24}
				priority
			/>
			<h1>Tuteria</h1>
			<Link href="/">Dashboard</Link>
			<Link href="/subjects">Subjects</Link>
		</nav>
	);
}
