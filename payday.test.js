const { TestScheduler } = require('jest');
const payDay = require('./payday');

//20th Jan 2020 is before payday 27th, and 27th Jan 2020 is a Monday so should return 27th Jan 2020
test('20th Jan 2020', () => {
    expect(payDay(new Date(2020, 0, 20))).toStrictEqual(new Date(2020, 0, 27));
});


//28th Jan 2021 is after payday 27th, and 27th Feb 2021 is a Saturday so should return 26th Feb 2021
test('28th Jan 2021', () => {
    expect(payDay(new Date(2021, 0, 28))).toStrictEqual(new Date(2021, 1, 26));
});


//24th Jun 2021 is before payday 27th, and 27th Jun 2021 is a Sunday so should return 25th Jun 2021
test('24th Jun 2021', () => {
    expect(payDay(new Date(2021, 5, 24))).toStrictEqual(new Date(2021, 5, 25));
});


//10th Dec 2021 is before payday 14th, and 14th Dec 2021 is a Tuesday so should return 14th Dec 2021
test('10th Dec 2021', () => {
    expect(payDay(new Date(2021, 11, 10))).toStrictEqual(new Date(2021, 11, 14));
});


//15th Dec 2021 is after payday 14th, and 27th Jan 2022 is a Thursday so should return 27th Jan 2022
test('10th Dec 2021', () => {
    expect(payDay(new Date(2021, 11, 15))).toStrictEqual(new Date(2022, 0, 27));
});