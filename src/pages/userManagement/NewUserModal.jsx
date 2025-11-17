import "./styles/userManagement.css";

export default function NewUserModal({ close }) {
  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <h3 style={{ marginBottom: 15 }}>Create New User</h3>

        <input placeholder="Full Name" />
        <input placeholder="Email" />
        <select>
          <option>Admin</option>
          <option>Contributor</option>
          <option>Viewer</option>
        </select>

        <div className="modal-actions">
          <button className="um-btn" onClick={close}>Cancel</button>
          <button className="um-btn-primary">Create</button>
        </div>
      </div>
    </div>
  );
}
