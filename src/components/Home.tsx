import React from "react";

interface IProduct {
  id: number;
  name: string;
  description: string;
  productCode: string;
  price: number;
  image: string;
}

const Home = () => {
  const products: IProduct[] = [
    {
      id: 1,
      name: "Samsung",
      description: "description",
      productCode: "Samsung-1",
      price: 1000,
      image: "https://flowbite.com/docs/images/blog/image-1.jpg",
    },
    {
      id: 2,
      name: "Iphone",
      description: "description",
      productCode: "Iphone-1",
      price: 2000,
      image: "https://flowbite.com/docs/images/blog/image-1.jpg",
    },
    {
      id: 3,
      name: "Nokia",
      description: "description",
      productCode: "Nokia-1",
      price: 5000,
      image: "https://flowbite.com/docs/images/blog/image-1.jpg",
    },
  ];
  return (
    <>
      <div className="p-2 m-2">
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img
              className="rounded-t-lg"
              src="https://flowbite.com/docs/images/blog/image-1.jpg"
              alt=""
            />
          </a>
          <div>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Noteworthy technology acquisitions 2021
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
              <a
                href="#"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Read more
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
