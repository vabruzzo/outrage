const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sept',
  'Oct',
  'Nov',
  'Dec',
];

const getDate = () => {
  const today = new Date();
  return `${months[today.getMonth()]} ${today.getDate()}`;
};

export { getDate };
