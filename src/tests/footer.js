
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