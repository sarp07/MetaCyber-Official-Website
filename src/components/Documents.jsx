import React, { useEffect } from 'react';
import $ from 'jquery';

const Documents = () => {
    return (
        <div>
            <section class="about__area-three section-pt-130 section-pb-130">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-4">
                            <div class="about__title-wrap">
                                <h2 class="title">
                                    <span>read </span>
                                    <br />
                                    <i> and </i>
                                    <br />
                                    <span>learn </span>
                                    <i>about nft gam<b>ing</b></i>
                                </h2>
                                <a href="#">
                                    <div class="about__content-circle">
                                        <img src="assets/img/icons/circle.svg" alt="img" />
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 150" version="5">
                                            <path id="textPath" d="M 0,75 a 75,75 0 1,1 0,1 z"></path>
                                            <text>
                                                <textPath href="#textPath">click here for learn</textPath>
                                            </text>
                                        </svg>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div class="col-xl-8">
                            <div class="about__three-images">
                                <img src="assets/img/others/mask_img01.png" alt="" class="left" />
                                    <img src="assets/img/others/mask_img02.png" alt="img" class="right" />
                                <div class="about__dots">
                                    <svg width="109" height="35" viewBox="0 0 109 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9 0H0V7H9V0Z" fill="currentcolor" />
                                        <path d="M24 0H15V7H24V0Z" fill="currentcolor" />
                                        <path d="M38 0H29V7H38V0Z" fill="currentcolor" />
                                        <path d="M53 0H44V7H53V0Z" fill="currentcolor" />
                                        <path d="M67 0H58V7H67V0Z" fill="currentcolor" />
                                        <path d="M80 0H71V7H80V0Z" fill="currentcolor" />
                                        <path d="M9 14H0V21H9V14Z" fill="currentcolor" />
                                        <path d="M24 14H15V21H24V14Z" fill="currentcolor" />
                                        <path d="M38 14H29V21H38V14Z" fill="currentcolor" />
                                        <path d="M53 14H44V21H53V14Z" fill="currentcolor" />
                                        <path d="M67 14H58V21H67V14Z" fill="currentcolor" />
                                        <path d="M80 14H71V21H80V14Z" fill="currentcolor" />
                                        <path d="M95 14H86V21H95V14Z" fill="currentcolor" />
                                        <path d="M109 14H100V21H109V14Z" fill="currentcolor" />
                                        <path d="M9 28H0V35H9V28Z" fill="currentcolor" />
                                        <path d="M24 28H15V35H24V28Z" fill="currentcolor" />
                                        <path d="M38 28H29V35H38V28Z" fill="currentcolor" />
                                        <path d="M53 28H44V35H53V28Z" fill="currentcolor" />
                                        <path d="M67 28H58V35H67V28Z" fill="currentcolor" />
                                        <path d="M80 28H71V35H80V28Z" fill="currentcolor" />
                                        <path d="M95 28H86V35H95V28Z" fill="currentcolor" />
                                        <path d="M109 28H100V35H109V28Z" fill="currentcolor" />
                                    </svg>
                                </div>
                            </div>
                            <div class="about__three-paragraph">
                                <p class="tg__animate-text style2">Get information about the game. You can read the documents to learn the game logic and have more detailed information. You can review NFT Package details, Token structure and NFT collections.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <h2 class="big-title">let`s go</h2>
            </section>
        </div>
    )
}

export default Documents