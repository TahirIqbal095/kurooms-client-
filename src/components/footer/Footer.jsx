import "./footer.css";

function Footer() {
  return (
    <>
      <footer className="mt-12 bg-gray-950 px-8 pt-12">
        <div className="flex justify-around">
          <div>
            <p className="text-3xl text-gray-100">Kurooms</p>
            <div className="mt-6 flex gap-4 text-gray-300">
              <a href="">
                <i className="fa-brands fa-github fa-xl | text-gray-300"></i>
              </a>
              <a href="">
                <i className="fa-brands fa-linkedin fa-xl | text-gray-300"></i>
              </a>
            </div>
          </div>

          <div className="footer-company">
            <p className="relative text-gray-100">Company</p>
            <ul className="mt-3 flex flex-col gap-2">
              <li className="text-gray-400">FAQ</li>
              <li className="text-gray-400">About us</li>
              <li className="text-gray-400">Our Services</li>
              <li className="text-gray-400">Privacy Policy</li>
            </ul>
          </div>
        </div>

        <p className="mt-10 text-center text-gray-500">
          © 2024 Kurooms, Inc. All rights reserved.
        </p>
      </footer>
    </>
  );
}

export default Footer;
