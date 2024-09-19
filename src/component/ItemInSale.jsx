import Buku from "../assets/buku.png";
import Sepatu from "../assets/sepatu.png";
import Baju from "../assets/baju.png";
import Sandal from "../assets/sandal.png";
import AlatDapur from "../assets/alat_dapur.png";
import SilikonHp from "../assets/silikon_hp.png";
import { IconChevronRight } from "@tabler/icons-react";

const Items = [
  { id: 1, name: "Buku", image: Buku, price: "Rp. 10.900", discount: "-50%" },
  { id: 2, name: "Sepatu Boot", image: Sepatu, price: "Rp. 120.899", discount: "-20%" },
  { id: 3, name: "Baju Putih", image: Baju, price: "Rp. 67.402", discount: "-70%" },
  { id: 4, name: "Sandal", image: Sandal, price: "Rp. 49.909", discount: "-10%" },
  { id: 5, name: "Alat Dapur", image: AlatDapur, price: "Rp. 80.128", discount: "-60%" },
  { id: 6, name: "Case Hp", image: SilikonHp, price: "Rp. 59.093", discount: "-70%" },
];

const ItemInSale = () => {
  return (
    <div className="relative px-4 md:px-24 mt-10 mx-4 md:mx-24 p-4 bg-white rounded-md">
      <h2 className="mb-4 font-semibold text-lg text-[#19191B]">Diskon Hari Ini</h2>
      <div className="flex items-center">
      <div className="w-full flex overflow-x-auto no-scrollbar md:overflow-hidden">
        <div className="flex gap-4 md:grid sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-6 md:gap-4">
          {Items.map((item) => (
            <div
              key={item.id}
              className="relative overflow-hidden cursor-pointer hover:shadow-md hover:scale-105 transition-shadow duration-500"
            >
              <div className="block overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-contain"
                />
                {item.discount && (
                  <div className="absolute top-10 md:top-4 -right-0 bg-[#0A91AB] text-white text-xs font-semibold py-1 px-2">
                    {item.discount}
                  </div>
                )}
              </div>
              <div className="p-4">
                <h4 className="text-base font-semibold text-gray-700 mb-2 capitalize">
                  {item.name}
                </h4>
                <h4 className="text-base font-bold text-gray-900 mb-2 capitalize">
                  {item.price}
                </h4>
              </div>
            </div>
          ))}
        </div>
        </div>
        <button
          className="bg-[#0A91AB] p-2 ml-4"

        >
          <IconChevronRight className="text-white" />
        </button>
      </div>
    </div>
  );
};

export default ItemInSale;
