import { useState } from "react";
import {
  IconPhone,
  IconWavesElectricity,
  IconDotsVertical,
} from "@tabler/icons-react";

const TopupAndBillsMenu = () => {
  const [selectedMenu, setSelectedMenu] = useState("pulsa");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleMenuChange = (menu) => {
    setSelectedMenu(menu);
    if (menu !== "airPDAM") setDropdownOpen(false); // Close dropdown if selecting other menu
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="px-4 md:px-24 mt-10 mx-4 md:mx-24 p-4 bg-white rounded-md">
      {/* Main Heading */}
      <h2 className="text-lg mb-4">Top Up dan Tagihan</h2>

      {/* Menu Navigation */}
      <div className="relative flex overflow-x-auto p-2 border-b border-gray-300">
        <div className="flex flex-1 justify-between w-full">
          <div
            onClick={() => handleMenuChange("pulsa")}
            className={`p-2 mx-1 cursor-pointer ${
              selectedMenu === "pulsa"
                ? "text-[#0A91AB] border-b-2 border-[#0A91AB]"
                : "text-gray-600"
            }`}
          >
            Pulsa
          </div>
          <div
            onClick={() => handleMenuChange("paketData")}
            className={`p-2 mx-1 cursor-pointer ${
              selectedMenu === "paketData"
                ? "text-[#0A91AB] border-b-2 border-[#0A91AB]"
                : "text-gray-600"
            }`}
          >
            Paket Data
          </div>
          <div
            onClick={() => handleMenuChange("listrik")}
            className={`p-2 mx-1 cursor-pointer ${
              selectedMenu === "listrik"
                ? "text-[#0A91AB] border-b-2 border-[#0A91AB]"
                : "text-gray-600"
            }`}
          >
            Listrik PLN
          </div>
          <div
            onClick={() => handleMenuChange("uangElektronik")}
            className={`p-2 mx-1 cursor-pointer ${
              selectedMenu === "uangElektronik"
                ? "text-[#0A91AB] border-b-2 border-[#0A91AB]"
                : "text-gray-600"
            }`}
          >
            Uang Elektronik
          </div>
          <div
            onClick={() => handleMenuChange("airPDAM")}
            className={`p-2 mx-1 cursor-pointer ${
              selectedMenu === "airPDAM"
                ? "text-[#0A91AB] border-b-2 border-[#0A91AB]"
                : "text-gray-600"
            }`}
          >
            Air PDAM
          </div>
          {/* Separate Menu Icon and Dropdown */}
          <div className="relative p-2 mx-1 cursor-pointer flex-shrink-0">
            <IconDotsVertical
              className="text-[#0A91AB]"
              onClick={toggleDropdown}
            />
            {dropdownOpen && (
              <>
                <option className="cursor-pointer hover:bg-gray-200">History Pembayaran</option>
                <option className="cursor-pointer hover:bg-gray-200">Pengaturan Akun</option>
                <option className="cursor-pointer hover:bg-gray-200">Bantuan</option>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {selectedMenu === "pulsa" && (
          <div className="relative">
            {/* <IconPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-xl text-gray-500" /> */}
            <form className="flex flex-col sm:flex-row gap-4">
              <div className="relative w-full sm:w-2/3">
                <IconPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-xl text-gray-500" />
                <input
                  type="text"
                  placeholder="Nomor telepon"
                  className="border border-gray-300 rounded-md pl-12 pr-4 py-2 w-full"
                />
              </div>
              <select className="border border-gray-300 bg-white rounded-md px-3 py-2 sm:w-2/3 w-full">
                <option value="5000">Rp 5.000</option>
                <option value="10000">Rp 10.000</option>
                <option value="20000">Rp 20.000</option>
                <option value="50000">Rp 50.000</option>
              </select>
              <button
                type="submit"
                className="text-[#0A91AB] border border-[#0A91AB] hover:bg-[#0A91AB] hover:text-white rounded-md px-4 py-2"
              >
                Beli
              </button>
            </form>
          </div>
        )}

        {selectedMenu === "paketData" && (
          <div className="relative">
            {/* <IconPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-xl text-gray-500" /> */}
            <form className="flex flex-col sm:flex-row gap-4">
              <div className="relative w-full sm:w-2/3">
                <IconPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-xl text-gray-500" />
                <input
                  type="text"
                  placeholder="Nomor telepon"
                  className="border border-gray-300 rounded-md pl-12 pr-4 py-2 w-full"
                />
              </div>
              <select className="border border-gray-300 bg-white rounded-md px-3 py-2 w-full sm:w-2/3">
                <option value="100MB">100 MB</option>
                <option value="500MB">500 MB</option>
                <option value="1GB">1 GB</option>
                <option value="2GB">2 GB</option>
              </select>
              <button
                type="submit"
                className="text-[#0A91AB] border border-[#0A91AB] hover:bg-[#0A91AB] hover:text-white rounded-md px-4 py-2"
              >
                Beli
              </button>
            </form>
          </div>
        )}

        {selectedMenu === "listrik" && (
          <div className="relative">
            {/* <IconWavesElectricity className="absolute left-3 top-1/2 transform -translate-y-1/2 text-xl text-gray-500" /> */}

            <form className="flex flex-col sm:flex-row gap-4">
              <div className="relative w-full sm:w-2/3">
                <IconWavesElectricity className="absolute left-3 top-1/2 transform -translate-y-1/2 text-xl text-gray-500" />
                <input
                  type="text"
                  placeholder="Nomor telepon"
                  className="border border-gray-300 rounded-md pl-12 pr-4 py-2 w-full"
                />
              </div>
              <select className="border bg-white border-gray-300 rounded-md px-3 py-2 w-full sm:w-2/3">
                <option value="50000">Rp 50.000</option>
                <option value="100000">Rp 100.000</option>
                <option value="200000">Rp 200.000</option>
                <option value="500000">Rp 500.000</option>
              </select>
              <button
                type="submit"
                className="text-[#0A91AB] border border-[#0A91AB] hover:bg-[#0A91AB] hover:text-white rounded-md px-4 py-2"
              >
                Beli
              </button>
            </form>
          </div>
        )}

        {selectedMenu === "uangElektronik" && (
          <div>
            <form className="flex flex-col sm:flex-row gap-4">
              <select className="border bg-white border-gray-300 rounded-md px-3 py-2 w-full sm:w-2/3">
                <option value="ovo">OVO</option>
                <option value="dana">DANA</option>
                <option value="gopay">GOPAY</option>
              </select>
              <select className="border bg-white border-gray-300 rounded-md px-3 py-2 w-full sm:w-2/3">
                <option value="10000">Rp 10.000</option>
                <option value="50000">Rp 50.000</option>
                <option value="100000">Rp 100.000</option>
                <option value="200000">Rp 200.000</option>
              </select>
              <button
                type="submit"
                className="text-[#0A91AB] border border-[#0A91AB] hover:bg-[#0A91AB] hover:text-white rounded-md px-4 py-2"
              >
                Beli
              </button>
            </form>
          </div>
        )}

        {selectedMenu === "airPDAM" && (
          <div>
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                placeholder="Masukkan nomor pelanggan"
                className="border border-gray-300 rounded-md px-3 py-2 w-full sm:w-2/3"
              />
              <select className="bg-white border border-gray-300 rounded-md px-3 py-2 w-full sm:w-2/3">
                <option value="50000">Rp 50.000</option>
                <option value="100000">Rp 100.000</option>
                <option value="200000">Rp 200.000</option>
                <option value="500000">Rp 500.000</option>
              </select>
              <button
                type="submit"
                className="text-[#0A91AB] border border-[#0A91AB] hover:bg-[#0A91AB] hover:text-white rounded-md px-4 py-2"
              >
                Beli
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default TopupAndBillsMenu;

{
  /* {dropdownOpen && (
              <div className="absolute right-0 top-full mt-2 bg-white shadow-lg rounded-md border border-gray-300 w-48">
              <a
                href="#"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                History Pembayaran
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                Pengaturan Akun
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                Bantuan
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                Keluar
              </a>
            </div>
          )}  */
}
