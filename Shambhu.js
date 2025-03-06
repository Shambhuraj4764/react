import React from 'react';


const Shambhu = () => (
  <>
    <User />
    <Weather/>
    <Book/>
    <Car/>
    <Movie/>
    <Country/>
    <Food/>
    <Mobile/>
    <Album/>
    <Laptop/>
  </>
);


function User() {
  return (
    <>
      <h1>Username: Shambhuraj patil</h1>
      <h2>Role: Developer</h2>
      <h2>Experience: Fresher</h2>
      <Status />
      <ProfilePic />
      
    </>
  );
}
const Status = () => <p>Status: Active</p>;


const ProfilePic = () => (
  <img src='https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg' alt='Profile' />
);
const Weather = () => (
  <>
    <City />
  </>
);


function City() {
  return (
    <>
      <h1>City: Pune</h1>
      <h3>Condition: Sunny</h3>
      <Alert />
    </>
  );
}


const Alert = () => <p>Weather Alert: No alerts</p>;
const Book = () => (
  <>
    <BookInfo />
  </>
);


function BookInfo() {
  return (
    <>
      <h1>Title: MernStack</h1>
      <h2>Author: Shambhuraj Patil</h2>
      <h3>Pages: 30</h3>
      <Availability />
    </>
  );
}


const Availability = () => <p>Status: Available</p>;

const Car = () => (
  <>
    <CarDetails />
  </>
);


function CarDetails() {
  return (
    <>
      <h1>Brand: Ferari</h1>
      <h2>Model: FF spider</h2>
      <h3>Year: 2024</h3>
      <Feature />
    </>
  );
}


const Feature = () => <p>Feature: Autopilot</p>;

const Movie = () => (
  <>
    <MovieDetails />
  </>
);


function MovieDetails() {
  return (
    <>
      <h1>Title: Seven</h1>
      <h2>Genre: Thrilar</h2>
      <h3>Rating: 8.5/10</h3>
      <Review />
    </>
  );
}


const Review = () => <p>Review: Must Watch!</p>;

const Country = () => (
  <>
    <CountryInfo />
  </>
);


function CountryInfo() {
  return (
    <>
      <h1>Country: India</h1>
      <h2>Capital: New Delhi</h2>
      <h3>Population: 1.4 Billion</h3>
      <Currency />
    </>
  );
}


const Currency = () => <p>Currency: Indian Rupee (INR)</p>;

const Food = () => (
  <>
    <FoodDetails />
  </>
);


function FoodDetails() {
  return (
    <>
      <h1>Dish: paneer</h1>
      <h2>Type: Indian</h2>
      <h3>Calories: 285 kcal</h3>
      <Taste />
    </>
  );
}


const Taste = () => <p>Taste: Delicious</p>;

const Mobile = () => (
  <>
    <MobileDetails />
  </>
);


function MobileDetails() {
  return (
    <>
      <h1>Brand: Apple</h1>
      <h2>Model: iPhone 15</h2>
      <h3>Storage: 256GB</h3>
      <Battery />
    </>
  );
}


const Battery = () => <p>Battery: 4000mAh</p>;

const Album = () => (
  <>
    <AlbumDetails />
  </>
);


function AlbumDetails() {
  return (
    <>
      <h1>Album: Random Access Memories</h1>
      <h2>Artist: Daft Punk</h2>
      <h3>Year: 2013</h3>
      <Song />
    </>
  );
}


const Song = () => <p>Hit Song: Get Lucky</p>;

const Laptop = () => (
  <>
    <LaptopInfo />
  </>
);


function LaptopInfo() {
  return (
    <>
      <h1>Brand: HP</h1>
      <h2>Model: Victus</h2>
      <h3>RAM: 16GB</h3>
      <Processor />
    </>
  );
}


const Processor = () => <p>Processor: RYZEN 5</p>;

export default Shambhu;