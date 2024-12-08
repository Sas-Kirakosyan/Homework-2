import "./App.css";

function App() {
  const sections = [
    {
      id: "section-0",
      title: "Main Section",
      buttons: [
        { id: "section-0-button-0", title: "Schedule" },
        { id: "section-0-button-1", title: "Summary" },
        { id: "section-0-button-2", title: "Recent list" },
      ],
    },
    {
      id: "section-1",
      title: "Component",
      buttons: [
        { id: "section-1-button-0", title: "Child Component" },
        { id: "section-1-button-1", title: "Child Component" },
        { id: "section-1-button-0", title: "Child Component" },
      ],
    },
    {
      id: "section-2",
      title: "<main-section>",
      buttons: [
        { id: "section-2-button-0", title: "<schedule>" },
        { id: "section-2-button-1", title: "<summary>" },
        { id: "section-2-button-2", title: "<recent-list>" },
      ],
    },
  ];
  return (
    <>
      {sections.map((section) => (
        <section className="sect" key={section.id}>
          <h1>{section.title}</h1>
          {section.buttons.map((button) => (
            <button className="btn" key={button.id}>
              {button.title}
            </button>
          ))}
        </section>
      ))}
    </>
  );
}
export default App;
