import type {ReactElement, SVGProps} from 'react';

function	LogoYearn(props: SVGProps<SVGSVGElement>): ReactElement {
	const defaultProps = {
		width: 40,
		height: 40
	};

	props = {...defaultProps, ...props};

	return (
		<svg
			viewBox={'0 0 1024 1024'}
			fill={'none'}
			xmlns={'http://www.w3.org/2000/svg'}
			{...props}>
			<circle
				cx={'512'}
				cy={'512'}
				r={'512'}
				fill={'#FF90A1'}/>
			<path d={'M645.095 167.388L512.731 345.535L501.031 330.202L378.173 168.118L295.537 229.447L460.078 449.941V609.105H564.653V449.21L728.463 229.447L645.095 167.388Z'} fill={'white'}/>
			<path d={'M688.242 392.992L623.888 474.764C654.602 503.969 673.616 545.585 673.616 590.852C673.616 679.925 601.218 752.206 512 752.206C422.782 752.206 350.384 679.925 350.384 590.852C350.384 544.855 370.129 503.239 400.844 474.034L337.221 391.532C280.912 439.719 245.81 511.27 245.81 590.852C245.81 737.604 365.01 856.612 512 856.612C658.99 856.612 778.191 737.604 778.191 590.852C778.191 512 743.089 441.179 688.242 392.992Z'} fill={'white'}/>
		</svg>
	);
}

export default LogoYearn;

