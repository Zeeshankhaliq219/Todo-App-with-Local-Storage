import './App.scss';
import Frontend from './pages/Frontend';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <main className="bg-secondary">
        <Frontend />
      </main>
      <Footer />
    </>
  );
}

export default App;
