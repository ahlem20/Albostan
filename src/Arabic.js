import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link } from 'react-scroll';
import { FaQuoteLeft } from 'react-icons/fa';
import { MdOutlineHorizontalRule } from "react-icons/md";
import { IoLogoInstagram, IoLocationSharp } from 'react-icons/io5';
import { FaPhone } from 'react-icons/fa';

import backgroundImage from './images/9.jpg';

const testimonials = [
  {
    quote: "لقد كانوا متعاونين للغاية وسمحوا لنا بتسجيل الوصول مبكرًا في حوالي الساعة 10 صباحًا. وصلنا إلى الفندق مبكرًا جدًا ولم أرغب في الانتظار. لذلك كان هذا ميزة كبيرة. كانت الخدمة استثنائية أيضًا. سأرسل بالتأكيد صديقًا هنا.",
    author: "دينيس مونتيري، عميل"
  },
  {
    quote: "تجربة رائعة! كانت الغرف نظيفة والموظفون ودودون للغاية. كان المنظر من غرفتنا مذهلًا، وكان لدينا كل ما نحتاجه لقضاء عطلة مثالية.",
    author: "جيسيكا سميث، ضيف"
  },
  {
    quote: "واحدة من أفضل الإقامات التي قضيتها منذ فترة طويلة. كانت المرافق من الطراز الرفيع، وكانت الأجواء مريحة للغاية. لا أستطيع الانتظار للعودة!",
    author: "مايكل جونسون، مسافر"
  }
];

