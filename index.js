
let num = 20;
count = 0;

for (let i = 1; i <= num; i++) {
  for (let j = 1; j <= i / 2; j++) {
    if (i % j == 0)
      count++;
  }
  if (count == 1)
    console.log(i);
  count = 0;

}



