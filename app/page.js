import Image from 'next/image';

// IMPORT ICONS
import { BsApple } from 'react-icons/bs';
import { BsAndroid2 } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import { ImFacebook2 } from 'react-icons/im';

// IMPORT IMAGES
import logo from '../assets/logo.svg';
import bgPattern1 from '../assets/bg-pattern-1.svg';
import bgPattern2 from '../assets/bg-pattern-2.svg';
import phoneIMG from '../assets/illustration-app.png';
import mobileBG from '../assets/bg-main-mobile.png';
import tabletBG from '../assets/bg-main-tablet.png';
import desktopBG from '../assets/bg-main-desktop.png';

export default function Home() {
	return (
		<>
			<header>
				<Image src={logo} priority alt='' />
				<Image className='bgPattern1' src={bgPattern1} alt='' priority />
			</header>

			<main>
				<Image className='mobileBG' src={mobileBG} alt='' />
				<Image className='tabletBG' src={tabletBG} alt='' />
				<Image className='desktopBG' src={desktopBG} alt='' />
				<section className='main-text-section'>
					<h1 className='main-text-title'>
						We make your music sound extraordinary.
					</h1>
					<p className='main-text-content'>
						A system audio equalizer specifically designed for Android and iOS. Freely
						tune the way your music sounds with a professional grade parametric EQ &
						volume mixer. Control bass, mids, treble, gain control, reverb, and more!
					</p>
				</section>

				<div className='middle-container'>
					<Image className='bgPattern2' src={bgPattern2} alt='' priority />
					<Image className='phoneIMG' src={phoneIMG} alt='' priority />

					<div className='middle-content-container'>
						<h2 className='middle-content-title'>Premium EQ</h2>
						<p className='middle-content-paragraph'>
							Get expert-level control with a robust equalizer, volume mixer, and
							spatial audio. Take your listening experience to a whole new level and
							access all our incredible features!
						</p>
						<div className='middle-cost-container'>
							<span className='middle-content-cost'>$4 </span>
							<p className='middle-content-monthly'>/ month</p>
						</div>

						<div className='btn-grp'>
							<button className='btn btn-1'>
								<BsApple /> iOS Download
							</button>
							<button className='btn btn-2'>
								<BsAndroid2 />
								<p>Android Download</p>
							</button>
						</div>
					</div>
				</div>
			</main>

			<footer>
				<div>
					<Image src={logo} priority alt='' />
					<p className='footer-content'>
						All rights reserved © Equalizer 2021 <br />
						Have any problems? Contact us via social media or email us at <br />
						<strong> equalizer@example.com</strong>
					</p>
					<div className='social-icons'>
						<ImFacebook2 className='fb' />
						<BsInstagram className='insta' />
						<BsTwitter className='twitter' />
					</div>
				</div>
			</footer>
		</>
	);
}
