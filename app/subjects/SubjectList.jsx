import Link from "next/link";

// const apiUrl = "http://localhost:4200/subjects "

async function getSubjects() {
	const res = await fetch(apiUrl, {
		next: {
			revalidate: 30,
		},
	});

	return res.json();
}

export default async function SubjectList() {
	const subjects = await getSubjects();
	return (
		<>
			{subjects.map((subject) => (
				<div key={subject.id} className="card my-5">
					<Link href={`/subjects/${subject.id}`}>
						<h3>{subject.title}</h3>
						<p>{subject.body.slice(0, 20)}...</p>
						<div className={`pill ${subject.priority}`}>
							{subject.priority} priority
						</div>
					</Link>
				</div>
			))}
			{subjects.length === 0 && (
				<p className="text-center">There are no open tickets, yay!</p>
			)}
		</>
	);
}
