"use strict";

/*
###Задание 2
Вы управляете рестораном, в котором работают разные повара, специализирующиеся 
на определенных блюдах. Клиенты приходят и делают заказы на разные блюда.

Необходимо создать систему управления этими заказами, которая позволит:

Отслеживать, какой повар готовит какое блюдо.
Записывать, какие блюда заказал каждый клиент.
Используйте коллекции Map для хранения блюд и их поваров, а также для хранения
заказов каждого клиента. В качестве ключей для поваров и клиентов используйте 
объекты.

Повара и их специализации:
Виктор - специализация: Пицца.
Ольга - специализация: Суши.
Дмитрий - специализация: Десерты.

Блюда и их повара:
Пицца "Маргарита" - повар: Виктор.
Пицца "Пепперони" - повар: Виктор.
Суши "Филадельфия" - повар: Ольга.
Суши "Калифорния" - повар: Ольга.
Тирамису - повар: Дмитрий.
Чизкейк - повар: Дмитрий.

Заказы:
Клиент Алексей заказал: Пиццу "Пепперони" и Тирамису.
Клиент Мария заказала: Суши "Калифорния" и Пиццу "Маргарита".
Клиент Ирина заказала: Чизкейк.
*/

class Povar {
  constructor(name, specialisation) {
    this.name = name;
    this.specialisation = specialisation;
  }
}

class Client {
  constructor(name, order = new Array()) {
    this.name = name;
    this.order = order;
  }

  addToOrder(...meals) {
    this.order.push(...meals);
  }
}

const viktor = new Povar("Виктор", "Пицца");
const olga = new Povar("Ольга", "Суши");
const dmitrii = new Povar("Дмитрий", "Десерты");

const meals = new Map([
  ['Пицца "Маргарита"', viktor],
  ['Пицца "Пепперони"', viktor],
  ['Суши "Филадельфия"', olga],
  ['Суши "Калифорния"', olga],
  ["Тирамису", dmitrii],
  ["Чизкейк", dmitrii],
]);

const irina = new Client("Ирина");
irina.addToOrder("Чизкейк");

const marya = new Client("Мария");
marya.addToOrder('Суши "Калифорния"', 'Пицца "Маргарита"');

const alexei = new Client("Алексей");
alexei.addToOrder('Пицца "Пепперони"', "Тирамису");

const orders = new Map();

[alexei, marya, irina].forEach((client) => {
  const clientOrders = client.order.map((meal) => ({
    [meal]: meals.get(meal).name,
  }));
  orders.set(client.name, clientOrders);
});

console.log(orders);
