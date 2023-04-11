import './App.css';
// import Application from './components/application/application';
// import Counter from './components/counter/counter';
import { MuiMode } from './components/mui/mui-mode';
import { AppProviders } from './components/providers/app-providers';
// import Skills from './components/skills/skills';
// import { SkillsProps } from './components/skills/skills.types';

// function App() {
//   const skills: string[] = ["HTML", "CSS", "JavaScript"];
//   return (

//   // -------use TESTING PLAYGROUND EXTENSION to see which query to select to find an element from dom---------

//     <div className="App">
//       {/* <Application/>
//       <Skills skills={skills} /> */}
//       <Counter/>
//     </div>
//   );
// }

function App(){
  return (
    <AppProviders>
      <div className='App'>
           <MuiMode/>
      </div>
    </AppProviders>
  )
}
export default App;
