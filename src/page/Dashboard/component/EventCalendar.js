import MoreVertIcon from "@mui/icons-material/MoreVert";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { useState } from "react";
import { Button } from "@mui/material";

export const EventCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  const getDay = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);

    const firstDayWeekday = firstDay.getDay();

    const daysInMonth = [];
    for (let i = 0; i < firstDayWeekday; i++) {
      daysInMonth.push(null);
    }

    for (let day = 1; day <= lastDay.getDate(); day++) {
      daysInMonth.push(new Date(year, month, day));
    }

    return daysInMonth;
  };

  const year = currentDate.getFullYear();
  // const month = currentDate.getMonth();
  const daysInMonth = getDay(currentDate);

  const handleTodayClick = () => {
    setCurrentDate(new Date());
    setSelectedDate(new Date());
  };

  const isToday = (date) => {
    const today = new Date();
    return (
      today.getDate() === date.getDate() &&
      today.getMonth() === date.getMonth() &&
      today.getFullYear() === date.getFullYear()
    );
  };

  const handlePreviousMonth = () => {
    const prevMonthDate = new Date(currentDate);
    prevMonthDate.setMonth(currentDate.getMonth() - 1);
    setCurrentDate(prevMonthDate);
  };

  const handleNextMonth = () => {
    const nextMonthDate = new Date(currentDate);
    nextMonthDate.setMonth(currentDate.getMonth() + 1);
    setCurrentDate(nextMonthDate);
  };

  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

  const weeks = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <>
      <div className="Card__bg">
        <div className="headingContainer">
          <h1 className="component__heading--h1">Event</h1>
          <MoreVertIcon />
        </div>
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "8px 13px",
            }}
          >
            <div style={{ display: "flex", gap: "12px" }}>
              <a href="#">
                <ExpandLessIcon
                  onClick={handlePreviousMonth}
                  style={{
                    transform: "rotate(-90deg)",
                    padding: "2px 4px",
                    backgroundColor: "yellow",
                    borderRadius: "24px",
                  }}
                />
              </a>
              <a href="#">
                <ExpandLessIcon
                  onClick={handleNextMonth}
                  style={{
                    transform: "rotate(90deg)",
                    padding: "2px 4px",
                    backgroundColor: "yellow",
                    borderRadius: "24px",
                  }}
                />
              </a>
            </div>
            <h2>{`${currentDate.toLocaleString("default", {
              month: "long",
            })} ${year}`}</h2>
            <Button variant="contained" size="small" color="primary" onClick={handleTodayClick}>Today</Button>
          </div>
          <div className="Calendar__Container">
            <div className="weeks">
              {weeks.map((day, index) => (
                <div key={index} className="week">
                  {day}
                </div>
              ))}
            </div>
            <div className="days">
              {daysInMonth.map((day, index) => {
                if (!day) {
                  return <div key={index} className="day blank"></div>;
                }
                const isSelected =
                  selectedDate &&
                  selectedDate.toDateString() === day.toDateString();
                return (
                  <div
                    key={index}
                    className="day"
                    onClick={() => handleDateSelect(day)}
                  >
                    <p className={`${isToday(day) ? "today" : ""} ${isSelected ? "selected" : "date"}`}>
                      {day.getDate()}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
