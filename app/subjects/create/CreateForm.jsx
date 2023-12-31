"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CreateForm() {
	const router = useRouter();

	const [title, setTitle] = useState("");
	const [body, setBody] = useState("");
	const [priority, setPriority] = useState("low");
	const [isLoading, setIsLoading] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsLoading(true);

		const subject = {
			title,
			body,
			priority,
			user_email: "new-dev@dec.com",
			classes: "level 1 , level-23",
		};

		const res = await fetch(`http://localhost:4200/subjects`, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(subject),
		});

		if (res.status === 201) {
			router.refresh();
			router.push("/subjects");
		}
	};

	return (
		<>
			<form onSubmit={handleSubmit} className="w-1/2">
				<label>
					<span>Title:</span>
					<input
						required
						type="text"
						onChange={(e) => setTitle(e.target.value)}
						value={title}
					/>
				</label>
				<label>
					<span>Description:</span>
					<textarea
						required
						onChange={(e) => setBody(e.target.value)}
						value={body}
					/>
				</label>
				<label>
					<span>Priority:</span>
					<select
						onChange={(e) => setPriority(e.target.value)}
						value={priority}
					>
						<option value="low">Low Priority</option>
						<option value="medium">Medium Priority</option>
						<option value="high">High Priority</option>
					</select>
				</label>
				<div>
					<button className="btn-primary" disabled={isLoading}>
						{isLoading && <span>Adding...</span>}
						{!isLoading && <span>Add Subject</span>}
					</button>
				</div>
			</form>
		</>
	);
}
