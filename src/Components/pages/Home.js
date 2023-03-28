import React from "react";

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque
        velit, lobortis ut magna varius, blandit rhoncus sem. Morbi lacinia nisi
        ac dui fermentum, sed luctus urna tincidunt. Etiam ut feugiat ex. Cras
        non risus mi. Curabitur mattis rutrum ipsum, ut aliquet urna imperdiet
        ac. Sed nec nulla aliquam, bibendum odio eget, vestibulum tortor. Cras
        rutrum ligula in tincidunt commodo. Morbi sit amet mollis orci, in
        tristique ex. Donec nec ornare elit. Donec blandit est sed risus feugiat
        porttitor. Vestibulum molestie hendrerit massa non consequat. Vestibulum
        vitae lorem tortor. In elementum ultricies tempus. Interdum et malesuada
        fames ac ante ipsum primis in faucibus.
      </p>

      <div className="container p-4 pb-0" id="c-font">
        <section className="mb-4">
          {/* <!-- Facebook --> */}
          <a
            className="btn btn-outline-light btn-floating m-1"
            href="https://www.facebook.com/landon.murray.144"
            role="button"
          >
            <i className="fa-brands fa-facebook"></i>
          </a>

          {/* <!-- Twitter --> */}
          <a
            className="btn btn-outline-light btn-floating m-1"
            href="https://twitter.com/codewithlandon!"
            role="button"
          >
            <i className="fab fa-twitter"></i>
          </a>

          {/* <!-- Instagram --> */}
          <a
            className="btn btn-outline-light btn-floating m-1"
            href="https://www.instagram.com/landonmuxxay/"
            role="button"
          >
            <i className="fab fa-instagram"></i>
          </a>

          {/* <!-- Linkedin --> */}
          <a
            className="btn btn-outline-light btn-floating m-1"
            href="https://www.linkedin.com/in/landonbmurray"
            role="button"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>

          {/* <!-- Github --> */}
          <a
            className="btn btn-outline-light btn-floating m-1"
            href="https://github.com/LandoBM"
            role="button"
          >
            <i className="fab fa-github"></i>
          </a>
        </section>
      </div>
      {/* <!-- Copyright --> */}
      <div className="text-center p-3">
        © 2022 Copyright:
        <a className="text-white">Develop With Landon</a>
      </div>
    </div>
  );
}
