import React,{useEffect ,useState} from 'react'
import NewsDetail from './NewsDetail'
import CultureImg from '../assets/culture.jpg'
const Culture = () => {
  const [articles, setArticles] = useState([])

  useEffect(() => {
    const url=`https://newsapi.org/v2/everything?q=culture&apiKey=ca9ec3f42e9f498eba199024ba4934c4`
    fetch(url)
      .then(response=>response.json())
      .then(data=>setArticles(data.articles ));
    // fetch(url).then(response=>response.json()).then(data=>setarticles(data.articles || []))
    console.log(articles);
  }, []);
  
  useEffect(()=>{console.log(articles)},[articles])
  return (
    // <>
    <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-4 '>
        
        {articles.map((data,index)=>(
      
          data.title?(
            <NewsDetail
            key={index}
            url={data.url}
            title={data.title}
            description={data.description}
            src={data.urlToImage}
            altImg={CultureImg}
            />
          ):( <p>no</p> )
          
        )
      )
    }
      

{/* {articles.map((data,index)=>(
        data.title?(
          <NewsDetail
          key={index}
          title={data.title}
          description={data.description}
          url={data.url}
          src={data.src}
          />
        ):(
          <p>Data Not found</p>
        )
      ))
      } */}
    </div>
    // </>
  )
}

export default Culture


