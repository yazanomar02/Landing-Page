import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import "../index.css";

export default function SignUp() {
  const navigate = useNavigate();
  const { login } = useAppContext();

  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirm) {
      setError("Passwords do not match");
      return;
    }

    if (!email || !fullName || !password) {
      setError("Please fill all required fields");
      return;
    }

    setError("");
    setLoading(true);

    setTimeout(() => {
      const newUser = { fullName, email, password };
      localStorage.setItem("registeredUser", JSON.stringify(newUser));
      login({ name: fullName, email }); 
      setLoading(false);
      navigate("/");
    }, 1000);
  };

  return (
    <main className="auth-page">
      <form className="auth-card" onSubmit={handleSubmit} noValidate>
        <div className="auth-header">
          <div className="brand-mark">UI</div>
          <div>
            <h2 className="auth-title">Create an account</h2>
            <p className="auth-sub">
              Join us to start learning and tracking your progress
            </p>
          </div>
        </div>

        <div className="form-row">
          <label className="label" htmlFor="fullName">Full Name</label>
          <input
            id="fullName"
            className="input"
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="John Doe"
            required
          />
        </div>

        <div className="form-row">
          <label className="label" htmlFor="email">Email</label>
          <input
            id="email"
            className="input"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            required
          />
        </div>

        <div className="form-row">
          <label className="label" htmlFor="password">Password</label>
          <input
            id="password"
            className="input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Choose a password"
            required
          />
        </div>

        <div className="form-row">
          <label className="label" htmlFor="confirm">Confirm Password</label>
          <input
            id="confirm"
            className="input"
            type="password"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            placeholder="Re-enter password"
            required
          />
        </div>

        {error && <div className="input-error" role="alert">{error}</div>}

        <div className="actions">
          <button className="primary-btn" type="submit" disabled={loading}>
            {loading ? <span className="loader-inline" aria-hidden /> : "Sign Up"}
          </button>

          <a className="secondary-link" href="/login">Already have an account?</a>
        </div>
      </form>
    </main>
  );
}