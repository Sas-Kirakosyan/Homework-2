import "./App.css";

function App() {
  const sections = [
    { title: "Main Section", buttons: ["Schedule", "Summary", "Recent list"] },
    {
      title: "Component",
      buttons: ["Child Component", "Child Component", "Child Component"],
    },
    {
      title: "<main-section>",
      buttons: ["<schedule>", "<summary>", "<recent-list>"],
    },
  ];
  return (
    <>
      {sections.map((section, index) => (
        <section className="sect" key={index}>
          <h1>{section.title}</h1>
          {section.buttons.map((btn, idx) => (
            <button className="btn" key={idx}>
              {btn}
            </button>
          ))}
        </section>
      ))}
    </>
  );
}
export default App;
