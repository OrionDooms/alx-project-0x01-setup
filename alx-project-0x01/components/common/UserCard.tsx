import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({
name, username, email, phone, website, company, address }) => {
	return (
		<div className="max-w-xl mx-auto my-6 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
		<h2 className="text-2xl font-semibold text-gray-800">
		{name}</h2>
		<p className="text-gray-300  text-sm">
		{username}</p>
		<p className="text-gray-300 mt-2 ">
		{email}</p>
		<p className="text-gray-300">
		{phone}</p>
		<p className="text-gray-300">
		<a href={`http://${website}`} clasName="text-blue-600 hover: underline" target="_blank">{website}</a></p>
			
			<div className="mt-4 text-sm text-gray-500">
		<p><strong>Company:</strong> {company.name} </p>
		<p><em>"{company.catchPhrase}"</em></p>
		</div>

		<div className="mt-4 text-sm text-gray-500">
		<p>
		<strong>Address:</strong> {address.street}, {address.suite}, {address.city}, {address.zipcode}
		</p>
		<p>
		<strong>Geo:</strong> {address.geo.lat}, {address. geo.lng}
		</p>
		</div>
		</div>
	);
};

export default UserCard;
