import React from 'react';
import ProductCard from './components/ProductCard/ProductCard';
import BookCard from './components/BookCard/BookCard';
import EventCard from './components/EventCard/EventCard';
import MovieCard from './components/MovieCard/MovieCard';
import RecipeCard from './components/RecipeCard/RecipeCard';
import ProfileCard from './components/ProfileCard/ProfileCard';
import CourseCard from './components/CourseCard/CourseCard';
import NewsCard from './components/NewsCard/NewsCard';
import JobCard from './components/JobCard/JobCard';
import SongCard from './components/SongCard/SongCard';

const App = () => {
  // Example data for each card
  const product = {
    productName: 'Laptop',
    price: 999.99,
    description: 'A high-performance laptop for all your needs.'
  };

  const book = {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    yearPublished: 1925
  };

  const event = {
    eventName: 'Music Concert',
    date: '2024-09-15',
    location: 'New York City'
  };

  const movie = {
    title: 'Inception',
    director: 'Christopher Nolan',
    releaseYear: 2010
  };

  const recipe = {
    recipeName: 'Chocolate Cake',
    ingredients: ['Flour', 'Sugar', 'Cocoa Powder', 'Eggs'],
    cookingTime: 45
  };

  const profile = {
    username: 'BHAVYA SREE JALLOLLA',
    bio: 'Web developer and tech enthusiast.',
    profilePicture: 'https://cdn-icons-png.flaticon.com/128/6997/6997662.png'
  };

  const course = {
    courseName: 'React Development',
    instructor: 'SARAN VELMURUGAN',
    duration: 40
  };

  const news = {
    headline: 'Breaking News: React 19 Released',
    summary: 'The new version of React introduces exciting features.',
    source: 'Tech News'
  };

  const job = {
    jobTitle: 'Software Engineer',
    companyName: 'Tech Solutions',
    location: 'San Francisco'
  };

  const song = {
    songTitle: 'THUM HI HO',
    artist: 'ARJITH SINGH',
    album: 'AASHQUI2'
  };

  return (
    <div className="App">
      <h1>Component Showcase</h1>
      <ProductCard {...product} />
      <BookCard {...book} />
      <EventCard {...event} />
      <MovieCard {...movie} />
      <RecipeCard {...recipe} />
      <ProfileCard {...profile} />
      <CourseCard {...course} />
      <NewsCard {...news} />
      <JobCard {...job} />
      <SongCard {...song} />
    </div>
  );
};

export default App;
