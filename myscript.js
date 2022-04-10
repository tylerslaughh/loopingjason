fetch('my_data.json')
  .then(response => response.json())
  .then(json => appendData(json))
  .catch(function (err) {
    console.log(err);
  });



function appendData(data) {
  for (var i = 0; i < data.length; i++) {

    const even = i % 2

    console.log(even);
    var parent = document.getElementById(`${even}`);
    var div = document.createElement("div");
    div.classList.add("asset");
    div.innerHTML = '<img src="' + `img${i}.jpg` + '" class="asset"><p class="caption">' + data[i]["Name"] + '</p>';
    parent.appendChild(div);
  }
}
