import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link } from 'react-scroll';
import { FaQuoteLeft } from 'react-icons/fa';
import { MdOutlineHorizontalRule } from "react-icons/md";
import { IoLogoInstagram } from 'react-icons/io5';
import { FaPhoneAlt, FaYoutube } from 'react-icons/fa';
import { FaMapLocationDot } from "react-icons/fa6";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'; 
import backgroundImage from './images/13.jpg';

const testimonials = [
  {
    quote: "الاستراحه واجد جميله وشكرا على التنظيم والعنايه والاهتمام بالمكان ولقد استمتع الاهل وقصة اوقات جميله وسوف نعاود الحجز مره اخرى باذن الله كما ان اسعارها مناسبه مقارنه في باقي الاستراحات.",
    author: "زبون"
  },
  {
    quote: "جزاكم الله خيرا الاستراحه جميله جدا مجالس كبار ومرتبه وملعب كبير وجلسه كبيره معشبه جميله. خاصه للفطره كان اجواء طيبه ومناسبه لتجمعات لعدد كبير. وبركه السباحه حلوه للرجال والنساء مرتبه. وسعر مقارنه بالسوق واجد حلو ان شاء الله نحجز معكم لتجمعات قادمه.",
    author: "زبون"
  },
  {
    quote: "المزرعه ما شاء الله جميله جدا وتستاهل الحجز ومرفقات مرتبه وحلوه وان شاء الله احجز لبحفلات والمناسبات",
    author: "زبون"
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
    { title: 'مسبح خارجي', img: '/4.jpg' },
    { title: 'مسبح داخلي', img: '/6.jpg' },
    { title: 'غرفة بسرير مزدوج', img: '/2.jpg' },
    { title: 'غرف بسريرين', img: '/5.jpg' },
    { title: 'مجالس الرجال', img: '/12.jpg' },
    { title: 'مجالس النساء', img: '/10.jpg' },
    { title: 'جلسات خارجية', img: '/7.jpg' },
    { title: 'قاعة البلياردو', img: '/8.jpg' },
    // Add more accommodations if needed
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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);  // Toggle mobile menu state
  };

  return (
    <div className="font-sans">
    <nav className="fixed top-0 left-0 w-full bg-white shadow-lg z-50 backdrop-blur-sm">
  <div className="container mx-auto px-6 py-4 flex justify-between items-center">
    <h1 className="lg:text-3xl text-2xl font-bold text-greener">دار البستان</h1>
    
    {/* Desktop Menu */}
    <div className="hidden md:flex space-x-6">
      <Link to="about" smooth={true} className="cursor-pointer hover:text-greener">عنّا</Link>
      <Link to="rooms" smooth={true} className="cursor-pointer hover:text-greener">اكتشف الغرف</Link>
      <Link to="comments" smooth={true} className="cursor-pointer hover:text-greener">التعليقات</Link>
      <Link to="/" className="cursor-pointer hover:text-greener">الانجلزية</Link>
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
      <Link to="about" smooth={true} className="cursor-pointer hover:text-greener" onClick={toggleMenu}>عنّا</Link>
      <Link to="rooms" smooth={true} className="cursor-pointer hover:text-greener" onClick={toggleMenu}>اكتشف الغرف</Link>
      <Link to="comments" smooth={true} className="cursor-pointer hover:text-greener" onClick={toggleMenu}>التعليقات</Link>
      <Link to="/" className="cursor-pointer hover:text-greener" onClick={toggleMenu}>العربية</Link>
    </div>
  )}
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
            className="lg:text-6xl text-3xl font-bold text-white lg:mb-6 mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            أهلاً بكم في دار البستان
          </motion.h1>

          <motion.p
            className="text-lg text-gray-200 lg:mb-10 mb-14 max-w-md mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            اهرب إلى الطبيعة وتمتع بالهدوء في دار البستان. استمتع بالجمال والراحة
            أيضاً لأجل مناسباتكم وأفراحكم
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
              اكتشف المزيد
            </motion.a>
          </a>
        </div>
      </section>
  {/* قسم من نحن */}
<section id="about" className="py-16 bg-gray-50">
  <div className="container mx-auto px-14 flex flex-col lg:flex-row items-center">
     {/* قسم الصور */}
     <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 lg:mt-0">
      <img
        className="w-full h-60 sm:h-48 object-cover rounded-lg mt-12 hidden lg:block"
        src="/1.jpg"
        alt="دار البستان"
      />
      <img
        className="w-full h-72 sm:h-60 object-cover rounded-lg hidden lg:block"
        src="/9.jpg"
        alt="دار البستان"
      />
      <img
        className="w-full h-52 sm:h-48 object-cover rounded-lg hidden lg:block"
        src="/4.jpg"
        alt="دار البستان"
      />
      <img
        className="w-full h-80 sm:h-64 object-cover rounded-lg hidden lg:block"
        src="/7.jpg"
        alt="دار البستان"
      />
    </div>
    {/* قسم النص */}
    <div className="lg:w-1/2">
      <h2 className="text-3xl lg:text-4xl font-bold text-center text-greener mb-12">من نحن</h2>
      <h1 className="text-2xl lg:text-4xl font-bold mb-6 text-center lg:text-right">
        <span className="text-greener">استراحة بستان دار</span>
      </h1>
      <p className="text-gray-600 leading-relaxed mb-8 text-center lg:text-right">
        مرحبًا بكم في استراحة بستان دار – الوجهة المثالية للعائلات والتجمعات الكبيرة.<br/>

        مساحات إقامة واسعة ومسطحات خضراء طبيعية.<br/>
        مسرح خارجي ومسابح كبيرة.<br/>
        مسبح خاص للنساء ومسبح للرجال.<br/>
        مجلس للرجال ومنطقة طعام تستوعب أكثر من 50 ضيفًا، ونفس الشيء للنساء.<br/>
        بلياردو، ألعاب للأطفال، والمزيد!<br/>
      </p>

      {/* قسم الإحصائيات */}
      <div className="flex justify-between text-center lg:ml-14 mb-4">
        <div>
          <h2 className="text-2xl lg:text-4xl font-bold text-gray-800">+100</h2>
          <p className="text-1xl lg:text-2xl text-greener mt-2">سعة الأشخاص</p>
        </div>
        <div>
          <h2 className="text-2xl lg:text-4xl font-bold text-gray-800">4321</h2>
          <p className="text-1xl lg:text-2xl text-greener mt-2">العملاء</p>
        </div>
        <div>
          <h2 className="text-2xl lg:text-4xl font-bold text-gray-800 ml-4">100%</h2>
          <p className="text-1xl lg:text-2xl text-greener mt-2 ml-4">الخصوصية</p>
        </div>
      </div>
    </div>

   
  </div>
