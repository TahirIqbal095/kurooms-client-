import React, { useState } from "react";
import "./card.css";

function Card() {
  return (
    <>
      <div class="overflow-hidden shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-2xl rounded-lg cursor-pointer">
        <a href="#" class="w-full block h-full">
          <img
            alt="blog photo"
            src="https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80"
            class="max-h-40 w-full object-cover"
          />
          <div class="w-full p-4">
            <p class="text-[var(--clr-green)] text-2xl font-medium">
              PG for Boys
            </p>
            <a class="text-sm font-medium mb-2">
              <i class="fa-solid fa-location-dot"></i>
              <span className="ml-2">Zakura Crossing</span>
            </a>
            <p class="text-md mt-2">
              It is difficult to believe that we have become so used to having
              instant access to information at...
              <a class="inline-flex text-indigo-500" href="#">
                Read More
              </a>
            </p>
            <div class="flex flex-wrap items-center  gap-8">
              <div className="flex items-center  gap-1 mt-2">
                <i class="fa-solid fa-indian-rupee-sign"></i>
                <span>5000</span>
              </div>

              <div className="flex items-center  gap-1 mt-2">
                <i class="fa-solid fa-house-user"></i>
                <span>Boys only</span>
              </div>
            </div>

            <button className="btn btn-green | mt-4 hover:scale-105 transition hover:shadow">
              Details
            </button>
          </div>
        </a>
      </div>
    </>
  );
}

export default Card;
