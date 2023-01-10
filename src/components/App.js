import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";

console.log(blogData);

function App() {
  const head = 'Overreacted'
  const profile = 'https://overreacted.io/static/profile-pic-c715447ce38098828758e525a1128b87.jpg'
  const aboutText = 'Personal blog by Dan Abramov. I explain with words and code.'
  return (
    <div className="App">
      <Header heading= { head } />
      <About image= { profile } text= { aboutText } />
      <ArticleList />
    </div>
  );
}

export default App;
