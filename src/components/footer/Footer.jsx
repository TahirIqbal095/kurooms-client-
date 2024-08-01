import "./footer.css";

function Footer() {
  return (
    <>
      <footer className="bg-gray-950 pt-12 px-8  mt-12">
        <div className="flex justify-around">
          <div>
            <p className="text-3xl text-gray-100 ">Kurooms</p>
            <div className="flex gap-4 text-gray-300 mt-6">
              <a href="">
                <i className="fa-brands fa-github fa-xl | text-gray-300"></i>
              </a>
              <a href="">
                <i className="fa-brands fa-linkedin fa-xl | text-gray-300"></i>
              </a>
            </div>
          </div>

          <div className="footer-company">
            <p className="text-gray-100 relative">Company</p>
            <ul className="mt-3 flex flex-col gap-2">
              <li className="text-gray-400">FAQ</li>
              <li className="text-gray-400">About us</li>
              <li className="text-gray-400">Our Services</li>
              <li className="text-gray-400">Privacy Policy</li>
            </ul>
          </div>
        </div>

        <p className="text-center mt-10 text-gray-500">
          © 2024 Kurooms, Inc. All rights reserved.
        </p>
      </footer>
    </>
  );
}

export default Footer;
