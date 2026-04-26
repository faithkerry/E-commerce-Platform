function Home() {
  return (
    <div>
      <h1 style={{ color: "red" }}>THIS IS HOME FILE</h1>

      <img
        src="/kerryshop-logo.png"
        alt="logo"
        style={{
          position: "fixed",
          top: "10px",
          left: "10px",
          width: "100px",
          border: "5px solid red",
          zIndex: 9999
        }}
      />
    </div>
  );
}

export default Home;