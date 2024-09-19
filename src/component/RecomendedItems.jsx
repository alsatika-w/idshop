import Lipstik from "../assets/lipstik.png";
import EyeShadow from "../assets/eyeshadow.png";
import Susu from "../assets/susu.png";
import Kaos from "../assets/kaos.png";
import Diffuser from "../assets/diffuser.png";
import Cincin from "../assets/cincin.png";
import Kacamata from "../assets/kacamata.png";
import SepatuKerja from "../assets/sepatu_kerja.png";
import BajuWanita from "../assets/baju_wanita.png";
import Levis from "../assets/levis.png";
import Toples from "../assets/toples.png";
import Keyboard from "../assets/keyboard.png";

const Items = [
  {
    id: 1,
    name: "Pinka Lipstik - Rekomendasi untuk kamu",
    image: Lipstik,
    price: "Rp. 50.000",
    discount: "-10%",
    sold: "1.5RB",
  },
  {
    id: 2,
    name: "Eye Shadow Mula - Rekomendasi untuk kamu",
    image: EyeShadow,
    price: "Rp. 75.000",
    discount: "-20%",
    sold: "1RB",
  },
  {
    id: 3,
    name: "Almond Milk - Free",
    image: Susu,
    price: "Rp. 30.000",
    discount: "-5%",
    sold: 456,
  },
  {
    id: 4,
    name: "Kaos Hitam - Rekomendasi untuk kamu",
    image: Kaos,
    price: "Rp. 100.000",
    discount: "-30%",
    sold: "1RB",
  },
  {
    id: 5,
    name: "Reed Diffuser Aroma Terapi",
    image: Diffuser,
    price: "Rp. 200.000",
    discount: "-15%",
    sold: "10RB+",
  },
  {
    id: 6,
    name: "Alexa Ring - Titanium",
    image: Cincin,
    price: "Rp. 250.000",
    discount: "-25%",
    sold: "1RB",
  },
  {
    id: 7,
    name: "Kacamata Baca Mamancinpo",
    image: Kacamata,
    price: "Rp. 150.000",
    discount: "-10%",
    sold: "5RB",
  },
  {
    id: 8,
    name: "Sepatu Kerja Wanita Tinggi 5cm",
    image: SepatuKerja,
    price: "Rp. 300.000",
    discount: "-20%",
    sold: "2.1RB",
  },
  {
    id: 9,
    name: "Baju Wanita - Hijau Army",
    image: BajuWanita,
    price: "Rp. 120.000",
    discount: "-15%",
    sold: "6.2RB",
  },
  {
    id: 10,
    name: "Levis Wanita Premium",
    image: Levis,
    price: "Rp. 250.000",
    discount: "-25%",
    sold: "1.5RB",
  },
  {
    id: 11,
    name: "Wadah Kaca Estetik",
    image: Toples,
    price: "Rp. 60.000",
    discount: "-5%",
    sold: "5RB",
  },
  {
    id: 12,
    name: "Mechanical Wireless",
    image: Keyboard,
    price: "Rp. 90.000",
    discount: "-10%",
    sold: "9.4RB",
  },
];

const RecomendedItems = () => {
  return (
    <div className="relative mt-10 mx-4 md:mx-24 p-4">
      {/* Heading */}
      <h2 className="mb-4 font-semibold text-lg text-[#19191B]">
        Rekomendasi Untuk Kamu
      </h2>
      {/* Content */}
      <div className="w-full md:w-full relative flex items-center justify-center h-auto">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {Items.map((item) => (
            <div
              key={item.id}
              className="group bg-white shadow-lg shadow-gray-200 rounded-xl p-4 transition-all duration-500 hover:shadow-gray-300"
            >
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-auto"
                />
                {item.discount && (
                  <span className="absolute -top-2 md:-top-2 -right-2 bg-[#0A91AB] text-white text-xs font-semibold py-1 px-2">
                    {item.discount}
                  </span>
                )}
              </div>
              <div className="flex flex-col py-4 gap-2 text-start">
                <h4 className="font-manrope truncate text-base text-[#19191B]">
                  {item.name}
                </h4>
                <p className="text-base font-bold text-gray-700 mb-2">
                  {item.price}
                </p>
                <div className="flex justify-end">
                  <p className="text-base font-medium text-gray-500">
                    {item.sold} Terjual
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecomendedItems;
