import React from 'react';
import Button from '../components/Button/Button';
import Hero from '../components/Hero/Hero';
import HeroTitle from '../components/Hero/HeroTitle';
import HeroSubtitle from '../components/Hero/HeroSubtitle';
import history from '../services/history';


function Home() {

  const goToStories = () => {
    history.push('/stories')
  }

  return (
    <React.Fragment>
      <Hero>
        <HeroTitle>Stay hungry. Stay foolish.</HeroTitle>
        <HeroSubtitle>Learn From the hottest startups in the world.</HeroSubtitle>
        <Button onClick={goToStories} color="primary" size="md">Read Now</Button>
      </Hero>
    </React.Fragment>
  );
}

export default Home;
