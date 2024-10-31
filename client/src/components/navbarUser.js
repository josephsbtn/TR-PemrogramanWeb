import React from "react";
import { Link } from "react-router-dom";

function navbarUser() {
  function logout() {
    localStorage.removeItem("currentUser");
    window.location.href = "/";
  }

  return (
    <>
      <div className="w-[20%] h-screen bg-myBlue place-items-start fixed">
        <div className="mx-5 py-5">
          <svg
            width="237"
            height="77"
            viewBox="0 0 237 77"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M57 48H225V52H57V48Z" fill="#8B8C89" />
            <path
              d="M67.685 39.395L67.46 33.905L85.325 15.5H90.455L76.64 30.08L74.12 32.87L67.685 39.395ZM63.725 47V15.5H68.225V47H63.725ZM86.045 47L73.13 31.97L76.145 28.64L91.31 47H86.045ZM109.672 47V41.96L109.447 41.015V32.42C109.447 30.59 108.907 29.18 107.827 28.19C106.777 27.17 105.187 26.66 103.057 26.66C101.647 26.66 100.267 26.9 98.9175 27.38C97.5675 27.83 96.4275 28.445 95.4975 29.225L93.6975 25.985C94.9275 24.995 96.3975 24.245 98.1075 23.735C99.8475 23.195 101.662 22.925 103.552 22.925C106.822 22.925 109.342 23.72 111.112 25.31C112.882 26.9 113.767 29.33 113.767 32.6V47H109.672ZM101.842 47.27C100.072 47.27 98.5125 46.97 97.1625 46.37C95.8425 45.77 94.8225 44.945 94.1025 43.895C93.3825 42.815 93.0225 41.6 93.0225 40.25C93.0225 38.96 93.3225 37.79 93.9225 36.74C94.5525 35.69 95.5575 34.85 96.9375 34.22C98.3475 33.59 100.237 33.275 102.607 33.275H110.167V36.38H102.787C100.627 36.38 99.1725 36.74 98.4225 37.46C97.6725 38.18 97.2975 39.05 97.2975 40.07C97.2975 41.24 97.7625 42.185 98.6925 42.905C99.6225 43.595 100.912 43.94 102.562 43.94C104.182 43.94 105.592 43.58 106.792 42.86C108.022 42.14 108.907 41.09 109.447 39.71L110.302 42.68C109.732 44.09 108.727 45.215 107.287 46.055C105.847 46.865 104.032 47.27 101.842 47.27ZM134.497 22.925C136.447 22.925 138.157 23.3 139.627 24.05C141.127 24.8 142.297 25.94 143.137 27.47C143.977 29 144.397 30.935 144.397 33.275V47H140.077V33.77C140.077 31.46 139.507 29.72 138.367 28.55C137.257 27.38 135.682 26.795 133.642 26.795C132.112 26.795 130.777 27.095 129.637 27.695C128.497 28.295 127.612 29.18 126.982 30.35C126.382 31.52 126.082 32.975 126.082 34.715V47H121.762V23.15H125.902V29.585L125.227 27.875C126.007 26.315 127.207 25.1 128.827 24.23C130.447 23.36 132.337 22.925 134.497 22.925ZM162.202 47.36C159.802 47.36 157.507 47 155.317 46.28C153.127 45.53 151.402 44.57 150.142 43.4L151.807 39.89C153.007 40.94 154.537 41.81 156.397 42.5C158.257 43.19 160.192 43.535 162.202 43.535C164.032 43.535 165.517 43.325 166.657 42.905C167.797 42.485 168.637 41.915 169.177 41.195C169.717 40.445 169.987 39.605 169.987 38.675C169.987 37.595 169.627 36.725 168.907 36.065C168.217 35.405 167.302 34.88 166.162 34.49C165.052 34.07 163.822 33.71 162.472 33.41C161.122 33.11 159.757 32.765 158.377 32.375C157.027 31.955 155.782 31.43 154.642 30.8C153.532 30.17 152.632 29.33 151.942 28.28C151.252 27.2 150.907 25.82 150.907 24.14C150.907 22.52 151.327 21.035 152.167 19.685C153.037 18.305 154.357 17.21 156.127 16.4C157.927 15.56 160.207 15.14 162.967 15.14C164.797 15.14 166.612 15.38 168.412 15.86C170.212 16.34 171.772 17.03 173.092 17.93L171.607 21.53C170.257 20.63 168.832 19.985 167.332 19.595C165.832 19.175 164.377 18.965 162.967 18.965C161.197 18.965 159.742 19.19 158.602 19.64C157.462 20.09 156.622 20.69 156.082 21.44C155.572 22.19 155.317 23.03 155.317 23.96C155.317 25.07 155.662 25.955 156.352 26.615C157.072 27.275 157.987 27.8 159.097 28.19C160.237 28.58 161.482 28.94 162.832 29.27C164.182 29.57 165.532 29.915 166.882 30.305C168.262 30.695 169.507 31.205 170.617 31.835C171.757 32.465 172.672 33.305 173.362 34.355C174.052 35.405 174.397 36.755 174.397 38.405C174.397 39.995 173.962 41.48 173.092 42.86C172.222 44.21 170.872 45.305 169.042 46.145C167.242 46.955 164.962 47.36 162.202 47.36ZM193.076 22.925C195.026 22.925 196.736 23.3 198.206 24.05C199.706 24.8 200.876 25.94 201.716 27.47C202.556 29 202.976 30.935 202.976 33.275V47H198.656V33.77C198.656 31.46 198.086 29.72 196.946 28.55C195.836 27.38 194.261 26.795 192.221 26.795C190.691 26.795 189.356 27.095 188.216 27.695C187.076 28.295 186.191 29.18 185.561 30.35C184.961 31.52 184.661 32.975 184.661 34.715V47H180.341V13.61H184.661V29.585L183.806 27.875C184.586 26.315 185.786 25.1 187.406 24.23C189.026 23.36 190.916 22.925 193.076 22.925ZM210.971 47V23.15H215.291V47H210.971ZM213.131 18.56C212.291 18.56 211.586 18.29 211.016 17.75C210.476 17.21 210.206 16.55 210.206 15.77C210.206 14.96 210.476 14.285 211.016 13.745C211.586 13.205 212.291 12.935 213.131 12.935C213.971 12.935 214.661 13.205 215.201 13.745C215.771 14.255 216.056 14.9 216.056 15.68C216.056 16.49 215.786 17.18 215.246 17.75C214.706 18.29 214.001 18.56 213.131 18.56Z"
              fill="white"
            />
            <path
              d="M64.692 54.516C64.632 54.216 64.56 53.952 64.476 53.7L65.544 53.52C65.568 53.736 65.616 54.084 65.664 54.348C65.736 54.876 67.056 61.464 67.224 62.256C67.308 62.592 67.404 63 67.524 63.348L66.42 63.552C66.36 63.144 66.324 62.772 66.24 62.424C66.12 61.668 64.836 55.14 64.692 54.516ZM61.308 56.256C61.608 56.232 61.932 56.208 62.316 56.172C63.396 56.052 67.536 55.392 68.676 55.164C69.024 55.104 69.336 55.032 69.54 54.972L69.732 55.98C69.552 55.992 69.192 56.052 68.868 56.1C67.632 56.292 63.54 56.94 62.484 57.12C62.16 57.18 61.872 57.24 61.524 57.324L61.308 56.256ZM61.272 59.712C61.56 59.7 62.016 59.652 62.328 59.604C63.612 59.436 68.076 58.704 69.516 58.44C69.972 58.356 70.32 58.272 70.572 58.2L70.776 59.208C70.524 59.232 70.14 59.304 69.696 59.376C68.1 59.616 63.768 60.324 62.556 60.54C62.088 60.624 61.752 60.696 61.488 60.768L61.272 59.712ZM76.62 55.656C76.644 55.872 76.716 56.124 76.788 56.436C77.064 57.432 78.372 62.184 78.624 63C78.696 63.228 78.804 63.6 78.888 63.816L77.856 64.092C77.832 63.816 77.772 63.504 77.688 63.216C77.436 62.352 76.152 57.516 75.876 56.628C75.792 56.34 75.696 56.1 75.588 55.908L76.62 55.656ZM82.38 57.312C81.876 58.32 80.64 60.012 79.812 60.816L78.972 60.384C79.716 59.748 80.628 58.632 81.036 57.924C80.508 58.02 74.892 59.148 74.04 59.328L73.8 58.416C74.136 58.38 74.436 58.344 74.796 58.272C75.396 58.176 80.628 57.192 81.312 57.036C81.468 57 81.648 56.94 81.768 56.88L82.38 57.312ZM86.724 54.216C87.564 54.78 89.112 56.028 89.772 56.688L89.028 57.456C88.416 56.832 86.928 55.536 86.028 54.948L86.724 54.216ZM85.692 62.256C87.78 61.944 89.34 61.212 90.48 60.504C92.34 59.34 93.792 57.564 94.488 56.076L95.064 57.108C94.248 58.596 92.856 60.228 91.044 61.368C89.832 62.124 88.32 62.868 86.316 63.24L85.692 62.256ZM99.6 53.784C100.308 54.18 101.688 55.104 102.216 55.488L101.652 56.304C101.076 55.86 99.768 54.996 99.072 54.6L99.6 53.784ZM97.8 62.364C99.12 62.136 100.608 61.656 101.832 60.972C103.824 59.832 105.408 58.26 106.368 56.568L106.956 57.564C105.912 59.172 104.256 60.72 102.336 61.848C101.124 62.556 99.468 63.108 98.364 63.336L97.8 62.364ZM97.8 56.484C98.508 56.868 99.912 57.732 100.428 58.104L99.876 58.944C99.288 58.512 97.992 57.684 97.26 57.3L97.8 56.484Z"
              fill="white"
            />
            <path
              d="M22.33 23.9008C23.9428 23.9008 25.5369 23.6465 26.8343 23.1042L26.8347 23.104L54.8568 11.3607C54.8574 11.3605 54.858 11.3602 54.8586 11.36C55.0668 11.2752 55.2884 11.2468 55.506 11.2758C55.702 11.3018 55.8932 11.374 56.0666 11.4903L56.1237 11.5338C56.3104 11.6761 56.4673 11.8693 56.5773 12.0999C56.6873 12.3307 56.746 12.5898 56.7462 12.8546L56.7462 54.3259L56.7462 54.3285C56.7479 54.6597 56.6568 54.9799 56.4901 55.2457C56.3236 55.511 56.0923 55.706 55.8332 55.8127L55.8304 55.8138L27.797 67.5606C27.7967 67.5607 27.7965 67.5608 27.7963 67.5609C26.0731 68.2768 24.2001 68.5494 22.3309 68.5498C18.3556 68.4972 14.6916 67.4326 12.5511 65.6087C11.8784 64.9985 11.24 64.1941 11.1868 62.9431L11.1829 62.8506V62.8344V21.4806V21.4331L11.1744 21.3887C11.1744 21.3889 11.1744 21.3887 11.1743 21.3882L11.1742 21.388L11.174 21.3867C11.171 20.4839 11.6257 19.6516 12.1631 19.1445L12.1631 19.1445L12.167 19.1407C12.733 18.5949 13.4073 18.2159 14.239 17.8861L14.2391 17.8861L14.2479 17.8824L42.2678 6.14397C42.2684 6.14373 42.269 6.14349 42.2696 6.14325C42.4779 6.05841 42.6994 6.03009 42.9171 6.059C43.1346 6.0879 43.3464 6.17378 43.5342 6.31353C43.7196 6.45584 43.8754 6.6485 43.9847 6.87825C44.0945 7.10903 44.1528 7.36802 44.1529 7.63265V11.4849L41.0475 10.1978L40.855 10.118L40.6628 10.1986L15.1837 20.8743C15.0159 20.9381 14.863 21.003 14.7264 21.069L13.9459 21.4466L14.6637 21.933C15.1234 22.2446 15.6115 22.5044 16.1206 22.708C17.7557 23.4033 20.0833 23.9056 22.33 23.9008ZM22.33 23.9008C22.3303 23.9008 22.3305 23.9008 22.3308 23.9008L22.3297 23.4008V23.9008C22.3298 23.9008 22.3299 23.9008 22.33 23.9008ZM11.173 21.3792C11.173 21.3792 11.1731 21.3799 11.1732 21.3813L11.173 21.3792ZM12.8921 28.0566L11.9268 28.2396L11.9247 34.7605L11.9246 35.0394L12.1618 35.186C14.9865 36.9318 18.5707 37.7309 22.2971 37.7944L22.2971 37.7945H22.3056C23.748 37.7945 25.2188 37.639 26.6791 37.2821L27.0604 37.1889V36.7964V32.4892V31.8072L26.41 32.0124C25.0838 32.4307 23.7104 32.6367 22.332 32.6245C18.6732 32.5914 15.3135 31.5182 13.7205 30.1238C13.4771 29.8892 13.3319 29.7229 13.2391 29.5622C13.1528 29.4128 13.0999 29.247 13.0861 28.9975C13.086 28.9972 13.086 28.997 13.086 28.9967L13.0795 28.8709L13.0791 28.8625L13.0784 28.854C13.0549 28.58 12.9922 28.3109 12.8921 28.0566ZM22.2986 59.6648L22.3023 59.6511L22.3023 59.6625C23.7735 59.6659 25.2405 59.4934 26.6772 59.1482L27.0604 59.0561V58.662V54.3596V53.6702L26.4051 53.8844C25.1391 54.298 23.754 54.4851 22.329 54.4852C18.6705 54.4613 15.3135 53.3839 13.7226 51.9941C13.4785 51.7587 13.334 51.5925 13.2414 51.4317C13.1553 51.2822 13.1019 51.115 13.086 50.8615C13.0859 50.8607 13.0859 50.8599 13.0858 50.8591L13.0796 50.7365L13.0792 50.7307C13.0612 50.4468 12.997 50.1678 12.8887 49.9067L11.9268 50.0981V56.6263V56.9048L12.1636 57.0514C14.9865 58.7999 18.5709 59.5964 22.2986 59.6648Z"
              fill="white"
              stroke="#8B8C89"
            />
          </svg>
        </div>
        <div className="border-y-2 border-white py-4 w-full mt-10">
          <Link to={"/homeUser"}>
            <div className="flex justify-start mx-5 items-center">
              <svg
                width="20"
                height="20"
                viewBox="0 0 21 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.2083 6.58334V0.333344H20.3333V6.58334H12.2083ZM0.333313 10.3333V0.333344H8.45831V10.3333H0.333313ZM12.2083 20.3333V10.3333H20.3333V20.3333H12.2083ZM0.333313 20.3333V14.0833H8.45831V20.3333H0.333313Z"
                  fill="white"
                />
              </svg>
              <p className="text-white font-montserrat ml-10 text-start">
                Home
              </p>
            </div>
          </Link>
        </div>
        <div className="border-b-2 border-white py-4 w-full ">
          <Link to={"/pinjamRuang"}>
            <div className="flex justify-start mx-5 items-center ">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.142 1.15961C19.634 1.20695 20 1.49095 20 1.8263V18.1735C20 18.5088 19.634 18.7928 19.142 18.8402L7.142 19.9935C6.99937 20.0069 6.8541 19.9995 6.7161 19.9721C6.57809 19.9446 6.45057 19.8976 6.34222 19.8344C6.23386 19.7711 6.14721 19.6931 6.08816 19.6055C6.02911 19.5179 5.99904 19.4229 6 19.3269V18.0001H1.052C0.773408 17.9996 0.506438 17.9257 0.30935 17.7944C0.112261 17.6631 0.00105516 17.4852 0 17.2995V2.70099C0 2.31431 0.473 1.99897 1.052 1.99897H6V0.672929C6 0.263582 6.539 -0.0510944 7.142 0.00690741L19.142 1.15961ZM9 10.6666C9.26522 10.6666 9.51957 10.5963 9.70711 10.4713C9.89464 10.3463 10 10.1767 10 9.99989C10 9.82308 9.89464 9.6535 9.70711 9.52847C9.51957 9.40345 9.26522 9.33321 9 9.33321C8.73478 9.33321 8.48043 9.40345 8.29289 9.52847C8.10536 9.6535 8 9.82308 8 9.99989C8 10.1767 8.10536 10.3463 8.29289 10.4713C8.48043 10.5963 8.73478 10.6666 9 10.6666ZM2 16.6668H6V3.33301H2V16.6668Z"
                  fill="white"
                />
              </svg>
              <p className="text-white font-montserrat ml-10 text-start">
                Pinjam Ruangan
              </p>
            </div>
          </Link>
        </div>
        <div className="border-b-2 border-white py-4 w-full ">
          <Link to={"/bookingData"}>
            <div className="flex justify-start mx-5 items-center">
              <svg
                width="20"
                viewBox="0 0 23 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 0H23V26H0V0ZM2.3 2.6V11.7H4.5977V11.6974H6.9023V11.7H20.7V2.6H2.3ZM20.7 14.3H6.9023V14.3026H4.5977V14.3H2.3V23.4H20.7V14.3ZM4.5977 5.85H6.9023V8.4552H4.5977V5.85ZM4.5977 17.55H6.9023V20.1552H4.5977V17.55Z"
                  fill="white"
                />
              </svg>
              <p className="text-white font-montserrat ml-10 text-start">
                Peminjaman Saya
              </p>
            </div>
          </Link>
        </div>
        <div className="border-b-2 border-white py-4 w-full ">
          <Link to={"/booking-request"}>
            <div className="flex justify-start mx-5 items-center">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.5 14.5807V5.51724C17.5 3.99586 16.005 2.75862 14.1667 2.75862H10.69L12.845 0.975172L11.6667 0L7.5 3.44828L11.6667 6.89655L12.845 5.92138L10.69 4.13793H14.1667C15.0858 4.13793 15.8333 4.75724 15.8333 5.51724V14.5807C14.4 14.889 13.3333 15.96 13.3333 17.2414C13.3333 18.7628 14.8283 20 16.6667 20C18.505 20 20 18.7628 20 17.2414C20 15.96 18.9333 14.8897 17.5 14.5807ZM16.6667 18.6207C15.7475 18.6207 15 18.0021 15 17.2414C15 16.4807 15.7475 15.8621 16.6667 15.8621C17.5858 15.8621 18.3333 16.4814 18.3333 17.2414C18.3333 18.0014 17.5858 18.6207 16.6667 18.6207ZM0 3.44828C0 4.72966 1.06667 5.8 2.5 6.10897V14.5807C1.06667 14.889 0 15.96 0 17.2414C0 18.7628 1.495 20 3.33333 20C5.17167 20 6.66667 18.7628 6.66667 17.2414C6.66667 15.9593 5.6 14.8897 4.16667 14.5807V6.10897C5.6 5.80069 6.66667 4.72966 6.66667 3.44828C6.66667 1.9269 5.17167 0.689655 3.33333 0.689655C1.495 0.689655 0 1.9269 0 3.44828ZM5 17.2414C5 18.0021 4.2525 18.6207 3.33333 18.6207C2.41417 18.6207 1.66667 18.0021 1.66667 17.2414C1.66667 16.4807 2.41417 15.8621 3.33333 15.8621C4.2525 15.8621 5 16.4807 5 17.2414Z"
                  fill="white"
                />
              </svg>
              <p className="text-white font-montserrat ml-10 text-start">
                Lainnya
              </p>
            </div>
          </Link>
        </div>

        <div className="border-b-2 border-white py-4 w-full ">
          <button onClick={logout} href="">
            <div className="flex justify-start mx-5 items-center ">
              <svg
                width="20"
                viewBox="0 0 31 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.0833 11V8.25C18.0833 7.52065 17.8112 6.82118 17.3267 6.30546C16.8422 5.78973 16.1851 5.5 15.5 5.5H6.45833C5.77319 5.5 5.11611 5.78973 4.63164 6.30546C4.14717 6.82118 3.875 7.52065 3.875 8.25V24.75C3.875 25.4793 4.14717 26.1788 4.63164 26.6945C5.11611 27.2103 5.77319 27.5 6.45833 27.5H15.5C16.1851 27.5 16.8422 27.2103 17.3267 26.6945C17.8112 26.1788 18.0833 25.4793 18.0833 24.75V22"
                  stroke="white"
                  stroke-width="3.33333"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M11.625 16.5H27.125M27.125 16.5L23.25 12.375M27.125 16.5L23.25 20.625"
                  stroke="white"
                  stroke-width="3.33333"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p className="text-white font-montserrat ml-10 text-start">
                Log Out
              </p>
            </div>
          </button>
        </div>
      </div>
    </>
  );
}

export default navbarUser;
