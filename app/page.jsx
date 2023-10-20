import Link from "next/link";

export default function Home() {
	return (
		<>
			<main>
				<h2>Dashboard</h2>
				<p>
					We help students get the best results. We identify each
					students' weak areas, and provide the knowledge, support,
					practice and confidence they need to aim high and score
					high. Their results prove that our process works.
				</p>

				<div className="flex justify-center my-8">
					<Link href="/subjects">
						<button className="btn-primary">View Subjects</button>
					</Link>
				</div>

				<h2>Company Updates</h2>

				<div className="card">
					<h3>New member of the web dev team...</h3>
					<p>
						Select a venue that's most convenient for you before all
						seats are taken. Classes fill up quickly.
					</p>
				</div>
				<div className="card">
					<h3>New website live!</h3>
					<p>
						I can only say that based on my experience with Tuteria,
						I would recommend you guys again, again and again. I
						have had IELTS lesson in 2 different places before I
						came here and I can boldly beat my chest and say Tuteria
						is second to NONE. Thanks for the awesome experience
					</p>
				</div>
			</main>
		</>
	);
}
