import React from "react";

const UserList = ({ user, onSelect }) => {
  return (
    <div>
      <label>
        <input
          type="radio"
          name="selected_user_id"
          value={user.id}
          onClick={onSelect}
        />
        {user.name}
      </label>
    </div>
  );
};

export default UserList;
