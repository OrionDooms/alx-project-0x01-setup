import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({
name, username, email, phone, website, company, address }) => {
	return (
		<div >
			<h2 className="text-2xl text-gray-800">{name}</h2>
			<p>{username}</p>
			<p>{email}</p>
			<p>{phone}</p>
			<p>{website}</p>

			<div>
				<p><strong>Company:</strong>{company.name}</p>
			<p><em>"{company.catchPhrase}"</em></p>
			</div>
			
			<div>
				<p><strong>Address:</strong>{address.street}, {address.suite}, {address.city}, {address.zipcode}</p>
			</div>
		</div>
	)
}

export default UserCard;
