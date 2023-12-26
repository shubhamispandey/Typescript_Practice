import Award from "./components/props/Award";
import Greet from "./components/props/Greet";
import Button from "./components/eventProps/Button";
import Input from "./components/eventProps/Input";
import Container from "./components/styles/Container";
import Login from "./components/useState/Login";
import Counter from "./components/useReducer/Counter";

const App = () => {
  return (
    <div>
      {/* 1.Props */}
      <Greet name="Shubham">
        <Award award="Gold" />
      </Greet>
      {/* 2.Event Props */}
      <Button id={5} handleClick={(e) => console.log(e)} />
      <Input handleChange={(e) => console.log(e)} />
      {/* 3.Styles */}
      <Container styles={{ fontSize: "48px", color: "crimson" }} />
      {/* 4.UseState */}
      <Login />
      {/* 5.UseReducer */}
      <Counter />
    </div>
  );
};

export default App;
