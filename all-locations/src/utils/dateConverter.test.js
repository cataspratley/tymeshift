import { getLocalTime, getTimeZone } from "./dateConverter";

it("should get the converted local time", () => {
  const date = new Date("2021-03-05T09:10:35.462Z");
  expect(getLocalTime(date)).toEqual("09:10 AM");
});

it("should get the converted time zone", () => {
  const date = new Date("2021-03-05T09:10:35.462Z");
  expect(getTimeZone(date)).toEqual("GMT+0000");
});
