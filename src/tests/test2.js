import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link } from 'react-scroll';

import { IoLogoInstagram, IoLocationSharp } from 'react-icons/io5';
import { FaPhone } from 'react-icons/fa';

const App = () => {
  const sliderRef = useRef(null);
  const [scrollAmount, setScrollAmount] = useState(0);

  const slideLeft = () => {
    const slider = sliderRef.current;
    const newScrollAmount = Math.max(scrollAmount - slider.clientWidth, 0);
    setScrollAmount(newScrollAmount);
    slider.style.transform = `translateX(-${newScrollAmount}px)`;
  };

  const slideRight = () => {
    const slider = sliderRef.current;
    const maxScroll = slider.scrollWidth - slider.clientWidth;
    const newScrollAmount = Math.min(scrollAmount + slider.clientWidth, maxScroll);
    setScrollAmount(newScrollAmount);
    slider.style.transform = `translateX(-${newScrollAmount}px)`;
  };

  const rooms = [
    { title: 'أسرة مفردة', image: '/5.jpg' },
    { title: 'سرير مزدوج', image: '/2.jpg' },
    { title: 'مجالس داخلية للرجال والنساء', image1: '/10.jpg', image2: '/12.jpg' },
  ];

  const services = [
    { title: 'حمام السباحة', description: 'حمامات سباحة داخلية للنساء وخارجية للرجال.', image1: '/4.jpg', image2: '/6.jpg' },
    { title: 'صالة البلياردو', description: 'مكان للترفيه.', image: '/8.jpg' },
    { title: 'جلسات خارجية', description: 'مساحة للاسترخاء.', image: '/7.jpg' },
  ];

  return (
    <div className="font-sans" dir="rtl">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-white shadow-lg z-50 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-green-700">دار البستان</h1>
          <div className="space-x-6">
            <Link to="about" smooth={true} className="px-4 hover:text-green-700">من نحن</Link>
            <Link to="rooms" smooth={true} className="px-4 hover:text-green-700">الغرف</Link>
            <Link to="services" smooth={true} className="px-4 hover:text-green-700">الخدمات</Link>
            <Link to="comments" smooth={true} className="px-4 hover:text-green-700">التعليقات</Link>
            <a href="comments" smooth={true} className="px-4 hover:text-green-700">العربية</a>
          </div>
        </div>
      </nav>

      {/* Landing Section */}
      <section
        id="landing"
        className="relative bg-cover bg-center h-screen flex items-center justify-center"
        style={{ backgroundImage: 'url(/1.jpg)' }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

        <div className="relative z-10 text-center">
          <motion.h1
            className="text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            مرحباً بكم في دار البستان
          </motion.h1>

          <motion.p
            className="text-lg text-gray-200 mb-10 max-w-md mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            اهرب إلى الطبيعة واستمتع بالهدوء والجمال في دار البستان. تجربة استرخاء وراحة مثالية
          </motion.p>
          <a
            href="https://youtu.be/7HE0SwVrxhI?feature=shared" target="_blank"
            rel="noopener noreferrer"
          >
            <motion.a
              className="px-8 py-4 bg-green-500 text-white font-semibold rounded-full shadow-lg hover:bg-green-600 transition-all"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 1 }}
            >
              اكتشف المزيد
            </motion.a>
          </a>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-16 bg-gray-50">
        <div className="container mx-auto px-14 flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold text-center text-green-800 mb-4">من نحن</h2>
            <h1 className="text-3xl lg:text-4xl  font-bold mb-6 text-center lg:text-right">
              <span className="text-green-800 mb-6">دار البستان</span>
            </h1>
            <p className="text-gray-600 leading-relaxed mb-8 text-center lg:text-right">
              - يستوعب عدة عائلات وجمعات كبيرة.<br />
              - ملعب عشبي طبيعي لإقامة مباراة.<br />
              - مسرح مع ساحة عشبية طبيعية.<br />
              - غرف للنوم.<br />
              - مجلس للرجال يتسع لأكثر من 50 شخص.<br />
              - غرفة طعام تتسع لأكثر من 50 شخص.<br />
              - حمامات سباحة كبيرة.<br />
              - حمام سباحة للنساء مع مجلس مغلق للخصوصية.<br />
              - حمام سباحة للرجال يتسع لأكثر من 15 شخص.<br />
              - بلياردو وألعاب أطفال.<br />
              والمزيد!
            </p>

            {/* Statistics Section */}
            <div className="flex justify-between text-center px-14 mb-4">
              <div>
                <h2 className="text-4xl font-bold text-gray-800">+100</h2>
                <p className="text-green-800 mt-2">سعة الأشخاص</p>
              </div>
              <div>
                <h2 className="text-4xl font-bold text-gray-800">4321</h2>
                <p className="text-green-800 mt-2">العملاء</p>
              </div>
              <div>
                <h2 className="text-4xl font-bold text-gray-800">100%</h2>
                <p className="text-green-800 mt-2">الخصوصية</p>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 lg:mt-0">
            <img
              className="w-full h-60 sm:h-48 object-cover rounded-lg"
              src="/1.jpg"
              alt="دار البستان"
            />
            <img
              className="w-full h-72 sm:h-60 object-cover rounded-lg"
              src="/9.jpg"
              alt="دار البستان"
            />
            <img
              className="w-full h-52 sm:h-48 object-cover rounded-lg"
              src="/4.jpg"
              alt="دار البستان"
            />
            <img
              className="w-full h-80 sm:h-64 object-cover rounded-lg"
              src="/7.jpg"
              alt="دار البستان"
            />
          </div>
        </div>
      </section>

{/* Explore Rooms Section */}
<section id="rooms" className="py-20 bg-gray-100">
  <div className="container mx-auto px-6">
    <motion.h2
      className="text-4xl font-bold text-center text-green-700 mb-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      اكتشف غرفنا
    </motion.h2>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {rooms.map((room, index) => (
        <motion.div
          key={index}
          className="relative bg-white shadow-2xl rounded-xl overflow-hidden transform hover:scale-105 transition-transform duration-300"
        >
          {/* Image with Overlay */}
          <div className="relative group">
          
          {/* Check if the service has two images */}
          {room.image1 && room.image2 ? (
            <div className="flex">
              <img 
                src={room.image1} 
                alt={`${room.title} image 1`} 
                className="w-1/2 h-48 object-cover"
              />
              <img 
                src={room.image2} 
                alt={`${room.title} image 2`} 
                className="w-1/2 h-48 object-cover"
              />
            </div>
          ) : (
            <img 
              src={room.image} 
              alt={room.title} 
              className="w-full h-48 object-cover"
            />
          )}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity duration-300 group-hover:bg-opacity-30">
              <h3 className="text-2xl font-semibold text-white">{room.title}</h3>
            </div>
          </div>

          
        </motion.div>
      ))}
    </div>
  </div>
</section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-green-800 mb-10">خدماتنا</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="relative bg-white shadow-2xl rounded-xl overflow-hidden">
                {service.image1 && service.image2 ? (
                  <div className="flex">
                    <img
                      src={service.image1}
                      alt={service.title}
                      className="w-1/2 h-48 object-cover"
                    />
                    <img
                      src={service.image2}
                      alt={service.title}
                      className="w-1/2 h-48 object-cover"
                    />
                  </div>
                ) : (
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover"
                  />
                )}

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comments Section */}
      <section id="comments" className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-green-700 mb-10">التعليقات</h2>
        
        {/* Slider Container */}
        <div className="relative overflow-hidden">
          {/* Slider Wrapper */}
          <div ref={sliderRef} id="slider" className="flex  transition-transform duration-500">
           
            {/* Comment Card 3 */}
            <motion.div
              className="bg-green-50 flex justify-center shadow-lg rounded-lg p-6 flex-shrink-0 w-full md:w-1/2 lg:w-1/3"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <img
                src="./opinion/c3.png"
                alt="Guest 3"
                className="h-56 object-cover rounded-lg"
              />
            </motion.div>

            {/* Comment Card 4 */}
            <motion.div
              className="bg-green-50 flex justify-center shadow-lg rounded-lg p-6 flex-shrink-0 w-full md:w-1/2 lg:w-1/3"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="./opinion/c4.png"
                alt="Guest 4"
                className="h-56 object-cover rounded-lg"
              />
            </motion.div>
            {/* Comment Card 2 */}
            <motion.div
              className="bg-green-50 flex justify-center shadow-lg rounded-lg p-6 flex-shrink-0 w-full md:w-1/2 lg:w-1/3"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="./opinion/c2.png"
                alt="Guest 2"
                className="h-56 object-cover rounded-lg"
              />
            </motion.div>
 {/* Comment Card 1 */}
 <motion.div
              className="bg-green-50 flex justify-center shadow-lg rounded-lg p-6 flex-shrink-0 w-full md:w-1/2 lg:w-1/3"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src="./opinion/c1.png"
                alt="Guest 1"
                className=" h-56 object-cover rounded-lg"
              />
            </motion.div>
          </div>

          {/* Slider Controls */}
          <button
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-green-700 text-white p-2 rounded-full"
            onClick={slideRight}
          >
            &lt;
          </button>
          <button
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-green-700 text-white p-2 rounded-full"
            onClick={slideLeft}
          >
            &gt;
          </button>
        </div>
      </div>
    </section>

      {/* Footer */}
      
