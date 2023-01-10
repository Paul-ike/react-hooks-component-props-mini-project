import React from "react";
import Article from "./Article";

function ArticleList() {
    const posts = [
        {
            id:1,
            title: 'The WET Codebase',
            date: 'July 13, 2020',
            preview: 'Come waste your time with me.'
        },
        {
            id:2,
            title: 'Goodbye, Clean Code',
            date: 'January 11, 2020',
            preview: 'Let clean code guide you. Then let it go.'
        },
        {
            id:3,
            title: 'My Decade in Review',
            date: 'January 1, 2020',
            preview: 'A personal reflection.'
        }
    ]

    const articleElements = posts.map((post) => {
        return <Article key={post.id} title= {post.title} date= {post.date} preview= {post.preview} />
    })

    return (
        <main>
            {articleElements}
        </main>
    )
}

export default ArticleList