"use server";
import { PrismaClient } from "@prisma/client";
// export const createUser = async () => {
// 	try {
// 		const prisma = new PrismaClient();
// 		const newUsers = [
// 			{
// 				email: "User1@gmail.com",
// 				name: "user1",
// 			},
// 			{
// 				email: "User2@gmail.com",
// 				name: "user2",
// 			},
// 			{
// 				email: "User3@gmail.com",
// 				name: "user3",
// 			},
// 			{
// 				email: "User4@gmail.com",
// 				name: "user4",
// 			},
// 		];

// 		const createdUser = await prisma.user.createMany({
// 			data: newUsers,
// 		});
// 		console.log("Created user: ", createdUser);
// 	} catch (error) {
// 		console.log(error);
// 	}
// };

export const createUser = async ({ username: username, email: email }) => {
	try {
		const prisma = new PrismaClient();
		const newUser = { email: email, name: username };

		const createdUser = await prisma.user.create({
			data: newUser,
		});
		console.log("Created user: ", createdUser);
	} catch (error) {
		console.log(error);
	}
};

/*export const fetchUser = async () => {
	try {
		const prisma = new PrismaClient();
		// fetch  all users
		// SQl : select * from tablename where salary >=90000  gt | gte
		const allUsers = await prisma.user.findUnique({
			where: {
				email: "User3@gmail.com",
			},
		});

		console.log(allUsers);
		return allUsers;
	} catch (error) {
		console.log(error);
	}
};*/

export const UpdateUser = async () => {
	try {
		const prisma = new PrismaClient();
		await prisma.user.upsert({
			where: {
				email: "User2000@gmail.com",
			},
			update: {
				name: "Updated User Name",
			},
			create: {
				email: "User2000@gmail.com",
				name: "It is New Name",
			},
		});
	} catch (error) {
		console.log(error);
	}
};
