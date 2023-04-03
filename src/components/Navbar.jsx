import React, { useEffect, useState } from 'react';
import $ from 'jquery';

const Navbar = () => {

    const [activeIndex, setActiveIndex] = useState(0);

    const menuItems = [
        { name: "Home", href: "./" },
        { name: "Open selling", href: "#cards" },
        { name: "who is enemy ?", href: "#enemy" },
        { name: "genes", href: "#genes" },
        { name: "gallery", href: "#gallery" },
        { name: "last selling", href: "#last-selling" }
    ];

    // const handleSearchSubmit = (e) => {
    //     e.preventDefault();
    //     const searchText = $('.search__form input[name="search"]').val();
    //     console.log(searchText);
    //     // Burada arama yapmak için istediğiniz işlemleri gerçekleştirebilirsiniz
    //     $('body').removeClass('search__active'); // popup'ı kapat
    // }

    const handleSearchSubmit = () => {
        const searchText = $('.search__form input[name="search"]').val();
        console.log(searchText);

        // Arama işlevi
        const $searchResult = $('.tgmenu__main-menu a').filter(function () {
            return $(this).text().toLowerCase().includes(searchText.toLowerCase());
        });

        if ($searchResult.length > 0) {
            // Bulunan sonuçları göster
            console.log(`Arama sonuçları (${$searchResult.length} adet):`);
            $searchResult.each(function () {
                console.log($(this).text());
            });
        } else {
            console.log('Arama sonuç vermedi.');
        }
    };

    useEffect(() => {
        if ($('.tgmobile__menu').length) {

            var mobileMenuContent = $('.tgmenu__wrap .tgmenu__main-menu').html();
            $('.tgmobile__menu .tgmobile__menu-box .tgmobile__menu-outer').append(mobileMenuContent);

            //Dropdown Button
            $('.tgmobile__menu li.menu-item-has-children .dropdown-btn').on('click', function () {
                $(this).toggleClass('open');
                $(this).prev('ul').slideToggle(300);
            });
            //Menu Toggle Btn
            $('.mobile-nav-toggler').on('click', function () {
                $('body').addClass('mobile-menu-visible');
            });

            //Menu Toggle Btn
            $('.tgmobile__menu-backdrop, .tgmobile__menu .close-btn').on('click', function () {
                $('body').removeClass('mobile-menu-visible');
            });
        }
        if ($('.tgmenu__wrap li.menu-item-has-children ul').length) {
            $('.tgmenu__wrap .navigation li.menu-item-has-children').append('<div class="dropdown-btn"><span class="plus-line"></span></div>');
        }

        $('.search a, .tg-btn-1, .side-toggle-icon, .mobile-nav-toggler, .dropdown-btn').on('click', () => new Audio('assets/audio/click.wav').play());
        $('.search__close, .offCanvas__toggle, .offCanvas__overlay, .close-btn').on('click', () => new Audio('assets/audio/remove.wav').play());
        $('.about__tab-wrap ul button').on('click', () => new Audio('assets/audio/tab.mp3').play());

        if ($('.tgmenu__action .search').length) {
            $('.tgmenu__action .search').on('click', function () {
                $('body').addClass('search__active');
                return false
            });
            $('.search__close').on('click', function () {
                $('body').removeClass('search__active');
            });
        }
    }, []);

    return (
        <header>
            <div id="sticky-header" class="tg-header__area transparent-header">
                <div class="container custom-container">
                    <div class="row">
                        <div class="col-12">
                            <div class="tgmenu__wrap">
                                <nav class="tgmenu__nav">
                                    <div class="logo">
                                        {/* <a href="./"><img src="assets/img/logo/logo.png" alt="Logo" /></a> */}
                                        <a href="./"><img src="assets/img/logo/logo.png" alt="Logo" width="100" /></a>
                                        <a href="./"><p className='logoText'>MetaCyber</p></a>
                                    </div>
                                    {/* <div className="tgmenu__navbar-wrap tgmenu__main-menu d-none d-xl-flex">
                                        <ul className="navigation">
                                            {menuItems.map((item, index) => (
                                                <li
                                                    key={index}
                                                    className={activeIndex === index ? "active" : ""}
                                                    onClick={() => setActiveIndex(index)}
                                                >
                                                    <a href={item.href}>{item.name}</a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div> */}
                                    <div className="tgmenu__action" style={{ display: 'flex' }}>
                                        <ul className="list-wrap" style={{ marginLeft: 'auto' }}>
                                            {/* <li className="search"><a href="#"><i className="flaticon-search-1"></i></a></li> */}
                                            <li><a href="https://glittering-bienenstitch-3a557e.netlify.app/" className="tg-border-btn"><i className="flaticon-play"></i> PLAY</a></li>
                                        </ul>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="search__popup-wrap">
                <div class="search__layer"></div>
                <div class="search__close">
                    <span><i class="flaticon-swords-in-cross-arrangement"></i></span>
                </div>
                <div class="search__wrap text-center">
                    <div class="container">
                        <div class="row">
                            <div class="col-12">
                                <h2 class="title">... <span>Search Here</span> ...</h2>
                                <div class="search__form">
                                    <form action="#">
                                        <input type="text" name="search" placeholder="Type keywords here" required />
                                        <button class="search-btn" onSubmit={handleSearchSubmit}><i class="flaticon-loupe"></i></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar