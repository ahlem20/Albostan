import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link } from 'react-scroll';
import { FaQuoteLeft } from 'react-icons/fa';
import { MdOutlineHorizontalRule } from "react-icons/md";
import { IoLogoInstagram } from 'react-icons/io5';
import { FaPhoneAlt,FaYoutube } from 'react-icons/fa';
import { FaMapLocationDot } from "react-icons/fa6";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'; 
import backgroundImage from './images/13.jpg';
const testimonials = [
  {
    quote: "The rest house is very beautiful, and thank you for the organization, care, and attention to the place. The family enjoyed it and had a great time. We will book again, God willing, and the prices are reasonable compared to other rest houses.",
    author: "Customer"
  },
  {
    quote: "May God reward you. The rest house is very beautiful, with well-arranged seating for adults and a large playground. The grassy area is lovely, especially for breakfast. It had a pleasant atmosphere suitable for gatherings of a large number. The swimming pool is nice for both men and women. The price compared to the market is very good, and God willing, we will book with you for future gatherings.",
    author: "Customer"
  },
  {
    quote: "The farm, mashallah, is very beautiful and worth booking. The facilities are well-organized and nice, and God willing, I will book for parties and events.",
    author: "Customer"
  }
];

const App = () => {
  
  const sliderRef = useRef(null);
  const sliderRefR = useRef(null);

  const [currentIndex, setCurrentIndex] = useState(0);

  const [isMenuOpen, setIsMenuOpen] = useState(false);  // Control mobile menu
  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  const scrollLeft1 = () => {
    if (sliderRefR.current) {
      sliderRefR.current.scrollBy({
        left: -300, // Adjust the value as per the required scroll distance
        behavior: 'smooth',
      });
    }
  };
  
  const scrollRight1 = () => {
    if (sliderRefR.current) {
      sliderRefR.current.scrollBy({
        left: 300, // Adjust the value as per the required scroll distance
        behavior: 'smooth',
      });
    }
  };
  

  const accommodations = [
    { title: 'outdore pool', img: '/4.jpg' },
    { title: 'indore pool', img: '/6.jpg' },
    { title: 'Double bed room', img: '/2.jpg' },
    { title: 'Single beds rooms', img: '/5.jpg' },
    { title: ' Mens councils', img: '/12.jpg' },
    { title: 'womens councils', img: '/10.jpg' },
    { title: 'outdore seating', img: '/7.jpg' },
    { title: 'billiards space', img: '/8.jpg' },
    // Add more accommodations if needed
  ];

  const [scrollAmount, setScrollAmount] = useState(0);

  // Function to slide left
  const slideLeft = () => {
    const slider = sliderRef.current;
    const newScrollAmount = Math.max(scrollAmount - slider.clientWidth, 0); // Prevent scrolling too far left
    setScrollAmount(newScrollAmount);
    slider.style.transform = `translateX(-${newScrollAmount}px)`;
  };

  // Function to slide right
  const slideRight = () => {
    const slider = sliderRef.current;
    const maxScroll = slider.scrollWidth - slider.clientWidth;
    const newScrollAmount = Math.min(scrollAmount + slider.clientWidth, maxScroll); // Prevent scrolling too far right
    setScrollAmount(newScrollAmount);
    slider.style.transform = `translateX(-${newScrollAmount}px)`;
  };


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);  // Toggle mobile menu state
  };

  return (
    <div className="font-sans">
    <nav className="fixed top-0 left-0 w-full bg-white shadow-lg z-50 backdrop-blur-sm">
  <div className="container mx-auto px-6 py-4 flex justify-between items-center">
    <h1 className="lg:text-3xl text-2xl font-bold text-greener">Dar Albostan</h1>
    
    {/* Desktop Menu */}
    <div className="hidden md:flex space-x-6">
      <Link to="about" smooth={true} className="cursor-pointer hover:text-greener">About Us</Link>
      <Link to="rooms" smooth={true} className="cursor-pointer hover:text-greener">Discover Rooms</Link>
      <Link to="comments" smooth={true} className="cursor-pointer hover:text-greener">Comments</Link>
      <Link to="/" className="cursor-pointer hover:text-greener">Arabic</Link>
    </div>
    
    {/* Mobile Menu Button */}
    <div className="md:hidden">
      <button onClick={toggleMenu} className="focus:outline-none">
        {isMenuOpen ? <AiOutlineClose size={28} /> : <AiOutlineMenu size={28} />}
      </button>
    </div>
  </div>
  
  {/* Mobile Menu */}
  {isMenuOpen && (
    <div className="md:hidden flex flex-col bg-white px-6 py-4 space-y-4">
      <Link to="about" smooth={true} className="cursor-pointer hover:text-greener" onClick={toggleMenu}>About Us</Link>
      <Link to="rooms" smooth={true} className="cursor-pointer hover:text-greener" onClick={toggleMenu}>Discover Rooms</Link>
      <Link to="comments" smooth={true} className="cursor-pointer hover:text-greener" onClick={toggleMenu}>Comments</Link>
      <a href="/arabic" className="cursor-pointer hover:text-greener" onClick={toggleMenu}>Arabic</a>
    </div>
  )}
</nav>


      {/* Rest of your content */}
      {/* Landing Section */}
      <section
        id="landing"
        className="relative bg-cover bg-center h-screen flex items-center justify-center"
        style={{ backgroundImage: 'url(/1.jpg)' }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

        {/* Content */}
        <div className="relative z-10 text-center">
          <motion.h1
            className="lg:text-6xl text-3xl font-bold text-white lg:mb-6 mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            Welcome to Bustan Dar Rest House
          </motion.h1>

          <motion.p
            className="text-lg text-gray-200 lg:mb-10 mb-14 max-w-md mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Escape to nature and indulge in the tranquility of our dar Albostan.
            Experience peace, beauty, and relaxation. and also for your parties and events
          </motion.p>
          <a
            href="https://youtu.be/7HE0SwVrxhI?feature=shared"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.a
              className="px-8 py-4 bg-greener text-white font-semibold rounded-full shadow-lg hover:bg-green-700 transition-all"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 1 }}
            >
              Explore More
            </motion.a>
          </a>
        </div>
      </section>
      {/* About Us Section */}