<footer className="bg-gradient-to-b from-black to-green-800 relative text-white py-8">
  {/* Wave SVG */}
  <div className="absolute inset-x-0 bottom-0">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path fill="#166534" fillOpacity="1" d="M0,288L1440,192L1440,320L0,320Z"></path>
    </svg>
  </div>

  <div className="container mx-auto px-6 relative z-10">
    {/* Footer Title */}
    <h2 className="text-center text-4xl font-bold mb-6">دار البستان</h2>

    {/* Social Icons and Info */}
    <div className="flex justify-center space-x-4 mb-6">
      <a href="https://www.instagram.com/dar_albostan" className="text-green-400 hover:text-green-600">
       
        <span className="ml-2"> <div className='flex justify-start'><IoLogoInstagram size={24} />@dar_albostan</div></span>
      </a>
    </div>

    <div className="text-center space-y-2 mb-2">
      <p className="flex justify-center items-center"><IoLocationSharp size={24} className="mr-2" />
         نزوى/ حي تراث
       
      </p>
      <p className="flex justify-center items-center">
      <FaPhone size={14} className="ml-2" />
       للحجز او الاستفسار: 91382151 / 92481245  
      </p>
      <p className="flex justify-center items-center">
        <a href="https://maps.app.goo.gl/WnDGwcuXvRSN3ceG7?g_st=iw" className="text-green-400 hover:text-green-600">
          انظر الخريطة
        </a>
      </p>
    </div>

    {/* Copyright */}
    <p className="text-center text-sm">
      &copy; جميع الحقوق محفوظة | دار البستان 2024 
    </p>
  </div>
</footer>

    </div>
  );
};

export default App;

