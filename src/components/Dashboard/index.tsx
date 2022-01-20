import Chart from "react-apexcharts"

const series = [
  { name: 'series1', data: [31, 120] }
]
const options = {
  chart: {
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
    foreColor: '#000',
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
  colors: ["#eba417"],
  xaxis: {
    // type: 'datetime',
    axisBorder: {
      color: '#eba417'
    },
    axisTicks: {
      color: '#eba417'
    },
    min: new Date().getDate() - 7,
    max: new Date().getDate(),
    categories: [
      // '2022-01-18T00:00:00.000Z',
      // '2022-01-19T00:00:00.000Z',
      // '2022-01-20T00:00:00.000Z',
      // '2022-01-21T00:00:00.000Z',
      // '2022-01-22T00:00:00.000Z',
      // '2022-01-23T00:00:00.000Z',
      // '2022-01-24T00:00:00.000Z',
      
      // new Date().getDate() - 6,
      // new Date().getDate() - 5,
      // new Date().getDate() - 4,
      // new Date().getDate() - 3,
      // new Date().getDate() - 2,
      // new Date().getDate() - 1,
      // new Date().getDate(),
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
}



export function Dashboard() {
  return (
    // <Flex direction="column" h="100vh">
    //   <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
    //   <SimpleGrid flex="1" gap="4" minChildWidth="320px" align="flex-start">
    //     <Box p={["6", "8"]} bg="gray.800" borderRadius={8} pb="4">
    //     <Text fontSize="lg" mb="4">Inscritos da semana</Text>
        <div>
          <div>
        <Chart options={options} series={series} type="area" height={160}/>
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