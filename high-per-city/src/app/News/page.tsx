"use client"
import React, { useState } from 'react'
import NewsIt from '../NewsIt/page'
import { useEffect } from 'react';

const News = () => {

    let[articles, setArticles]= useState([]);

    useEffect(()=>{
        fetch('https://newsapi.org/v2/everything?q=bangladesh&from=2023-12-30&apiKey=fe4c71c38a434367902e165d55be3f7c')
        .then((response)=>response.json())
        .then((news)=>{
            setArticles(news.articles);
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])
  return (
    <section className='flex flex-wrap p-2 gap-x-4 gap-y-5  justify-center '>
        {
            articles.map((article)=>{
                return(
                    <NewsIt article = {article} />
                )
            })
        }
    </section>
  )
}

export default News