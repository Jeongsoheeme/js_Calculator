function isAnimal(text) {
    return (
      text === '고양이' || text === '개' || text === '거북이' || text === '너구리'
    );
  }
  
  isAnimal('개'); // true
  isAnimal('노트북'); // false

  //배열을 사용하는 방법
  function isAnimal(name) {
    const animals = ['고양이', '개', '거북이', '너구리'];
    return animals.includes(name);
  }
  
  isAnimal('개'); // true
  isAnimal('노트북'); // false

  //화살표함수 사용하는방법
  const isAnimal = name => ['고양이', '개', '거북이', '너구리'].includes(name);

console.log(isAnimal('개')); // true
console.log(isAnimal('노트북')); // false
