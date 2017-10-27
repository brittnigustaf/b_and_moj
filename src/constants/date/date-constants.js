export const DAYS_IN_WEEK = 7;

export const DAYS = {
  SUNDAY: 0,
  MONDAY: 1,
  TUESDAY: 2,
  WEDNESDAY: 3,
  THURSDAY: 4,
  FRIDAY: 5,
  SATURDAY: 6,
  readableName: ['s', 'm', 't', 'w', 'th', 'f', 's']
};

export const MONTHS = {
  JANUARY: 0,
  FEBRUARY: 1,
  MARCH: 2,
  APRIL: 3,
  MAY: 4,
  JUNE: 5,
  JULY: 6,
  AUGUST: 7,
  SEPTEMBER: 8,
  OCTOBER: 9,
  NOVEMBER: 10,
  DECEMBER: 11,
  readableName: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]
};

export const IMPORTANT_DATES = month => {
  const all = [
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
  ];

  switch (month) {
    case MONTHS.MAY:
      return all.slice(0, 1);
    case MONTHS.JUNE:
      return all.slice(1);
    case MONTHS.JANUARY:
    case MONTHS.FEBRUARY:
    case MONTHS.MARCH:
    case MONTHS.APRIL:
    case MONTHS.JULY:
    case MONTHS.AUGUST:
    case MONTHS.SEPTEMBER:
    case MONTHS.OCTOBER:
    case MONTHS.NOVEMBER:
    case MONTHS.DECEMBER:
      return [];
    default:
      return all;
  }
};
