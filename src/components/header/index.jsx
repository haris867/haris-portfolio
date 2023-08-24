import React, { useRef, useEffect } from "react";

import styled from "styled-components";
import { FaEnvelope, FaGithubSquare, FaLinkedin } from "react-icons/fa";

const HeaderLogo = styled.img`
  width: 90px;
`;
export default function Header() {
  const svgRef = useRef();

  useEffect(() => {
    if (svgRef.current) {
      const strokePath = svgRef.current.querySelector(".restart-animation");
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
    <header>
      <div className="header-content">
        <div className="logo mt-3">
          <svg
            ref={svgRef}
            xmlns="http://www.w3.org/2000/svg"
            width="1106"
            height="541"
            viewBox="0 0 1106 541"
            version="1.1"
          >
            <path
              className="path restart-animation"
              d="M 53 271.993 L 53 541 119 541 L 185 541 185 453.500 L 185 366 171 366 L 157 366 157 440.012 L 157 514.024 118.750 513.762 L 80.500 513.500 80.500 272.500 L 80.500 31.500 118.744 31.238 L 156.988 30.976 157.244 107.238 L 157.500 183.500 171 183.500 L 184.500 183.500 184.500 93.500 L 184.500 3.500 118.750 3.243 L 53 2.986 53 271.993 M 367 103.472 L 367 204 250 204 L 133 204 133 130 L 133 56 119 56 L 105 56 105 143.500 L 105 231 250.004 231 L 395.009 231 394.754 117.250 L 394.500 3.500 380.750 3.222 L 367 2.944 367 103.472 M 423.466 4.239 C 423.201 4.932, 423.101 57.250, 423.243 120.500 L 423.500 235.500 437.250 235.778 L 451 236.056 451 133.528 L 451 31 463.500 31 L 476 31 476 286 L 476 541 490.002 541 L 504.004 541 503.752 272.250 L 503.500 3.500 463.723 3.239 C 432.436 3.033, 423.844 3.246, 423.466 4.239 M 602.317 4.616 C 601.333 7.180, 602.844 311.941, 603.970 338 C 604.528 350.925, 605.464 367.703, 606.049 375.284 C 609.358 418.176, 633.635 464.395, 668 493.225 C 696.609 517.227, 730.601 532.378, 767.278 537.478 C 801.301 542.208, 864.197 542.158, 893 537.377 C 913.111 534.039, 940.374 523.188, 960.436 510.537 C 977.709 499.645, 996.571 481.584, 1009.559 463.500 C 1023.494 444.098, 1037.842 410.435, 1042.954 385.150 C 1047.824 361.057, 1048.947 314.863, 1048.977 137.222 L 1049 2.944 1035.250 3.222 L 1021.500 3.500 1020.900 161 C 1020.237 334.968, 1019.700 352.061, 1013.888 384.398 C 1008.956 411.843, 994.644 440.157, 975.104 461.126 C 959.261 478.129, 935.741 494.648, 918.486 500.892 C 887.904 511.957, 815.438 516.985, 774.500 510.881 C 755.278 508.015, 735.896 501.602, 717 491.858 C 699.763 482.969, 687.125 473.967, 675.024 461.960 C 651.095 438.218, 639.117 411.157, 634.540 370.500 C 631.360 342.252, 630.803 316.365, 630.308 174 L 629.809 30.500 664.154 31.668 C 683.044 32.310, 699.908 32.873, 701.630 32.918 L 704.760 33 705.397 70.750 C 705.747 91.513, 706.486 146.750, 707.038 193.500 C 708.170 289.266, 709.516 345.882, 711.023 361.153 C 712.396 375.059, 714.942 383.013, 720.941 392.133 C 726.431 400.480, 737.710 411.621, 746.740 417.617 C 759.553 426.124, 777.757 433.614, 794.288 437.181 C 807.632 440.060, 837.463 440.331, 851.500 437.700 C 878.077 432.720, 896.952 423.850, 911.509 409.500 C 920.801 400.340, 925.847 393.276, 932.224 380.500 C 937.787 369.355, 940.652 360.729, 942.020 351 C 943.999 336.925, 944.964 271.598, 944.966 151.500 L 944.968 31.500 957.198 31.500 L 969.427 31.500 969.180 61.500 C 966.891 339.045, 966.586 355.644, 963.448 373.638 C 961.458 385.051, 957.323 394.690, 949.045 407.215 C 931.300 434.064, 902.831 451.943, 866.729 458.910 C 836.163 464.809, 791.842 462.856, 764.044 454.386 C 753.426 451.151, 736.416 442.672, 728.300 436.568 C 710.277 423.014, 692.234 395.719, 688.593 376.500 C 684.964 357.346, 683.785 319.006, 681.864 157.789 L 680.628 54.077 678.064 53.579 C 670.452 52.101, 655.772 50.846, 655.127 51.618 C 654.180 52.750, 655.591 256.317, 656.986 320 C 658.301 380.018, 659.424 391.124, 665.528 404.468 C 678.167 432.100, 704.896 460.881, 729.326 473.164 C 748.953 483.032, 781.365 489.947, 817.441 491.964 C 845.515 493.533, 877.426 489.338, 902.469 480.786 C 910.912 477.903, 927.329 469.932, 934.713 465.131 C 943.129 459.659, 955.943 447.237, 963.129 437.584 C 970.086 428.239, 981.469 406.256, 985.954 393.502 C 995.557 366.198, 997.258 325.108, 996.802 131.500 L 996.500 3.500 956.750 3.239 L 917 2.977 916.964 148.739 C 916.927 297.256, 916.285 335.899, 913.602 351 C 912.506 357.166, 910.688 362.328, 906.983 369.797 C 896.259 391.413, 877.663 403.808, 848 409.112 C 838.318 410.843, 802.901 410.874, 794 409.159 C 764.960 403.562, 745.861 388.743, 739.611 366.957 C 732.520 342.246, 730.984 300.316, 730.995 131.836 C 731 62.721, 730.729 5.459, 730.395 4.586 C 729.848 3.161, 723.347 3, 666.362 3 C 608.885 3, 602.879 3.152, 602.317 4.616 M 105 274.500 C 105 284.630, 105.312 288.002, 106.250 288.006 C 106.938 288.009, 178.487 288.007, 265.250 288 L 423 287.988 423 400.994 L 423 514 409.005 514 L 395.010 514 394.755 413.750 L 394.500 313.500 249.750 313.247 L 105 312.993 105 405.525 L 105 498.056 118.750 497.778 L 132.500 497.500 132.756 419.250 L 133.012 341 250.006 341 L 367 341 367 441 L 367 541 409 541 L 451 541 451 401 L 451 261 278 261 L 105 261 105 274.500"
              stroke="#ffffff"
              strokeWidth="10"
              fill="none"
              fillRule="evenodd"
            />
          </svg>
        </div>
        <div className="icons">
          <a href="https://github.com/haris867">
            <FaGithubSquare />
          </a>
          <a href="https://www.linkedin.com/in/haris-usman-3bb83a204/">
            <FaLinkedin />
          </a>
          <a href="mailto:haris.usman@hotmail.com">
            <FaEnvelope />
          </a>
        </div>
      </div>
    </header>
  );
}
