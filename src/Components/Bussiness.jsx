import React,{useState,useEffect} from 'react'
import NewsDetail from './NewsDetail'
import BussinessImg from '../assets/bussiness.jpg'
const Bussiness = () => {
  const [articles, setArticles] = useState([])

  useEffect(() => {
  const url=`https://newsapi.org/v2/everything?q=bussiness&apiKey=ca9ec3f42e9f498eba199024ba4934c4`  
  fetch(url).then(response=>response.json()).then(data=>setArticles(data.articles || [

  ]))
  }, [])
  
  return (
    <>
    <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-4 '>
      {articles.map((data,index)=>(
        data.title?(
          <NewsDetail 
          key={index}
          src={data.urlToimage}
          url={data.url}
          description={data.description}
          title={data.title}
          altImg={BussinessImg}
          />
        ):( <p className='flex justify-center items-center font-bold text-3xl' key={index}>No data found </p>)
      ))}
    </div>
    </>
  )
}

export default Bussiness