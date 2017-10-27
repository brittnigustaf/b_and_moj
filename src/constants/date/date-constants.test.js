import { MONTHS, IMPORTANT_DATES } from './date-constants';

describe('date constants', () => {
  it('should return all important dates', () => {
    expect(IMPORTANT_DATES()).toEqual([
      {
        event: 'RSVP Due',
        date: '2018-05-21T00:00:00Z'
      },
      {
        event: 'Bachelorette Party',
        date: '2018-06-01T00:00:00Z'
      },
      {
        event: 'Bachelor Party',
        date: '2018-06-02T00:00:00Z'
      },
      {
        event: 'Wedding Day',
        date: '2018-06-09T00:00:00Z'
      }
    ]);
  });

  it('should return important dates for each month', () => {
    expect(IMPORTANT_DATES(MONTHS.JANUARY)).toEqual([]);
    expect(IMPORTANT_DATES(MONTHS.FEBRUARY)).toEqual([]);
    expect(IMPORTANT_DATES(MONTHS.MARCH)).toEqual([]);
    expect(IMPORTANT_DATES(MONTHS.APRIL)).toEqual([]);
    expect(IMPORTANT_DATES(MONTHS.MAY)).toEqual([
      {
        event: 'RSVP Due',
        date: '2018-05-21T00:00:00Z'
      }
    ]);
    expect(IMPORTANT_DATES(MONTHS.JUNE)).toEqual([
      {
        event: 'Bachelorette Party',
        date: '2018-06-01T00:00:00Z'
      },
      {
        event: 'Bachelor Party',
        date: '2018-06-02T00:00:00Z'
      },
      {
        event: 'Wedding Day',
        date: '2018-06-09T00:00:00Z'
      }
    ]);
    expect(IMPORTANT_DATES(MONTHS.JULY)).toEqual([]);
    expect(IMPORTANT_DATES(MONTHS.AUGUST)).toEqual([]);
    expect(IMPORTANT_DATES(MONTHS.SEPTEMBER)).toEqual([]);
    expect(IMPORTANT_DATES(MONTHS.OCTOBER)).toEqual([]);
    expect(IMPORTANT_DATES(MONTHS.NOVEMBER)).toEqual([]);
    expect(IMPORTANT_DATES(MONTHS.DECEMBER)).toEqual([]);
  });
});
