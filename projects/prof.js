var ob = {
  // profession: { professions: "react" }
  profession: ["html", (professions = "html")]
};

// ob.professions.includes("reat");
// ob.some();
// ob.filter(true);
// ob.filter(x => x.profession.some(y => professions.includes(y)));
// console.log(ob.professions.includes("react"));
console.log(
  ob.profession,
  ob.profession.some(y => {
    professions.includes(y);
    // console.log(professions);
    // console.log(profession);
    // console.log(professions.includes(y));
  })
);
ob2 = [
  {
    // profession: { professions: "react" }
    profession: ["html", (professions = "html")]
  }
];
ob3=[[professions={professions:"html"}]]

const matches = (obj, source) =>
  Object.keys(source).every(key => obj.hasOwnProperty(key) && obj[key] === source[key]);
console.log(matches({ age: 25, hair: 'long', beard: true }, { hair: 'long', beard: true })); // true
console.log(matches({ hair: 'long', beard: true }, { age: 25, hair: 'long', beard: true })); // false
console.log(matches({ hair: 'long', beard: true }, { age: 26, hair: 'long', beard: true })); // false