/* eslint-disable */
import days from './days.js';
import linker from './links.js';
import open from 'open';

// parse and compare minute hour string
// given hours and minutes of the form
const isInsideTime = (startTime: string, endTime: string, date: Date) => {
  // find startTime hours?
  const startStrs = [...startTime.split(':'), ...endTime.split(':')];
  const startNums = startStrs.map((value) => parseInt(value, 10));
  // let timeRange = {
  //   startHour: startNums[0],
  //   startMinutes: startNums[1],
  //   endHour: startNums[2],
  //   endMinutes: startNums[3],
  // };
  const classTime =
    startNums[2] * 60 + startNums[3] - (startNums[0] * 60 + startNums[1]);
  const currentDiff =
    date.getHours() * 60 +
    date.getMinutes() -
    (startNums[0] * 60 + startNums[1]);
  return currentDiff > -1 && currentDiff < classTime;
};

const asyncTimeout = (callback: any, time: number) =>
  new Promise((resolve) => resolve(setTimeout(callback, time)));

const openAllForms = async (classes: any[]) => {
  // const toform: Promise<any>[] = [];
  // for (let i = 0; i < classes.length; ++i) {
  //   toform.push(open(classes[i].form));
  // }
  // return Promise.all(toform);
  for (let i = 0; i < classes.length; ++i) {
    await open(classes[i].form);
  }
};

const main = async () => {
  let date: Date = new Date();
  const day: string | undefined = days.get(date.getDay());

  // Get all classes from json
  const allClasses: any[] = JSON.parse(
    await linker.fsReadPromise(linker.jsonPath)
  );
  // Get classes today
  const classesToday = allClasses.filter((value) =>
    value.schedule.includes(day)
  );
  let currentClassName: string;

  // First open all attendance for classes today
  await openAllForms(classesToday);

  const loop = async () => {
    // Update date
    date = new Date();
    // If new day restart program
    if (days.get(date.getDay()) !== day) {
      return main();
    }

    // Filter classes today to find one that matches current date and time
    const classrn = classesToday.filter((value) =>
      isInsideTime(value.start, value.end, date)
    );
    // Open the zoom link for the class if there is one
    for (let i = 0; i < classrn.length; ++i) {
      if (classrn[i].name !== currentClassName) {
        await open(classrn[i].class);
        currentClassName = classrn[i].name;
      }
    }
    // Wait a min~
    return asyncTimeout(loop, 60000);
  };
  await loop();
};

main();
