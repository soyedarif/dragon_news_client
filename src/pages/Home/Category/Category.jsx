import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../NewsCard/NewsCard';

const Category = () => {
    const {id}=useParams()
    const catagoryNews=useLoaderData()
    return (
        <div>
           {id && <h2>This is Category: {catagoryNews.length}</h2>}
            {
                catagoryNews.map(news=> <NewsCard key={news._id} news={news}></NewsCard>)
            }
        </div>
    );
};

export default Category;