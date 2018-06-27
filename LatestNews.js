import React from 'react';
import {Link} from 'react-router-dom'


const getNews=({news})=>{
    if(news){
        return news.map((item)=>{
            return(
                <div key={item.id}>
                <h5>{item.title}</h5>
                </div>
            )
        })
    }
}

const LatestNews=(props)=>{
return(
<div>
    <h1>Latest News & Events</h1>
        <Link to="/NewsItem">
            {getNews(props)}
        </Link>
</div>
)
}

export default LatestNews;