import Link from "next/link";

async function getSubject(id) {
	const res = await fetch(`http://localhost:4200/subjects/${id}`, {
		next: {
			revalidate: 30,
		},
	});

	return res.json();
}

export default async function SubjectDetails({ params }) {
	const subject = await getSubject(params.id);
	return (
		<>
			<main>
				<nav>
					<h2>Subject Details</h2>
				</nav>
				<div className="card">
					<h3>{subject.title}</h3>
					<small>Created by {subject.user_email}</small>
					<p>{subject.body}</p>
					<div className={`pill ${subject.priority}`}>
						{subject.priority} priority
					</div>
					<p className="lead">Classes: {subject.classes}</p>
				</div>
				<div className="flex justify-center my-8">
					<Link href="/subjects">
						<button className="btn-primary">Back</button>
					</Link>
				</div>
			</main>
		</>
	);
}
