import Switch from "@mui/material/Switch";

const label = { inputProps: { "aria-label": "Switch demo" } };

const BasicSwitches = () => {
  return (
    <div>
      <Switch {...label} defaultChecked />
      <Switch {...label} />
      <Switch {...label} disabled defaultChecked />
      <Switch {...label} disabled />
    </div>
  );
};

interface test {
  suma: String;
  valor: String;
}
const Home = (props: test) => {
  const { suma, valor } = props;

  return (
    <div>
      <div>Switches</div>
      <BasicSwitches />
      <h1>{valor}</h1>
    </div>
  );
};

const Links = () => {
  return "45";
};

export { Links };
export default Home;
