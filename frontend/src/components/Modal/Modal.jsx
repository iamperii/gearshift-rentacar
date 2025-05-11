import styles from './modal.module.scss';

const Modal = ({ show, onClose }) => {
	if (!show) return null;

	return (
		<div className={styles.overlay}>
			<div className={styles.modal}>
				<div className={styles.header}>
					<p>Login Required</p>
					<button className={styles.closeBtn} onClick={onClose}>
						×
					</button>
				</div>
				<div className={styles.body}>
					<p>
						You need to be logged in to submit an enquiry. Please log in or
						create an account.
					</p>
				</div>
				<div className={styles.footer}>
					<button className={styles.secondaryBtn} onClick={onClose}>
						Close
					</button>
					<button
						className={styles.primaryBtn}
						onClick={() => {
							window.location.href = '/login';
						}}
					>
						Go to Login
					</button>
				</div>
			</div>
		</div>
	);
};

export default Modal;
