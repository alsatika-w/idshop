import EventBanner from "../assets/event.png";
import Voucher from "../assets/voucher.png";

const Banner = () => {
  return (
    <>
      <section>
        <div className="px-4 md:px-24 mt-10 mx-4 md:mx-24 p-4 bg-[#FFC045] rounded-md flex flex-col md:flex-row items-center">
          {/* Image on the left */}
          <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-4">
            <img
              src={EventBanner}
              alt="Event Banner"
              className="w-48 h-32 md:w-full md:h-48 object-cover"
            />
          </div>

          {/* Text content on the right */}
          <div className="flex-1 text-center md:text-left">
            <div className="text-white">
              {/* Title */}
              <h2 className="text-2xl md:text-4xl font-semibold text-black tracking-wide">
                PAY DAY SALE!!
              </h2>

              {/* Subtitle */}
              <p className="mt-2 text-base md:text-xl text-[#61646B]">
                Nikmati promo spektakuler
                <span className="text-[#0A91AB]"> idshop</span> setiap tanggal
                25!
              </p>
              {/* Button */}
              <button className="mt-4 w-full md:w-full px-4 py-2 bg-[#0A91AB] text-white hover:bg-[#207b8d] hover:text-white transition-colors rounded-md">
                Ikuti Event
              </button>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="px-4 md:px-24 mt-5 mx-4 md:mx-24 p-4 bg-[#0A91AB] rounded-md flex flex-col md:flex-row items-center">
          {/* Image on the left */}
          <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-4">
            <img
              src={Voucher}
              alt="Voucher"
              className="w-auto h-32 md:w-full md:h-48 object-cover"
            />
          </div>

          {/* Text content on the right */}
          <div className="flex-1 text-center md:text-left">
            <div className="text-white">
              {/* Title */}
              <h2 className="text-2xl md:text-4xl font-semibold text-[#FFC045] tracking-wide">
                GRATIS ONGKIR 50%
              </h2>

              {/* Subtitle */}
              <p className="mt-2 text-base md:text-xl text-white">
                Klaim voucher gratis ongkos kirim kamu.
              </p>
              {/* Button */}
              <button className="mt-4 w-full md:w-full px-4 py-2 bg-[#FFC045] text-white hover:bg-[#f0b032] hover:text-white transition-colors rounded-md">
                Klaim Voucher
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
