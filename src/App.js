import "bootstrap/dist/css/bootstrap.min.css";
import MomentoMoriCalender from "./components/MomentoMori";

function App() {
  return (
    <>
      <div style={{ border: "1px solid black", margin: "10px" }}>
        <MomentoMoriCalender
          showStartingOfYear={true}
          dateOfBirth="1999-10-10"
          events={[
            {
              startingDate: "2000-12-12",
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
        />
      </div>
    </>
  );
}

export default App;
