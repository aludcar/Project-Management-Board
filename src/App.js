import styled from 'styled-components';
import Header from './components/Header/Header';
import Board from "./pages/Board/Board";
import Backlog from './pages/Backlog/Backlog';

const AppWrapper = styled.div`
text-align: center;
`;

function App() {
  return (
    <AppWrapper>
      <Header />
      <Board />
      <Backlog />
    </AppWrapper>
  );
}

export default App;
