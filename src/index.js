module.exports = function check(string, brackets) {
  const pair = new Map(brackets); // Создаем коллекцию из пар скобок для удобного поиска.
  const stak = []; // Создаем пустой стек
  for (const charr of string) { // Цикл, который проходит через всю строку
    if (pair.get(stak.at(-1)) == charr) { // Если пара последнего символа в стеке тот же что и в строке на данный момент
      stak.pop(); // удаляем его из стека
    } else { // во всех других случаях
      stak.push(charr); // добавляем в конец стека
    }
  }
  return stak.length == 0; // В конце проверяем пустой ли у нас стек
}
