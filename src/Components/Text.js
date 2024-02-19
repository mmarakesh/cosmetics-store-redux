import { useTranslation } from 'react-i18next';

function Text() {
    const { t } = useTranslation();
    return(
<div>
        <div className="products">
        <h1 className="lookAtMe">{t('Look at me')}</h1>
       </div>
        <div className="containerFront">
            <img className="imageFront" src="https://www.sephora.com/contentimages/2023-01-11-slotting-bestsellers-v2-site-responsive-home-page-hero-banner-2022-xxXxx-slotting-bestsellers-v2-site-mobile-home-page-hero-banner-US_01.jpg?imwidth=545" alt="front" width={490}/>
            <img className="imageFront" src="https://www.sephora.com/contentimages/2023-01-05-jan-cleanical-story-site-desktop-home-page-rwd-hero-banner-us-can-release-V2.jpg?imwidth=545" alt="front" width={490}/>
            <img className="imageFront" src="https://www.sephora.com/contentimages/2022-12-30-slotting-just-arrived-v2-standard-site-rwd-home-page-hero-banner-4-product-english-US-handoff_01.jpg?imwidth=545" alt="front" width={490}/>
        </div>
        
        <div>
            <div className='text'>
            <h2>{t('Clean Meets Clinical')}</h2>
                <p>{t(`Love clinical skincare, but want to limit your exposure to certain ingredients? Try “Cleanical” skincare. This is where clean skincare meets science. We’re talking clinical skincare products backed by science from doctors you love and trust, formulated without the ingredients you don't. You no longer have to decide between clean formulas and visible results. Whether you’re looking to support your skin barrier, target acne, brighten dark spots and hyperpigmentation, or get more youthful-looking skin, Cleanical skincare has you covered.`)}</p>
            <div className="twoBox">
            <div className="box">
                <div className="boxItem">
                <h3>{t('Skin Barrier')}</h3>
                <p>{t('Supporting your skin’s barrier function is all about pumping good ingredients in and keeping harmful stuff, like free radicals and harsh environmental aggressors, out. Without a healthy skin barrier, it’s near impossible to achieve skin that is free of a variety of common concerns. Cleanical skincare helps support your skin’s barrier function.')}</p>
                </div>
                <div className="boxItem">
                <h3>{t('Radiance')}</h3>
                <p>{t(`Maybe you've spent too much time in the sun back in the day, or maybe you've got a habit of picking your face. Either way, you've likely been left with hyperpigmentation and pesky dark spots. That's where Cleanical skincare comes in. Sephora carries formulas that help you achieve a more even skin tone and keep it for the long haul.`)}</p>
                </div>
            </div>
            <div className="box">
                <div className="boxItem">
                <h3>{t('Acne')}</h3>
                <p>{('If you’ve ever dealt with acne, you know how frustrating it can be. Improve the appearance of acne and restore your confidence with the help of Cleanical skincare. These picks are scientifically proven to help treat current breakouts and prevent future ones without triggering any sensitivities.')}</p>
                </div>
                <div className="boxItem">
                <h3>{t('Youthful-Looking Skin')}</h3>
                <p>{t('We’ve gotten as close as we can to finding the fountain of youth in a jar––it’s powerful Cleanical formulas packed with anti-aging ingredients to help reduce the appearance of fine lines and wrinkles. Get all the benefits of science-backed skincare without harsh ingredients, like retinyl palmitate, parabens, sulfates, mineral oil, and more.')}</p>
                </div>
            </div>
            </div>
            </div>
            </div>
            </div>
    )
}

export default Text;