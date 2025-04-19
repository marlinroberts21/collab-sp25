// Military time helper function gets our data, but this method gives us AM/PM
function formatTimeAmPm(timeStr) {
  if (!timeStr) return 'Invalid Time';

  const [hours, minutes] = timeStr.split(':');
  const date = new Date();
  date.setHours(parseInt(hours, 10));
  date.setMinutes(parseInt(minutes, 10));
  
  let result = date.toLocaleTimeString([], {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  });
  console.log(result);
  return result
}
export default formatTimeAmPm



// function formatTimeAgain(timeStr) {
//   if (!timeStr) return 'Invalid Time';

//   const [hours, minutes] = timeStr.split(':');
//   const date = new Date();
//   date.setHours(parseInt(hours, 10));
//   date.setMinutes(parseInt(minutes, 10));
  
//   let result = date.toLocaleTimeString([], {
//     hour: 'numeric',
//     minute: '2-digit',
//     hour12: true
//   });
//   console.log(result);
//   return result
// }

// export default formatTime
