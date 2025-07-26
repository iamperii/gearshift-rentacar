import style from './ourFeatures.module.scss';
import search from '../../assets/images/search.png';
import carIcon from '../../assets/images/carIcon.png';
import enquiry from '../../assets/images/about/enquiry.png';
import drive from '../../assets/images/drive.png';

const OurFeatures = () => {
	return (
		<>
			<div className={style['our-features']} data-aos="fade-up">
				<div className={style['feature']}>
					<div>
						<img loading="eager" src={search} alt="search-icon" />
					</div>
					<h3>Browse Our Fleet</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
				</div>
				<div className={style['feature']}>
					<div>
						<img loading="eager" src={carIcon} alt="search-icon" />
					</div>
					<h3>Select You Vehicle</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
				</div>
				<div className={style['feature']}>
					<div>
						<img loading="eager" src={enquiry} alt="enquiry-icon" />
					</div>
					<h3>Submit an Enquiry</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
				</div>
				<div className={style['feature']}>
					<div>
						<img loading="eager" src={drive} alt="drive-icon" />
					</div>
					<h3>Pick Up & Drive</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
				</div>
			</div>
		</>
	);
};

export default OurFeatures;
