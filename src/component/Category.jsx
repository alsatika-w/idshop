import { useState } from "react";
import tas from "../assets/tas.png";
import pakaianWanita from "../assets/pakaian_wanita.png";
import pakaianPria from "../assets/pakaian_pria.png";
import sepatuWanita from "../assets/sepatu_wanita.png";
import sepatuPria from "../assets/sepatu_pria.png";
import hobi from "../assets/hobi.png";
import makananMinuman from "../assets/makanan_minuman.png";
import perlengkapanRumah from "../assets/perlengkapan_rumah.png";
import komputerAksesoris from "../assets/komputer_aksesoris.png";
import ibuAnak from "../assets/ibu_anak.png";
import perawatanKecantikan from "../assets/perawatan_kecantikan.png";
import kesehatan from "../assets/kesehatan.png";

const categories = [
  { id: 1, name: "Tas", image: tas },
  { id: 2, name: "Pakaian Wanita", image: pakaianWanita },
  { id: 3, name: "Pakaian Pria", image: pakaianPria },
  { id: 4, name: "Sepatu Wanita", image: sepatuWanita },
  { id: 5, name: "Sepatu Pria", image: sepatuPria },
  { id: 6, name: "Hobi", image: hobi },
  { id: 7, name: "Makanan dan Minuman", image: makananMinuman },
  { id: 8, name: "Perlengkapan Rumah", image: perlengkapanRumah },
  { id: 9, name: "Komputer dan Aksesoris", image: komputerAksesoris },
  { id: 10, name: "Ibu dan Anak", image: ibuAnak },
  { id: 11, name: "Perawatan Kecantikan", image: perawatanKecantikan },
  { id: 12, name: "Kesehatan", image: kesehatan },
];

const Category = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleCategoryClick = (categoryName) => {
    setSelectedCategories((prev) =>
      prev.includes(categoryName)
        ? prev.filter((cat) => cat !== categoryName)
        : [...prev, categoryName]
    );
  };

  return (
    <div className="mt-10 mx-4 md:mx-24 p-4 bg-white rounded-md">
      {/* Title */}
      <h2 className="text-lg mb-4">Kategori</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 mb-8">
        {/* Grid category */}
        {categories.map((category) => (
          <div
            key={category.id}
            className={`bg-white cursor-pointer hover:shadow-md transition-shadow ${
              selectedCategories.includes(category.name)
                ? "ring-2 ring-blue-500"
                : ""
            } border border-gray-300`}
            onClick={() => handleCategoryClick(category.name)}
          >
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-24 object-contain"
            />
            <div className="p-2 text-center">
              <p className="text-xs sm:text-sm font-medium">{category.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
