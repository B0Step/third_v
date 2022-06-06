var context; // переменная для хранения контекста
var container; // переменная для хранения canvas элемента
var currentAngle = 0; // текущее значение угла
var radius = 250; // радиус окружности
var baseX = 500; // x координата центра окружности
var baseY = 400; // y координата центра окружности

window.onload = function() {
  container = document.createElement("canvas"); // создаем canvas элемент 
  container.width = 1000; // устанваливаем ширину
  container.height = 700; // устанавливаем высоту

  document.body.appendChild(container); // добавляем canvas в DOM

  context = container.getContext('2d'); // получаем конткест
  context.fillStyle = '#000'; // устанавливаем цвет заливки в черный
  context.fillRect(0, 0, container.width, container.height); // собственно заливаем все черным

  setInterval(function() {
    // считаем косинус текущего значения угла
    // и умножаем на значение радиуса
    var vx = Math.cos(currentAngle) * radius;

    // считаем синус текущего значения угла
    // и умножаем на значение радиуса
    var vy = Math.sin(currentAngle) * radius;

    context.fillStyle = '#fff'; // устанавливаем цвет заливки в белый

    context.fillRect(baseX + vx, baseY + vy, 5, 5);
    // считем новую позицию по x и y относительно центра окружности
    // и заливаем ее квадратиком высотой и шириной в 5 пикселей

    // увеличиваем значение угла
    currentAngle += 0.1;
  }, 5)
}