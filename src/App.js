import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MomentoMoriCalender from "./components/MomentoMori";

function App() {
  return (
    <MomentoMoriCalender
      showStartingOfYear={true}
      dateOfBirth="1999-10-10"
      events={[
        {
          startingDate: "2012-12-12",
          endDate: "2019-12-12",
          color: "red",
          description: "adsdasd",
        },
        {
          startingDate: "2012-12-12",
          endDate: "2021-12-12",
          color: "green",
          description: "adsdasd",
        },
        {
          startingDate: "2013-12-12",
          endDate: "2022-12-12",
          color: "orange",
          description: "adsdasd",
        },
      ]}
      yearLabel={[10, 20, 30]}
    />
  );
}

export default App;
