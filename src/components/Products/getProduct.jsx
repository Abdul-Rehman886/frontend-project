import axios from "axios";

import { useEffect, useState } from "react";

import UserCard from "../Common/userCard";

const GetProduct = () => {
  const [data, setData] = useState([]);
  const getAllUsers = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:3000/user/get-all-users",
        {
          withCredentials: true,
        }
      );
      if (data.data.length > 0) {
        return setData(data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <>
      <div className="h-full w-full  flex flex-wrap overflow-y-scroll ">
        {data.length > 0 ? (
          <>
            {data.map((user, index) => {
              return <UserCard key={index} user={user} />;
            })}
          </>
        ) : (
          <>
            <div>
              <p>No User Exists</p>
            </div>
          </>
        )}
      </div>
    </>
  );
};
export default GetProduct;
