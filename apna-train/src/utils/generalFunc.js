

export const timeConvert =(time)=>{
    const timestamp = new Date(time);
const currentDate = new Date();

// Calculate the time difference in seconds, minutes, hours, and days
const timeDifference = (currentDate - timestamp) / 1000; // Convert to seconds

if (timeDifference < 60) {
  // Less than a minute
  return(`just now`);
} else if (timeDifference < 3600) {
  // Less than an hour
  const minutesAgo = Math.floor(timeDifference / 60);
  return(`${minutesAgo} minutes ago`);
} else if (timeDifference < 86400) {
  // Less than a day
  const hoursAgo = Math.floor(timeDifference / 3600);
  return(`${hoursAgo} hours ago`);
} else {
  // Days ago
  const daysAgo = Math.floor(timeDifference / 86400);
  const commentDate = timestamp.toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' });
  return(`${daysAgo} days ago, ${commentDate}`);
}

}