import React from 'react';

const Card = () => {
  return (
    <div className="my-1 px-1 w-full md:w-1/3 lg:my-4 lg:px-4 lg:w-1/4">
        <div className="overflow-hidden rounded-lg shadow-lg">
          <a href="#"><img alt="Placeholder" className="block h-auto w-full" src="https://picsum.photos/600/400/?random" /></a>
          <header className="flex items-center justify-between leading-tight p-2 md:p-4">
            <h1 className="text-lg"><a className="no-underline hover:underline text-black" href="#">Nombre del curso</a></h1>
          </header>
          <footer className="flex items-center justify-between leading-none p-2 md:p-4">
            <a className="flex items-center no-underline hover:underline text-black" href="#">
              <img alt="Placeholder" className="block rounded-full" src="https://picsum.photos/32/32/?random" />
              <p className="ml-2 text-sm">Author Name</p>
            </a>
            </footer>
        </div>
    </div>
  );
}

export default Card;