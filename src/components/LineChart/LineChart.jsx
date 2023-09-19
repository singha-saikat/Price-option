import {
  LineChart as LChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const LineChart = () => {
  const data = [
    { name: "Page A", uv: 400, pv: 2400, amt: 2400 },
    { name: "Page B", uv: 300, pv: 1398, amt: 2210 },
    { name: "Page C", uv: 200, pv: 9800, amt: 2290 },
    { name: "Page I", uv: 512, pv: 7800, amt: 2300 },
    { name: "Page J", uv: 620, pv: 9800, amt: 2400 },
  ];
  return (
    <div>
      
      <LChart
        width={600}
        height={300}
        data={data}
        margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
      >
        <Line type="monotone" dataKey="uv" stroke="#800080" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
      </LChart>
      
    </div>
  );
};

export default LineChart;
