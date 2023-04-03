import React from 'react'

const Team = () => {
    return (
        <div>
            <section class="team__area team-bg section-pt-130 section-pb-100" data-background="assets/img/bg/team_bg.jpg">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-xl-6 col-lg-7 col-md-10">
                            <div class="section__title text-center mb-60">
                                <span class="sub-title tg__animate-text">our team member</span>
                                <h3 class="title">ACTIVE TEAM MEMBERS</h3>
                            </div>
                        </div>
                    </div>
                    <div class="row justify-content-center">
                        <div class="col-xl-3 col-lg-4 col-sm-6 wow fadeInUp" data-wow-delay=".2s">
                            <div class="team__item">
                                <div class="team__thumb">
                                    <a href="team-details.html"><img src="assets/img/team/team01.png" alt="img" /></a>
                                </div>
                                <div class="team__content">
                                    <h4 class="name"><a href="team-details.html">killer master</a></h4>
                                    <span class="designation">Blockchain Expert</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-4 col-sm-6 wow fadeInUp" data-wow-delay=".4s">
                            <div class="team__item">
                                <div class="team__thumb">
                                    <a href="team-details.html"><img src="assets/img/team/team02.png" alt="img" /></a>
                                </div>
                                <div class="team__content">
                                    <h4 class="name"><a href="team-details.html">tanu mark</a></h4>
                                    <span class="designation">Developer</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-4 col-sm-6 wow fadeInUp" data-wow-delay=".6s">
                            <div class="team__item">
                                <div class="team__thumb">
                                    <a href="team-details.html"><img src="assets/img/team/team03.png" alt="img" /></a>
                                </div>
                                <div class="team__content">
                                    <h4 class="name"><a href="team-details.html">Thompson Scot</a></h4>
                                    <span class="designation">Art Director</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-4 col-sm-6 wow fadeInUp" data-wow-delay=".8s">
                            <div class="team__item">
                                <div class="team__thumb">
                                    <a href="team-details.html"><img src="assets/img/team/team04.png" alt="img" /></a>
                                </div>
                                <div class="team__content">
                                    <h4 class="name"><a href="team-details.html">Shakh Danial</a></h4>
                                    <span class="designation">Crypto Advisor</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Team