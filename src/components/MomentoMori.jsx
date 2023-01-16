import React, { useEffect, useState } from "react";
import "./app.css";

function yearLabelCalculator(array) {
  let result = [];
  array.forEach((i) => {
    result.push({
      index: i * 52 - 1,
      label: i,
    });
  });
  return result;
}

function weeksInLife(param) {
  const dateOfBirth = new Date(param.dateOfBirth);
  const defaultColor = param.defaultColor;
  const events = param.events.length === 0 ? [] : param.events;
  const today = new Date();
  const end = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  const weeks = [];
  let start = new Date(dateOfBirth);
  for (let i = 0; i < 4160; i++) {
    let date = start.toString();
    let color = defaultColor;
    let event;
    let eventExist = false;
    let eventDescription = "No event";
    let weekEvent = events.find((e) => {
      const eventStart = new Date(e.startingDate);
      const eventEnd = new Date(e.endDate);
      if (eventStart <= start && start <= eventEnd) {
        eventExist = true;
        color = e.color;
        eventDescription = e.description;
        return true;
      }
    });
    if (start <= end && start.getTime() <= end.getTime()) {
      if (eventExist) {
        weeks.push({
          event: { description: eventDescription },
          color: color,
          date: date,
        });
      } else {
        weeks.push({
          color: color,
          date: date,
          event: { description: eventDescription },
        });
      }
    } else {
      weeks.push({
        color: "white",
        date: date,
        event: { description: `You haven't lived` },
      });
    }
    start.setDate(start.getDate() + 7);
  }
  return weeks;
}

function MomentoMoriCalender({
  yearLabel = [],
  dateOfBirth = "",
  events = [],
  showStartingOfYear = true,
  defaultColor = "pink",
}) {
  const [week, setWeek] = useState(weeksInLife({ dateOfBirth, events }));
  const yearsToShowOnRightSide = yearLabelCalculator(yearLabel);

  useEffect(() => {
    setWeek(weeksInLife({ dateOfBirth, events, defaultColor }));
  }, [dateOfBirth, events]);
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          style={{
            
            marginTop: "10px",
            marginLeft: showStartingOfYear && "70px",
          }}
        >
          <div className="calender">
            {week.map((item, index) => {
              let rowSpace = (index + 1) % 520 === 0;
              return (
                <>
                  <div
                    key={item.date}
                    title={item?.event?.description}
                    className="week-cell"
                    style={{
                      marginBottom: rowSpace && "4px",
                      backgroundColor: item.color,
                    }}
                  >
                    {showStartingOfYear && index % 52 === 0 && (
                      <h6
                        style={{
                          fontSize: "9px",
                          marginLeft: "-58px",
                        }}
                      >
                        <i>
                          {item.date !== "Invalid Date" &&
                            item.date.slice(4, 15)}
                        </i>
                      </h6>
                    )}
                    {yearsToShowOnRightSide.length !== 0 &&
                      yearsToShowOnRightSide.map((year) => {
                        if (year.index === index)
                          return (
                            <h6
                              key={year.label}
                              style={{
                                fontSize: "10px",
                                marginLeft: "14px",
                                fontWeight: "600",
                                marginTop: "-2px",
                              }}
                            >
                              {year.label}
                            </h6>
                          );
                      })}
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default MomentoMoriCalender;
