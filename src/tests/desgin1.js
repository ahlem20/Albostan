import React from 'react';
import { motion } from 'framer-motion';

const RestHouseWebsite = () => {
  return (
    <div className="font-poppins bg-gray-50 text-gray-800">
      {/* Landing Section */}
      <section className="relative h-screen bg-cover bg-center" style={{ backgroundImage: `url('https://source.unsplash.com/featured/?luxury-hotel')` }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center flex flex-col items-center justify-center h-full">
          <motion.h1
            className="text-6xl font-extrabold text-white mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Luxurious Rest House
          </motion.h1>
          <motion.p
            className="text-2xl text-gray-200 mb-6"
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            transition={{ duration: 1 }}
          >
            Relax, unwind, and enjoy your stay
          </motion.p>
          <motion.a
            href="#about"
            className="bg-teal-600 text-white px-8 py-3 rounded-full hover:bg-teal-800 transition"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            Explore More
          </motion.a>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 px-4 text-center bg-gray-100">
        <motion.h2
          className="text-4xl font-bold mb-6 text-teal-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          About Us
        </motion.h2>
        <motion.p
          className="max-w-2xl mx-auto text-lg text-gray-700 leading-relaxed"
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
        >
          Welcome to our luxurious rest house, where comfort meets serenity. We offer the perfect getaway experience, with premium amenities designed for relaxation and rejuvenation.
        </motion.p>
      </section>

      {/* Explore Rooms Section */}
      <section id="rooms" className="py-20 bg-white text-center">
        <motion.h2 className="text-4xl font-bold mb-6 text-teal-600">Explore Our Rooms</motion.h2>
        <div className="flex flex-wrap justify-center gap-8">
          {["Premium Suite", "Guest Room", "Economy Room"].map((room, index) => (
            <motion.div
              key={index}
              className="max-w-xs bg-gray-100 p-6 rounded-lg shadow-lg"
              initial={{ scale: 0.9 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img src={`https://source.unsplash.com/featured/?hotel-room,${room.toLowerCase().replace(' ', '-')}`} alt={room} className="mb-4 rounded-lg h-48 w-full object-cover" />
              <h3 className="text-2xl font-semibold text-teal-600">{room}</h3>
              <p className="text-gray-600">$400/night</p>
              <a href="#" className="text-teal-500 mt-4 inline-block">
                Book Now
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50 text-center">
        <motion.h2 className="text-4xl font-bold mb-6 text-teal-600">Explore Our Services</motion.h2>
        <div className="flex flex-wrap justify-center gap-8">
          {["Spa", "Swimming Pool", "Free Wi-Fi", "Gym"].map((service, index) => (
            <motion.div
              key={index}
              className="max-w-xs bg-white p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.2 }}
            >
              <img src={`https://source.unsplash.com/featured/?${service.toLowerCase().replace(' ', '-')}`} alt={service} className="mb-4 rounded-lg h-48 w-full object-cover" />
              <h3 className="text-2xl font-semibold text-teal-600">{service}</h3>
              <p className="text-gray-600">Experience our premium {service} services.</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Comments Section */}
      <section id="comments" className="py-20 bg-white text-center">
        <motion.h2 className="text-4xl font-bold mb-6 text-teal-600">Your Comments</motion.h2>
        <motion.p
          className="max-w-2xl mx-auto text-lg text-gray-700 leading-relaxed"
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
        >
          We value your feedback! Share your experience with us.
        </motion.p>
        <form className="mt-8 max-w-xl mx-auto">
          <textarea
            className="w-full p-4 bg-gray-100 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500"
            rows="5"
            placeholder="Leave your comment..."
          ></textarea>
          <button className="bg-teal-600 text-white px-8 py-3 rounded-full mt-4 hover:bg-teal-800 transition">Submit</button>
        </form>
      </section>

      {/* Footer Section */}
      <footer className="py-12 bg-gray-900 text-gray-200 text-center">
        <p>&copy; 2024 Luxurious Rest House. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default RestHouseWebsite;
