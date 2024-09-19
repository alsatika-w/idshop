import Bca from "../assets/bca.png";
import Mandiri from "../assets/mandiri.png";
import Bri from "../assets/bri.png";
import Bni from "../assets/bni.png";
import gopay from "../assets/gopay.png";
import Dana from "../assets/dana.png";
import Alfamart from "../assets/alfamart.png";
import Visa from "../assets/visa.png";
import MasterCard from "../assets/mastercard.png";
import Jne from "../assets/jne.png";
import Sicepat from "../assets/sicepat.png";
import Jnt from "../assets/jnt.png";
import Gosend from "../assets/gosend.png";
import Grab from "../assets/grab.png";
import Iso from "../assets/iso.png";
import Verified from "../assets/verified_visa.png";
import Tiktok from "../assets/tiktok.png";
import Instagram from "../assets/instagram.png";
import Youtube from "../assets/youtube.png";
import Facebook from "../assets/facebook.png";
import GooglePlay from "../assets/googleplay.png";
import AppStore from "../assets/appstore.png";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-10 px-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* Customer Service */}
        <div>
          <h3 className="text-gray-700 font-semibold mb-4 text-lg">
            Layanan Pelanggan
          </h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="border-b border-[#AFB1B6]">
              <a href="#">Pusat Bantuan</a>
            </li>
            <li className="border-b border-[#AFB1B6]">
              <a href="#">Cara Pembelian</a>
            </li>
            <li className="border-b border-[#AFB1B6]">
              <a href="#">Pengiriman</a>
            </li>
            <li className="border-b border-[#AFB1B6]">
              <a href="#">Pengembalian Barang dan Dana</a>
            </li>
            <li className="border-b border-[#AFB1B6]">
              <a href="#">Metode Pembayaran</a>
            </li>
            <li className="border-b border-[#AFB1B6]">
              <a href="#">Hubungi Kami</a>
            </li>
          </ul>
        </div>

        {/* Explore idshop */}
        <div>
          <h3 className="text-gray-700 font-semibold mb-4 text-lg">
            Jelajahi idshop
          </h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="border-b border-[#AFB1B6]">
              <a href="#">Tentang Kami</a>
            </li>
            <li className="border-b border-[#AFB1B6]">
              <a href="#">Kebijakan Privasi</a>
            </li>
            <li className="border-b border-[#AFB1B6]">
              <a href="#">Karir</a>
            </li>
            <li className="border-b border-[#AFB1B6]">
              <a href="#">Blog</a>
            </li>
            <li className="border-b border-[#AFB1B6]">
              <a href="#">idshop Security</a>
            </li>
            <li className="border-b border-[#AFB1B6]">
              <a href="#">id Mall</a>
            </li>
          </ul>
        </div>

        {/* Download App */}
        <div>
          <h3 className="text-gray-700 font-semibold mb-4 text-lg">
            Unduh Aplikasi
          </h3>
          <div className="flex flex-row md:flex-col items-start justify-between md:space-y-0">
            <a href="https://play.google.com/store"
              className="hover:scale-105 transition-transform duration-300"
            >
              <img
                src={GooglePlay}
                alt="Google Play"
                className="h-10 md:h-12 mx-auto"
              />
            </a>
            <a href="https://www.apple.com/app-store/"
              className="hover:scale-105 transition-transform duration-300"
            >
              <img
                src={AppStore}
                alt="App Store"
                className="h-10 md:h-12 mx-auto"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Payment Methods and Shipping */}
      <div className="container mx-auto mt-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Payment Methods */}
          <div>
            <h4 className="text-gray-700 font-semibold mb-4 text-lg">
              Metode Pembayaran
            </h4>
            <div className="flex flex-wrap gap-4">
              <img src={Bca} alt="BCA" className="h-8 md:h-10" />
              <img src={Mandiri} alt="Mandiri" className="h-8 md:h-10" />
              <img src={Bri} alt="BRI" className="h-8 md:h-10" />
              <img src={Bni} alt="BNI" className="h-8 md:h-10" />
              <img src={gopay} alt="Gopay" className="h-8 md:h-10" />
              <img src={Dana} alt="Dana" className="h-8 md:h-10" />
              <img src={Alfamart} alt="Alfamart" className="h-8 md:h-10" />
              <img src={Visa} alt="Visa" className="h-8 md:h-10" />
              <img src={MasterCard} alt="MasterCard" className="h-8 md:h-10" />
            </div>
          </div>

          {/* Shipping Services */}
          <div>
            <h4 className="text-gray-700 font-semibold mb-4 text-lg">
              Jasa Pengiriman
            </h4>
            <div className="flex flex-wrap gap-4">
              <img src={Jne} alt="JNE" className="h-8 md:h-10" />
              <img src={Sicepat} alt="Sicepat" className="h-8 md:h-10" />
              <img src={Jnt} alt="J&T Express" className="h-8 md:h-10" />
              <img src={Gosend} alt="Gosend" className="h-8 md:h-10" />
              <img src={Grab} alt="Grab Express" className="h-8 md:h-10" />
            </div>
          </div>

          {/* Security and Privacy */}
          <div>
            <h4 className="text-gray-700 font-semibold mb-4 text-lg">
              Keamanan dan Privasi
            </h4>
            <div className="flex flex-wrap gap-4">
              <img src={Iso} alt="ISO" className="h-8 md:h-10" />
              <img
                src={Verified}
                alt="Verified by Visa"
                className="h-8 md:h-10"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="container mx-auto mt-10 border-t border-gray-300 pt-4 flex flex-col md:flex-row justify-between items-start text-start">
        <p className="text-sm text-gray-500 mb-4 md:mb-0">
          &copy; idshop 2024. Hak Cipta Dilindungi
        </p>

        {/* Ikuti Kami */}
        <div>
          <h4 className="text-black font-semibold mb-4 text-base">
            Ikuti Kami
          </h4>
          <div className="flex justify-center gap-4">
            <a
              href="https://www.tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={Tiktok}
                alt="TikTok"
                className="h-6 md:h-8 hover:scale-105 transition-transform duration-300"
              />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={Instagram}
                alt="Instagram"
                className="h-6 md:h-8 hover:scale-105 transition-transform duration-300"
              />
            </a>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={Youtube}
                alt="YouTube"
                className="h-6 md:h-8 hover:scale-105 transition-transform duration-300"
              />
            </a>
            <a href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={Facebook}
                alt="Facebook"
                className="h-6 md:h-8 hover:scale-105 transition-transform duration-300"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
