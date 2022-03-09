import { GlobalStyle } from "./styles/global";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import "../node_modules/react-image-gallery/styles/css/image-gallery.css";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
