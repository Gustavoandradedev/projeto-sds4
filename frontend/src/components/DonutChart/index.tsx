import axios from 'axios';
import Chart from 'react-apexcharts';
import { SaleSum } from 'types/sale';
import { BASE_URL } from 'utils/requests';

type ChartData = {
    labels: string[];
    series:number[];
}

function DonutChart() {

    //Forma Errada
    let chartData : ChartData = { labels: [], series: []};

    axios.get(`${BASE_URL}/sales/amount-by-seller`)
        .then(response => {
            const data = response.data as SaleSum[];
            const myLabels = data.map(x => x.sellerName);
            const mySeries = data.map(x => x.sum);  
            
            chartData = {labels: myLabels, series: mySeries};
            console.log(chartData);
        });

    //const mockData = {
    //    series: [477138, 499928, 444867, 220426, 47308, 50010, 499928, 444867, 220426, 473088, 502088 ],
     //   labels: ['Carlito Tevez', 'Airton Senna', 'Hebe Camargo', 'Marcos Mion', 'Neymar', 'João Dória', 'Jim Carrey',
     //   'Wesley Safadão', 'Bon Jovi', 'Raul Seixas', 'Nelio Alves']
    //}

    const options = {
        legend: {
            show: true
        }
    }
    return (
        <Chart
            options={{ ...options, labels: chartData.labels }}
            series={chartData.series}
            type="donut"
            height="240"
        />
    );
}

export default DonutChart;