// import React from "react";

// const SmallCard = () => {
//   return (
//     <div>
//       <div className="min-h-screen bg-gray-50 flex flex-col justify-center relative overflow-hidden sm:py-12">
//         <div className="max-w-7xl mx-auto">
//           <div className="relative group">
//             <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
//             <div className="relative px-7 py-6 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
//               <img className="w-[40px] h-[40px] object-contain"
//                 src="https://th.bing.com/th?id=OIP.M-4qYeO_AFbQscgCBdDvKwHaFj&w=288&h=216&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
//                 alt=""
//               ></img>
//               <div className="space-y-2">
//                 <p className="text-slate-800">
//                   Learn how to make a glowing gradient background!
//                 </p>
//                 {/* <a  className="block text-indigo-400 group-hover:text-slate-800 transition duration-200" target="_blank">Read Article →</a> */}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SmallCard;

import React from "react";

const SmallCard = ({ data }) => {
  return (
    <div>
      <div className="min-h-screen bg-gray-50 flex flex-col justify-center relative overflow-hidden sm:py-12">
        <div className="max-w-7xl mx-auto">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative px-7 py-6 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
              <img
                className="w-[40px] h-[40px] object-contain"
                src={data.img}
                alt={data.heading}
              />
              <div className="space-y-2">
                <p className="text-slate-800">{data.name}</p>
                <p className="text-slate-600">{data.level}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmallCard;
