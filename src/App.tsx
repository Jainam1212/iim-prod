import './App.css'
import './index.css'
import { Navbar } from './components/ui/NavbarComponent'
import { HomePageComponent } from './components/homePageComponent'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { OurCementProducts } from './components/cementProducts';
import { BlogPage } from './components/blogPage';
import { ContactUsPage } from './components/contactUs';
import { MoreInfo } from './components/moreInfo';


function App() {

  return (
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Navigate to="/iim" />} />
        <Route path="/iim" element={<HomePageComponent></HomePageComponent>} />
        <Route
          path="/iim/cement"
          element={<OurCementProducts></OurCementProducts>}
        />
        <Route path="/iim/steel" element={<BlogPage></BlogPage>} />
        <Route path="/iim/ggbs" element={<BlogPage></BlogPage>} />
        <Route path="/iim/aac" element={<BlogPage></BlogPage>} />
        <Route path="/iim/chemicals" element={<BlogPage></BlogPage>} />
        <Route path="/iim/contactForm" element={<ContactUsPage></ContactUsPage>} />
        <Route path="/iim/moreInfo" element={<MoreInfo></MoreInfo>} />
      </Routes>
    </Router>
  );
}

export default App

// import { trpc } from "./utils/trpc";

// function App() {
//   const { data, isLoading } = trpc.hello.useQuery({ name: "Rohan" });

//   if (isLoading) return <p>Loading...</p>;

//   return <h1>{data?.message}</h1>;
// }

// export default App;


{/* <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </> */}