import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function TrustedBy() {
    var settings = {
        infinite: true,
        autoplay: true,
        draggable: true,
        autoplaySpeed: 2000,
        focusOnSelect: true,
        infinite: true,
		arrows: true,
        // centerPadding: "60px",
        slidesToShow: 2,
        swipeToSlide: true,
    };
  return (
    <>
       <div class="container" howu-index="903">
            <div class="pt-4 pb-5" howu-index="902">
                <div class="row" howu-index="901">
                    <div class="col-lg-5 text-center text-sm-left" howu-index="900">
                        <h2 class="pt-5 pb-4" howu-index="899"><span class="font-weight-bold" howu-index="898">Trusted </span><span class="text-spantitle" howu-index="897">By</span></h2>
                        <p howu-index="896">Here’s to what our clients have to say about us</p>
                    </div>
                    <div class="col-lg-7 text-center text-sm-left" howu-index="895">
                    <p howu-index="894"></p>
                    <section class="mobinius-testimonials-img-slide single-item slider pb-5 slick-initialized slick-slider" howu-index="893">
                        {/* <button class="slick-prev slick-arrow" aria-label="Previous" type="button" aria-disabled="false" style={{}} howu-index="892">Previous</button> */}
                        {/* <div class="slick-list draggable" howu-index="891"> */}
                            <div class="slick-track" style={{opacity: '1', transform: "translate3d('-954px', '0px', '0px')", transition: 'transform 500ms ease 0s'}} howu-index="890">
                                <Slider {...settings}>
                                <div class="slick-slide" data-slick-index="0" aria-hidden="true" style={{width: '318px'}} howu-index="889" tabindex="-1">
                                    <div howu-index="888">
                                        <div class="mobinius-testimonials-sec col py-1 px-5 mt-4 border-right odd_class" style={{width: '100%', display: 'inline-block'}} howu-index="887">
                                            <div class="mobinius_testimonial_content" howu-index="886"> 
                                                <p howu-index="885">I feel very comfortable to work with Mobinius as the agility &amp; speed of the team to respond quickly, in case of any requirements is high. </p>
                                            </div>
                                            <p class="h5 font-weight-bold text-left text-dark mb-1" howu-index="884">Mr Gona Jagadish</p>
                                            <p class="font-weight-bold text-left text-muted" howu-index="883">Robert Bosch, India</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="slick-slide" data-slick-index="1" aria-hidden="true" style={{width: '318px'}} howu-index="882" tabindex="-1">
                                    <div howu-index="881">
                                        <div class="mobinius-testimonials-sec col py-1 px-5 mt-4 border-right even_class" style={{width: '100%', display: 'inline-block'}} howu-index="880">
                                            <div class="mobinius_testimonial_content" howu-index="879"><p howu-index="878">Mobinius is a set of experienced professionals who have built a competitive work culture and have delivered a 100% product for Fingo.</p></div>
                                            <p class="h5 font-weight-bold text-left text-dark mb-1" howu-index="877">Rodney Lewis</p>
                                            <p class="font-weight-bold text-left text-muted" howu-index="876">Fingo.in, India</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="slick-slide" data-slick-index="2" aria-hidden="true" style={{width: '318px'}} howu-index="875" tabindex="-1">
                                    <div howu-index="874">
                                        <div class="mobinius-testimonials-sec col py-1 px-5 mt-4 border-right odd_class" style={{width: '100%', display: 'inline-block'}} howu-index="873">
                                            <div class="mobinius_testimonial_content" howu-index="872"> <p howu-index="871">From the first phone call, I was convinced that Mobinius would be the right company for us. Mobinius has an excellent understanding of what works and doesn’t with apps.</p></div>
                                            <p class="h5 font-weight-bold text-left text-dark mb-1" howu-index="870">Rajiv Unnikrishnan</p>
                                            <p class="font-weight-bold text-left text-muted" howu-index="869">OIDAR, Singapore</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="slick-slide slick-current slick-active" data-slick-index="3" aria-hidden="false" style={{width: '318px'}} howu-index="868" tabindex="-1">
                                    <div howu-index="867">
                                        <div class="mobinius-testimonials-sec col py-1 px-5 mt-4 border-right even_class" style={{width: '100%', display: 'inline-block'}} howu-index="866">
                                            <div class="mobinius_testimonial_content" howu-index="865"> <p howu-index="864">It was indeed a very good experience to work with the team @Mobinius. Also, looking at their technical expertise, we are thankful to them for helping us with the automation tool project.</p></div>
                                            <p class="h5 font-weight-bold text-left text-dark mb-1" howu-index="863">Rakesh B</p>
                                            <p class="font-weight-bold text-left text-muted" howu-index="862">India</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="slick-slide slick-active" data-slick-index="4" aria-hidden="false" style={{width: '318px'}} howu-index="861">
                                    <div howu-index="860">
                                        <div class="mobinius-testimonials-sec col py-1 px-5 mt-4 border-right odd_class" style={{width: '100%', display: 'inline-block'}} howu-index="859">
                                            <div class="mobinius_testimonial_content" howu-index="858"> <p howu-index="857">We have been associated with the Mobinius team to offer our nex-gen product &amp; solutions. The experience has been an enriching one, definitely.</p></div>
                                            <p class="h5 font-weight-bold text-left text-dark mb-1" howu-index="856">XSEED</p>
                                            <p class="font-weight-bold text-left text-muted" howu-index="855">India</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="slick-slide" data-slick-index="5" aria-hidden="true" style={{width: '318px'}} howu-index="854">
                                    <div howu-index="853">
                                        <div class="mobinius-testimonials-sec col py-1 px-5 mt-4 border-right even_class" style={{width: '100%', display: 'inline-block'}} howu-index="852">
                                            <div class="mobinius_testimonial_content" howu-index="851"> <p howu-index="850">Dealing with health and being healthy has been our forte. We chose Mobinius™ as we were looking for an organization who understands the Indian health index. </p></div>
                                            <p class="h5 font-weight-bold text-left text-dark mb-1" howu-index="849">Julia Houston</p>
                                            <p class="font-weight-bold text-left text-muted" howu-index="848">CHI-LLC, USA</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="slick-slide" data-slick-index="6" aria-hidden="true" style={{width: '318px'}} howu-index="847" tabindex="-1">
                                    <div howu-index="846">
                                        <div class="mobinius-testimonials-sec col py-1 px-5 mt-4 border-right odd_class" style={{width: '100%', display: 'inline-block'}} howu-index="845">
                                            <div class="mobinius_testimonial_content" howu-index="844"> <p howu-index="843">It’s a sheer pleasure to be associated with their team. Right from the very beginning, when I got a call and our very 1st meeting.</p></div>
                                            <p class="h5 font-weight-bold text-left text-dark mb-1" howu-index="842">Kevin Kess</p>
                                            <p class="font-weight-bold text-left text-muted" howu-index="841">VersaTech, USA</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="slick-slide" data-slick-index="7" aria-hidden="true" style={{width: '318px'}} howu-index="840" tabindex="-1">
                                    <div howu-index="839">
                                        <div class="mobinius-testimonials-sec col py-1 px-5 mt-4 border-right even_class" style={{width: '100%', display: 'inline-block'}} howu-index="838">
                                            <div class="mobinius_testimonial_content" howu-index="837"> <p howu-index="836">We, at Lilavati Hospital are happy to be associated with Mobinius and have chosen them as our preferred vendor. </p></div>
                                            <p class="h5 font-weight-bold text-left text-dark mb-1" howu-index="835">Girish Koppar</p>
                                            <p class="font-weight-bold text-left text-muted" howu-index="834">Lilavati Hospital, Mumbai – India</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="slick-slide" data-slick-index="8" aria-hidden="true" style={{width: '318px'}} howu-index="833" tabindex="-1">
                                    <div howu-index="832">
                                        <div class="mobinius-testimonials-sec col py-1 px-5 mt-4 border-right odd_class" style={{width: '100%', display: 'inline-block'}} howu-index="831">
                                            <div class="mobinius_testimonial_content" howu-index="830"> <p howu-index="829">We chose Mobinius™ post the demo and,we were happy to see their POC which was acceptable by us, as it matched our parameters. </p></div>
                                            <p class="h5 font-weight-bold text-left text-dark mb-1" howu-index="828">Deepak Ravindran</p>
                                            <p class="font-weight-bold text-left text-muted" howu-index="827">Micro-Lam, USA</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="slick-slide" data-slick-index="9" aria-hidden="true" style={{width: '318px'}} howu-index="826" tabindex="-1">
                                    <div howu-index="825">
                                        <div class="mobinius-testimonials-sec col py-1 px-5 mt-4 border-right even_class" style={{width: '100%', display: 'inline-block'}} howu-index="824">
                                            <div class="mobinius_testimonial_content" howu-index="823"> <p howu-index="822">We, at Centre For Sight are happy to be associated with Mobinius. We were impressed by the credentials of the leadership team , clientele and their range of technical expertise.</p></div>
                                            <p class="h5 font-weight-bold text-left text-dark mb-1" howu-index="821">Mr Braj Bhushan Bijoria</p>
                                            <p class="font-weight-bold text-left text-muted" howu-index="820">Centre For Sight</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="slick-slide" data-slick-index="10" aria-hidden="true" style={{width: '318px'}} howu-index="819" tabindex="-1">
                                    <div howu-index="818">
                                        <div class="mobinius-testimonials-sec col py-1 px-5 mt-4 border-right odd_class" style={{width: '100%', display: 'inline-block'}} howu-index="817">
                                            <div class="mobinius_testimonial_content" howu-index="816"> <p howu-index="815">We have been glad to be associated with Mobinius, as they have always been up to our expectations in terms of delivery, commitment &amp; quality.</p></div>
                                            <p class="h5 font-weight-bold text-left text-dark mb-1" howu-index="814">Kumar Swamy</p>
                                            <p class="font-weight-bold text-left text-muted" howu-index="813">PUMA, India</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="slick-slide" data-slick-index="11" aria-hidden="true" style={{width: '318px'}} howu-index="812" tabindex="-1">
                                    <div howu-index="811">
                                        <div class="mobinius-testimonials-sec col py-1 px-5 mt-4 border-right even_class" style={{width: '100%', display: 'inline-block'}} howu-index="810">
                                            <div class="mobinius_testimonial_content" howu-index="809"> <p howu-index="808">Mobinius – their work speaks everything for me! Right from our very 1st meeting. I am more than satisfied with their philosophy of being honest and communicating clear.</p></div>
                                            <p class="h5 font-weight-bold text-left text-dark mb-1" howu-index="807">Michiel Otterloo</p>
                                            <p class="font-weight-bold text-left text-muted" howu-index="806">Dutch View, Netherlands</p>
                                        </div>
                                    </div>
                                </div>
                                </Slider>
                            </div>
                        {/* </div> */}
                        {/* <button class="slick-next slick-arrow" aria-label="Next" type="button" style={{}} aria-disabled="false" howu-index="805">Next</button> */}
                    </section>
                        <p howu-index="804"></p>
                        <h6 class="text-right mt-n4 mr-5 pr-5 " howu-index="803"><a class="text-decoration-none font-weight-bold link-color mr-5 " href="/testimonials" howu-index="802">View all <img class="ml-4" src="../images/long-arrow.svg" howu-index="801"/></a></h6>
                    </div>
                </div>
            </div>
       </div>
    </>
  )
}

export default TrustedBy