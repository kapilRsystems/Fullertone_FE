import * as React from 'react';
import {
    Chart,
    ChartTitle,
    ChartSeries,
    ChartSeriesItem,
    ChartCategoryAxis,
    ChartCategoryAxisItem
} from '@progress/kendo-react-charts';

const categories = ['Jan 2023', 'Feb 2024', 'Jun 2023', 'Jul 2023'];

interface firstSeries{
    firstseries: number[],
    title: string
}

const ChartContainer = (props:firstSeries ) => {
    const {firstseries,title} = props

    return (
        <Chart style={{ width: '100%', height: '300px' }}>
            <ChartTitle text={title} />
            <ChartCategoryAxis>
                <ChartCategoryAxisItem title={{ text: 'Months' }} categories={categories} />
            </ChartCategoryAxis>
            <ChartSeries>
                <ChartSeriesItem type="area" data={firstseries} color="yellow" opacity={0.5} />
                <ChartSeriesItem
                    type="line"
                    data={firstseries}
                    labels={{ visible: true, format: '{0}', position: 'above' }}
                />
            </ChartSeries>
        </Chart>
    );
};

export default ChartContainer;
