import { useState } from "react";
import Button from "../Atoms/ButtonLogin";

const LoginForm = () => {
  const [password, setPassword] = useState("");

  const buttonData = [
    { id: 1, label: "1" },
    { id: 2, label: "2" },
    { id: 3, label: "3" },
    { id: 4, label: "4" },
    { id: 5, label: "5" },
    { id: 6, label: "6" },
    { id: 7, label: "7" },
    { id: 8, label: "8" },
    { id: 9, label: "9" },
    { id: 10, label: "LIMPAR", isSmall: true },
    { id: 11, label: "0" },
    { id: 12, label: "VOLTAR", isSmall: true },
  ];

  const handleButtonClick = (label: string) => {
    if (label === "LIMPAR") {
      setPassword("");
    } else if (label === "VOLTAR") {
      setPassword((prev) => prev.slice(0, -1));
    } else {
      setPassword((prev) => prev + label); // Adiciona o valor clicado ao final da senha
    }
  };

  return (
    <div className="p-4">
      <div className="content bg-[#3C0118] w-full md:max-w-[550px] h-auto rounded-xl mt-3 p-6 flex flex-col md:flex-row gap-4">
        {/* Div da coluna esquerda */}
        <div className="w-full md:w-1/2 h-auto bg-[#47011C] p-3 rounded-2xl flex flex-col justify-start">
          <div className="flex flex-col font-semibold space-y-4 w-full">
            {/* Campo Usuário */}
            <label className="w-full flex items-start flex-col">
              <span className="text-white mb-2 block text-2xl">Usuário:</span>
              <input
                type="text"
                placeholder="Digite seu usuário"
                className="w-full p-2 rounded-lg placeholder-gray-500 text-black outline-none focus:ring-2 focus:ring-[#00B2A1]"
              />
            </label>

            {/* Campo Senha */}
            <label className="w-full flex items-start flex-col">
              <span className="text-white mb-2 block text-2xl">Senha:</span>
              <input
                type="password"
                value={password}
                readOnly
                placeholder="Digite sua senha"
                className="w-full placeholder-gray-500 p-2 rounded-lg text-black outline-none focus:ring-2 focus:ring-[#00B2A1]"
              />
            </label>

            {/* Botão de Login */}
            <div className="outline-none flex gap-2">
              <Button title="Enviar" />
              <Button title="Cancelar" />
            </div>
          </div>
        </div>

        {/* Div da coluna direita */}
        <div className="w-full md:w-1/2 h-auto p-4 rounded-2xl flex items-center justify-center">
          <div className="text-white text-lg font-bold">
            <div className="grid grid-cols-3 gap-3 items-center justify-center text-black">
              {buttonData.map((button) => (
                <button
                  key={button.id}
                  onClick={() => handleButtonClick(button.label)}
                  className={`h-[50px] w-[90px] md:w-[60px] bg-white outline-none ${
                    button.isSmall ? "text-[10px] md:text-[8px]" : ""
                  }`}
                >
                  {button.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
