import { Tooltip } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Logo from "../../public/github.svg";
import { useAppMax, useAppOpen, useAppStore } from "../apps/createAppStore";
import { format } from "date-fns";

const Index = () => {
  const appName = useAppStore((state) => state.appName);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [open, setClose] = useAppOpen((state) => [state.open, state.setClose]);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [max, setMax, setMin] = useAppMax((state) => [
    state.max,
    state.setMax,
    state.setMin,
  ]);
  const [openMenu, setOpenMenu] = useState(false);
  console.log(open);

  const handleClickClose = () => {
    setClose(true);
  };
  const handleClickMaximize = () => {
    if (max === true) {
      setMin(true);
    } else if (max === false) {
      setMax(true);
    }
  };

  const [date, setDate] = useState(new Date());

  useEffect(() => {
    let timer = setTimeout(() => setDate(new Date()), 60 * 1000);
    return () => clearTimeout(timer);
  }, [date]);

  return (
    <>
      <nav className="w-full bg-[#15294a] text-white h-10 flex justify-center items-center flex-row space-x-4 pl-5 pr-5">
        <div className="flex flex-row space-x-4 justify-center items-center place-items-center">
          <div className="h-6 w-6 cursor-pointer">
            <Link href="https://github.com/MotionbyFabi/Private-School-Portfolio">
              <Image src={Logo} alt="github Logo" />
            </Link>
          </div>
          <h1 className="w-max">{appName}</h1>
        </div>
        <ul className="w-full flex flex-row space-x-4">
          <Tooltip
            open={openMenu}
            className="glass-background-tooltip origin-top-left  text-black text-[16px] px-[8px] py-[2px]"
            animate={{
              mount: { opacity: 1, scale: 1, y: 0 },
              unmount: { opacity: 0, scale: 0, y: -5 },
            }}
            placement="bottom-start"
            content={
              <div className="flex flex-col space-y-2">
                <ul>
                  <li
                    className="cursor-pointer"
                    onClick={() => handleClickClose()}
                  >
                    Close Window
                  </li>
                  <hr className="opacity-[0.2] h-[0.2px]" />
                  <li
                    className="cursor-pointer"
                    onClick={() => handleClickMaximize()}
                  >
                    Maximize Window
                  </li>
                </ul>
              </div>
            }
            offset={10}
          >
            <li
              onClick={() => setOpenMenu(!openMenu)}
              className="cursor-pointer"
            >
              File
            </li>
          </Tooltip>

          <li>Edit</li>
          <li>View</li>
          <li>Window</li>
          <li>Help</li>
        </ul>
        <svg
          width="100"
          height="20"
          viewBox="0 0 232 57"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M223.1 17.9427L223.1 39.3586C223.1 42.4884 223.1 45.1851 222.81 47.3446C222.499 49.659 221.797 51.8774 219.998 53.6768C218.198 55.4762 215.98 56.1779 213.666 56.4891C211.506 56.7794 208.809 56.7793 205.68 56.7791L141.664 56.7791C138.534 56.7793 135.838 56.7794 133.678 56.4891C131.364 56.1779 129.145 55.4762 127.346 53.6768C125.547 51.8774 124.845 49.659 124.534 47.3446C124.243 45.1851 124.244 42.4884 124.244 39.3585L124.244 17.7103C124.244 14.5805 124.243 11.8837 124.534 9.7242C124.845 7.40985 125.547 5.1914 127.346 3.392C129.145 1.59259 131.364 0.890908 133.678 0.579751C135.838 0.289412 138.534 0.289563 141.664 0.289739L205.447 0.28975C205.525 0.28975 205.602 0.289746 205.68 0.289742C208.809 0.289566 211.506 0.289415 213.666 0.579754C215.98 0.890912 218.198 1.5926 219.998 3.392C221.797 5.19141 222.499 7.40985 222.81 9.72421C223.1 11.8837 223.1 14.5804 223.1 17.7102C223.1 17.7875 223.1 17.8649 223.1 17.9427ZM217.501 5.8885C215.433 3.82033 212.104 3.82033 205.447 3.82033L141.897 3.82033C135.239 3.82033 131.911 3.82033 129.842 5.8885C127.774 7.95667 127.774 11.2853 127.774 17.9427L127.774 39.1262C127.774 45.7835 127.774 49.1122 129.842 51.1803C131.911 53.2485 135.239 53.2485 141.897 53.2485L205.447 53.2485C212.104 53.2485 215.433 53.2485 217.501 51.1803C219.569 49.1122 219.569 45.7835 219.569 39.1262L219.569 17.9427C219.569 11.2853 219.569 7.95667 217.501 5.8885Z"
            fill="#CCD2E3"
          />
          <path
            d="M209.684 9.9989C211.015 9.9989 211.681 9.9989 212.095 10.4125C212.508 10.8262 212.508 11.4919 212.508 12.8234L212.508 44.2456C212.508 45.577 212.508 46.2428 212.095 46.6564C211.681 47.07 211.015 47.07 209.684 47.07L137.66 47.07C136.328 47.07 135.663 47.07 135.249 46.6564C134.835 46.2428 134.835 45.577 134.835 44.2456L134.835 12.8234C134.835 11.4919 134.835 10.8262 135.249 10.4125C135.663 9.9989 136.328 9.9989 137.66 9.9989L209.684 9.9989Z"
            fill="white"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M216.039 12.8235L216.039 44.2457C216.039 44.285 216.039 44.3252 216.039 44.3664C216.04 44.9192 216.04 45.638 215.956 46.2658C215.851 47.0418 215.563 48.1809 214.591 49.1531C213.619 50.1252 212.48 50.4132 211.704 50.5176C211.076 50.602 210.357 50.6013 209.805 50.6008C209.763 50.6008 209.723 50.6008 209.684 50.6008L137.66 50.6008C137.621 50.6008 137.581 50.6008 137.539 50.6008C136.986 50.6013 136.268 50.602 135.64 50.5176C134.864 50.4132 133.725 50.1252 132.753 49.1531C131.781 48.1809 131.492 47.0418 131.388 46.2658C131.304 45.638 131.304 44.9192 131.305 44.3664C131.305 44.3252 131.305 44.2849 131.305 44.2457L131.305 12.8235C131.305 12.7843 131.305 12.7441 131.305 12.7029C131.304 12.15 131.304 11.4312 131.388 10.8035C131.492 10.0274 131.781 8.88833 132.753 7.91619C133.725 6.94405 134.864 6.656 135.64 6.55166C136.268 6.46726 136.986 6.4679 137.539 6.4684C137.581 6.46843 137.621 6.46847 137.66 6.46847L209.684 6.46847C209.723 6.46847 209.763 6.46844 209.805 6.4684C210.357 6.46791 211.076 6.46726 211.704 6.55166C212.48 6.656 213.619 6.94405 214.591 7.91619C215.563 8.88833 215.851 10.0274 215.956 10.8035C216.04 11.4312 216.04 12.15 216.039 12.7028C216.039 12.744 216.039 12.7843 216.039 12.8235ZM212.095 10.4127C211.681 9.99906 211.015 9.99906 209.684 9.99906L137.66 9.99905C136.329 9.99905 135.663 9.99905 135.249 10.4127C134.836 10.8263 134.836 11.4921 134.836 12.8235L134.836 44.2457C134.836 45.5772 134.836 46.2429 135.249 46.6566C135.663 47.0702 136.329 47.0702 137.66 47.0702L209.684 47.0702C211.015 47.0702 211.681 47.0702 212.095 46.6566C212.508 46.2429 212.508 45.5772 212.508 44.2457L212.508 12.8235C212.508 11.4921 212.508 10.8263 212.095 10.4127Z"
            fill="white"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M225.085 20.7618C225.191 22.609 225.19 24.6366 225.19 26.7044L225.19 27.0886L225.19 29.9801L225.19 30.3643C225.19 32.4324 225.191 34.4603 225.085 36.3077C225.153 36.3047 225.216 36.3008 225.276 36.296C228.729 36.0178 231.469 33.2769 231.748 29.8247C231.77 29.5416 231.77 29.206 231.77 28.5347C231.77 27.8635 231.77 27.5278 231.748 27.2447C231.469 23.7925 228.729 21.0517 225.276 20.7735C225.216 20.7686 225.153 20.7648 225.085 20.7618Z"
            fill="#CCD2E3"
          />
          <path
            d="M11.6638 15.3751V46.1875H7.93261V19.2868H7.75207L0.229515 24.2818V20.4905L7.93261 15.3751H11.6638Z"
            fill="white"
          />
          <path
            d="M30.5755 46.6087C28.3087 46.6087 26.3779 45.9919 24.7831 44.7582C23.1883 43.5145 21.9697 41.7141 21.1272 39.357C20.2846 36.9899 19.8634 34.1313 19.8634 30.7813C19.8634 27.4513 20.2846 24.6078 21.1272 22.2507C21.9797 19.8836 23.2034 18.0782 24.7982 16.8345C26.403 15.5807 28.3287 14.9539 30.5755 14.9539C32.8222 14.9539 34.743 15.5807 36.3378 16.8345C37.9426 18.0782 39.1662 19.8836 40.0088 22.2507C40.8613 24.6078 41.2876 27.4513 41.2876 30.7813C41.2876 34.1313 40.8663 36.9899 40.0238 39.357C39.1813 41.7141 37.9626 43.5145 36.3678 44.7582C34.7731 45.9919 32.8423 46.6087 30.5755 46.6087ZM30.5755 43.2988C32.8222 43.2988 34.5675 42.2156 35.8112 40.0491C37.0549 37.8826 37.6768 34.7933 37.6768 30.7813C37.6768 28.1133 37.3909 25.8415 36.8192 23.9659C36.2575 22.0902 35.4451 20.661 34.3819 19.678C33.3287 18.6951 32.0599 18.2036 30.5755 18.2036C28.3488 18.2036 26.6086 19.3019 25.3548 21.4985C24.1011 23.685 23.4742 26.7793 23.4742 30.7813C23.4742 33.4493 23.755 35.7161 24.3167 37.5817C24.8784 39.4473 25.6858 40.8665 26.739 41.8395C27.8022 42.8124 29.081 43.2988 30.5755 43.2988Z"
            fill="white"
          />
          <path
            d="M57.0549 46.6087C54.7881 46.6087 52.8573 45.9919 51.2625 44.7582C49.6677 43.5145 48.4491 41.7141 47.6065 39.357C46.764 36.9899 46.3427 34.1313 46.3427 30.7813C46.3427 27.4513 46.764 24.6078 47.6065 22.2507C48.4591 19.8836 49.6828 18.0782 51.2775 16.8345C52.8824 15.5807 54.8081 14.9539 57.0549 14.9539C59.3016 14.9539 61.2224 15.5807 62.8171 16.8345C64.422 18.0782 65.6456 19.8836 66.4881 22.2507C67.3407 24.6078 67.767 27.4513 67.767 30.7813C67.767 34.1313 67.3457 36.9899 66.5032 39.357C65.6607 41.7141 64.442 43.5145 62.8472 44.7582C61.2524 45.9919 59.3217 46.6087 57.0549 46.6087ZM57.0549 43.2988C59.3016 43.2988 61.0468 42.2156 62.2906 40.0491C63.5343 37.8826 64.1562 34.7933 64.1562 30.7813C64.1562 28.1133 63.8703 25.8415 63.2986 23.9659C62.7369 22.0902 61.9245 20.661 60.8613 19.678C59.8081 18.6951 58.5393 18.2036 57.0549 18.2036C54.8282 18.2036 53.088 19.3019 51.8342 21.4985C50.5805 23.685 49.9536 26.7793 49.9536 30.7813C49.9536 33.4493 50.2344 35.7161 50.7961 37.5817C51.3578 39.4473 52.1652 40.8665 53.2184 41.8395C54.2815 42.8124 55.5604 43.2988 57.0549 43.2988Z"
            fill="white"
          />
          <path
            d="M89.1912 40.4102V38.7853C89.1912 37.6619 89.4219 36.6338 89.8833 35.701C90.3547 34.7582 91.0367 34.006 91.9294 33.4443C92.8321 32.8726 93.9254 32.5867 95.2092 32.5867C96.5132 32.5867 97.6064 32.8726 98.4891 33.4443C99.3717 34.006 100.039 34.7582 100.49 35.701C100.941 36.6338 101.167 37.6619 101.167 38.7853V40.4102C101.167 41.5335 100.936 42.5666 100.475 43.5095C100.024 44.4423 99.3517 45.1945 98.459 45.7662C97.5763 46.3279 96.4931 46.6087 95.2092 46.6087C93.9053 46.6087 92.807 46.3279 91.9144 45.7662C91.0217 45.1945 90.3447 44.4423 89.8833 43.5095C89.4219 42.5666 89.1912 41.5335 89.1912 40.4102ZM92.2604 38.7853V40.4102C92.2604 41.343 92.4811 42.1805 92.9224 42.9227C93.3637 43.6549 94.126 44.021 95.2092 44.021C96.2624 44.021 97.0046 43.6549 97.4359 42.9227C97.8772 42.1805 98.0979 41.343 98.0979 40.4102V38.7853C98.0979 37.8525 97.8873 37.02 97.466 36.2878C97.0447 35.5456 96.2925 35.1745 95.2092 35.1745C94.1561 35.1745 93.3988 35.5456 92.9374 36.2878C92.4861 37.02 92.2604 37.8525 92.2604 38.7853ZM73.8452 22.7773V21.1524C73.8452 20.0291 74.0759 19.001 74.5373 18.0682C75.0087 17.1254 75.6907 16.3731 76.5834 15.8114C77.4861 15.2397 78.5794 14.9539 79.8632 14.9539C81.1672 14.9539 82.2604 15.2397 83.1431 15.8114C84.0257 16.3731 84.6927 17.1254 85.1441 18.0682C85.5954 19.001 85.8211 20.0291 85.8211 21.1524V22.7773C85.8211 23.9007 85.5904 24.9338 85.129 25.8766C84.6777 26.8094 84.0057 27.5617 83.113 28.1334C82.2303 28.6951 81.1471 28.9759 79.8632 28.9759C78.5593 28.9759 77.461 28.6951 76.5684 28.1334C75.6757 27.5617 74.9987 26.8094 74.5373 25.8766C74.0759 24.9338 73.8452 23.9007 73.8452 22.7773ZM76.9144 21.1524V22.7773C76.9144 23.7101 77.1351 24.5476 77.5764 25.2898C78.0177 26.022 78.78 26.3881 79.8632 26.3881C80.9164 26.3881 81.6586 26.022 82.0899 25.2898C82.5312 24.5476 82.7519 23.7101 82.7519 22.7773V21.1524C82.7519 20.2196 82.5413 19.3871 82.12 18.655C81.6987 17.9127 80.9465 17.5416 79.8632 17.5416C78.8101 17.5416 78.0528 17.9127 77.5914 18.655C77.1401 19.3871 76.9144 20.2196 76.9144 21.1524ZM74.9886 46.1875L96.1721 15.3751H99.6024L78.4189 46.1875H74.9886Z"
            fill="white"
          />
        </svg>

        <span className="w-[180px] text-[14px] ">
          {format(date, "eee d MMM h:mm aa")}
        </span>
      </nav>
    </>
  );
};

export default Index;
