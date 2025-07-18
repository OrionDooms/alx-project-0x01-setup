import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";
import { UserProps } from "@/interfaces";

interface UserPageProp {
	posts: UserProps[];
}

const Users: React.FC<UsersPageProps> = ({ posts }) => {
	return (
		<div className="flex flex-col h-screen">
		<Header />
		<main className="overflow-y-auto p-5">
		<div className="flex items-center justify-between mb-5">
		<h1 className="font-semibold text-2xl">User Directory</h1>
		<button className=" px-4 py-2 rounded-full bg-blue-300 text-while hover:bg-blue-800">Add user</button>
		</div>
		
		<div className="md:grid-cols-2 lg:grid-cols-3 grid grid-cols-1 gap-4">
		{posts?.map((user: UserProps, index: number) => (
			<UserCard key={index} {...user} />
		))}
		</div>
		</main>
		</div>
	);
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users")
  const posts = await response.json()

  return {
    props: {
      posts
    }
  }
}
export default Users;
