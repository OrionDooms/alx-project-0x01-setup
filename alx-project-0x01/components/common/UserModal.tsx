import { UserData, UserModalProps } from "@/interfaces";
import React, { useState } from "react";



const UserModal: React.FC<UserModalProps> = ({ onClose, onSubmit }) => {
	const [user, setUser] = useState<UserData>({
		id: 0,
		name: "",
		username: "",
		email: "",
		address: {
			street: "",
			suite: "",
			city: "",
			zipcode: "",
			geo: {
				lat: "",
				lng: ""
			}
		},
		phone: "",
		website: "",
		company: {
			name: "",
			catchPhrase: "",
			bs: ""
		}
	})

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
	const { name, value } = e.target;
	const[group, key] = name.split(".");

	if (key) {
		setUser((prev) => ({
		...prev,
		[group]: {
		...prev[group as keyof UserData],
		[key]: value,
		},
		}));
	} else {
		setUser((prev) => ({ ...prev, [name]: value}));
	}
};

const handleSubmit = (e: React.FormEvent) => {
	e.preventDefault();
	onSubmit(user);
	onClose();
};

return (
	<div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center">
	<div className="bg-white rounded-lg p-6 w-full max-w-lg shadow-lg">
	<h2 className="text-2xl font-bold mb-4 text-gray=800">Add New User</h2>
	<form onSubmit={handleSubmit} className="space-y-4">
		<input 
		type="text"
		name="name"
		value={user.name}
		onChange={handleChange}
		placeholder="Full Name"
		className="w-full border rounded px-4 py-2"
		/>
		<input 
		type="text"
		name="username"
		value={user.username}
		onChange={handleChange}
		placeholder="Username"
		className="w-full border rounded px-4 py-2"/>
		<input 
		type="email"
		name="email"
		value={user.email}
		onChange={handleChange}
		placeholder="Email"
		className="w-full border rounded px-4 py-2"/>

		<input 
		type="text"
		name="address.city"
		value={user.address.city}
		onChange={handleChange}
		placeholder="City"
		className="w-full border rounded px-4 py-2" />

		<input 
		type="text"
		name="phone"
		value={user.phone}
		onChange={handleChange}
		placeholder="Phone"
		className="w-full border rounded px-4 py-2" />

		<input 
		type="text"
		name="website"
		value={user.website}
		onChange={handleChange}
		placeholder="Website"
		className="w-full border rounded px-4 py-2" />
		
		<input 
		type="text"
		name="company.name"
		value={user.company.name}
		onChange={handleChange}
		placeholder="Company Name"
		className="w-full border rounded px-4 py-2" />

		<div>
			<button
			type="button"
			onClick={onClose}
			className="bg-gray-300 px-4 py-2 rounded mr-2"
			>
				Cancel
			</button>
			<button
			type="submit"
			className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Add User</button>
			</div>
			</form>
	</div>
	</div>
);
};
export default UserModal;