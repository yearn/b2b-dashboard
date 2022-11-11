export type TChartData = {
	name: string,
	WBTC: number,
	USDC: number,
	rsWBTC: string,
	rsUSDC: string,
	rbdWBTC: string,
	rbdUSDC: string,
};

export type TAxisDomainItem = string | number  | 'auto' | 'dataMin' | 'dataMax';

export type TChartProps = {
  children?: React.ReactNode,
	className?: string,
	type: string,
	title: string,
	tooltipSymbol: string,
	windowValue: number | undefined,
	data: TChartData[]
	bars: {name: string, fill: string}[]
	yAxisOptions: {
		domain?: string[] | number[] | [TAxisDomainItem, TAxisDomainItem] 
		tickCount?: number,
		ticks?: string[] | number[]	
		// interval prop allows tick to be skipped, 0 - shows all, 1 - hides half (skips every other)
		interval?: number
	}
	xAxisOptions: {
		interval?: number
	}
}