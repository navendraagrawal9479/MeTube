const calculateDuration = (uploadDate) => {
    const currDate = new Date();
    const duration = Math.round((currDate - uploadDate) / 1000);
    let time;
    // let years=null,months=null,days=null,hours=null,minutes=null,seconds=null;
    if (duration < 60) {
      time = `${duration} seconds ago`;
    } else if (duration < 3600) {
      time =
        Math.round(duration / 60) === 1
          ? `${Math.round(duration / 60)} minute ago`
          : `${Math.round(duration / 60)} minutes  ago`;
    } else if (duration < 86400) {
      time =
        Math.round(duration / 3600) === 1
          ? `${Math.round(duration / 3600)} hour ago`
          : `${Math.round(duration / 3600)} hours ago`;
    } else if (duration < 2592000) {
      time =
        Math.round(duration / 86400) === 1
          ? `${Math.round(duration / 86400)} day ago`
          : `${Math.round(duration / 86400)} days ago`;
    } else if (duration < 31104000) {
      time =
        Math.round(duration / 2592000) === 1
          ? `${Math.round(duration / 2592000)} month ago`
          : `${Math.round(duration / 2592000)} months ago`;
    } else {
      time =
        Math.round(duration / 31104000) === 1
          ? `${Math.round(duration / 31104000)} year ago`
          : `${Math.round(duration / 31104000)} years ago`;
    }
    return time;
}

export default calculateDuration;