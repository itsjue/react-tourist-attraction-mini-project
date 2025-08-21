import React from "react";

function HomePage() {
  return (
    <>
      <div>
        <h1 className="text-center">เที่ยวไหนดี</h1>
        <div>
          <h3>ค้นหาที่เที่ยว</h3>
          <input type="text" placeholder="หาที่เที่ยวแล้วไปกัน..." className="placeholder-gray-500" />
        </div>
      </div>
    </>
  );
}

export default HomePage;
