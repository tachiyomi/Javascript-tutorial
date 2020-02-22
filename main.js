const button = document.getElementById('btn');
const before = document.getElementById('before');
const after = document.getElementById('after');
// ボタンをクリックしたらイベント発動
button.addEventListener('click', () => {
    fetch("https://script.google.com/macros/s/AKfycbxvNsIJiFYAaZJLMX9zWGlOWMa-LUaBKHBKoqf_6eP3Ie_XUq0/exec?text=Hello&source=en&target=ja") // APIのURL
    .then(function(result) => {
        return result.json();
    })
    .then(function(json) => {
        after.innerText = json["text"];
        before.innerText = "変換済み";
        button.innerText = "受信済み";
    });
    button.innerText = "受信なし";
});
