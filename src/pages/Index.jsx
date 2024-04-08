import React from "react";
import { NavLink } from "react-router-dom";

export default function Index() {
  const msjInfo = `"A continuación, seleccione comenzar para iniciar el proceso de análisis."`;

  return (
    <>
      <div className="bg-white">
        <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
            <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Front-End del cliente
                <br />
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-300 text-justify">
                {msjInfo}{" "}
              </p>
              <div className="mt-10 mb-10 flex items-center justify-center gap-x-6 lg:justify-start">
                <NavLink to={"/dashboard"}>
                  <a className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                    Comenzar
                  </a>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
