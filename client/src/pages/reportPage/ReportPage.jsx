import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ReportPage.module.scss";

export default function ReportPage() {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [steps, setSteps] = useState("");

  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");

    const trimmedTitle = title.trim();
    const trimmedDescription = description.trim();
    const trimmedSteps = steps.trim();

    if (!trimmedTitle || !trimmedDescription) {
      setError("Please fill in Title and Description.");
      return;
    }

    if (trimmedTitle.length > 200) {
      setError("Title must be 200 characters or less.");
      return;
    }

    setStatus("submitting");

    try {
      const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/reports`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: trimmedTitle,
          description: trimmedDescription,
          steps: trimmedSteps ? trimmedSteps : null,
        }),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || `Request failed (${res.status})`);
      }

      setStatus("success");
      setTitle("");
      setDescription("");
      setSteps("");
    } catch (err) {
      console.log("API:", import.meta.env.VITE_API_BASE_URL);

      setStatus("error");
      setError(err?.message || "Something went wrong.");
    }
  }

  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <h1 className={styles.title}>Report a problem</h1>
        <p className={styles.subtitle}>
          If something doesn’t work as expected, please describe it below.
        </p>

        <form className={styles.form} onSubmit={handleSubmit}>
          <label className={styles.label}>
            <span className={styles.labelText}>Title *</span>
            <input
              className={styles.input}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              maxLength={200}
              placeholder="Short summary of the issue"
              required
              disabled={status === "submitting"}
            />
          </label>

          <label className={styles.label}>
            <span className={styles.labelText}>Description *</span>
            <textarea
              className={styles.textarea}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="What happened? What did you expect?"
              rows={6}
              required
              disabled={status === "submitting"}
            />
          </label>

          <label className={styles.label}>
            <span className={styles.labelText}>
              Steps to reproduce (optional)
            </span>
            <textarea
              className={styles.textarea}
              value={steps}
              onChange={(e) => setSteps(e.target.value)}
              placeholder={"1. Go to...\n2. Click...\n3. Observe..."}
              rows={4}
              disabled={status === "submitting"}
            />
          </label>

          {error ? <div className={styles.error}>{error}</div> : null}

          {status === "success" ? (
            <div className={styles.success}>
              ✅ Thanks for the report! Feedback helps improve the app.
            </div>
          ) : null}

          <div className={styles.actions}>
            <button
              className={styles.primaryBtn}
              type="submit"
              disabled={status === "submitting"}
            >
              {status === "submitting" ? "Submitting..." : "Submit report"}
            </button>

            <button
              className={styles.secondaryBtn}
              type="button"
              onClick={() => navigate(-1)}
              disabled={status === "submitting"}
            >
              Back
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
