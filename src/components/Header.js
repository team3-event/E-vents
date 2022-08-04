import React from "react";
import "../components/Header.css"



class Header extends React.Component {


    render() {
        return (
          <div className="relative bg-indigo-800">
          <div className="absolute inset-0">
            <img
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
              alt=""
            />
            <div className="absolute inset-0 bg-red-800 mix-blend-multiply" aria-hidden="true" />
          </div>
          <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">E-VENTS</h1>
            <p className="mt-6 text-xl text-indigo-100 max-w-3xl">
              Looking to plan your next group trip? We will give you flight and hotel estimates to your next location and help you find what is happening when you get there. 
            </p>
          </div>
        </div>
      )
    }
      
    }


export default Header;