const App = () => {

  const sliderRef = useRef(null);
  const sliderRefR = useRef(null);

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  const scrollLeft1 = () => {
    if (sliderRefR.current) {
      sliderRefR.current.scrollBy({
        left: -300, 
        behavior: 'smooth',
      });
    }
  };

  const scrollRight1 = () => {
    if (sliderRefR.current) {
      sliderRefR.current.scrollBy({
        left: 300, 
        behavior: 'smooth',
      });
    }
  };

  const accommodations = [
    { title: 'حمام سباحة خارجي', img: '/4.jpg' },
    { title: 'حمام سباحة داخلي', img: '/6.jpg' },
    { title: 'غرفة بسرير مزدوج', img: '/2.jpg' },
    { title: 'غرف بسرير فردي', img: '/5.jpg' },
    { title: 'مجلس رجال', img: '/12.jpg' },
    { title: 'مجلس نساء', img: '/10.jpg' },
    { title: 'جلسة خارجية', img: '/7.jpg' },
    { title: 'مساحة بلياردو', img: '/8.jpg' },
  ];

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

  const services = [
    { title: 'حمام سباحة', description: 'حمامان سباحة داخلي للنساء وخارجي للرجال.' ,image1: '/4.jpg',image2: '/6.jpg' },
    { title: 'مساحة بلياردو', description: 'مكان للترفيه.'  ,image: '/8.jpg'},
    { title: 'جلسة خارجية', description: 'مكان للاسترخاء.' ,image: '/7.jpg' },
  ];

  return (
    <div className="font-sans">
      {/* شريط التنقل */}
      <nav className="fixed top-0 left-0 w-full bg-white shadow-lg z-50 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-green-700">دار البستان</h1>
          <div className="space-x-6">
            <Link to="about" smooth={true} className="cursor-pointer hover:text-green-700">معلومات عنا</Link>
            <Link to="rooms" smooth={true} className="cursor-pointer hover:text-green-700">اكتشف الغرف</Link>
            <Link to="comments" smooth={true} className="cursor-pointer hover:text-green-700">التعليقات</Link>
            <a href="/english" smooth={true} className="cursor-pointer hover:text-green-700">الانجلزية</a>
          </div>
        </div>
      </nav>

      {/* قسم الهبوط */}
      <section
        id="landing"
        className="relative bg-cover bg-center h-screen flex items-center justify-center"
        style={{ backgroundImage: 'url(/1.jpg)' }}
      >
        {/* التراكب */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

        {/* المحتوى */}
        <div className="relative z-10 text-center">
          <motion.h1
            className="text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            مرحبًا بكم في دار البستان
          </motion.h1>

          <motion.p
            className="text-lg text-gray-200 mb-10 max-w-md mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            اهرب إلى الطبيعة وتمتع بالهدوء في دار البستان. استمتع بالسلام والجمال والاسترخاء، وأيضًا لحفلاتكم وفعالياتكم.
          </motion.p>
          <a
            href="https://youtu.be/7HE0SwVrxhI?feature=shared"  target="_blank"
            rel="noopener noreferrer"  
          >
            <motion.a
              className="px-8 py-4 bg-green-700 text-white font-semibold rounded-full shadow-lg hover:bg-green-500 transition-all"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 1 }}
            >
              استكشاف المزيد
            </motion.a>
          </a>
        </div>
      </section>

      {/* قسم معلومات عنا */}
      <section id="about" className="py-16 bg-gray-50">
        <div className="container mx-auto px-14 flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold text-center text-green-800 mb-12">معلومات عنا</h2>
            <h1 className="text-3xl lg:text-4xl font-bold mb-6 text-center lg:text-left">
              <span className="text-green-800">دار البستان</span>
            </h1>
            <p className="text-gray-600 leading-relaxed mb-8 text-center lg:text-left">
              مرحبًا بكم في دار البستان – المكان المثالي للعائلات والتجمعات الكبيرة.<br/>
              مساحات واسعة وأراضٍ طبيعية.<br/>
              مسرح خارجي وأحواض سباحة كبيرة.<br/>
              حوض سباحة خاص بالنساء وآخر بالرجال.<br/>
              مجلس رجال ومنطقة طعام تتسع لأكثر من 50 ضيفًا، وكذلك للنساء.<br/>
              بلياردو، ألعاب للأطفال والمزيد!<br/>
            </p>

            {/* قسم الإحصائيات */}
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
        className="w-full h-60 sm:h-48 object-cover rounded-lg mt-12"
        src="/1.jpg"
        alt="Dar Albostan"
      />
      <img
        className="w-full h-72 sm:h-60 object-cover rounded-lg"
        src="/9.jpg"
        alt="Dar Albostan"
      />
      <img
        className="w-full h-52 sm:h-48 object-cover rounded-lg"
        src="/4.jpg"
        alt="Dar Albostan"
      />
      <img
        className="w-full h-80 sm:h-64 object-cover rounded-lg"
        src="/7.jpg"
        alt="Dar Albostan"
      />
    </div>
  </div>
</section>

{/* Explore Rooms Section */}
<section id="rooms"className="py-16 mt-6 px-10 relative bg-green-700 from-gray-50 via-white to-gray-50">
      <h2 className="text-4xl font-bold text-center text-white mb-10">
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
                <h3 className="text-2xl font-semibold text-gray-700">{acc.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Left Button */}
        <button
          onClick={scrollLeft1}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white p-3 rounded-full shadow-xl hover:bg-blue-700 hover:scale-105 transition-transform duration-300"
          aria-label="Scroll Left"
        >
          ←
        </button>

        {/* Right Button */}
        <button
          onClick={scrollRight1}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white p-3 rounded-full shadow-xl hover:bg-blue-700 hover:scale-105 transition-transform duration-300"
          aria-label="Scroll Right"
        >
          →
        </button>
      </div>
    </section>



<section id="comments">
<div className="w-full  flex flex-col items-center justify-center bg-cover bg-center relative" style={{ backgroundImage: `url(${backgroundImage})` }}>
      {/* Green overlay */}
      <div className="absolute inset-0 bg-green-800 opacity-40 z-0"></div>

      {/* Testimonial content */}
      <div className="w-full max-w-3xl text-center p-8 bg-opacity-70 rounded-lg shadow-lg z-10">
      <div className="flex flex-col items-center justify-center ">
  {/* Title */}
  <h2 className="text-2xl md:text-3xl text-white font-semibold mb-2 mt-14 text-center">
    Testimonials
  </h2>

  {/* Horizontal Line Icon */}
  <p className="text-5xl text-center text-white font-semibold mb-6">
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
          - {testimonials[currentIndex].author}
        </span>
      </div>

      {/* Dots */}
      <div className="flex mt-6  mb-14 space-x-2 z-10">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`w-4 h-4 rounded-full ${
              index === currentIndex ? 'bg-green-700' : 'bg-white'
            }`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </div>
    </section>


<footer className="bg-gradient-to-b from-black to-green-800 relative text-white py-8">
  {/* Wave SVG */}
  <div className="absolute inset-x-0 bottom-0">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path fill="#166534" fillOpacity="1" d="M0,288L1440,192L1440,320L0,320Z"></path>
    </svg>
  </div>

  <div className="container mx-auto px-6 relative z-10">
    {/* Footer Title */}
    <h2 className="text-center text-4xl font-bold mb-6">Dar Albostan</h2>

    {/* Social Icons and Info */}
    <div className="flex justify-center space-x-4 mb-6">
      <a href="https://www.instagram.com/dar_albostan" className="text-green-400 hover:text-green-600">
       
        <span className="ml-2"> <div className='flex justify-start'><IoLogoInstagram size={24} />@dar_albostan</div></span>
      </a>
    </div>

    <div className="text-center space-y-2 mb-6">
      <p className="flex justify-center items-center">
        <IoLocationSharp size={24} className="mr-2" />
        Nizwa, Heritage District
      </p>
      <p className="flex justify-center items-center">
        <FaPhone size={14} className="mr-2" />
        For booking and inquiries: 91382151 / 92481245
      </p>
      <p className="flex justify-center items-center">
        <a href="https://maps.app.goo.gl/WnDGwcuXvRSN3ceG7?g_st=iw" className="text-green-400 hover:text-green-600">
          View on Map
        </a>
      </p>
    </div>

    {/* Copyright */}
    <p className="text-center text-sm">
      &copy;2024 Dar Albostan | All Rights Reserved
    </p>
  </div>
</footer>




    </div>
  );
}

export default App;
