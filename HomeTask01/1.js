"use strict";

/*
###Задание 1
Создайте обычный объект "Музыкальная коллекция", который можно итерировать. 
Каждая итерация должна возвращать следующий альбом из коллекции. Коллекция 
альбомов - это массив внутри нашего объекта (создать несколько альбомов самому).
Каждый альбом имеет следующую структуру:
{
  title: "Название альбома",
  artist: "Исполнитель",
  year: "Год выпуска"
}
Используйте цикл for...of для перебора альбомов в музыкальной коллекции и 
вывода их в консоль в формате:
"Название альбома - Исполнитель (Год выпуска)"
*/

const musicCollection = {
  albums: [
    {
      title: "Kill 'Em All",
      artist: "Metallica",
      year: "1983",
    },
    {
      title: "Ride the Lightning",
      artist: "Metallica",
      year: "1984",
    },
    {
      title: "Master of Puppets",
      artist: "Metallica",
      year: "1986",
    },

    {
      title: "...And Justice for All",
      artist: "Metallica",
      year: "1987",
    },
  ],
  *[Symbol.iterator]() {
    for (let alb of this.albums) {
      yield alb;
    }
  },
};

for (let alb of musicCollection) {
  console.log(alb);
}
