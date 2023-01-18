import React from "react";
import blogData from "../data/blog";
import About from "./About";
import Header from "../components/Header";
import ArticleList from "../components/ArticleList";
import Article from "../components/Article";

console.log(blogData);

function App() {
  return (
    <div className="App">
      You're on your own from here! Follow the deliverables; test things out in
      the browser as you write your code; and good luck!
      <About image={blogData.image} />
      <Header img={blogData.image} about={blogData.about} />
      <Article />
      <ArticleList  />
    </div>
    
  );
}

export default App;