<section id="about" className="py-16 bg-gray-50">
  <div className="container mx-auto px-14 flex flex-col lg:flex-row items-center">
    {/* Text Section */}
    <div className="lg:w-1/2">
      <h2 className="text-3xl lg:text-4xl font-bold text-center text-greener mb-12">ABOUT US</h2>
      <h1 className="text-2xl lg:text-4xl font-bold mb-6 text-center lg:text-left">
         <span className="text-greener">Bustan Dar Rest House</span>
      </h1>
      <p className="text-gray-600 leading-relaxed mb-8 text-center lg:text-left">
        Welcome to Bustan Dar Rest House – the perfect getaway for families and large gatherings.<br/>

        Spacious accommodations and natural grass fields.<br/>
        Outdoor theater and large swimming pools.<br/>
        Private women’s pool and men's pool.<br/>
        Men's majlis and dining area for over 50 guests,and the same for women.<br/>
        Billiards, children’s games, and more!<br/>
      </p>

      {/* Statistics Section */}
      <div className="flex justify-between text-center lg:mr-14 mb-4">
        <div>
          <h2 className="text-2xl lg:text-4xl font-bold text-gray-800">+100</h2>
          <p className="text-1xl lg:text-2xl text-greener mt-2">People Capacity</p>
        </div>
        <div>
          <h2 className="text-2xl lg:text-4xl font-bold text-gray-800">4321</h2>
          <p className="text-1xl lg:text-2xl text-greener mt-2">Clients</p>
        </div>
        <div>
          <h2 className="text-2xl lg:text-4xl font-bold text-gray-800 mr-4">100%</h2>
          <p className="text-1xl lg:text-2xl text-greener mt-2 mr-4">Privacy</p>
        </div>
      </div>
    </div>

    {/* Image Section */}
    <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 lg:mt-0">
      <img
        className="w-full h-60 sm:h-48 object-cover rounded-lg mt-12 hidden lg:block"
        src="/1.jpg"
        alt="Dar Albostan"
      />
      <img
        className="w-full h-72 sm:h-60 object-cover rounded-lg hidden lg:block"
        src="/9.jpg"
        alt="Dar Albostan"
      />
      <img
        className="w-full h-52 sm:h-48 object-cover rounded-lg hidden lg:block"
        src="/4.jpg"
        alt="Dar Albostan"
      />
      <img
        className="w-full h-80 sm:h-64 object-cover rounded-lg hidden lg:block"
        src="/7.jpg"
        alt="Dar Albostan"
      />
    </div>
  </div>
</section>

