import React from 'react';
import $ from 'jquery';

const Slider = () => {
    return (
        <section class="slider__area slider__bg" data-background="../assets/img/slider/slider_bg.jpg">
            <div class="slider-activee">
                <div class="single-slider">
                    <div class="container custom-container">
                        <div class="row justify-content-center">
                            <div class="col-lg-6">
                                <div class="slider__content">
                                    <h6 class="sub-title wow fadeInUp" data-wow-delay=".2s">nft card gaming</h6>
                                    <h2 class="title wow fadeInUp" data-wow-delay=".5s">battle game</h2>
                                    <p class="wow fadeInUp" data-wow-delay=".8s">pvp - pvm matchs</p>
                                    <br />
                                    <br />
                                    {/* <div class="slider__btn wow fadeInUp" data-wow-delay="1.2s">
                                        <a href="contact.html" class="tg-btn-1"><span>join us</span></a>
                                    </div> */}
                                </div>
                            </div>
                            <div class="col-xxl-6 col-xl-5 col-lg-6">
                                <div class="slider__img text-center">
                                    <img src="../assets/img/slider/slider_img01.png" data-magnetic alt="img" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div class="slider__brand-wrap">
                <div class="container custom-container">
                    <ul class="slider__brand-list list-wrap">
                        <li><a href="#"><img src="assets/img/brand/brand_logo01.png" alt="brand" /></a></li>
                        <li><a href="#"><img src="assets/img/brand/brand_logo02.png" alt="brand" /></a></li>
                        <li><a href="#"><img src="assets/img/brand/brand_logo03.png" alt="brand" /></a></li>
                    </ul>
                </div>
            </div> */}
        </section>
    )
}

export default Slider