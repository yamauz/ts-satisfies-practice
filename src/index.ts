const strSample1 = {
  str1: "foo",
  str2: "bar",
  str3: 123 // number なってしまっている。
};

// 推論が効くが、型のstringを想定していたことに気づけない。
// str3のnumberはstringにするべきだがnumberにしてしまったtypoを想定
console.log(strSample1.str3);

const strSample2: Record<string, string> = {
  str1: "foo",
  str2: "bar",
  str3: "baz" 
};

// 型指定をしたが、型はあくまでもRecord型なのでプロパティの推論が効かなくなる
console.log(strSample2.str3);
// プロパティの型推論が効かないので怒られない
console.log(strSample2.str999);

const strSample3 = {
  str1: "foo",
  str2: "bar",
  str3: 999  // satisfiesのおかげで怒られる

} satisfies Record<string,string> ;

console.log(strSample3.str3) // satisfiesのおかげで型推論が効く
console.log(strSample3.strX) // satisfiesのおかげで存在しないプロパティで怒られる