{/* Explore Rooms Section */}
<section id="rooms"className="py-16 mt-6 px-10 relative bg-greener from-gray-50 via-white to-gray-50">
      <h2 className="lg:text-4xl text-3xl font-bold text-center text-white mb-10">
      Discover your new favorite rest house
      </h2>

      <div className="relative">
        {/* Slider container */}
        <div
          ref={sliderRefR}
          className="flex space-x-6 py-2 overflow-x-scroll scrollbar-hide scroll-smooth px-8"
        >
          {accommodations.map((acc, index) => (
            <div
              key={index}
              className="min-w-[260px] w-64 bg-white rounded-xl overflow-hidden shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl duration-300"
            >
              <img
                src={acc.img}
                alt={acc.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-5">
                <h3 className="lg:text-2xl text-xl font-semibold text-gray-700">{acc.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Left Button */}
        <button
          onClick={scrollLeft1}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-2xl bg-brown text-white p-2 rounded-full shadow-xl  hover:scale-105 transition-transform duration-300"
          aria-label="Scroll Left"
        >
          ←
        </button>

        {/* Right Button */}
        <button
          onClick={scrollRight1}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-2xl bg-brown text-white p-2 rounded-full shadow-xl hover:scale-105 transition-transform duration-300"
          aria-label="Scroll Right"
        >
          →
        </button>
      </div>
    </section>



<section id="comments">
<div className="w-full  flex flex-col items-center justify-center bg-cover bg-center relative" style={{ backgroundImage: `url(${backgroundImage})` }}>
      {/* Green overlay */}
      <div className="absolute inset-0 bg-greener opacity-40 z-0"></div>

      {/* Testimonial content */}
      <div className="w-full max-w-3xl text-center p-8 bg-opacity-70 rounded-lg shadow-lg z-10">
      <div className="flex flex-col items-center justify-center ">
  {/* Title */}
  <h2 className="text-3xl text-white font-semibold mb-2 mt-14 text-center">
    Testimonials
  </h2>

  {/* Horizontal Line Icon */}
  <p className="text-5xl text-center text-white font-semibold mb-2 lg:mb-6">
    <MdOutlineHorizontalRule />
  </p>

  {/* Quote Icon */}
  <p className="text-2xl md:text-3xl text-center text-white font-semibold mb-6">
    <FaQuoteLeft />
  </p>
</div>

        <p className="text-white italic text-lg mt-6 md:text-xl">
          “{testimonials[currentIndex].quote}”
        </p>
        <span className="text-white font-semibold mt-6 block">
           {testimonials[currentIndex].author}
        </span>
      </div>

      {/* Dots */}
      <div className="flex mt-6  mb-14 space-x-2 z-10">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`w-4 h-4 rounded-full ${
              index === currentIndex ? 'bg-brown' : 'bg-white'
            }`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </div>
    </section>
    <footer className="bg-brown relative text-white py-4">
  <div className="container mx-auto px-6 relative z-10">
    <div className="flex lg:flex-row flex-col justify-between  items-center">
      {/* Copyright */}
      <div>
        <p className="text-center text-sm mb-2">&copy; 2024 Dar Albostan | All Rights Reserved</p>
      </div>

      {/* Social Icons and Contact Info */}
      <div className="flex justify-center space-x-6">
        {/* Call1 */}
            <a href="tel:+92481245" className="text-green-400 hover:text-greener transition duration-200">
          <FaPhoneAlt  className="lg:mt-1 lg:text-2xl" />
        </a>
       
        {/* Instagram */}
        <a href="https://www.instagram.com/dar_albostan" className="text-green-400 hover:text-greener transition duration-200">
          <IoLogoInstagram  className="lg:mt-1 lg:text-2xl" />
        </a>
        
        {/* Location */}
        <a href="https://maps.app.goo.gl/WnDGwcuXvRSN3ceG7?g_st=iw" className="text-green-400 hover:text-greener transition duration-200">
          <FaMapLocationDot  className="lg:mt-1 lg:text-2xl" />
        </a>
        {/* youtube */}
        <a href="https://www.youtube.com/watch?v=7HE0SwVrxhI" className="text-green-400 hover:text-greener transition duration-200">
          <FaYoutube  className="lg:mt-1 lg:text-2xl" />
        </a>
        {/* Call2 */}
        <a href="tel:+91382151" className="text-green-400 hover:text-greener transition duration-200">
          <FaPhoneAlt  className="lg:mt-1 lg:text-2xl"/>
        </a>
            
      </div>
    </div>
  </div>
</footer>



    </div>
  );
}

export default App;
