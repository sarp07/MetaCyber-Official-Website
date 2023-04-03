import React from 'react'

const RoadMap = () => {
    return (
        <div>
            <section class="roadMap__area roadMap-bg section-pt-150 section-pb-150" data-background="assets/img/bg/roadmap_bg.jpg">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-xl-10">
                            <div class="roadMap__inner">
                                <div class="row">
                                    <div class="col-xl-5 col-lg-6">
                                        <div class="roadMap__content">
                                            <h2 class="title">a look into roadmaps seasons</h2>
                                            <p>We will continue with the right steps towards becoming the "Best NFT Card Game" that will improve with each season. You will see improvements in different platforms and productions each season.<br /><br /> So what are we going to do as players?</p>
                                            {/* <a href="contact.html" class="tg-btn-1 -btn-yellow"><span>roadmap</span></a> */}
                                        </div>
                                        <div class="roadMap__img">
                                            <img src="assets/img/others/roadmap.png" class="tg-parallax" data-scale="1.5" data-orientation="down" alt="" />
                                        </div>
                                    </div>
                                    <div class="col-xl-7 col-lg-6">
                                        <div class="roadMap__steps-wrap">
                                            <div class="roadMap__steps-item active">
                                                <h3 class="title">season 1</h3>
                                                <ul class="roadMap__list list-wrap">
                                                    <li class="tg__animate-text style2">Upgrading Hero Mint</li>
                                                    <li class="tg__animate-text style2">Open Alpha Version on Mumbai Testnet</li>
                                                    <li class="tg__animate-text style2">Add PvP Mode With Live Time</li>
                                                    <li class="tg__animate-text style2">Choose Battle Area Backgorund</li>
                                                    <li class="tg__animate-text style2">Test Play to Earn Option for PVP Mode</li>
                                                </ul>
                                                <img src="assets/img/others/roadmap_img.png" alt="img" class="roadMap__steps-img" />
                                            </div>
                                            <div class="roadMap__steps-item">
                                                <h3 class="title">season 2</h3>
                                                <ul class="roadMap__list list-wrap">
                                                    <li class="tg__animate-text style2">Boss Fight Mode</li>
                                                    <li class="tg__animate-text style2">Create Team Room for Boss Fighting</li>
                                                    <li class="tg__animate-text style2">Claim Particle For New Heroes</li>
                                                    <li class="tg__animate-text style2">Setup Your Battle Strategy</li>
                                                    <li class="tg__animate-text style2">Select and Setup Your Weapon</li>
                                                </ul>
                                                <img src="assets/img/others/roadmap_img.png" alt="img" class="roadMap__steps-img" />
                                            </div>
                                            <div class="roadMap__steps-item">
                                                <h3 class="title">season 3</h3>
                                                <ul class="roadMap__list list-wrap">
                                                    <li class="tg__animate-text style2">Open Beta On Mumbai Testnet</li>
                                                    <li class="tg__animate-text style2">Pre-sale on Probit</li>
                                                    <li class="tg__animate-text style2">List on Binance, Probit, MEXC</li>
                                                    <li class="tg__animate-text style2">Sell Heroes Packages</li>
                                                    <li class="tg__animate-text style2">More Play and More Earn</li>
                                                </ul>
                                                <img src="assets/img/others/roadmap_img.png" alt="img" class="roadMap__steps-img" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default RoadMap