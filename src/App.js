// import logo from './logo.svg';
// import './App.css';
// import CopyApp from './CopyApp';
import Header from './Header';

import YoutubeCard from './YoutubeCard';

function App() {
  return (
    <div className = "Example_React_app">
      <Header/>
      
      <div
      style ={{
        display:"flex",
        flexWrap: "wrap"
      }}
      >
      <YoutubeCard imgUrl="https://i.ytimg.com/vi/icsxikOzfVI/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAm7h6KHrTloxDzWsToCIXglm_o0w" title ="Devops with AWS Cloud | Session-03 | @ashokit" Views="600" days="3days"/>
      <YoutubeCard imgUrl="https://i.ytimg.com/vi/72tbMvbXAq4/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDoq_g8wHL0KIjQkzttaR6nx9skYg"title="Java Developers Roles and Responsibilities in JOB " Views="700" days="6days"/>
      <YoutubeCard imgUrl="https://i.ytimg.com/vi/I8gb_ScUs9U/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD-YwTnH0LZ5hOcOReMmVye4xDKEA" title="Top 80 Java Interview Questions" Views="400" days="8days"/>
      <YoutubeCard imgUrl="https://i.ytimg.com/vi/XzY3a7rAbfE/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCN4psjNI-xViGSEe0ob30mCA4RQg" title="UI Web Development Course" Views="800" days="20 days"/>
      <YoutubeCard imgUrl="https://i.ytimg.com/vi/h64A9JT3-9o/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDldMrtJ9lbYBgG6VlkJC5wRXS1Qg" title="Linux Introduction" Views="45" days="20days"/>
     <YoutubeCard imgUrl="https://i.ytimg.com/vi/Ri-URt8gPCk/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBwlnuhoE6zjAAmneD7IYXaelGVLQ" title="Jenkins CI|CD by Ashok" Views="30" days="25days"/>
      <YoutubeCard imgUrl="https://i.ytimg.com/vi/lxxFkSZsdaM/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDdmoay4aLfWTEfH0M_d2zQ27orow" title="Devops Engineer Roles&Responsibilities" Views="50" days="11days"/>
      <YoutubeCard imgUrl="https://i.ytimg.com/vi/aAxtUJrpMWQ/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDvVRlZH033cDH-K9dXbNRV8E0f9Q" title="Devops Interview questions" Views="55" days="22days"/>
      {/* <YoutubeCard/><YoutubeCard/>
      <YoutubeCard/><YoutubeCard/>
      <YoutubeCard/><YoutubeCard/>
      <YoutubeCard/><YoutubeCard/> */}
      </div>
    </div>
    
  );
}

export default App;
