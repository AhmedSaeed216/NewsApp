
import React, { useEffect, useState } from 'react';
import NewsDetail from './NewsDetail';

const AllNews = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
    //   const url = `https://newsapi.org/v2/everything?q=Apple&sortBy=popularity&apiKey=ca9ec3f42e9f498eba199024ba4934c4`;
      const url = `https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=ca9ec3f42e9f498eba199024ba4934c4`     
      fetch(url)
        .then(response => response.json())
        .then(data => {
          setArticles(data.articles ||[]);
          console.log(data.articles);  // Logging the fetched articles
        })
        .catch(error => console.error('Error fetching the news:', error));
    }, []);  // Empty dependency array ensures it runs only once

  return (
    <>
        <h1 className='font-bold text-2xl flex items-center justify-center  py-2'>Top News from BBC</h1>
    <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-4'>
    
        {articles.map((data, index) => {
            if(data.author!=null){
            return (
                // <div >
                <NewsDetail
                key={index}
                author={data.author}
                title={data.title}
                description={data.description}
                src={data.urlToImage}
                url={data.url}
              />
            //   </div>
            );
        }
        
        })}
    </div>
    </>
  );
}

export default AllNews;
