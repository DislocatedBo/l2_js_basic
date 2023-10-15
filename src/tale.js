
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


function newYear(charName) {
  return console.log(`${charName}! ${charName}! ${charName}!`)
}

newYear("Дед Мороз")
newYear("Снегурочка")
