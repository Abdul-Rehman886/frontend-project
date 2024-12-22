const UserCard = ({ user }) => {
  return (
    <div className="h-2/6 w-1/4   p-2">
      <div className="w-full h-full rounded-md flex p-2 bg-black flex-col justify-between">
        <p className="text-white  text-lg font-normal">UserId: {user.userId}</p>
        <p className="text-white  text-lg font-normal">Name: {user.name} </p>
        <p className="text-white  text-lg font-normal">
          UserName: {user.username}
        </p>
        <p className="text-white  text-lg font-normal">Email: {user.email}</p>
      </div>
    </div>
  );
};

export default UserCard;
