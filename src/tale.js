// Part1. The kolobok function takes the character's name as input and returns what the kolobok did after meeting the character
function kolobok(charName) {

  switch (charName) {
    case 'дедушка':
      console.log( 'Я от дедушки ушёл' );
      break;
    case 'заяц':
      console.log( 'Я от зайчика ушёл' );
      break;
    case 'лиса':
      console.log( 'Меня съели' );
      break;
    default:
      console.log( "Нет таких значений" );
  }
}

kolobok('дедушка')
kolobok('заяц')
kolobok('лиса')

//Part2. The function takes the character's name as input, returns the character's name 3 times
function newYear(charName) {
  return console.log(`${charName}! ${charName}! ${charName}!`)
}

newYear("Дед Мороз")
newYear("Снегурочка")
