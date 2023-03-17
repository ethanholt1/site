import { Chessboard } from "react-chessboard";

export default function App() {
  return (
    <div>
      <Chessboard id="BasicBoard" />
    </div>
  );
}
const root = ReactDOM.createRoot(
  document.getElementById('container')
);
const element = <h1>Hello, world</h1>;
root.render(element);