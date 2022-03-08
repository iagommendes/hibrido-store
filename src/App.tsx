import { GlobalStyle } from "./styles/global";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import "../node_modules/react-image-gallery/styles/css/image-gallery.css";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Main />
    </>
  );
}

export default App;
