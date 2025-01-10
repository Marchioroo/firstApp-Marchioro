import "./App.css";
import LoginForm from "./components/Molecules/loginForm"; //

function App() {
  return (
    <>
      <div
        className="w-screen h-screen text-white"
        style={{
          background: "radial-gradient(circle, #520120 30%, #520120 70%)",
        }}
      >
        <div className="flex justify-center items-center flex-col w-screen h-screen">
          <div className="title text-3xl font-medium"> Login </div>
          <div className="subtitle font-medium">
            Informe os dados abaixo para realizar o login
          </div>
          <div className="">
            <LoginForm /> {}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
