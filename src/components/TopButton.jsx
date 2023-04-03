import React from 'react';
import $ from 'jquery';

const TopButton = () => {

    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

  return (
    <button class="scroll__top scroll-to-target" onClick={scrollTop} data-target="html">
        <i class="flaticon-right-arrow"></i>
    </button>
  )
}

export default TopButton