import React from 'react';

export interface  MyPortfolioProps {
}

export default function MyPortfolio (props: MyPortfolioProps) {
  return (
    <div className="portfolio flex justify-center mx-auto w-[100vw] h-[100vh]">
      <div className="text-black w-3/4 flex flex-col justify-center items-center">
        <h1>My Portfolio</h1>
        <p>I love what I do. I take great pride in what I do.</p>
        <div className="w-20 h-0.5 bg-slate-400 mt-6"></div>
      </div>
    </div>
  );
}
