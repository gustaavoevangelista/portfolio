interface EmailTemplateProps {
    name: string;
    email: string;
    subject: string;
    message: string;
}

export default function EmailTemplate({ name, email, subject, message }: EmailTemplateProps) {
    return (
        <div style={{ fontFamily: "sans-serif", maxWidth: "600px", margin: "auto" }}>
          <h2 style={{ color: "#7C5CFC" }}>New message from your portfolio</h2>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <tr><td style={{ padding: "8px", color: "#7A8299", width: "80px" }}>Name</td><td style={{ padding: "8px" }}>{name}</td></tr>
            <tr><td style={{ padding: "8px", color: "#7A8299" }}>Email</td><td style={{ padding: "8px" }}><a href={`mailto:${email}`}>{email}</a></td></tr>
            <tr><td style={{ padding: "8px", color: "#7A8299" }}>Subject</td><td style={{ padding: "8px" }}>{subject}</td></tr>
          </table>
          <div style={{ marginTop: "16px", padding: "16px", background: "#0D1120", borderRadius: "8px", color: "#E2E8F0", whiteSpace: "pre-wrap" }}>{message}</div>
        </div>
    );
}