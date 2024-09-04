import React, { useState } from 'react';

const UpdateUserForm = ({ initialInfo, onSave }) => {
  const [formState, setFormState] = useState(initialInfo);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleSaveClick = () => {
    onSave(formState);
  };

  const handleCancelClick = () => {
    onSave(initialInfo);
  };

  return (
    <form className="update-user-form">
      <div>
        <label>Name: </label>
        <input
          type="text"
          name="name"
          value={formState.name}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Email: </label>
        <input
          type="email"
          name="email"
          value={formState.email}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Phone Number: </label>
        <input
          type="tel"
          name="phone"
          value={formState.phone}
          onChange={handleInputChange}
        />
      </div>
      <button type="button" onClick={handleSaveClick} className="save-button">Save</button>
      <button type="button" onClick={handleCancelClick} className="cancel-button">Cancel</button>
    </form>
  );
};

export default UpdateUserForm;
