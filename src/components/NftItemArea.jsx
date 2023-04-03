import React from 'react';
import $ from 'jquery';

const NftItemArea = () => {
    return (
        <section class="services-area services__bg-color section-pt-120 section-pb-120">
            <div class="container">
                <div class="row align-items-end align-items-xl-start">
                    <div class="col-lg-6 flex-container">
                        <div class="section__title text-start mb-65">
                            <span class="sub-title tg__animate-text">powerful gameplay</span>
                            <h3 class="title">Powerful Gameplay Done on time</h3>
                        </div>
                        <div class="services__wrapper">
                            <div class="services__item">
                                <div class="services__icon">
                                    <i class="flaticon-diamond"></i>
                                </div>
                                <div class="services__content">
                                    <h4 class="title"><a>more experience more earn</a></h4>
                                    <p>You will win some experience with much more time on this game.</p>
                                </div>
                            </div>
                            <div class="services__item">
                                <div class="services__icon">
                                    <i class="flaticon-chess"></i>
                                </div>
                                <div class="services__content">
                                    <h4 class="title"><a>Buy NFT Pack</a></h4>
                                    <p>You can buy NFT Pack on "opensea.com" and you can win some "Epic Card".</p>
                                </div>
                            </div>
                            <div class="services__item">
                                <div class="services__icon">
                                    <i class="flaticon-play"></i>
                                </div>
                                <div class="services__content">
                                    <h4 class="title"><a>Best NFT Game</a></h4>
                                    <p>This game purpose is be the best "NFT Card Game on the world".</p>
                                </div>
                            </div>
                            <div class="services__item">
                                <div class="services__icon">
                                    <i class="flaticon-user-profile"></i>
                                </div>
                                <div class="services__content">
                                    <h4 class="title"><a>AI Designer</a></h4>
                                    <p>We are used AI for every images and characters design.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 reverse-order" >
                        <div class="services__images">
                            <div class="services__images-item active">
                                <img src="assets/img/others/services_img01.png" alt="img" />
                                    {/* <a href="services-details.html" class="services__link">
                                        <i class="flaticon-next"></i>
                                    </a> */}
                            </div>
                            {/* <div class="services__images-item">
                                <img src="assets/img/others/services_img02.jpg" alt="img" />
                                    <a href="services-details.html" class="services__link">
                                        <i class="flaticon-next"></i>
                                    </a>
                            </div>
                            <div class="services__images-item">
                                <img src="assets/img/others/services_img03.jpg" alt="img" />
                                    <a href="services-details.html" class="services__link">
                                        <i class="flaticon-next"></i>
                                    </a>
                            </div>
                            <div class="services__images-item">
                                <img src="assets/img/others/services_img04.jpg" alt="img" />
                                    <a href="services-details.html" class="services__link">
                                        <i class="flaticon-next"></i>
                                    </a>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NftItemArea