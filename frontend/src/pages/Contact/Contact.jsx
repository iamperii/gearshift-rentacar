import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import style from './contact.module.scss';
import { Facebook, Instagram, Mail, Phone, Twitter } from 'lucide-react';
const Contact = () => {
	const handleSubmit = (e) => {
		e.preventDefault();
		toast.success('🎉 Form submited successfully!');
	};
	return (
		<>
			<section className={style.contact}>
				<div className={style['left-section']} data-aos="fade-up">
					<div>
						<h1>Get in touch</h1>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
					</div>

					<div className={style['info-container']}>
						<div className={style.info}>
							<Mail className={style.icon} size={50} color="white" />
							<div>
								<h3>Email </h3>
								<a href="mailto:info@gearshift.ae">info@gearshift.ae</a>
							</div>
						</div>

						<div className={style.info}>
							<Phone className={style.icon} size={50} color="white" />
							<div>
								<h3>Phone </h3>
								<a href="tel:+971 12 345 6789">+971 12 345 6789</a>
							</div>
						</div>
					</div>
				</div>

				<form
					className={style['contact-form']}
					data-aos="fade-up"
					onSubmit={handleSubmit}
				>
					<div className={style.label}>
						<div>
							<label htmlFor="">First Name</label>
							<input type="text" name="firstName" placeholder="First Name" />
						</div>
						<div>
							<label htmlFor="">Last Name</label>
							<input type="text" name="lastName" placeholder="Last Name" />
						</div>
					</div>
					<div className={style.label}>
						<div>
							<label htmlFor="">Email Address</label>
							<input type="email" name="email" placeholder="Email Address" />
						</div>
						<div>
							<label htmlFor="">Phone Number</label>
							<input type="tel" name="PhoneNumber" placeholder="Phone Number" />
						</div>
					</div>
					<textarea
						rows={10}
						name="message"
						id="message"
						placeholder="Message"
					></textarea>
					<div className={style['form-submit']}>
						<button>Send message</button>
						<nav className={style.socials}>
							<Twitter size={50} className={style.icon} color="white" />
							<Instagram size={50} className={style.icon} color="white" />
							<Facebook size={50} className={style.icon} color="white" />
							<Mail size={50} className={style.icon} color="white" />
						</nav>
					</div>
				</form>
				<ToastContainer position="top-right" autoClose={3000} />
			</section>
		</>
	);
};

export default Contact;
