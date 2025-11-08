import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";
import { useAppContext } from "../context/AppContext";

function Login() {
  const navigate = useNavigate();
  const { login } = useAppContext();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const storedUser = JSON.parse(localStorage.getItem("registeredUser"));

    if (!storedUser) {
      setError("No user found. Please sign up first.");
      return;
    }

    if (storedUser.email !== email || storedUser.password !== password) {
      setError("Invalid email or password.");
      return;
    }

    try {
      setLoading(true);
      await new Promise((res) => setTimeout(res, 700));

      login({ name: storedUser.fullName, email: storedUser.email });
      navigate("/");
    } catch (err) {
      setError("Something went wrong. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="auth-page">
      <form className="auth-card" onSubmit={handleSubmit} noValidate>
        <div className="auth-header">
          <div className="brand-mark">UI</div>
          <div>
            <h2 className="auth-title">Welcome back</h2>
            <p className="auth-sub">
              Sign in to access course details and your dashboard
            </p>
          </div>
        </div>

        <div className="form-row">
          <label className="label" htmlFor="email">Email</label>
          <input
            id="email"
            className="input"
            type="email"
            inputMode="email"
            autoComplete="email"
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
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Your password"
            required
          />
        </div>

        {error && <div className="input-error" role="alert">{error}</div>}

        <div className="actions">
          <button className="primary-btn" type="submit" disabled={loading}>
            {loading ? <span className="loader-inline" aria-hidden /> : "Sign In"}
          </button>

          <a className="secondary-link" href="/signup">Create account</a>
        </div>
      </form>
    </main>
  );
}

export default Login;