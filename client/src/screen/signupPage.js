import React, { useState } from "react";
import axios from "axios";

const SignupForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const signup = async (e) => {
    e.preventDefault(); // Prevent page refresh
    const user = { firstName, lastName, email, username, password };

    try {
      const result = await axios.post("/api/users/register", user);
      console.log(result.data);
      setSuccess("Signup successful!");
      setError(""); // Clear any previous errors
    } catch (error) {
      console.error(error);
      setError("Signup failed. Please try again.");
      setSuccess(""); // Clear any previous successes
    }
  };

  return (
    <div className="bg-bgColor overflow-hidden w-full h-screen">
      <div className="mt-8 ml-14">
        <svg
          width="237"
          height="77"
          viewBox="0 0 237 77"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <g id="Group 5">
            <path id="Rectangle 2" d="M57 48H225V52H57V48Z" fill="#8B8C89" />
            <path
              id="KanShi"
              d="M67.685 39.395L67.46 33.905L85.325 15.5H90.455L76.64 30.08L74.12 32.87L67.685 39.395ZM63.725 47V15.5H68.225V47H63.725ZM86.045 47L73.13 31.97L76.145 28.64L91.31 47H86.045ZM109.672 47V41.96L109.447 41.015V32.42C109.447 30.59 108.907 29.18 107.827 28.19C106.777 27.17 105.187 26.66 103.057 26.66C101.647 26.66 100.267 26.9 98.9175 27.38C97.5675 27.83 96.4275 28.445 95.4975 29.225L93.6975 25.985C94.9275 24.995 96.3975 24.245 98.1075 23.735C99.8475 23.195 101.662 22.925 103.552 22.925C106.822 22.925 109.342 23.72 111.112 25.31C112.882 26.9 113.767 29.33 113.767 32.6V47H109.672ZM101.842 47.27C100.072 47.27 98.5125 46.97 97.1625 46.37C95.8425 45.77 94.8225 44.945 94.1025 43.895C93.3825 42.815 93.0225 41.6 93.0225 40.25C93.0225 38.96 93.3225 37.79 93.9225 36.74C94.5525 35.69 95.5575 34.85 96.9375 34.22C98.3475 33.59 100.237 33.275 102.607 33.275H110.167V36.38H102.787C100.627 36.38 99.1725 36.74 98.4225 37.46C97.6725 38.18 97.2975 39.05 97.2975 40.07C97.2975 41.24 97.7625 42.185 98.6925 42.905C99.6225 43.595 100.912 43.94 102.562 43.94C104.182 43.94 105.592 43.58 106.792 42.86C108.022 42.14 108.907 41.09 109.447 39.71L110.302 42.68C109.732 44.09 108.727 45.215 107.287 46.055C105.847 46.865 104.032 47.27 101.842 47.27ZM134.497 22.925C136.447 22.925 138.157 23.3 139.627 24.05C141.127 24.8 142.297 25.94 143.137 27.47C143.977 29 144.397 30.935 144.397 33.275V47H140.077V33.77C140.077 31.46 139.507 29.72 138.367 28.55C137.257 27.38 135.682 26.795 133.642 26.795C132.112 26.795 130.777 27.095 129.637 27.695C128.497 28.295 127.612 29.18 126.982 30.35C126.382 31.52 126.082 32.975 126.082 34.715V47H121.762V23.15H125.902V29.585L125.227 27.875C126.007 26.315 127.207 25.1 128.827 24.23C130.447 23.36 132.337 22.925 134.497 22.925ZM162.202 47.36C159.802 47.36 157.507 47 155.317 46.28C153.127 45.53 151.402 44.57 150.142 43.4L151.807 39.89C153.007 40.94 154.537 41.81 156.397 42.5C158.257 43.19 160.192 43.535 162.202 43.535C164.032 43.535 165.517 43.325 166.657 42.905C167.797 42.485 168.637 41.915 169.177 41.195C169.717 40.445 169.987 39.605 169.987 38.675C169.987 37.595 169.627 36.725 168.907 36.065C168.217 35.405 167.302 34.88 166.162 34.49C165.052 34.07 163.822 33.71 162.472 33.41C161.122 33.11 159.757 32.765 158.377 32.375C157.027 31.955 155.782 31.43 154.642 30.8C153.532 30.17 152.632 29.33 151.942 28.28C151.252 27.2 150.907 25.82 150.907 24.14C150.907 22.52 151.327 21.035 152.167 19.685C153.037 18.305 154.357 17.21 156.127 16.4C157.927 15.56 160.207 15.14 162.967 15.14C164.797 15.14 166.612 15.38 168.412 15.86C170.212 16.34 171.772 17.03 173.092 17.93L171.607 21.53C170.257 20.63 168.832 19.985 167.332 19.595C165.832 19.175 164.377 18.965 162.967 18.965C161.197 18.965 159.742 19.19 158.602 19.64C157.462 20.09 156.622 20.69 156.082 21.44C155.572 22.19 155.317 23.03 155.317 23.96C155.317 25.07 155.662 25.955 156.352 26.615C157.072 27.275 157.987 27.8 159.097 28.19C160.237 28.58 161.482 28.94 162.832 29.27C164.182 29.57 165.532 29.915 166.882 30.305C168.262 30.695 169.507 31.205 170.617 31.835C171.757 32.465 172.672 33.305 173.362 34.355C174.052 35.405 174.397 36.755 174.397 38.405C174.397 39.995 173.962 41.48 173.092 42.86C172.222 44.21 170.872 45.305 169.042 46.145C167.242 46.955 164.962 47.36 162.202 47.36ZM193.076 22.925C195.026 22.925 196.736 23.3 198.206 24.05C199.706 24.8 200.876 25.94 201.716 27.47C202.556 29 202.976 30.935 202.976 33.275V47H198.656V33.77C198.656 31.46 198.086 29.72 196.946 28.55C195.836 27.38 194.261 26.795 192.221 26.795C190.691 26.795 189.356 27.095 188.216 27.695C187.076 28.295 186.191 29.18 185.561 30.35C184.961 31.52 184.661 32.975 184.661 34.715V47H180.341V13.61H184.661V29.585L183.806 27.875C184.586 26.315 185.786 25.1 187.406 24.23C189.026 23.36 190.916 22.925 193.076 22.925ZM210.971 47V23.15H215.291V47H210.971ZM213.131 18.56C212.291 18.56 211.586 18.29 211.016 17.75C210.476 17.21 210.206 16.55 210.206 15.77C210.206 14.96 210.476 14.285 211.016 13.745C211.586 13.205 212.291 12.935 213.131 12.935C213.971 12.935 214.661 13.205 215.201 13.745C215.771 14.255 216.056 14.9 216.056 15.68C216.056 16.49 215.786 17.18 215.246 17.75C214.706 18.29 214.001 18.56 213.131 18.56Z"
              fill="#274C77"
            />
            <path
              id="&#227;&#130;&#173;&#227;&#131;&#163;&#227;&#131;&#179;&#227;&#130;&#183;"
              d="M64.692 54.516C64.632 54.216 64.56 53.952 64.476 53.7L65.544 53.52C65.568 53.736 65.616 54.084 65.664 54.348C65.736 54.876 67.056 61.464 67.224 62.256C67.308 62.592 67.404 63 67.524 63.348L66.42 63.552C66.36 63.144 66.324 62.772 66.24 62.424C66.12 61.668 64.836 55.14 64.692 54.516ZM61.308 56.256C61.608 56.232 61.932 56.208 62.316 56.172C63.396 56.052 67.536 55.392 68.676 55.164C69.024 55.104 69.336 55.032 69.54 54.972L69.732 55.98C69.552 55.992 69.192 56.052 68.868 56.1C67.632 56.292 63.54 56.94 62.484 57.12C62.16 57.18 61.872 57.24 61.524 57.324L61.308 56.256ZM61.272 59.712C61.56 59.7 62.016 59.652 62.328 59.604C63.612 59.436 68.076 58.704 69.516 58.44C69.972 58.356 70.32 58.272 70.572 58.2L70.776 59.208C70.524 59.232 70.14 59.304 69.696 59.376C68.1 59.616 63.768 60.324 62.556 60.54C62.088 60.624 61.752 60.696 61.488 60.768L61.272 59.712ZM76.62 55.656C76.644 55.872 76.716 56.124 76.788 56.436C77.064 57.432 78.372 62.184 78.624 63C78.696 63.228 78.804 63.6 78.888 63.816L77.856 64.092C77.832 63.816 77.772 63.504 77.688 63.216C77.436 62.352 76.152 57.516 75.876 56.628C75.792 56.34 75.696 56.1 75.588 55.908L76.62 55.656ZM82.38 57.312C81.876 58.32 80.64 60.012 79.812 60.816L78.972 60.384C79.716 59.748 80.628 58.632 81.036 57.924C80.508 58.02 74.892 59.148 74.04 59.328L73.8 58.416C74.136 58.38 74.436 58.344 74.796 58.272C75.396 58.176 80.628 57.192 81.312 57.036C81.468 57 81.648 56.94 81.768 56.88L82.38 57.312ZM86.724 54.216C87.564 54.78 89.112 56.028 89.772 56.688L89.028 57.456C88.416 56.832 86.928 55.536 86.028 54.948L86.724 54.216ZM85.692 62.256C87.78 61.944 89.34 61.212 90.48 60.504C92.34 59.34 93.792 57.564 94.488 56.076L95.064 57.108C94.248 58.596 92.856 60.228 91.044 61.368C89.832 62.124 88.32 62.868 86.316 63.24L85.692 62.256ZM99.6 53.784C100.308 54.18 101.688 55.104 102.216 55.488L101.652 56.304C101.076 55.86 99.768 54.996 99.072 54.6L99.6 53.784ZM97.8 62.364C99.12 62.136 100.608 61.656 101.832 60.972C103.824 59.832 105.408 58.26 106.368 56.568L106.956 57.564C105.912 59.172 104.256 60.72 102.336 61.848C101.124 62.556 99.468 63.108 98.364 63.336L97.8 62.364ZM97.8 56.484C98.508 56.868 99.912 57.732 100.428 58.104L99.876 58.944C99.288 58.512 97.992 57.684 97.26 57.3L97.8 56.484Z"
              fill="#274C77"
            />
            <g id="raphael:book">
              <path
                id="Vector"
                d="M22.33 23.9008C23.9428 23.9008 25.5369 23.6464 26.8343 23.1041L26.8347 23.104L54.8568 11.3607C54.8574 11.3604 54.858 11.3602 54.8586 11.36C55.0668 11.2751 55.2884 11.2468 55.506 11.2757C55.702 11.3018 55.8932 11.374 56.0666 11.4902L56.1237 11.5338C56.3104 11.676 56.4673 11.8692 56.5773 12.0999C56.6873 12.3306 56.746 12.5897 56.7462 12.8546L56.7462 54.3259L56.7462 54.3284C56.7479 54.6596 56.6568 54.9799 56.4901 55.2457C56.3236 55.511 56.0923 55.7059 55.8332 55.8126L55.8304 55.8138L27.797 67.5606C27.7967 67.5606 27.7965 67.5607 27.7963 67.5608C26.0731 68.2768 24.2001 68.5494 22.3309 68.5497C18.3556 68.4971 14.6916 67.4325 12.5511 65.6087C11.8784 64.9985 11.24 64.194 11.1868 62.9431L11.1829 62.8506V62.8344V21.4806V21.4331L11.1744 21.3887C11.1744 21.3889 11.1744 21.3887 11.1743 21.3882L11.1742 21.388L11.174 21.3866C11.171 20.4839 11.6257 19.6516 12.1631 19.1444L12.1631 19.1445L12.167 19.1407C12.733 18.5949 13.4073 18.2159 14.239 17.886L14.2391 17.8861L14.2479 17.8824L42.2678 6.14394C42.2684 6.1437 42.269 6.14346 42.2696 6.14322C42.4779 6.05838 42.6994 6.03006 42.9171 6.05897C43.1346 6.08787 43.3464 6.17375 43.5342 6.3135C43.7196 6.45581 43.8754 6.64847 43.9847 6.87822C44.0945 7.109 44.1528 7.36799 44.1529 7.63262V11.4849L41.0475 10.1978L40.855 10.118L40.6628 10.1985L15.1837 20.8742C15.0159 20.9381 14.863 21.0029 14.7264 21.069L13.9459 21.4466L14.6637 21.933C15.1234 22.2445 15.6115 22.5043 16.1206 22.708C17.7557 23.4033 20.0833 23.9056 22.33 23.9008ZM22.33 23.9008C22.3303 23.9008 22.3305 23.9008 22.3308 23.9008L22.3297 23.4008V23.9008C22.3298 23.9008 22.3299 23.9008 22.33 23.9008ZM11.173 21.3791C11.173 21.3792 11.1731 21.3799 11.1732 21.3813L11.173 21.3791ZM12.8921 28.0565L11.9268 28.2396L11.9247 34.7605L11.9246 35.0394L12.1618 35.186C14.9865 36.9317 18.5707 37.7308 22.2971 37.7944L22.2971 37.7945H22.3056C23.748 37.7945 25.2188 37.639 26.6791 37.2821L27.0604 37.1889V36.7964V32.4892V31.8072L26.41 32.0123C25.0838 32.4307 23.7104 32.6367 22.332 32.6245C18.6732 32.5914 15.3135 31.5182 13.7205 30.1238C13.4771 29.8892 13.3319 29.7229 13.2391 29.5622C13.1528 29.4128 13.0999 29.2469 13.0861 28.9975C13.086 28.9972 13.086 28.9969 13.086 28.9966L13.0795 28.8709L13.0791 28.8624L13.0784 28.854C13.0549 28.58 12.9922 28.3109 12.8921 28.0565ZM22.2986 59.6648L22.3023 59.6511L22.3023 59.6625C23.7735 59.6659 25.2405 59.4934 26.6772 59.1481L27.0604 59.056V58.662V54.3596V53.6702L26.4051 53.8843C25.1391 54.298 23.754 54.4851 22.329 54.4852C18.6705 54.4613 15.3135 53.3839 13.7226 51.9941C13.4785 51.7586 13.334 51.5925 13.2414 51.4317C13.1553 51.2821 13.1019 51.115 13.086 50.8614C13.0859 50.8606 13.0859 50.8598 13.0858 50.859L13.0796 50.7365L13.0792 50.7306C13.0612 50.4468 12.997 50.1678 12.8887 49.9066L11.9268 50.0981V56.6263V56.9047L12.1636 57.0513C14.9865 58.7998 18.5709 59.5963 22.2986 59.6648Z"
                fill="#274C77"
                stroke="#8B8C89"
              />
            </g>
          </g>
        </svg>
      </div>
      <div className="w-full flex justify-center items-center h-[78%]">
        <div className="mr-32 ml-10" id="form">
          <h1 className="font-montserrat text-[31px] font-semibold underline decoration-myGrey text-myBlue my-4">
            Sign Up
          </h1>
          <form onSubmit={signup}>
            <label htmlFor="email" className="font-montserrat">
              Email
            </label>
            <br />
            <input
              type="email"
              className="border-b-2 border-black rounded-sm text-myBlue h-9 w-[300px] mb-5 focus:outline-none text-[18px]"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <label htmlFor="firstName" className="font-montserrat">
              First Name
            </label>
            <br />
            <input
              type="text"
              className="border-b-2 border-black rounded-sm text-myBlue h-9 w-[300px] mb-5 focus:outline-none text-[18px]"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <br />
            <label htmlFor="lastName" className="font-montserrat">
              Last Name
            </label>
            <br />
            <input
              type="text"
              className="border-b-2 border-black rounded-sm text-myBlue h-9 w-[300px] mb-5 focus:outline-none text-[18px]"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <br />
            <label htmlFor="username" className="font-montserrat">
              Username
            </label>
            <br />
            <input
              type="text"
              className="border-b-2 border-black rounded-sm text-myBlue h-9 w-[300px] mb-5 focus:outline-none text-[18px]"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <br />
            <label htmlFor="password" className="font-montserrat">
              Password
            </label>
            <br />
            <input
              type="password"
              className="border-b-2 border-black rounded-sm text-myBlue h-9 w-[300px] mb-5 focus:outline-none text-[18px]"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <button
              type="submit"
              className="bg-myBlue text-white py-2 px-4 rounded">
              Sign Up
            </button>
            {error && <p className="text-red-500">{error}</p>}
            {success && <p className="text-green-500">{success}</p>}
          </form>
        </div>
        <svg
          width="762"
          height="440"
          viewBox="0 0 762 440"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_15_2)">
            <path
              d="M246.097 428.989C365.637 428.989 462.543 332.956 462.543 214.494C462.543 96.0324 365.637 0 246.097 0C126.557 0 29.6508 96.0324 29.6508 214.494C29.6508 332.956 126.557 428.989 246.097 428.989Z"
              fill="#F2F2F2"
            />
            <path
              d="M762 380.501C761.999 381.022 761.957 381.543 761.874 382.058C756.581 414.202 588.082 440 381 440C173.918 440 5.4185 414.202 0.12601 382.058C0.0432756 381.543 0.00114566 381.022 0 380.501C0 380.354 -2.48798e-06 380.199 0.0148224 380.052C0.0148224 379.972 0.0222364 379.898 0.0222364 379.817C0.0283591 379.788 0.0308503 379.759 0.0296505 379.729C0.0593003 379.399 0.103775 379.083 0.163075 378.76C2.57953 365.618 32.2961 353.542 80.7661 343.868C120.408 335.957 172.599 329.647 232.669 325.68C278.256 322.669 328.379 321.001 381 321.001C423.34 321.001 464.064 322.081 502.105 324.064H502.119C510.08 324.483 517.923 324.941 525.647 325.438C578.52 328.832 625.44 334.025 663.244 340.526C686.497 344.529 706.31 349.032 721.943 353.909H721.951C746.011 361.424 760.199 369.849 761.837 378.76C761.896 379.083 761.941 379.399 761.97 379.729C761.969 379.759 761.972 379.788 761.978 379.817C761.978 379.898 761.985 379.972 761.985 380.052C762 380.199 762 380.354 762 380.501Z"
              fill="#3F3D56"
            />
            <path
              opacity="0.1"
              d="M371.364 437.796C438.911 437.796 493.669 429.903 493.669 420.167C493.669 410.43 438.911 402.537 371.364 402.537C303.816 402.537 249.058 410.43 249.058 420.167C249.058 429.903 303.816 437.796 371.364 437.796Z"
              fill="black"
            />
            <path
              opacity="0.1"
              d="M721.943 353.909C717.666 355.121 712.848 356.245 707.563 357.274C685.8 361.519 656.106 364.127 623.409 364.127C586.881 364.127 554.14 360.873 531.955 355.724C513.542 351.449 502.394 345.888 502.394 339.784C502.394 334.422 511.022 329.456 525.647 325.438C578.52 328.832 625.44 334.025 663.244 340.526C686.497 344.529 706.31 349.032 721.943 353.909Z"
              fill="black"
            />
            <path
              opacity="0.1"
              d="M394.342 345.793C394.342 356.906 323.983 365.92 237.198 365.92C150.413 365.92 80.0545 356.906 80.0545 345.793C80.0732 345.091 80.3231 344.415 80.7661 343.868C120.408 335.957 172.599 329.647 232.669 325.68C234.174 325.673 235.684 325.67 237.198 325.673C323.983 325.673 394.342 334.679 394.342 345.793Z"
              fill="black"
            />
            <path
              d="M339.607 246.059H308.708V344.92H339.607V246.059Z"
              fill="#274C77"
            />
            <path
              d="M238.081 199.691H207.182V344.92H238.081V199.691Z"
              fill="#274C77"
            />
            <path
              d="M137.439 199.691H106.539V344.92H137.439V199.691Z"
              fill="#274C77"
            />
            <path
              d="M187.76 199.691H156.861V298.552H187.76V199.691Z"
              fill="#274C77"
            />
            <path
              d="M288.403 199.691H257.504V228.562H288.403V199.691Z"
              fill="#274C77"
            />
            <path
              d="M288.403 246.059H257.504V344.92H288.403V246.059Z"
              fill="#8A8B8C"
            />
            <path
              d="M389.928 199.691H308.708V228.562H389.928V199.691Z"
              fill="#274C77"
            />
            <path
              d="M604.161 191.007C625.285 191.007 643.266 198.313 658.104 212.926C665.092 219.797 670.598 228.003 674.287 237.048C681.638 255.551 681.663 276.123 674.357 294.644C670.724 303.584 665.234 311.666 658.243 318.366C651.055 325.462 642.533 331.092 633.158 334.938C623.973 338.737 614.118 340.69 604.165 340.684C594.325 340.714 584.579 338.782 575.508 335.004C557.028 327.208 542.311 312.625 534.443 294.312C526.868 276.05 526.892 255.559 534.509 237.314C538.368 228.128 544.029 219.792 551.164 212.79C565.548 198.271 583.214 191.01 604.161 191.007ZM604.434 204.506C587.173 204.506 572.653 210.476 560.873 222.414C555.065 228.198 550.419 235.023 547.185 242.527C544.025 249.88 542.396 257.789 542.396 265.78C542.396 273.772 544.025 281.681 547.185 289.033C553.699 304.026 565.801 315.949 580.969 322.316C588.422 325.37 596.411 326.937 604.476 326.926C612.542 326.914 620.526 325.326 627.971 322.25C635.629 319.088 642.608 314.508 648.534 308.754C660.311 297.35 666.198 283.049 666.196 265.852C666.24 257.789 664.682 249.797 661.611 242.331C658.544 234.919 654.006 228.192 648.267 222.55C636.123 210.522 621.512 204.507 604.434 204.506ZM603.488 253.421L593.371 258.634C592.554 256.712 591.167 255.08 589.394 253.957C588.074 253.142 586.563 252.682 585.009 252.621C578.269 252.621 574.897 257.031 574.894 265.852C574.894 269.86 575.748 273.067 577.455 275.471C579.163 277.877 581.681 279.081 585.009 279.082C589.415 279.082 592.518 276.944 594.317 272.667L603.62 277.344C601.721 280.917 598.867 283.904 595.371 285.978C591.875 288.052 587.871 289.134 583.796 289.106C577.053 289.106 571.614 287.056 567.476 282.957C563.342 278.86 561.274 273.159 561.274 265.854C561.274 258.725 563.364 253.068 567.545 248.882C571.724 244.695 577.007 242.601 583.392 242.6C592.745 242.595 599.444 246.202 603.488 253.421ZM647.047 253.421L637.067 258.634C636.25 256.711 634.862 255.08 633.088 253.957C631.725 253.129 630.168 252.669 628.57 252.621C621.828 252.621 618.455 257.031 618.453 265.852C618.453 269.86 619.307 273.067 621.016 275.471C622.722 277.877 625.24 279.081 628.57 279.082C632.972 279.082 636.072 276.944 637.871 272.667L647.311 277.344C645.342 280.898 642.459 283.872 638.955 285.965C635.502 288.045 631.533 289.132 627.492 289.106C620.657 289.106 615.197 287.056 611.111 282.957C607.014 278.86 604.967 273.159 604.97 265.854C604.97 258.725 607.061 253.068 611.243 248.882C615.42 244.695 620.701 242.601 627.086 242.6C636.436 242.595 643.09 246.202 647.047 253.421Z"
              fill="#274C77"
            />
            <path
              opacity="0.1"
              d="M558.467 374.872C558.467 410.673 508.111 399.6 446.455 399.6C384.799 399.6 335.191 410.673 335.191 374.872C335.191 339.072 385.54 331.285 447.196 331.285C508.852 331.285 558.467 339.072 558.467 374.872Z"
              fill="black"
            />
            <path
              d="M558.467 366.058C558.467 401.858 508.111 390.785 446.455 390.785C384.799 390.785 335.191 401.858 335.191 366.058C335.191 330.257 385.54 322.471 447.196 322.471C508.852 322.471 558.467 330.257 558.467 366.058Z"
              fill="#3F3D56"
            />
            <path
              d="M548.182 301.788L550.727 312.192C550.755 312.308 550.751 312.43 550.714 312.543L539.169 348.297C539.123 348.439 539.03 348.56 538.904 348.642C538.779 348.724 538.629 348.76 538.48 348.746C538.331 348.731 538.191 348.666 538.084 348.562C537.977 348.458 537.91 348.32 537.893 348.172L536.295 334.244C536.285 334.152 536.294 334.058 536.324 333.969L546.921 301.74C546.965 301.606 547.052 301.489 547.169 301.408C547.286 301.327 547.427 301.287 547.57 301.292C547.712 301.298 547.849 301.349 547.96 301.439C548.07 301.528 548.148 301.651 548.182 301.788Z"
              fill="#2F2E41"
            />
            <path
              d="M547.245 302.667L549.595 311.593L539.412 344.195L537.062 334.104L547.245 302.667Z"
              fill="#F2F2F2"
            />
            <path
              d="M495.94 351.181C496.332 352.345 536.671 350.793 537.063 350.404C537.404 349.918 537.693 349.398 537.924 348.852C538.292 348.076 538.629 347.3 538.629 347.3L537.063 334.733L497.115 333.328C497.115 333.328 496.117 343.977 495.913 348.852C495.844 349.627 495.853 350.407 495.94 351.181Z"
              fill="#2F2E41"
            />
            <path
              opacity="0.1"
              d="M531.972 336.432L532.754 347.3H515.131V336.432H531.972Z"
              fill="black"
            />
            <path
              opacity="0.1"
              d="M509.256 339.925L509.361 339.905L508.865 344.582H499.074V339.925H509.256Z"
              fill="black"
            />
            <path
              opacity="0.1"
              d="M495.94 351.181C496.332 352.345 536.671 350.793 537.063 350.404C537.404 349.918 537.693 349.398 537.924 348.852H495.913C495.844 349.627 495.853 350.407 495.94 351.181Z"
              fill="black"
            />
            <path
              d="M433.669 310.429H444.635L471.659 299.95C471.659 299.95 490.849 292.188 489.283 306.936C487.716 321.684 484.974 341.478 484.974 341.478C484.974 341.478 476.358 337.597 471.659 338.761C466.959 339.925 470.092 315.086 470.092 315.086C470.092 315.086 431.711 333.328 428.187 330.999C424.662 328.67 423.878 312.37 423.878 312.37L433.669 310.429Z"
              fill="#2F2E41"
            />
            <path
              opacity="0.1"
              d="M433.669 310.429H444.635L471.659 299.95C471.659 299.95 490.849 292.188 489.283 306.936C487.716 321.684 484.974 341.478 484.974 341.478C484.974 341.478 476.358 337.597 471.659 338.761C466.959 339.925 470.092 315.086 470.092 315.086C470.092 315.086 431.711 333.328 428.187 330.999C424.662 328.67 423.878 312.37 423.878 312.37L433.669 310.429Z"
              fill="black"
            />
            <path
              d="M450.946 276.397L464.217 295.293L495.157 320.908C495.157 320.908 523.747 327.506 519.83 332.163C515.914 336.821 492.024 327.506 492.024 327.506C492.024 327.506 456.385 301.891 455.21 299.95C454.035 298.01 441.111 279.769 441.111 279.769L450.946 276.397Z"
              fill="#A0616A"
            />
            <path
              opacity="0.1"
              d="M450.946 276.397L464.217 295.293L495.157 320.908C495.157 320.908 523.747 327.506 519.83 332.163C515.914 336.821 492.024 327.506 492.024 327.506C492.024 327.506 456.385 301.891 455.21 299.95C454.035 298.01 441.111 279.769 441.111 279.769L450.946 276.397Z"
              fill="black"
            />
            <path
              d="M448.943 255.706C458.677 255.706 466.567 247.886 466.567 238.241C466.567 228.595 458.677 220.776 448.943 220.776C439.21 220.776 431.32 228.595 431.32 238.241C431.32 247.886 439.21 255.706 448.943 255.706Z"
              fill="#A0616A"
            />
            <path
              d="M447.769 253.765C447.769 253.765 441.894 263.856 440.719 269.29C439.544 274.723 423.095 258.423 423.095 258.423L420.941 252.795C420.941 252.795 436.411 245.615 435.236 239.793C434.061 233.972 447.769 253.765 447.769 253.765Z"
              fill="#A0616A"
            />
            <path
              d="M443.069 261.139L451.685 277.828C451.685 277.828 449.727 285.978 446.594 286.755C443.461 287.531 430.145 276.664 430.145 276.664L443.069 261.139Z"
              fill="#D0CDE1"
            />
            <path
              d="M450.902 284.038L466.959 304.996L505.34 333.328C505.34 333.328 533.146 339.149 526.88 343.418C520.614 347.688 502.598 339.537 502.598 339.537C502.598 339.537 463.826 318.968 455.601 310.429C447.377 301.891 432.103 287.531 432.103 287.531L450.902 284.038Z"
              fill="#A0616A"
            />
            <path
              d="M429.361 316.639L434.061 324.013L462.109 315.268C465.148 314.295 468.363 313.987 471.533 314.366C474.704 314.745 477.753 315.802 480.471 317.464C485.366 320.52 488.499 325.371 481.45 332.551C467.351 346.911 457.951 339.149 457.951 339.149C457.951 339.149 410.563 361.271 402.73 350.404C394.897 339.537 394.505 334.104 394.505 334.104C394.505 334.104 424.662 315.475 429.361 316.639Z"
              fill="#2F2E41"
            />
            <path
              d="M488.108 342.254C488.108 342.254 500.64 350.404 485.758 354.286C470.875 358.167 459.909 352.733 459.909 352.733C459.909 352.733 446.985 352.733 446.985 346.135C446.985 339.537 451.293 338.761 451.293 338.761L464.609 340.702C464.609 340.702 480.666 336.432 488.108 342.254Z"
              fill="#D0CDE1"
            />
            <path
              d="M463.401 233.847C464.559 234.465 465.804 234.907 467.094 235.158C467.743 235.273 468.411 235.198 469.016 234.941C469.621 234.684 470.137 234.257 470.501 233.712C470.789 233.067 470.921 232.364 470.887 231.659C470.935 229.528 470.779 227.224 469.416 225.575C468.549 224.525 467.283 223.863 466.385 222.839C465.782 222.072 465.268 221.239 464.853 220.358C463.107 217.108 460.522 213.985 456.929 213.048C455.41 212.725 453.854 212.607 452.303 212.698L443.256 212.824C441.79 212.777 440.325 212.934 438.903 213.288C435.991 214.161 433.87 216.588 431.928 218.909C430.421 220.601 429.081 222.433 427.928 224.379C426.365 227.269 425.574 230.507 425.632 233.785C425.62 234.626 425.729 235.464 425.957 236.274C426.224 237.017 426.554 237.735 426.944 238.422C428.641 241.725 429.649 245.85 427.738 249.036C431.057 247.692 434.341 245.931 436.531 243.117C437.511 241.858 438.279 240.384 439.584 239.461C440.89 238.537 443.017 238.457 443.854 239.813C444.142 240.361 444.291 240.971 444.286 241.589C444.26 242.61 444.428 243.627 444.781 244.587C444.971 245.062 445.318 245.459 445.766 245.712C446.213 245.965 446.735 246.059 447.244 245.979C448.949 245.503 448.786 242.91 450.099 241.732C451.096 240.837 452.635 241.008 453.917 240.602C454.651 240.325 455.319 239.9 455.879 239.354C456.439 238.808 456.878 238.152 457.168 237.428C457.653 236.35 457.646 233.528 458.564 232.944C459.716 232.212 462.334 233.376 463.401 233.847Z"
              fill="#2F2E41"
            />
            <path
              d="M419.542 250.954C420.335 250.744 421.17 250.746 421.961 250.96C424.476 251.629 430.111 253.4 431.32 256.094C432.886 259.587 438.369 265.02 438.369 265.02C438.369 265.02 445.81 272.395 444.244 277.44C442.677 282.485 436.803 288.307 436.803 288.307C436.803 288.307 438.369 312.37 430.536 318.58C422.704 324.789 419.57 320.52 419.57 326.342C419.57 332.163 395.289 350.404 390.589 339.149C390.589 339.149 392.939 318.191 392.156 310.817C391.384 303.55 392.514 258.205 419.542 250.954Z"
              fill="#D0CDE1"
            />
            <path
              d="M432.103 260.751C432.103 260.751 455.993 278.216 451.685 285.59C451.685 285.59 437.194 292.576 434.061 292.188C430.928 291.8 418.787 278.216 415.654 277.052C412.521 275.887 410.954 254.93 432.103 260.751Z"
              fill="#D0CDE1"
            />
            <path
              d="M366.035 276.402C362.319 277.645 358.953 280.553 358.192 284.366C357.839 286.133 358.056 287.971 357.759 289.748C357.07 293.87 353.805 297.018 350.794 299.942C347.782 302.866 344.672 306.264 344.453 310.436C344.212 315.005 347.556 319.286 346.977 323.825C346.305 329.098 340.684 332.515 339.295 337.649C338.367 341.077 339.504 344.77 341.374 347.797C344.939 353.565 351.031 357.481 357.519 359.58C364.007 361.679 370.917 362.121 377.742 362.192C386.052 362.278 395.074 361.571 401.318 356.136C404.885 353.004 407.124 348.651 407.588 343.951C408.181 337.655 405.53 331.15 407.359 325.093C408.51 321.28 411.396 317.799 410.966 313.842C410.544 309.974 407.135 307.232 404.796 304.107C402.612 301.189 401.287 297.743 399.989 294.346L395.545 282.722C394.671 280.437 393.712 278.034 391.765 276.534C388.121 273.727 382.261 274.278 377.999 274.858C374.046 275.395 369.837 275.129 366.035 276.402Z"
              fill="#2F2E41"
            />
            <path
              d="M367.426 310.261C367.426 310.261 369.396 316.605 354.622 323.926C339.849 331.246 356.1 339.054 356.1 339.054L373.336 342.958C373.336 342.958 391.064 340.518 393.034 337.59C395.004 334.662 398.451 324.902 397.467 323.438C396.73 322.395 395.906 321.416 395.004 320.509C395.004 320.509 383.185 318.557 383.678 313.189C384.17 307.821 367.426 310.261 367.426 310.261Z"
              fill="#FFB9B9"
            />
            <path
              opacity="0.1"
              d="M367.426 310.261C367.426 310.261 369.396 316.605 354.622 323.926C339.849 331.246 356.1 339.054 356.1 339.054L373.336 342.958C373.336 342.958 391.064 340.518 393.034 337.59C395.004 334.662 398.451 324.902 397.467 323.438C396.73 322.395 395.906 321.416 395.004 320.509C395.004 320.509 383.185 318.557 383.678 313.189C384.17 307.821 367.426 310.261 367.426 310.261Z"
              fill="black"
            />
            <path
              d="M377.029 320.265C385.733 320.265 392.788 313.274 392.788 304.649C392.788 296.024 385.733 289.032 377.029 289.032C368.326 289.032 361.271 296.024 361.271 304.649C361.271 313.274 368.326 320.265 377.029 320.265Z"
              fill="#FFB9B9"
            />
            <path
              d="M375.306 337.59C375.306 337.59 356.327 336.215 355.967 323.238C355.967 323.238 349.205 322.461 347.235 324.414C345.266 326.366 338.864 327.83 338.864 332.71C338.864 337.59 349.698 352.231 349.698 352.231C349.698 352.231 355.607 371.751 353.145 375.168C350.683 378.584 350.19 387.368 350.19 387.368C350.19 387.368 374.813 385.416 378.753 387.368C382.693 389.32 398.451 389.32 399.436 387.368C400.421 385.416 398.451 361.015 398.451 361.015C398.451 361.015 402.884 355.159 401.899 348.326L413.718 334.662C413.718 334.662 409.286 321.485 402.391 321.485C402.391 321.485 393.034 319.045 392.788 320.265C392.542 321.485 397.466 335.15 375.306 337.59Z"
              fill="#FF6584"
            />
            <path
              d="M330.984 380.536C330.984 380.536 335.416 387.368 346.743 388.832C358.07 390.296 360.039 386.392 359.055 385.416C358.07 384.44 346.251 380.048 346.251 380.048L339.356 374.68L330.984 380.536Z"
              fill="#FFB9B9"
            />
            <path
              d="M411.748 374.68L398.944 382C398.944 382 382.2 381.024 388.602 385.904C395.004 390.784 406.823 388.832 406.823 388.832L418.15 383.464L411.748 374.68Z"
              fill="#FFB9B9"
            />
            <path
              d="M347.728 387.368C347.728 387.368 335.909 416.161 350.19 420.554C364.472 424.946 403.868 423.97 412.733 418.113C421.597 412.257 424.059 404.449 422.582 402.009C421.105 399.569 411.255 392.736 404.361 392.248C397.466 391.76 347.728 387.368 347.728 387.368Z"
              fill="#2F2E41"
            />
            <path
              opacity="0.05"
              d="M347.728 387.368C347.728 387.368 335.909 416.161 350.19 420.554C364.472 424.946 403.868 423.97 412.733 418.113C421.597 412.257 424.059 404.449 422.582 402.009C421.105 399.569 411.255 392.736 404.361 392.248C397.466 391.76 347.728 387.368 347.728 387.368Z"
              fill="black"
            />
            <path
              d="M403.517 389.157C403.517 389.157 445.235 374.192 444.743 392.248C444.25 410.305 418.15 415.185 418.15 415.185L410.27 416.161L366.934 417.625C366.934 417.625 368.411 409.817 364.964 408.841C364.964 408.841 376.291 405.913 376.783 405.425C377.276 404.937 405.346 395.176 407.316 394.688C409.286 394.2 415.195 390.296 419.627 390.784C419.627 390.784 424.552 386.88 429.969 387.856L414.703 388.832L403.517 389.157Z"
              fill="#2F2E41"
            />
            <path
              opacity="0.1"
              d="M403.517 389.157C403.517 389.157 445.235 374.192 444.743 392.248C444.25 410.305 418.15 415.185 418.15 415.185L410.27 416.161L366.934 417.625C366.934 417.625 368.411 409.817 364.964 408.841C364.964 408.841 376.291 405.913 376.783 405.425C377.276 404.937 405.346 395.176 407.316 394.688C409.286 394.2 415.195 390.296 419.627 390.784C419.627 390.784 424.552 386.88 429.969 387.856L414.703 388.832L403.517 389.157Z"
              fill="black"
            />
            <path
              d="M396.147 391.58L401.406 403.473L433.416 392.248L435.879 385.904L427.506 384.44L410.676 387.368L403.376 389.32L396.147 391.58Z"
              fill="#2F2E41"
            />
            <path
              opacity="0.1"
              d="M396.147 391.58L401.406 403.473L433.416 392.248L435.879 385.904L427.506 384.44L410.676 387.368L403.376 389.32L396.147 391.58Z"
              fill="black"
            />
            <path
              d="M328.029 405.913C328.029 405.913 337.386 417.625 348.22 420.553C359.055 423.482 364.964 419.577 364.964 419.577L361.517 405.913L360.039 397.129L353.637 392.736L340.833 386.88L325.567 382C325.567 382 319.165 381.024 319.165 382C319.165 382.976 325.075 397.617 325.075 397.617L328.029 405.913Z"
              fill="#2F2E41"
            />
            <path
              d="M339.356 412.257C339.356 412.257 341.326 426.41 343.788 427.386C346.251 428.362 353.637 426.41 355.607 425.434C357.577 424.458 364.273 419.954 364.273 419.954C364.273 419.954 340.833 411.281 339.356 412.257Z"
              fill="#F2F2F2"
            />
            <path
              d="M384.17 413.722L393.527 415.185L392.542 426.41L379.491 423.269L384.17 413.722Z"
              fill="#FFB9B9"
            />
            <path
              d="M390.033 416.845C390.033 416.845 385.647 422.018 390.08 424.946L393.034 427.386C393.034 427.386 402.884 429.338 403.868 430.314C404.853 431.29 408.793 428.85 408.793 428.85C408.793 428.85 409.286 414.209 408.793 413.233C408.301 412.257 402.391 411.281 401.899 412.257C401.406 413.233 395.497 414.697 392.049 413.721L390.033 416.845Z"
              fill="#F2F2F2"
            />
            <path
              d="M350.683 390.784C350.683 390.784 316.21 370.775 310.793 378.096C305.376 385.416 299.467 395.665 315.225 403.473C330.984 411.281 380.23 427.386 380.23 427.386C380.23 427.386 387.617 416.161 387.617 413.233C387.617 413.233 361.517 401.521 357.085 400.545C352.653 399.569 334.924 388.344 332.462 387.368C329.999 386.392 326.552 383.464 326.552 383.464L350.683 390.784Z"
              fill="#2F2E41"
            />
            <path
              d="M340.833 330.27L338.864 331.734C338.864 331.734 334.431 342.958 333.939 349.303C333.447 355.647 327.537 375.168 328.029 377.608C328.522 380.048 329.014 382 331.969 384.44C331.969 384.44 335.909 375.656 342.803 377.12L351.175 346.862L340.833 330.27Z"
              fill="#FF6584"
            />
            <path
              d="M409.778 330.27L413.718 334.662C413.718 334.662 416.18 340.518 416.18 341.982C416.18 343.446 421.105 364.919 421.597 365.895C422.09 366.871 424.059 379.072 421.597 382C419.135 384.928 414.703 386.88 414.703 386.88C414.703 386.88 417.657 376.632 408.301 376.144L409.286 372.239L400.421 342.958L409.778 330.27Z"
              fill="#FF6584"
            />
            <path
              d="M341.818 363.869V389.575C341.818 391.198 342.463 392.756 343.612 393.913C344.762 395.069 346.325 395.731 347.962 395.755L402.211 396.551C403.839 396.575 405.412 395.967 406.594 394.856C407.776 393.746 408.472 392.222 408.535 390.609L409.533 364.9C409.564 364.077 409.43 363.255 409.137 362.484C408.844 361.713 408.398 361.008 407.826 360.41C407.253 359.812 406.566 359.333 405.805 359.003C405.043 358.672 404.223 358.495 403.391 358.483L348.145 357.69C347.319 357.678 346.498 357.829 345.731 358.134C344.964 358.439 344.266 358.893 343.677 359.468C343.088 360.043 342.621 360.728 342.302 361.484C341.983 362.239 341.818 363.05 341.818 363.869Z"
              fill="#3F3D56"
            />
            <path
              d="M377.954 304.148C387.322 304.148 394.916 300.096 394.916 295.097C394.916 290.098 387.322 286.045 377.954 286.045C368.585 286.045 360.991 290.098 360.991 295.097C360.991 300.096 368.585 304.148 377.954 304.148Z"
              fill="#2F2E41"
            />
            <path
              d="M375.06 381.268C377.235 381.268 378.999 379.52 378.999 377.364C378.999 375.208 377.235 373.46 375.06 373.46C372.884 373.46 371.12 375.208 371.12 377.364C371.12 379.52 372.884 381.268 375.06 381.268Z"
              fill="#F2F2F2"
            />
          </g>
          <defs>
            <clipPath id="clip0_15_2">
              <rect width="762" height="440" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default SignupForm;
