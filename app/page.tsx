export default function Home() {
  return (
    <div style={{
      minHeight: "100vh",
      backgroundColor: "white",
      color: "black",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "sans-serif"
    }}>
      <h1>AgencyPro 🚀</h1>
      <p>We build high converting websites for businesses.</p>

      <button style={{
        marginTop: "20px",
        padding: "10px 20px",
        background: "black",
        color: "white",
        borderRadius: "8px"
      }}>
        Get Started
      </button>
    </div>
  );
}