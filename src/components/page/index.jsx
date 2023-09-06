import React, { useRef, useEffect } from "react";
import Header from "../header";
import Footer from "../footer";
import { Canvas } from "@react-three/fiber";
import Stars from "../stars";
import Carousel from "react-bootstrap/Carousel";
import { Col } from "react-bootstrap";
import { FaGlobe, FaGithub } from "react-icons/fa";

function ThreeFiberScene() {
  const cameraRef = useRef();

  return (
    <div className="canvas-container">
      <Canvas className="canvas-wrapper">
        <perspectiveCamera
          ref={cameraRef}
          aspect={1 / 4}
          fov={75}
          position={[0, 0, 25]}
        />
        <Stars count={300} />
      </Canvas>
    </div>
  );
}

export default function Page() {
  const svgRef = useRef();

  useEffect(() => {
    if (svgRef.current) {
      const strokePath = svgRef.current.querySelector(".silhouette-animation");
      if (strokePath) {
        const strokeLength = strokePath.getTotalLength();

        strokePath.addEventListener("click", restartAnimation);

        function restartAnimation() {
          if (this && this.parentNode) {
            const clonedElement = this.cloneNode(true);
            this.parentNode.replaceChild(clonedElement, this);
            clonedElement.addEventListener("click", restartAnimation);
          }
        }
        console.log(strokeLength);
      }
    }
  }, []);

  return (
    <div className="layout-container">
      <Header />
      <ThreeFiberScene />
      <div className="layout-outlet">
        <div className="heading w-100 mx-auto px-4">
          <h1 className="fw-bold">My name is Haris.</h1>
          <h2 className="fw-normal">And this is my portfolio.</h2>
        </div>
        <div className="silhouette d-flex justify-content-center">
          <svg
            ref={svgRef}
            className="w-75"
            xmlns="http://www.w3.org/2000/svg"
            width="500"
            height="500"
            viewBox="0 0 500 500"
            version="1.1"
          >
            <path
              d="M 108.861 200.967 L 106.500 202.933 109.050 202.967 C 111.530 202.999, 114 201.419, 114 199.800 C 114 198.346, 111.260 198.968, 108.861 200.967 M 138 333.500 C 138 333.775, 138.225 334, 138.500 334 C 138.775 334, 139 333.775, 139 333.500 C 139 333.225, 138.775 333, 138.500 333 C 138.225 333, 138 333.225, 138 333.500 M 144 336.500 C 144 336.775, 144.225 337, 144.500 337 C 144.775 337, 145 336.775, 145 336.500 C 145 336.225, 144.775 336, 144.500 336 C 144.225 336, 144 336.225, 144 336.500"
              stroke="#A540CB"
              fill="#A540CB"
              fillRule="evenodd"
            />
            <path
              d="M 234.500 19.022 C 220.866 20.273, 207.095 23.094, 192.586 27.609 C 187.128 29.307, 184.350 29.750, 183.636 29.036 C 181.793 27.193, 171.963 27.839, 167.268 30.112 C 163.964 31.712, 162.763 32.937, 162.318 35.161 C 161.886 37.322, 160.644 38.648, 157.615 40.185 C 143.714 47.240, 124.184 65.044, 112.819 81.021 C 99.805 99.319, 94.942 114.850, 95.035 137.822 C 95.082 149.460, 97.016 157.785, 101.918 167.453 C 104.163 171.880, 106 176.693, 106 178.146 C 106 179.600, 106.935 183.817, 108.078 187.517 C 109.221 191.217, 109.783 194.557, 109.328 194.939 C 108.873 195.322, 105.125 197.133, 101 198.966 C 89.371 204.131, 89.222 204.392, 94.500 210.369 C 97.331 213.574, 98.359 214.127, 100.492 213.591 C 101.908 213.236, 103.839 212.022, 104.783 210.894 C 105.727 209.766, 107.689 208.217, 109.141 207.452 C 111.653 206.129, 111.842 206.203, 112.983 208.958 C 113.643 210.552, 115.079 212.666, 116.174 213.657 C 117.269 214.648, 118.785 216.942, 119.542 218.754 C 121.229 222.792, 128.220 247.858, 130.403 257.697 C 133.117 269.931, 132.236 304.989, 129 313.501 L 128.139 315.765 118.634 313.725 C 109.675 311.802, 108.982 311.782, 106.565 313.366 C 105.154 314.290, 104 315.762, 104 316.638 C 104 317.514, 101.731 322.934, 98.958 328.684 C 94.716 337.477, 93.397 339.354, 90.649 340.502 C 86.843 342.092, 83.346 345.928, 70.138 363 C 57.531 379.295, 55.687 382.235, 50.015 395.065 C 46.936 402.030, 40.973 412.224, 33.132 423.925 C 20.764 442.384, 13.308 456.011, 8.744 468.500 C 4.051 481.341, 0 494.719, 0 497.374 L 0 500 138.500 500 C 214.675 500, 277 499.832, 277 499.626 C 277 499.420, 276.300 497.282, 275.445 494.876 C 274.590 492.469, 271.622 481.725, 268.849 471 C 258.524 431.056, 256.288 425.298, 247.535 416.122 C 244.173 412.598, 242 409.434, 242 408.064 C 242 405.320, 244.458 401.672, 252.489 392.500 C 255.860 388.650, 259.924 383.700, 261.521 381.500 C 265.242 376.373, 266.211 375.435, 273.766 369.654 C 280.569 364.448, 283.057 360.521, 284.952 352 C 286.782 343.771, 287.003 343.140, 288.637 341.506 C 291.473 338.670, 303.259 339.941, 307.441 343.534 C 308.921 344.806, 311.903 346.146, 314.066 346.511 C 316.230 346.877, 318 347.634, 318 348.195 C 318 348.755, 318.692 348.948, 319.538 348.624 C 320.413 348.288, 321.321 348.673, 321.645 349.517 C 321.958 350.333, 323.080 351, 324.138 351 C 325.197 351, 326.308 351.640, 326.609 352.423 C 326.909 353.205, 327.818 354.100, 328.629 354.411 C 329.440 354.722, 329.885 354.623, 329.618 354.191 C 329.351 353.758, 329.545 352.751, 330.051 351.952 C 330.681 350.956, 330.974 350.892, 330.985 351.750 C 330.993 352.438, 331.421 353, 331.935 353 C 332.449 353, 334.137 353.482, 335.685 354.070 C 337.233 354.659, 338.500 355.033, 338.500 354.901 C 338.500 354.770, 339.625 355.269, 341 356.010 C 342.375 356.752, 344.962 357.264, 346.750 357.148 C 348.538 357.032, 350 357.326, 350 357.802 C 350 358.855, 350.857 359.007, 358.500 359.307 C 361.800 359.437, 365.063 359.897, 365.750 360.330 C 366.438 360.764, 367 360.723, 367 360.241 C 367 359.758, 368.800 359.506, 371 359.680 C 374.006 359.918, 375 359.629, 375 358.517 C 375 357.704, 376.238 356.744, 377.750 356.385 C 381.981 355.379, 383.884 353.237, 383.468 349.948 C 383.267 348.357, 383.472 346.826, 383.925 346.546 C 385.015 345.873, 384.116 335.702, 382.488 330.295 C 381.778 327.935, 381.603 326.254, 382.098 326.561 C 383.242 327.268, 383.246 326.452, 382.109 324.236 C 380.731 321.553, 378 311.571, 378 309.221 C 378 308.064, 377.612 306.878, 377.137 306.585 C 376.663 306.291, 375.701 304.003, 375 301.500 C 374.299 298.997, 373.337 296.709, 372.863 296.415 C 372.388 296.122, 372 295.060, 372 294.055 C 372 293.051, 371.328 290.940, 370.506 289.364 C 368.376 285.280, 368.579 284.082, 372.500 277.570 C 376.540 270.861, 376.795 268.795, 373.938 265.938 C 371.396 263.396, 371.612 262.722, 375.908 259.810 C 380.739 256.535, 382.826 253.192, 383.329 247.924 C 383.850 242.456, 382.041 237.625, 378.831 235.915 C 376.487 234.666, 374.091 232.109, 374.032 230.792 C 374.014 230.403, 376.844 230.178, 380.320 230.292 C 385.874 230.475, 387.087 230.160, 390.320 227.699 C 393.642 225.171, 394 224.441, 393.996 220.199 C 393.994 217.205, 393.238 214.262, 391.912 212.088 C 388.564 206.595, 374.706 191.179, 364.988 182.136 C 356.993 174.696, 356 173.387, 356 170.290 C 356 166.983, 358.651 161, 360.117 161 C 360.494 161, 361.690 159.495, 362.775 157.656 C 364.279 155.108, 366.027 153.896, 370.124 152.562 C 377.160 150.272, 393.152 142.039, 402.804 135.738 C 413.540 128.729, 422.904 119.040, 426.981 110.720 C 433.357 97.711, 431.908 82.589, 423.889 78.443 C 418.557 75.685, 410.664 76.774, 368.670 86.058 C 358.863 88.226, 350.190 90, 349.395 90 C 348.601 90, 347.516 88.856, 346.984 87.458 C 346.453 86.060, 344.279 82.348, 342.153 79.208 C 340.028 76.069, 335.913 69, 333.010 63.500 C 325.406 49.098, 321.633 43.757, 314.349 37.082 C 301.470 25.282, 289.482 21.063, 263 19.013 C 249.207 17.945, 246.219 17.946, 234.500 19.022 M 108.861 200.967 L 106.500 202.933 109.050 202.967 C 111.530 202.999, 114 201.419, 114 199.800 C 114 198.346, 111.260 198.968, 108.861 200.967 M 138 333.500 C 138 333.775, 138.225 334, 138.500 334 C 138.775 334, 139 333.775, 139 333.500 C 139 333.225, 138.775 333, 138.500 333 C 138.225 333, 138 333.225, 138 333.500 M 144 336.500 C 144 336.775, 144.225 337, 144.500 337 C 144.775 337, 145 336.775, 145 336.500 C 145 336.225, 144.775 336, 144.500 336 C 144.225 336, 144 336.225, 144 336.500"
              stroke="#ffffff"
              strokeWidth={2}
              fill="none"
              fillRule="evenodd"
              className="silhouette-animation silhouette-animation__fill"
            />
          </svg>
        </div>
        <div className="about py-5">
          <Col xs={8} md={6} lg={6} xl={5} className="mx-auto">
            <div className="heading py-2">
              <h3 className="fw-bold">My projects</h3>
            </div>
          </Col>
          <Carousel>
            <Carousel.Item>
              <div className="d-flex justify-content-center">
                <Col xs={8} md={6} lg={6} xl={5}>
                  <img
                    className="w-100"
                    src="/images/lc-demo2.png"
                    alt={`Slide`}
                  />
                  <Carousel.Caption className="d-flex justify-content-between align-items-center">
                    <h3 className="m-0 mx-3">LC Troop</h3>
                    <div className="icons mx-3">
                      <a
                        href="https://lctroop.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaGlobe />
                      </a>
                      <a
                        href="https://github.com/haris867/lctroop"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaGithub />
                      </a>
                    </div>
                  </Carousel.Caption>
                </Col>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="d-flex justify-content-center">
                <Col xs={8} md={6} lg={6} xl={5}>
                  <img
                    className="w-100"
                    src="/images/glimt-demo2.png"
                    alt={`Slide`}
                  />
                  <Carousel.Caption className="d-flex justify-content-between align-items-center">
                    <h3 className="m-0 mx-3">Glimt</h3>
                    <div className="icons mx-3">
                      <a
                        href="https://glimt.netlify.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaGlobe />
                      </a>
                      <a
                        href="https://github.com/haris867/glimt"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaGithub />
                      </a>
                    </div>
                  </Carousel.Caption>
                </Col>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="d-flex justify-content-center">
                <Col xs={8} md={6} lg={6} xl={5}>
                  <img
                    className="w-100"
                    src="/images/bits-demo2.png"
                    alt={`Slide`}
                  />
                  <Carousel.Caption className="d-flex justify-content-between align-items-center">
                    <h3 className="m-0 mx-3">Bits & Bots</h3>
                    <div className="icons mx-3">
                      <a
                        href="https://bitsandbotsgames.netlify.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaGlobe />
                      </a>
                      <a
                        href="https://github.com/haris867/bitsandbots"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaGithub />
                      </a>
                    </div>
                  </Carousel.Caption>
                </Col>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
      <Footer />
    </div>
  );
}
