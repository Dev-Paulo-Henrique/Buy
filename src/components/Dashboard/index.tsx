import Chart from "react-apexcharts"

const series = [
  { name: 'series1', data: [31, 120, 10, 28, 61, 18, 109] }
]



export function Dashboard() {
  return (
    // <Flex direction="column" h="100vh">
    //   <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
    //   <SimpleGrid flex="1" gap="4" minChildWidth="320px" align="flex-start">
    //     <Box p={["6", "8"]} bg="gray.800" borderRadius={8} pb="4">
    //     <Text fontSize="lg" mb="4">Inscritos da semana</Text>
        <div>
          <div>
        <Chart options={{
          chart: {
            toolbar: {
              show: false,
            },
            zoom: {
              enabled: false,
            },
            foreColor: '#45a3a5',
          },
          grid: {
            show: false,
          },
          dataLabels: {
            enabled: false,
          },
          tooltip: {
            enabled: false,
          },
          xaxis: {
            type: 'datetime',
            axisBorder: {
              color: '#cc9329'
            },
            axisTicks: {
              color: '#bb263f'
            },
            categories: [
              '2021-03-18T00:00:00.000Z',
              '2021-03-19T00:00:00.000Z',
              '2021-03-20T00:00:00.000Z',
              '2021-03-21T00:00:00.000Z',
              '2021-03-22T00:00:00.000Z',
              '2021-03-23T00:00:00.000Z',
              '2021-03-24T00:00:00.000Z',
          ]
          },
          fill:{
            opacity: 0.3,
            type: 'gradient',
            gradient: {
              shade: 'dark',
              opacityFrom: 0.7,
              opacityTo: 0.3,
            }
          }
        }} series={series} type="area" height={160}/>
        </div>
        </div>
    //     </Box>
    //     <Box p={["6", "8"]} bg="gray.800" borderRadius={8}  pb="4">
    //     <Text fontSize="lg" mb="4">Taxa de abertura</Text>
        // <Chart options={options} series={series} type="area" height={160}/>
    //     </Box>
    //   </SimpleGrid>
    //   </Flex>
    // </Flex>
  );
}