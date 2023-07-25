document
  .querySelectorAll(".give__left-box-form-inputs-label-range")
  .forEach(function (ctrl) {
    let el = ctrl.querySelector(
      ".give__left-box-form-inputs-label-range-input"
    );
    el.oninput = function () {
      let valPercent =
        (el.valueAsNumber - parseInt(el.min)) /
        (parseInt(el.max) - parseInt(el.min));

      let style =
        "background-image: -webkit-gradient(linear, 0% 0%, 100% 0%, color-stop(" +
        valPercent +
        ", green), color-stop(" +
        valPercent +
        ", #D9D9D9));";

      el.style = style;
    };
    el.oninput();
  });

window.onresize = function () {
  document
    .querySelectorAll(".give__left-box-form-inputs-label-range")
    .forEach(function (ctrl) {
      let el = ctrl.querySelector(
        ".give__left-box-form-inputs-label-range-input"
      );
      el.oninput();
    });
};

let moneyInput = document.querySelector("#moneyInput");
let valueForMoney = document.querySelector("#valueForMoney");
let valueForMainMoney = document.querySelector("#valueForMainMoney");

moneyInput.addEventListener("input", function () {
  let currentValue = moneyInput.value;
  valueForMoney.innerHTML = currentValue + " c.";
  valueForMainMoney.innerHTML = currentValue + " c.";
});

let monthInput = document.querySelector("#monthInput");
let valueForMonth = document.querySelector("#valueForMonth");
let valueForMainMonth = document.querySelector("#valueForMainMonth");

monthInput.addEventListener("input", function () {
  let currentValue = monthInput.value;
  valueForMonth.innerHTML = currentValue + " меc.";
  valueForMainMonth.innerHTML = currentValue + " мес.";
});

let totalValue = document.querySelector("#totalValue");

function updateTotalValue() {
  let moneyValue = moneyInput.value;
  let monthValue = monthInput.value;

  moneyValue = Number(moneyValue);
  monthValue = Number(monthValue);

  let totalMoney = moneyValue * (18 / 100) + moneyValue;

  totalValue.innerHTML = Math.floor(totalMoney / monthValue) + " c.";
}

moneyInput.addEventListener("input", updateTotalValue);
monthInput.addEventListener("input", updateTotalValue);
