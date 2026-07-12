document.addEventListener("DOMContentLoaded", function () {
  fetch("header.html")
    .then(response => {
      if (!response.ok) {
        throw new Error("header.htmlを読み込めませんでした");
      }
      return response.text();
    })
    .then(data => {
      document.getElementById("header").innerHTML = data;
    })
    .catch(error => {
      console.error("ヘッダーエラー:", error);
    });

  fetch("footer.html")
    .then(response => {
      if (!response.ok) {
        throw new Error("footer.htmlを読み込めませんでした");
      }
      return response.text();
    })
    .then(data => {
      document.getElementById("footer").innerHTML = data;
    })
    .catch(error => {
      console.error("フッターエラー:", error);
    });
});