import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="">
      <div className="container p-3 mx-auto border-t-2 border-slate-300 md:flex">
        <div className="hidden flex-1 sm:flex items-center gap-4">
            <div>
            <img src="/images/Logo.svg" alt="logo" />
            </div>
            <div className="section-title-1">Sections</div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 grid-rows-3 sm:grid-rows-1 gap-4 mt-6 flex-3">
            {[1, 2, 3].map((el) => {
            return (
                <div key={el}>
                <h3 className="font-bold text-size-7 text-primary">Category</h3>
                <ul className="text-size-7 text-secondary">
                    <li className="py-3">
                    <a href="#">Lorem, ipsum.</a>
                    </li>
                    <li className="py-3">
                    <a href="#">Lorem, ipsum.</a>
                    </li>
                    <li className="py-3">
                    <a href="#">Lorem, ipsum.</a>
                    </li>
                </ul>
                </div>
            );
            })}
        </div>
        <div className="mt-4 sm:hidden">
            <h3 className="text-size-7 font-bold ">Subscribe</h3>
            <div className="flex gap-2 my-4">
            <input
                type="text"
                placeholder="email"
                className="flex-1 border-2 border-slate-200 rounded-md px-2"
            />
            <button className="button bg-primary text-white">
                <img src="/icons/send.svg" alt="send" />
            </button>
            </div>
            <p className="text-size-8 text-tertiary">
            No spam, notifications only about new products, updates and freebies.
            You can always unsubscribe.
            </p>
        </div>
        <div className="text-tertiary text-size-8 mt-6 sm:hidden">
            <p>© Copyright 2020 Pixsellz</p>
            <p>Premium UI Goods for Designers</p>
        </div>
      </div>
      <div className=" bg-slate-200">
        <div className="container h-12 mx-auto flex gap-24 items-center justify-center lg:justify-end">
            <div className="hidden sm:flex items-center gap-12 text-secondary">
            <a href="#">link</a>
            <a href="#">link</a>
            <a href="#">link</a>
            </div>
            <div className="flex gap-4 items-center">
            <a href="#">
                <img src="/images/Twitter.png" alt="logo" width={24} height={24}/>
            </a>
            <a href="#">
                <img src="/images/Twitter.png" alt="logo" width={24} height={24}/>
            </a>
            <a href="#">
                <img src="/images/Twitter.png" alt="logo" width={24} height={24}/>
            </a>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
