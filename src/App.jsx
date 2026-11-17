
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Student from "./components/Student.jsx";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh"
      }}
    >
      <Header />

      <main
        style={{
          display: "flex",
          flex: "1",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "10px"
        }}
      >
        <Student name="Manaswini" age={20} />
        <Student name="Tejaswini" age={26} />
        <Student name="Akshitha" age={21} />
        <Student name="Meghana" age={20} />
        <Student name="Bhavana" age={22} />
      </main>

      <Footer />
    </div>
  );
}

export default App;
