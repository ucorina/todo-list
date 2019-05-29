import React from "react";
import { shallow } from "enzyme";
import subMinutes from "date-fns/subMinutes";
import addMinutes from "date-fns/addMinutes";
import TodoDueTime from "./TodoDueTime";

describe("Due time display tests", () => {
  it("shows nothing when task is completed", () => {
    const wrapper = shallow(<TodoDueTime dueTime={new Date()} completed />);
    expect(wrapper.isEmptyRender()).toEqual(true);
  });
  it("shows nothing when task is further than an hour away", () => {
    const twoHoursFromNow = addMinutes(new Date(), 120);
    const wrapper = shallow(<TodoDueTime dueTime={twoHoursFromNow} />);
    expect(wrapper.isEmptyRender()).toEqual(true);
  });

  it("shows 'Next hour' when task less than an hour away", () => {
    const twentyMinutesFromNow = addMinutes(new Date(), 20);
    const wrapper = shallow(<TodoDueTime dueTime={twentyMinutesFromNow} />);
    const label = wrapper.first().props().label;
    expect(label).toEqual("Next hour");
  });

  it("shows 'X minutes left' when task less than 5 minutes away", () => {
    const twoMinutesFromNow = addMinutes(new Date(), 2);
    const wrapper = shallow(<TodoDueTime dueTime={twoMinutesFromNow} />);
    const label = wrapper.first().props().label;
    expect(label).toEqual("2 minute(s) left");
  });

  it("shows 'Overdue' when task due time has passed", () => {
    const fiveMinutesAgo = subMinutes(new Date(), 5);
    const wrapper = shallow(<TodoDueTime dueTime={fiveMinutesAgo} />);
    const label = wrapper.first().props().label;
    expect(label).toEqual("Overdue");
  });
});
