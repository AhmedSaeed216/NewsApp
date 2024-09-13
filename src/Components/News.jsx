// import React, { useEffect, useState } from 'react';
// import NewsDetail from './NewsDetail';

// const News = () => {
//   const [articles, setarticles] = useState([])

//   useEffect(() => {
//     const url = `https://newsapi.org/v2/everything?q=Apple&sortBy=popularity&apiKey=ca9ec3f42e9f498eba199024ba4934c4`

//     fetch(url).then(response => response.json()).then(data => setarticles(data.articles));
//     console.log(articles);
//   }, [])


//   const newsByCountry=(country)=>{
//     const url=`https://newsapi.org/v2/top-headlines/sources?country=${country}&apiKey=ca9ec3f42e9f498eba199024ba4934c4`

    
//       fetch(url).then(response=>response.json()).then(data=> setarticles(data.articles));
//       console.log(articles);
    
//   }
//   return (
// <>
//     {/* // navbar of disseren tcountries */}
//     <nav>
//     <ul className='flex gap-7 justify-center'>
//         <li onClick={() => newsByCountry('il')} className='hover:underline cursor-pointer'>Gaza War</li>
//         <li onClick={() => newsByCountry('us')} className='hover:underline cursor-pointer'>US</li>
//         <li onClick={() => newsByCountry('gb')} className='hover:underline cursor-pointer'>UK</li>
//         <li onClick={() => newsByCountry('ng')} className='hover:underline cursor-pointer'>Africa (Nigeria)</li>
//         <li onClick={() => newsByCountry('cn')} className='hover:underline cursor-pointer'>Asia (China)</li>
//         <li onClick={() => newsByCountry('de')} className='hover:underline cursor-pointer'>Europe (Germany)</li>
//         <li onClick={() => newsByCountry('ae')} className='hover:underline cursor-pointer'>Middle East (UAE)</li>
//     </ul>
// </nav>

// <hr className='m-2'/>
//     <div className='grid lg:grid-cols-3 gap-4  md:grid-cols-2'>
//     {articles.map((data, index) => {
//         // if (data.urlToImage != null) {
//           return (
//             <NewsDetail
//               key={index}
//               title={data.title}
//               description={data.description}
//               src={data.urlToImage}
//               url={data.url}
//             />
//           );
//       }
//     )
//   }  
//   </div>
// </>
// )}

// export default News;



// also corrext code is following 

import React, { useEffect, useState } from 'react';
import NewsDetail from './NewsDetail';
import NewsImg from '../assets/news.jpg'

const News = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const url = `https://newsapi.org/v2/everything?q=Apple&sortBy=popularity&apiKey=ca9ec3f42e9f498eba199024ba4934c4`;

    fetch(url)
      .then(response => response.json())
      .then(data => setArticles(data.articles || []))
      .catch(error => {
        console.error('Error fetching the news:', error);
        setArticles([]); // In case of error, set an empty array
      });
  }, []);

  const newsByCountry = (country) => {
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=ca9ec3f42e9f498eba199024ba4934c4`;

    fetch(url)
      .then(response => response.json())
      .then(data => setArticles(data.articles || []))
      .catch(error => {
        console.error('Error fetching news by country:', error);
        setArticles([]);
      });
  };

  useEffect(() => {
    console.log('Articles updated:', articles);
  }, [articles]); // Logs the updated articles array whenever it changes

  return (
    <>
      {/* Navbar for different countries */}
      <nav>
        <ul className='lg:flex lg:gap-7 lg:justify-center hidden lg:block  md:hidden  sm:hidden'>
          <li onClick={() => newsByCountry('il')} className='hover:underline cursor-pointer'>Gaza War</li>
          <li onClick={() => newsByCountry('us')} className='hover:underline cursor-pointer'>US</li>
          <li onClick={() => newsByCountry('gb')} className='hover:underline cursor-pointer'>UK</li>
          <li onClick={() => newsByCountry('ng')} className='hover:underline cursor-pointer'>Africa (Nigeria)</li>
          <li onClick={() => newsByCountry('cn')} className='hover:underline cursor-pointer'>Asia (China)</li>
          <li onClick={() => newsByCountry('de')} className='hover:underline cursor-pointer'>Europe (Germany)</li>
          <li onClick={() => newsByCountry('ae')} className='hover:underline cursor-pointer'>Middle East (UAE)</li>
        </ul>
      </nav>

      <hr className='m-2' />

      <div className='grid lg:grid-cols-3 gap-4 md:grid-cols-2'>
        { 
          articles.map((data, index) => (
            data.author&&(
              <NewsDetail
                key={index}
                title={data.title}
                description={data.description}
                src={data.urlToImage}
                url={data.url}
                altImg={NewsImg}
              />
            )
          ))
        }
      </div>
    </>
  );
};

export default News;

