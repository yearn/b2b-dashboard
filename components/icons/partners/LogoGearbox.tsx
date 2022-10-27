import	React, {ReactElement}		from	'react';

function	LogoGearbox(props: React.SVGProps<SVGSVGElement>): ReactElement {
	const defaultProps = {
		width: 40,
		height: 50
	};

	props = {...defaultProps, ...props};

	return (
		<svg
			viewBox={'0 0 40 50'}
			fill={'none'}
			xmlns={'http://www.w3.org/2000/svg'}
			{...props}>
			<path
				fillRule={'evenodd'}
				clipRule={'evenodd'}
				d={'M18.0854 2.80906C15.0363 9.04398 15.2205 11.9725 19.0281 17.8146C24.0368 25.4988 24.0157 28.8749 18.9236 34.7802C14.0169 40.4713 14.9366 43.0052 21.6369 42.2532C25.5212 41.817 29.4532 39.2747 31.4334 35.9184C32.8127 33.5812 33.1062 32.3828 33.0881 29.1667C33.0591 24.0411 31.7885 21.6949 25.2887 14.7597C19.5806 8.66859 18.5033 6.35065 19.5788 2.47097C20.5276 -0.952705 19.85 -0.798697 18.0854 2.80906ZM23.1394 5.25334C22.4812 6.32899 21.9419 7.55323 21.9407 7.97375C21.9377 9.01511 26.9796 14.4012 27.2369 13.6317C27.3498 13.2948 26.7224 11.6038 25.8425 9.87418C24.8382 7.89975 24.337 6.09136 24.4958 5.0139C24.8195 2.81809 24.6069 2.85538 23.1394 5.25334ZM13.7578 12.6229C13.9034 14.2772 14.1993 17.2551 14.4161 19.2404C14.7603 22.4018 14.6438 23.0593 13.4728 24.5368C12.6068 25.6299 11.6828 26.1599 10.8476 26.0408C9.76243 25.8868 9.55831 25.4537 9.55831 23.3006C9.55831 21.8934 9.47678 20.7432 9.37774 20.7438C9.2787 20.7438 8.67299 21.8952 8.03225 23.3012C5.64986 28.5296 7.39212 36.3576 11.6019 39.3445L13.4837 40.6788V39.1189C13.4837 38.0408 14.625 36.3365 17.1771 33.6041C20.8531 29.6672 20.8688 29.6347 20.6115 26.545C20.4219 24.2643 19.6664 22.2887 17.7659 19.1014C16.3425 16.7149 14.799 13.6041 14.3358 12.1885L13.4933 9.61489L13.7578 12.6229ZM6.02308 15.5767C3.2403 18.2706 3.23789 18.2766 4.22768 19.9942C5.50493 22.2111 4.93485 24.5308 2.8846 25.4615C2.02163 25.8537 1.09223 26.0366 0.819869 25.8688C0.245559 25.5156 -0.191061 29.1721 0.0849212 32.0243C0.238312 33.6041 0.539055 33.9795 1.65204 33.9795C4.55801 33.9795 6.06897 37.8531 4.03624 40.091C3.10201 41.1192 3.21011 41.3496 5.85519 43.9852C8.50088 46.6201 8.73217 46.7278 9.76424 45.7972C12.0361 43.7487 15.8993 45.2846 15.8993 48.236C15.8993 49.6654 18.7467 50.3699 22.2402 49.805C23.916 49.5343 24.3539 49.1877 24.3539 48.1314C24.3539 46.5323 26.1106 44.8081 27.7393 44.8081C28.3867 44.8081 29.5396 45.2431 30.3011 45.7743C31.6399 46.7086 31.7746 46.6472 34.404 43.9142C36.912 41.3063 37.0485 41.0067 36.1734 40.0429C34.1171 37.7797 35.7459 33.9795 38.7714 33.9795C40.0378 33.9795 40.1006 33.7623 39.9321 29.9764C39.766 26.2634 39.6477 25.9578 38.2907 25.7533C37.4869 25.6323 36.4675 25.2347 36.0261 24.8701C34.927 23.9611 35.0145 20.4634 36.1607 19.5159C36.9814 18.8373 36.7435 18.3843 34.2319 15.8444C31.6581 13.2407 31.2673 13.0374 30.3796 13.8381C29.8367 14.3278 29.042 14.7284 28.6144 14.7284C28.1868 14.7284 28.8076 15.7993 29.9943 17.1077C33.6467 21.1348 34.8841 24.0983 34.904 28.8659C34.9191 32.3678 34.6425 33.571 33.2614 36.0104C31.3869 39.3216 31.2909 39.6411 32.3556 39.0352C32.771 38.7994 32.2952 39.4846 31.2987 40.5591C28.2128 43.8853 25.2609 45.0807 20.1266 45.0831C16.8915 45.0843 14.9934 44.7684 13.4837 43.9767C10.9322 42.6388 7.38064 39.3818 7.7768 38.7429C7.93382 38.4902 7.44768 37.2467 6.69703 35.981C5.60518 34.1407 5.33101 32.7727 5.33101 29.1667C5.33101 24.1247 6.63664 20.8202 10.0227 17.2942C11.0505 16.224 11.774 15.2735 11.6309 15.182C11.4872 15.0912 10.7939 14.5353 10.0897 13.9476C8.83786 12.9026 8.74788 12.9387 6.02308 15.5767Z'}
				fill={'currentcolor'}/>
		</svg>
	);
}

export default LogoGearbox;



