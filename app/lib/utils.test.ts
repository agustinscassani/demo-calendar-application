import * as utils from '@/app/lib/utils';

describe('Utils functions', () => {
  it('should get next month URL when navigating to right', () => {
    const day = '2024-02-01';
    const expected = '/2024-03-01';
    expect(utils.getNavigationURL('right', day)).toEqual(expected);
  });

  it('should get previous month URL when navigating to left', () => {
    const day = '2024-02-01';
    const expected = '/2024-01-01';
    expect(utils.getNavigationURL('left', day)).toEqual(expected);
  });

  it('should get next year URL when navigating to right', () => {
    const day = '2024-12-01';
    const expected = '/2025-01-01';
    expect(utils.getNavigationURL('right', day)).toEqual(expected);
  });

  it('should get previous year URL when navigating to left', () => {
    const day = '2024-01-01';
    const expected = '/2023-12-01';
    expect(utils.getNavigationURL('left', day)).toEqual(expected);
  });

  it('should get calendar items for given day', () => {
    const day = '2024-02-01';
    const calendarItems = utils.getCalendarItems(day);
    expect(calendarItems.includes(29)).toBeTruthy();
  });

  it('should get date in YYYY-MM-DD format for given day', () => {
    const day = '2024-02-18T13:33:18.855Z';
    const expected = '2024-02-18';
    expect(utils.getDate(day)).toEqual(expected);
  });

  it('should get time in hh:mm for given day', () => {
    const day = '2024-02-18T13:33:18.855Z';
    const expected = '13:33';
    expect(utils.getTime(day)).toEqual(expected);
  });
});