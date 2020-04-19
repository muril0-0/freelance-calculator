import React, { useState } from "react";

import { NavBar, Content } from "../styles/styles";

import he4rt from "../assets/he4rt-logo.svg";
import calc from "../assets/calc.svg";
import github from "../assets/github.svg";

import calcFull from "../assets/calculatorFull.svg";
import clock from "../assets/clock.svg";
import calendar from "../assets/calendar.svg";
import vacation from "../assets/beach.svg";
import price from "../assets/money.svg";
import projectValue from "../assets/project.svg";

import data from "../utils/data";

export default function Home() {
  const [figure, setFigure] = useState(calcFull);
  const [sub, setSub] = useState("Your personal freelance calculator.");

  const [hour, setHour] = useState(null);
  const [day, setDay] = useState(null);
  const [vacat, setVacat] = useState(null);
  const [project, setProject] = useState(null);

  function handlerChange(numb) {
    setSub(data[numb]);

    switch (numb) {
      case 0:
        setFigure(clock);
        break;
      case 1:
        setFigure(calendar);
        break;
      case 2:
        setFigure(vacation);
        break;
      case 3:
        setFigure(price);
        break;
      default:
        break;
    }
  }

  function handlerCalc() {
    const res = project / (day * 4 * hour) + vacat * day * hour;
    setSub(`The price of your hour is $${res.toFixed(2)}.`);
    setFigure(projectValue);
  }

  return (
    <>
      <NavBar>
        <div className="title-name">
          <img src={calc} alt="calc-ico" width="28px" />
          <p>Freelancer Calc</p>
        </div>
        <div className="title-logo">
          <a
            href="https://heartdevs.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={he4rt} alt="he4rt-logo" width="46px" />

            <div className="logo-name">
              <p>He4rt</p>
              <span>devs</span>
            </div>
          </a>
        </div>
        <div className="tite-social">
          <a
            href="https://github.com/muril0-0"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={github} alt="github-logo" width="28px" />
          </a>
        </div>
      </NavBar>
      <Content>
        <div className="explain">
          <img src={figure} alt="ilustrate" width="200px" height="200px" />
          <p>{sub}</p>
        </div>
        <div className="fields">
          <p>Fill in the fields below to know the value of your hour.</p>
          <div className="work-hours">
            <label htmlFor="Hwork">Work Hours</label>
            <input
              type="number"
              name="Hwork"
              id="Hwork"
              placeholder="00"
              onFocus={() => handlerChange(0)}
              value={hour}
              onChange={(event) => setHour(event.target.value)}
            />
          </div>
          <div className="work-days">
            <label htmlFor="Hdays">Work Days</label>
            <input
              type="number"
              name="Hdays"
              id="Hdays"
              placeholder="00"
              onFocus={() => handlerChange(1)}
              value={day}
              onChange={(event) => setDay(event.target.value)}
            />
          </div>
          <div className="vacation-days">
            <label htmlFor="Vdays">Vacation</label>
            <input
              type="number"
              name="Vdays"
              id="Vdays"
              placeholder="00"
              onFocus={() => handlerChange(2)}
              value={vacat}
              onChange={(event) => setVacat(event.target.value)}
            />
          </div>
          <div className="project-value">
            <label htmlFor="project">Project Value</label>
            <input
              type="number"
              name="project"
              id="project"
              placeholder="00"
              onFocus={() => handlerChange(3)}
              value={project}
              onChange={(event) => setProject(event.target.value)}
            />
          </div>

          <button onClick={handlerCalc}>Calculate</button>
        </div>
      </Content>
    </>
  );
}
