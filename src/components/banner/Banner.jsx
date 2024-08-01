import "./banner.css";

function Banner() {
  return (
    <div className="container banner">
      <div className="flex flex-col text-center">
        <h2 className="sm:text-2xl text-xl font-semibold text-[#f6f3f3]">
          Why you should choose us
        </h2>
        <p className="max-w-[55ch] mx-auto text-[#d3cfcf] mt-3 text-base sm:text-lg">
          This is an open source project to help the students (both boys and
          girls) of kashmir university to get an affordable room as quick and
          easily as possible
        </p>
        <div className="mt-8">
          <a
            className="text-[#fontFd3cfcf] px-4 py-2 border-2 rounded-lg border-[#d3cfcf] hover:bg-[#d3cfcf]    hover:text-gray-800"
            href="mailto:shahtahir786@gmail.com"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}

export default Banner;