</section>

{/* قسم استكشاف الغرف */}
<section id="rooms" className="py-16 mt-6 px-10 relative bg-greener from-gray-50 via-white to-gray-50">
      <h2 className="lg:text-4xl text-3xl font-bold text-center text-white mb-10">
      اكتشف استراحتك المفضلة الجديدة
      </h2>

      <div className="relative">
        {/* حاوية السلايدر */}
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

        {/* زر السحب لليسار */}
        <button
          onClick={scrollLeft1}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-2xl bg-brown text-white p-2 rounded-full shadow-xl  hover:scale-105 transition-transform duration-300"
          aria-label="السحب لليسار"
        >
          ←
        </button>

        {/* زر السحب لليمين */}
        <button
          onClick={scrollRight1}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-2xl bg-brown text-white p-2 rounded-full shadow-xl hover:scale-105 transition-transform duration-300"
          aria-label="السحب لليمين"
        >
          →
        </button>
      </div>
    </section>


{/* قسم التعليقات */}
<section id="comments">
<div className="w-full  flex flex-col items-center justify-center bg-cover bg-center relative" style={{ backgroundImage: `url(${backgroundImage})` }}>
      {/* غطاء أخضر */}
      <div className="absolute inset-0 bg-greener opacity-40 z-0"></div>

      {/* محتوى الشهادات */}
      <div className="w-full max-w-3xl text-center p-8 bg-opacity-70 rounded-lg shadow-lg z-10">
      <div className="flex flex-col items-center justify-center ">
  {/* العنوان */}
  <h2 className="text-3xl text-white font-semibold mb-2 mt-14 text-center">
    آراء العملاء
  </h2>

  {/* أيقونة الخط الأفقي */}
  <p className="text-5xl text-center text-white font-semibold mb-2 lg:mb-6">
    <MdOutlineHorizontalRule />
  </p>

  {/* أيقونة الاقتباس */}
  <p className="text-2xl md:text-3xl text-center text-white font-semibold mb-6">
    <FaQuoteLeft />
  </p>
</div>

        <p className="text-white italic text-lg mt-6 md:text-xl">
          “{testimonials[currentIndex].quote}”
        </p>
        <span className="text-white text-xl font-semibold mt-6 block">
           {testimonials[currentIndex].author}
        </span>
      </div>

      {/* النقاط */}
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

{/* الفوتر */}
<footer className="bg-gradient-to-b from-black to-green-800 relative text-white py-8">
  {/* موجة SVG */}
  <div className="absolute inset-x-0 bottom-0">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path fill="#166534" fillOpacity="1" d="M0,288L1440,192L1440,320L0,320Z"></path>
    </svg>
  </div>

  <div className="container mx-auto px-6 relative z-10">
    {/* عنوان الفوتر */}
    <h2 className="text-center text-4xl font-bold mb-2">  <img 
    src="logo1.png" 
    alt="دار البستان" 
    className="w-16 h-auto mx-auto" 
  /></h2>

    {/* أيقونات التواصل الاجتماعي والمعلومات */}
    <div className="flex justify-center space-x-4 mb-6">
      <a href="https://www.instagram.com/dar_albostan" className="text-green-400 hover:text-green-600">
        <span className="ml-2"> 
          <div className='flex justify-start'>
            <IoLogoInstagram size={24} />
            @dar_albostan
          </div>
        </span>
      </a>
    </div>

    <div className="text-center space-y-2 mb-6">
      <p className="flex justify-center items-center">
        <FaMapLocationDot size={24} className="mr-2" />
        نزوى، منطقة التراث
      </p>
      <p className="flex justify-center items-center">
        <FaPhoneAlt size={14} className="mr-2" />
        للحجز والاستفسار: ٩٢٤٨١٢٤٥ / ٩١٣٨٢١٥١
      </p>
      <p className="flex justify-center items-center">
        <a href="https://maps.app.goo.gl/WnDGwcuXvRSN3ceG7?g_st=iw" className="text-green-400 hover:text-green-600">
          عرض على الخريطة
        </a>
      </p>
    </div>

    {/* حقوق النشر */}
    <p className="text-center text-sm">
      &copy;2024 دار البستان | جميع الحقوق محفوظة
    </p>
  </div>
</footer>


    </div>
  );
}

export default App;
