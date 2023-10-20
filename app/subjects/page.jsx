import SubjectList from "./SubjectList";
import Link from "next/link";

export default function Subjects() {
	return (
		<>
			<main>
				<nav>
					<div>
						<h2>Subjects</h2>
						<p>
							<small>Currently available subjects..</small>
						</p>
					</div>
				</nav>
				<div className="flex justify-center my-8">
					<Link href="/subjects/create">
						<button className="btn-primary">Create Subject</button>
					</Link>
				</div>
				<SubjectList />
			</main>
		</>
	);
}
