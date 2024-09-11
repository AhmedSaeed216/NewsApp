import React,{useState,useEffect} from 'react'
import NewsDetail from './NewsDetail'
import EarthImg from '../assets/earth.jpg'

const Earth = () => {
  const [articles, setArticles] = useState([])

  useEffect(() => {
  const url=`https://newsapi.org/v2/everything?q=earth&apiKey=ca9ec3f42e9f498eba199024ba4934c4`  
  fetch(url)
    .then(response=>response.json())
    .then(data=>setArticles(data.articles))
  }, [])
  
  useEffect(()=>{console.log(articles)},[articles])
  return (
    <>
    <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-4 '>
      {articles.map((data,index)=>(
        data.title?(
          <NewsDetail 
          key={index}
          src={data.src}
          url={data.url}
          description={data.description}
          title={data.title}
          altImg={EarthImg}
          />
        ):( <p className='flex justify-center items-center font-bold text-3xl' key={index}>No data found </p>)
      ))}


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
    </>
  )
}

export default Earth