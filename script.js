
function secondsAway() {
  const currentDate = new Date();
  const eventDate = new Date("August 18, 2023 12:16:00-05:00");
  var timeDiff = currentDate.getTime() - eventDate.getTime();
  

  


  
    var extrayear=document.getElementById("year").value;
    
    if(extrayear<1956 )
    {
      //alert("are you idiot?");
    }
    else
    {
      timeDiff+=(2023-extrayear)*31536000000;
    }

  

  return timeDiff / 1000;
}

let seconds = secondsAway();

function update() {
  seconds = secondsAway();
  setFormattedText("seconds", Math.floor(seconds));

  setFormattedText("minutes", Math.floor(seconds / 60));
  setFormattedText("hours", Math.floor(seconds / 60 / 60));
  
  setFormattedText("shrek", Math.floor(((seconds / 60) * 250) / 9574));

  // odtu
  setFormattedText("electric", Math.floor(seconds / 60 / 32));
  

  setFormattedText("height", Math.floor(5 * seconds * seconds));

  // rotation = 360 / days
  setText(
    "rotation",
    getFormattedText(Math.floor((seconds / 60 / 60 / 24) * 360)) +
      "." +
      setNumberLength(
        Math.floor((seconds / 60 / 60 / 24) * 360 * 1000) % 1000,
        3,
      ) +
      "°",
  );
  //min wage 13.414tl
  let money = Math.floor((seconds / (60 * 60 * 24 * 30)) * 17002 * 100) / 100;
  setText("minwage", money + " TL");
}

let interval = setInterval(update, 10);
function setFormattedText(id, num) {
  setText(id, getFormattedText(num));
}
function getFormattedText(num) {
  return (getNumber(num) + "").replace(/(.)(?=(\d{3})+$)/g, "$1,");
}
function getNumber(num) {
  if (num < 1) {
    return "";
  }
  try {
    return getNumber(Math.floor(num / 10)) + "" + (num % 10);
  } catch {
    console.error(num);
  }
}

function setText(id, text) {
  document.getElementById(id).textContent = text;
}
function setNumberLength(num, length) {
  if (length > (num + "").length) {
    return setNumberLength("0" + num, length);
  } else {
    return num;
  }
}
