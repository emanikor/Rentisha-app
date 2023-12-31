import React from 'react';
import '../component.css';
import  category1 from '../images/category1.png';
import  category2 from '../images/category2.png';
import  category3 from '../images/category3.png';
import './features.css';

const CategoryData = [
  {
    id: 1,
    title: `laptop`,
    image: category1,
  },
  {
    id: 2,
    title: `shoes`,
    image: category2,
  },
  {
    id: 3,
    title: `phone`,
    image: category3,
  },
  {
    id: 4,
    title: `laptop`,
    image: category1,
  },
  {
    id: 5,
    title: `shoes`,
    image: category2,
  },
  {
    id: 6,
    title: `phone`,
    image: category3,
  },
];

const Features =() => {
  return (
    <div className="Category">
    <div className='flexCenter  category-title'>
      
      <h3>Explore Categories</h3>
    </div>
    <div className='category-container'>
  <div className='paddings card-grid'>
    {CategoryData.map((CategoryData) => (
      <div key={CategoryData.id} className='card'>
         <img src={CategoryData.image} alt={CategoryData.title} />
         <div className='paddings card-body'>
        <h3 className='headTitle'>{CategoryData.title}</h3>
      </div>
      </div>
    ))}
  </div>
  </div>
  </div>
  ) 
  }

export default Features