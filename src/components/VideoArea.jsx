import React from 'react'

const VideoArea = () => {
    return (
        <div>
            <section class="video__area video-bg tg-jarallax" data-background="assets/img/bg/video_bg.jpg">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-xl-6 col-lg-8 col-md-11">
                            <div class="video__content text-center">
                                {/* <a href="https://www.youtube.com/watch?v=ssrNcwxALS4" class="popup-video"><i class="flaticon-play"></i></a> */}
                                <h2 class="title">JOIN THE <span>COMMUNITY</span></h2>
                                <p>Join our Discord community</p>
                                <a href="https://discord.com/" target="_blank" class="video__btn tg-btn-1"><span>join discord</span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default VideoArea