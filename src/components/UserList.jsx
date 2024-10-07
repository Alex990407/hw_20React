import React from "react";
import { useSelector } from "react-redux";
import { selectUsers } from "../userSlice";
import "./style.modules.css";

const UserList = () => {
  const users = useSelector(selectUsers);

  return (
    <div className="user-list-container">
      <h1 className="user-list-header">User List</h1>
      <ul className="user-list">
        {users.map((user) => (
          <li key={user.id} className="user-item">
            <h2>{user.name}</h2>
            <p>{user.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
