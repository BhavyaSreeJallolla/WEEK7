// src/App.jsx
import React from 'react';
import ProductCard from './components/cards/ProductCard';
import BookCard from './components/cards/BookCard';
import EventCard from './components/cards/EventCard';
import MovieCard from './components/cards/MovieCard';
import RecipeCard from './components/cards/RecipeCard';
import ProfileCard from './components/cards/ProfileCard';
import CourseCard from './components/cards/CourseCard';
import NewsCard from './components/cards/NewsCard';
import JobCard from './components/cards/JobCard';
import SongCard from './components/cards/SongCard';

const App = () => {
  return (
    <div>
      <ProductCard productName="Laptop" price="999.99" description="A high performance laptop." />
      <BookCard title="The Great Gatsby" author="F. Scott Fitzgerald" yearPublished="1925" />
      <EventCard eventName="Music Festival" date="2024-09-15" location="New York" />
      <MovieCard title="BAAHUBALI" director="S.S.RAJAMOULI" releaseYear="2018" />
      <RecipeCard recipeName="Spaghetti Bolognese" ingredients={['spaghetti', 'ground beef', 'tomato sauce']} cookingTime="45" />
      <ProfileCard username="BHAVYA SREE JALLOLLA" bio="Web developer and tech enthusiast." profilePicture="https://th.bing.com/th/id/OIP.PC2zWPoOyrrPC7eLc--9kAAAAA?w=192&h=197&c=7&r=0&o=5&pid=1.7" />
      <CourseCard courseName="FULL STACK" instructor="SARAN VELMURUGAN" duration="6 MONTHS" />
      <NewsCard headline="New Technology Released" summary="A new tech product has been launched." source="Tech News" />
      <JobCard jobTitle="Software Engineer" companyName="TechCorp" location="San Francisco" />
      <SongCard songTitle="THUM HI HO" artist="ARJITH SINGH" album="AHIQUI2" />
    </div>
  );
};

export default App;
