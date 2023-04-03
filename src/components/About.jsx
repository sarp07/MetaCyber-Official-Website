import React, { useEffect } from 'react';
import $ from 'jquery';


const About = () => {
    useEffect(() => {
        var $swiperSelector = $('.gallery-active');

        $swiperSelector.each(function (index) {
            var $this = $(this);
            $this.addClass('swiper-slider-' + index);

            var dragSize = $this.data('drag-size') ? $this.data('drag-size') : 200;
            var freeMode = $this.data('free-mode') ? $this.data('free-mode') : false;
            var loop = $this.data('loop') ? $this.data('loop') : true;
            var slidesDesktop = $this.data('slides-desktop') ? $this.data('slides-desktop') : 1;
            var slidesTablet = $this.data('slides-tablet') ? $this.data('slides-tablet') : 1;
            var slidesMobile = $this.data('slides-mobile') ? $this.data('slides-mobile') : 1;
            var spaceBetween = $this.data('space-between') ? $this.data('space-between') : 1;

            var swiper = new Swiper('.swiper-slider-' + index, {
                direction: 'horizontal',
                loop: loop,
                freeMode: freeMode,
                centeredSlides: true,
                spaceBetween: spaceBetween,
                breakpoints: {
                    1920: {
                        slidesPerView: slidesDesktop
                    },
                    992: {
                        slidesPerView: slidesTablet
                    },
                    320: {
                        slidesPerView: slidesMobile
                    }
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                },
                scrollbar: {
                    el: '.swiper-scrollbar',
                    draggable: true,
                    dragSize: dragSize
                }
            });
        });
    }, []);





    return (
        <div class="area-background" data-background="assets/img/bg/area_bg01.jpg">

            <section id='#cards' class="about__area section-pt-130 section-pb-130">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-xl-6 col-lg-7 col-md-10">
                            <div class="section__title text-center mb-60">
                                <span class="sub-title tg__animate-text">know about heroes</span>
                                <h3 class="title">choose heroes</h3>
                            </div>
                        </div>
                    </div>
                    <div class="row justify-content-center">
                        <div class="col-xl-10">
                            <div class="about__tab-wrap">
                                <div class="about__buttons">
                                    <a href="https://opensea.io/" class="tg-btn-2">buy Hero</a>
                                    <a href="https://www.probit.com/" class="tg-btn-2 -secondary">buy Token</a>
                                </div>
                                <ul class="nav nav-tabs" id="myTab" role="tablist">
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link active" id="about01-tab" data-bs-toggle="tab" data-bs-target="#about01" type="button" role="tab" aria-controls="about01" aria-selected="true"><span class="img-shape"></span><img src="assets/img/others/about_tab01.png" alt="img" /></button>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link" id="about02-tab" data-bs-toggle="tab" data-bs-target="#about02" type="button" role="tab" aria-controls="about02" aria-selected="false"><span class="img-shape"></span><img src="assets/img/others/about_tab02.png" alt="img" /></button>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link" id="about03-tab" data-bs-toggle="tab" data-bs-target="#about03" type="button" role="tab" aria-controls="about03" aria-selected="false"><span class="img-shape"></span><img src="assets/img/others/about_tab03.png" alt="img" /></button>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link" id="about04-tab" data-bs-toggle="tab" data-bs-target="#about04" type="button" role="tab" aria-controls="about04" aria-selected="false"><span class="img-shape"></span><img src="assets/img/others/about_tab08.png" alt="img" /></button>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link" id="about05-tab" data-bs-toggle="tab" data-bs-target="#about05" type="button" role="tab" aria-controls="about05" aria-selected="false"><span class="img-shape"></span><img src="assets/img/others/about_tab04.png" alt="img" /></button>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link" id="about06-tab" data-bs-toggle="tab" data-bs-target="#about06" type="button" role="tab" aria-controls="about06" aria-selected="false"><span class="img-shape"></span><img src="assets/img/others/about_tab05.png" alt="img" /></button>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link" id="about07-tab" data-bs-toggle="tab" data-bs-target="#about07" type="button" role="tab" aria-controls="about07" aria-selected="false"><span class="img-shape"></span><img src="assets/img/others/about_tab06.png" alt="img" /></button>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link" id="about08-tab" data-bs-toggle="tab" data-bs-target="#about08" type="button" role="tab" aria-controls="about08" aria-selected="false"><span class="img-shape"></span><img src="assets/img/others/about_tab07.png" alt="img" /></button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="tab-content" id="myTabContent">
                        <div class="tab-pane show active" id="about01" role="tabpanel" aria-labelledby="about01-tab">
                            <div class="row justify-content-center">
                                <div class="col-xl-5 col-lg-10">
                                    <div class="about__img">
                                        <img src="assets/img/others/about_img01.jpg" alt="img" />
                                    </div>
                                </div>
                                <div class="col-xl-7 col-lg-10">
                                    <div class="about__flex-wrap">
                                        <div class="about__content-wrap">
                                            <div class="about__content">
                                                <h4 class="title">Nova Devastator</h4>
                                                <span class="rate">invader</span>
                                                <p>Lorem ipsum dolor sit amet, consteur adipiscing Duis elementum sollicitudin is yaugue euismods Nulla ullamcorper. Morbi pharetra tellus miolslis, tincidunt massa venenatis.</p>
                                            </div>
                                            <div class="about__content-list">
                                                <ul class="list-wrap">
                                                    <li><img src="assets/img/icons/features_icon01.png" alt="img" /> Elemental Power</li>
                                                    <li><img src="assets/img/icons/features_icon02.png" alt="img" /> 5% Crit Chance</li>
                                                    <li><img src="assets/img/icons/features_icon03.png" alt="img" /> Plasma Wave</li>
                                                </ul>
                                            </div>
                                        </div>
                                        {/* <div class="about__btn-wrap">
                                            <ul class="list-wrap">
                                                <li><a href="shop-details.html">Dragon Ball</a></li>
                                                <li><a href="shop.html">nft market</a></li>
                                                <li><a href="contact">support</a></li>
                                            </ul>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane" id="about02" role="tabpanel" aria-labelledby="about02-tab">
                            <div class="row justify-content-center">
                                <div class="col-xl-5 col-lg-10">
                                    <div class="about__img">
                                        <img src="assets/img/others/about_img02.jpg" alt="img" />
                                    </div>
                                </div>
                                <div class="col-xl-7 col-lg-10">
                                    <div class="about__flex-wrap">
                                        <div class="about__content-wrap">
                                            <div class="about__content">
                                                <h4 class="title">Executioner</h4>
                                                <span class="rate">Invader</span>
                                                <p>Lorem ipsum dolor sit amet, consteur adipiscing Duis elementum sollicitudin is yaugue euismods Nulla ullamcorper. Morbi pharetra tellus miolslis, tincidunt massa venenatis.</p>
                                            </div>
                                            <div class="about__content-list">
                                                <ul class="list-wrap">
                                                    <li><img src="assets/img/icons/features_icon01.png" alt="img" /> Heavy Armor</li>
                                                    <li><img src="assets/img/icons/features_icon02.png" alt="img" /> 4% Crit Chance</li>
                                                    <li><img src="assets/img/icons/features_icon03.png" alt="img" /> Electrical Attack</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane" id="about03" role="tabpanel" aria-labelledby="about03-tab">
                            <div class="row justify-content-center">
                                <div class="col-xl-5 col-lg-10">
                                    <div class="about__img">
                                        <img src="assets/img/others/about_img03.jpg" alt="img" />
                                    </div>
                                </div>
                                <div class="col-xl-7 col-lg-10">
                                    <div class="about__flex-wrap">
                                        <div class="about__content-wrap">
                                            <div class="about__content">
                                                <h4 class="title">Mortal Mac</h4>
                                                <span class="rate">Invader</span>
                                                <p>Lorem ipsum dolor sit amet, consteur adipiscing Duis elementum sollicitudin is yaugue euismods Nulla ullamcorper. Morbi pharetra tellus miolslis, tincidunt massa venenatis.</p>
                                            </div>
                                            <div class="about__content-list">
                                                <ul class="list-wrap">
                                                    <li><img src="assets/img/icons/features_icon01.png" alt="img" /> Fire Power</li>
                                                    <li><img src="assets/img/icons/features_icon02.png" alt="img" /> 3% Crit Chance</li>
                                                    <li><img src="assets/img/icons/features_icon03.png" alt="img" /> Ammo Attack</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane" id="about04" role="tabpanel" aria-labelledby="about04-tab">
                            <div class="row justify-content-center">
                                <div class="col-xl-5 col-lg-10">
                                    <div class="about__img">
                                        <img src="assets/img/others/about_img08.jpg" alt="img" />
                                    </div>
                                </div>
                                <div class="col-xl-7 col-lg-10">
                                    <div class="about__flex-wrap">
                                        <div class="about__content-wrap">
                                            <div class="about__content">
                                                <h4 class="title">Dirty Cabs</h4>
                                                <span class="rate">Invader</span>
                                                <p>Lorem ipsum dolor sit amet, consteur adipiscing Duis elementum sollicitudin is yaugue euismods Nulla ullamcorper. Morbi pharetra tellus miolslis, tincidunt massa venenatis.</p>
                                            </div>
                                            <div class="about__content-list">
                                                <ul class="list-wrap">
                                                    <li><img src="assets/img/icons/features_icon01.png" alt="img" /> Poision Power</li>
                                                    <li><img src="assets/img/icons/features_icon02.png" alt="img" /> 2% Crit Chance</li>
                                                    <li><img src="assets/img/icons/features_icon03.png" alt="img" /> Physcial Power</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane" id="about05" role="tabpanel" aria-labelledby="about05-tab">
                            <div class="row justify-content-center">
                                <div class="col-xl-5 col-lg-10">
                                    <div class="about__img">
                                        <img src="assets/img/others/about_img04.jpg" alt="img" />
                                    </div>
                                </div>
                                <div class="col-xl-7 col-lg-10">
                                    <div class="about__flex-wrap">
                                        <div class="about__content-wrap">
                                            <div class="about__content">
                                                <h4 class="title">Arbellion</h4>
                                                <span class="rate">protector</span>
                                                <p>Lorem ipsum dolor sit amet, consteur adipiscing Duis elementum sollicitudin is yaugue euismods Nulla ullamcorper. Morbi pharetra tellus miolslis, tincidunt massa venenatis.</p>
                                            </div>
                                            <div class="about__content-list">
                                                <ul class="list-wrap">
                                                    <li><img src="assets/img/icons/features_icon01.png" alt="img" /> Holy Power</li>
                                                    <li><img src="assets/img/icons/features_icon02.png" alt="img" /> 5% Crit Chance</li>
                                                    <li><img src="assets/img/icons/features_icon03.png" alt="img" /> Holy Sword Damage</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane" id="about06" role="tabpanel" aria-labelledby="about06-tab">
                            <div class="row justify-content-center">
                                <div class="col-xl-5 col-lg-10">
                                    <div class="about__img">
                                        <img src="assets/img/others/about_img05.jpg" alt="img" />
                                    </div>
                                </div>
                                <div class="col-xl-7 col-lg-10">
                                    <div class="about__flex-wrap">
                                        <div class="about__content-wrap">
                                            <div class="about__content">
                                                <h4 class="title">Kitty Cyborg</h4>
                                                <span class="rate">Protector</span>
                                                <p>Lorem ipsum dolor sit amet, consteur adipiscing Duis elementum sollicitudin is yaugue euismods Nulla ullamcorper. Morbi pharetra tellus miolslis, tincidunt massa venenatis.</p>
                                            </div>
                                            <div class="about__content-list">
                                                <ul class="list-wrap">
                                                    <li><img src="assets/img/icons/features_icon01.png" alt="img" /> Technical Power</li>
                                                    <li><img src="assets/img/icons/features_icon02.png" alt="img" /> 4% Crit Chance</li>
                                                    <li><img src="assets/img/icons/features_icon03.png" alt="img" /> Electrical Attack</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane" id="about07" role="tabpanel" aria-labelledby="about07-tab">
                            <div class="row justify-content-center">
                                <div class="col-xl-5 col-lg-10">
                                    <div class="about__img">
                                        <img src="assets/img/others/about_img06.jpg" alt="img" />
                                    </div>
                                </div>
                                <div class="col-xl-7 col-lg-10">
                                    <div class="about__flex-wrap">
                                        <div class="about__content-wrap">
                                            <div class="about__content">
                                                <h4 class="title">Leon The Scynist</h4>
                                                <span class="rate">Protector</span>
                                                <p>Lorem ipsum dolor sit amet, consteur adipiscing Duis elementum sollicitudin is yaugue euismods Nulla ullamcorper. Morbi pharetra tellus miolslis, tincidunt massa venenatis.</p>
                                            </div>
                                            <div class="about__content-list">
                                                <ul class="list-wrap">
                                                    <li><img src="assets/img/icons/features_icon01.png" alt="img" /> Chemical Power</li>
                                                    <li><img src="assets/img/icons/features_icon02.png" alt="img" /> 3% Crit Chance</li>
                                                    <li><img src="assets/img/icons/features_icon03.png" alt="img" /> Chem Scynist Attack</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane" id="about08" role="tabpanel" aria-labelledby="about08-tab">
                            <div class="row justify-content-center">
                                <div class="col-xl-5 col-lg-10">
                                    <div class="about__img">
                                        <img src="assets/img/others/about_img07.jpg" alt="img" />
                                    </div>
                                </div>
                                <div class="col-xl-7 col-lg-10">
                                    <div class="about__flex-wrap">
                                        <div class="about__content-wrap">
                                            <div class="about__content">
                                                <h4 class="title">V216</h4>
                                                <span class="rate">Protector</span>
                                                <p>Lorem ipsum dolor sit amet, consteur adipiscing Duis elementum sollicitudin is yaugue euismods Nulla ullamcorper. Morbi pharetra tellus miolslis, tincidunt massa venenatis.</p>
                                            </div>
                                            <div class="about__content-list">
                                                <ul class="list-wrap">
                                                    <li><img src="assets/img/icons/features_icon01.png" alt="img" /> Technical Power</li>
                                                    <li><img src="assets/img/icons/features_icon02.png" alt="img" /> 2% Crit Chance</li>
                                                    <li><img src="assets/img/icons/features_icon03.png" alt="img" /> Droid Sense Attack</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="gallery__area fix section-pb-130">
                <div class="row justify-content-center w-32">
                    <div class="col-xl-6 col-lg-7 col-md-10">
                        <div class="section__title text-center mb-60">
                            <h3 class="title">choose battle area</h3>
                        </div>
                    </div>
                </div>
                <div class="gallery__slider">
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-xl-9 col-lg-10 col-md-11">
                                <div class="swiper-container gallery-active">
                                    <div class="swiper-wrapper">
                                        <div class="swiper-slide">
                                            <div class="gallery__item">
                                                <div class="gallery__thumb">
                                                    <a href="assets/img/gallery/gallery01.jpg" data-cursor="-theme" data-cursor-text="View <br> Image" class="popup-image" title="PUBG Tournament"><img src="assets/img/gallery/gallery01.jpg" alt="img" /></a>
                                                </div>
                                                <div class="gallery__content">
                                                    <h3 class="title">Volcanic Rock</h3>
                                                    <span class="rate">mint rate 15%</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="swiper-slide">
                                            <div class="gallery__item">
                                                <div class="gallery__thumb">
                                                    <a href="assets/img/gallery/gallery02.jpg" data-cursor="-theme" data-cursor-text="View <br> Image" class="popup-image" title="Assassin's Creed"><img src="assets/img/gallery/gallery02.jpg" alt="img" /></a>
                                                </div>
                                                <div class="gallery__content">
                                                    <h3 class="title">Silver Canyon</h3>
                                                    <span class="rate">mint rate 15%</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="swiper-slide">
                                            <div class="gallery__item">
                                                <div class="gallery__thumb">
                                                    <a href="assets/img/gallery/gallery03.jpg" data-cursor="-theme" data-cursor-text="View <br> Image" class="popup-image" title="World of Warcraft"><img src="assets/img/gallery/gallery03.jpg" alt="img" /></a>
                                                </div>
                                                <div class="gallery__content">
                                                    <h3 class="title">Template</h3>
                                                    <span class="rate">mint rate 15%</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="swiper-slide">
                                            <div class="gallery__item">
                                                <div class="gallery__thumb">
                                                    <a href="assets/img/gallery/gallery04.jpg" data-cursor="-theme" data-cursor-text="View <br> Image" class="popup-image" title="The Chant 2"><img src="assets/img/gallery/gallery04.jpg" alt="img" /></a>
                                                </div>
                                                <div class="gallery__content">
                                                    <h3 class="title">Sunlight Canyon</h3>
                                                    <span class="rate">mint rate 15%</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="swiper-slide">
                                            <div class="gallery__item">
                                                <div class="gallery__thumb">
                                                    <a href="assets/img/gallery/gallery05.jpg" data-cursor="-theme" data-cursor-text="View <br> Image" class="popup-image" title="Dota 2 tournament"><img src="assets/img/gallery/gallery05.jpg" alt="img" /></a>
                                                </div>
                                                <div class="gallery__content">
                                                    <h3 class="title">Radiation Sea</h3>
                                                    <span class="rate">mint rate 15%</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="swiper-scrollbar"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default About