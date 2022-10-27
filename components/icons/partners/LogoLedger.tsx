import	React, {ReactElement}		from	'react';

function	LogoLedger(props: React.SVGProps<SVGSVGElement>): ReactElement {
	const defaultProps = {
		width: 40,
		height: 40
	};

	props = {...defaultProps, ...props};

	return (
		<svg
			viewBox={'0 0 40 40'}
			fill={'none'}
			xmlns={'http://www.w3.org/2000/svg'}
			{...props}>
			<path
				fillRule={'evenodd'}
				clipRule={'evenodd'}
				d={'M4.49786 0.3475C3.0784 0.854243 1.84453 1.80102 1.12635 2.93445C0.215042 4.37265 0.00273952 5.25637 0.00136982 7.61919L0 9.62308L4.73688 9.56117L9.47375 9.49948L9.53539 4.75877L9.59725 0.0180487L7.48084 0.028101C6.30632 0.0335842 4.97886 0.175921 4.49786 0.3475ZM15.295 12.3462V24.6926H27.6314H39.9676L39.9016 14.6971L39.8354 4.70165L39.1611 3.48323C38.4244 2.1524 37.6535 1.40851 36.2094 0.635371C35.288 0.142108 35.075 0.130912 25.2824 0.0660268L15.295 0V12.3462ZM0 20.009V24.6926H4.79395H9.58789V20.009V15.3254H4.79395H0V20.009ZM0.0762465 30.7633C-0.00136978 30.9657 -0.00662 32.0322 0.0646043 33.1332C0.248144 35.9678 0.957648 37.3742 2.92271 38.7989C4.0397 39.6084 6.21273 40.0861 8.21819 39.963L9.47375 39.8858V35.2022V30.5186L4.84577 30.4567C0.762922 30.402 0.200889 30.4381 0.0762465 30.7633ZM15.295 35.2022V40H19.9748H24.6546V35.2022V30.4043H19.9748H15.295V35.2022ZM30.4635 30.6965C30.4018 30.8574 30.3795 32.9908 30.4137 35.4373L30.4758 39.8858L32.7586 39.8593C36.1059 39.8207 37.85 38.9136 39.156 36.5328C39.7519 35.4464 39.8327 35.0539 39.9117 32.8604L40 30.4043H35.2878C31.6709 30.4043 30.5495 30.4722 30.4635 30.6965Z'}
				fill={'currentcolor'}/>

		</svg>
	);
}

export default LogoLedger;



