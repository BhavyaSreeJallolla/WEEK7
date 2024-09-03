// src/App.jsx
import React from 'react';
import Banner from './components/Banner';
import ImageSlider from './components/ImageSlider';
import LogoGallery from './components/LogoGallery';
import ArtworkGallery from './components/ArtworkGallery';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My Media Gallery</h1>
      </header>
      <main>
        <section>
          <h2>Banner</h2>
          <Banner />
        </section>
        <section>
          <h2>Image Slider</h2>
          <ImageSlider />
        </section>
        <section>
          <h2>Logo Gallery</h2>
          <LogoGallery />
        </section>
        <section>
          <h2>Artwork Gallery</h2>
          <ArtworkGallery />
        </section>
      </main>
    </div>
  );
};

export default App;
/*// src/App.jsx or any other component file
import React from 'react';
import Banner from './components/Banner';

const App = () => {
  return (
    <div>
      <Banner />
    </div>
  );
};

export default App;*/
