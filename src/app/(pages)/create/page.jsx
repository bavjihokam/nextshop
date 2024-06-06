"use client";
import { UpdateUser, allUsers, createUser, fetchUser } from "@/app/libs/crud";
import { useState, useEffect } from "react";

function CreatePage() {
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [userData, setUserData] = useState([]);

	const handleFormData = async (e) => {
		e.preventDefault();
		await createUser({ username, email });
		// Refresh user data after creating a new user
		const updatedUserData = await fetchUser();
		setUserData(updatedUserData);
	};

	useEffect(() => {
		const getUsers = async () => {
			const userData = await fetchUser();
			setUserData(userData);
		};
		getUsers();
	}, []);

	return (
		<div className="max-w-sm mx-auto flex flex-col gap-10 justify-center items-center min-h-screen">
			<h1 className="text-4xl text-gray-800">Creating New User</h1>
			<div>
				<form onSubmit={handleFormData}>
					<div>
						<label>Username</label>
						<input
							type="text"
							className="outline-none border border-gray-500 p-2 w-full rounded-md"
							onChange={(e) => setUsername(e.target.value)}
							value={username}
						/>
					</div>
					<div>
						<label>Email</label>
						<input
							type="text"
							className="outline-none border border-gray-500 p-2 w-full rounded-md"
							onChange={(e) => setEmail(e.target.value)}
							value={email}
						/>
					</div>
					<button
						type="submit"
						className="px-10 py-1 border border-blue-700 mt-5"
					>
						Create User
					</button>
				</form>
			</div>
			{Array.isArray(userData) && userData.length > 0 ? (
				userData.map((user, i) => (
					<div
						key={i}
						className="grid grid-cols-2 gap-4 p-2 border border-gray-400 rounded-md"
					>
						<div>Username: {user.username}</div>
						<div>Email: {user.email}</div>
					</div>
				))
			) : (
				<p>No users found</p>
			)}

			<div>
				<form>
					<button
						type="submit"
						formAction={UpdateUser}
						className="px-10 py-1 border border-blue-500"
					>
						Update User
					</button>
				</form>
			</div>
		</div>
	);
}

export default CreatePage;