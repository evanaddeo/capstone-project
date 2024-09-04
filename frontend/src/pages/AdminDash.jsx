import React, { useState } from 'react';

const AdminDash = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
  ]);
  const [jobs, setJobs] = useState([
    { id: 1, title: 'Software Engineer', description: 'Develop software' },
    { id: 2, title: 'Product Manager', description: 'Manage products' },
  ]);
  const [newUser, setNewUser] = useState({ name: '', email: '' });
  const [newJob, setNewJob] = useState({ title: '', description: '' });
  const [editUser, setEditUser] = useState(null);
  const [editJob, setEditJob] = useState(null);

  const handleAddUser = () => {
    const newId = users.length ? users[users.length - 1].id + 1 : 1;
    setUsers([...users, { id: newId, ...newUser }]);
    setNewUser({ name: '', email: '' });
  };

  const handleEditUser = () => {
    setUsers(users.map(user => (user.id === editUser.id ? editUser : user)));
    setEditUser(null);
  };

  const handleDeleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  const handleAddJob = () => {
    const newId = jobs.length ? jobs[jobs.length - 1].id + 1 : 1;
    setJobs([...jobs, { id: newId, ...newJob }]);
    setNewJob({ title: '', description: '' });
  };

  const handleEditJob = () => {
    setJobs(jobs.map(job => (job.id === editJob.id ? editJob : job)));
    setEditJob(null);
  };

  const handleDeleteJob = (id) => {
    setJobs(jobs.filter(job => job.id !== id));
  };

  return (
    <div>
      <header>
        <h1>Admin Dashboard</h1>
      </header>
      <section>
        <div>
          <div>
            <h2>Add User</h2>
            <input
              type="text"
              placeholder="Name"
              value={newUser.name}
              onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
            />
            <input
              type="email"
              placeholder="Email"
              value={newUser.email}
              onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
            />
            <button onClick={handleAddUser}>Add User</button>
          </div>

          <div>
            <h2>Edit User</h2>
            {editUser && (
              <>
                <input
                  type="text"
                  placeholder="Name"
                  value={editUser.name}
                  onChange={(e) => setEditUser({ ...editUser, name: e.target.value })}
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={editUser.email}
                  onChange={(e) => setEditUser({ ...editUser, email: e.target.value })}
                />
                <button onClick={handleEditUser}>Save Changes</button>
              </>
            )}
          </div>

          <ul>
            {users.map(user => (
              <li key={user.id}>
                {user.name} ({user.email})
                <button onClick={() => setEditUser(user)}>Edit</button>
                <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
              </li>
            ))}
          </ul>

          <div>
            <h2>Add Job Posting</h2>
            <input
              type="text"
              placeholder="Title"
              value={newJob.title}
              onChange={(e) => setNewJob({ ...newJob, title: e.target.value })}
            />
            <textarea
              placeholder="Description"
              value={newJob.description}
              onChange={(e) => setNewJob({ ...newJob, description: e.target.value })}
            />
            <button onClick={handleAddJob}>Add Job</button>
          </div>

          <div>
            <h2>Edit Job Posting</h2>
            {editJob && (
              <>
                <input
                  type="text"
                  placeholder="Title"
                  value={editJob.title}
                  onChange={(e) => setEditJob({ ...editJob, title: e.target.value })}
                />
                <textarea
                  placeholder="Description"
                  value={editJob.description}
                  onChange={(e) => setEditJob({ ...editJob, description: e.target.value })}
                />
                <button onClick={handleEditJob}>Save Changes</button>
              </>
            )}
          </div>

          <ul>
            {jobs.map(job => (
              <li key={job.id}>
                {job.title} - {job.description}
                <button onClick={() => setEditJob(job)}>Edit</button>
                <button onClick={() => handleDeleteJob(job.id)}>Delete</button>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default AdminDash;