import Header from './components/Header';
import Hero from './components/Hero';
import Experience from './components/Experience';
import EducationSkills from './components/EducationSkills';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header />
      <main>
        <Hero />
        <Experience />
        <EducationSkills />
        <Contact />
      </main>
      <footer className="py-10 text-center text-sm text-slate-500">© {new Date().getFullYear()} Your Name. All rights reserved.</footer>
    </div>
  );
}

export default App;
