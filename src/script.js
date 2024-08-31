export function BtnContainer() {
  return (
    <div className="container">
      <Btn name="javascript" bg="yellow" />
      <Btn name="HTML" bg="orange" />
      <Btn name="CSS3" bg="skyblue" />
      <Btn name="Jquery" bg="red" />
      <Btn name="Figma" bg="grey" />
      <Btn name="React" bg="beige" />
      <Btn name="Vue" bg="Lime" />
      <Btn name="Angular" bg="blue" />
      <Btn name="MySQL" bg="purple" />
    </div>
  );
}

function Btn(props) {
  return (
    <button
      style={{
        fontWeight: "900",
        padding: "15px",
        borderRadius: "16px",
        color: "Black",
        backgroundColor: props.bg,
        width: "100px",
      }}
    >
      {props.name}
    </button>
  );
}
export function Header() {
  return (
    <div>
      <h1 className="header">Fahad Khan</h1>;
      <Intro />
    </div>
  );
}

function Intro() {
  return (
    <div
      style={{
        paddingInline: "30px",
        textAlign: "center",
        fontWeight: "900",
        lineHeight: "20px",
      }}
    >
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt harum
        doloremque maxime cum tempore maiores repellendus odio aliquam
      </p>
    </div>
  );
}
