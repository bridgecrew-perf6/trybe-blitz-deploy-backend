const requiredTaskData = (title, status) => {
  if (typeof title === 'undefined'
    || typeof status === 'undefined') return true;
};

module.exports = { requiredTaskData };