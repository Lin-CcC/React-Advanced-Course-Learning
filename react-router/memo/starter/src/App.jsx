import AlignList from './components/AlignList';
import NavBar from './components/Navbar';
import BottomNavi from './ui/BottomNavi';

function App() {
  return (
    <>
      <NavBar />
      <div style={{ marginBottom: '56px', marginTop: '56px', zIndex: '0' }}>
        <AlignList />
      </div>
      <BottomNavi />
    </>
  );
}
export default App;
