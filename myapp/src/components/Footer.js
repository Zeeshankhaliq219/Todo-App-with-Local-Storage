import React from 'react';
import dayjs from "dayjs";
export default function Footer() {
  return (
    <>
      <div className="container-fluide bg-primary">
        <p className='py-2 fs-6 text-center text-white'>&copy; All Rights Reserved {dayjs().format('YYYY')} </p>
      </div>
    </>
  );
}
