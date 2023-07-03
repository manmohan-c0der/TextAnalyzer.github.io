// console.log("manmohan use the java Script")
uppercase.addEventListener('click', () => {
    console.log("Converting into Uppercase ");
    inptext.value = inptext.value.toUpperCase();
})
lowercase.addEventListener('click', () => {
    console.log("Converting into Lowercase ");
    inptext.value = inptext.value.toLowerCase();
})
RemoveExtraSpace.addEventListener('click', () => {
    console.log("Converting into Lowercase ");
    https: //stackoverflow.com/questions/16974664/how-to-remove-the-extra-spaces-in-a-string    
        // for below code reference
        inptext.value = inptext.value.replace(/\s+/g, ' ');
})
capatilized.addEventListener('click', () => {
    console.log("Converting into Lowercase ");
    let sample = inptext.value;

    // calling charAt() with toUpperCase()
    let Capital_letter = sample.charAt(0).toUpperCase();
    console.log(Capital_letter);

    // concatenate the first letter and the remaining string
    Capital_string = Capital_letter + sample.slice(1).toLowerCase();
    inptext.value = Capital_string;
})

decoding.addEventListener('click', () => {
    let sample = inptext.value;
    let n = inptext.value.length;
    // console.log("Converting into Lowercase ");
    // let sample = inptext.value;

    // // calling charAt() with toUpperCase()
    // let Capital_letter = sample.charAt(0).toUpperCase();
    // console.log(Capital_letter);

    // // concatenate the first letter and the remaining string
    // Capital_string = Capital_letter + sample.slice(1).toLowerCase();
    // inptext.value = Capital_string;

    // inptext.value = inptext.value.replace("$", sample.charAt(0));
    inptext.value = inptext.value.split("").reverse().join("");
    // inptext.value = inptext.value.replace("@", sample.charAt(n - 1));
    // inptext.value = inptext.value.replace("&", sample.charAt(n / 2));
    // inptext.value = inptext.value.replace('%', " ");

})
encoding.addEventListener('click', () => {
    let sample = inptext.value;
    let n = inptext.value.length;


    // // inptext.value = inptext.value.replace(/\s+/g, '%');
    // inptext.value = inptext.value.replace(sample.charAt(n / 2), "&");
    // inptext.value = inptext.value.replace(sample.charAt(n - 1), "@");
    inptext.value = inptext.value.split("").reverse().join("");
    // inptext.value = inptext.value.replace(sample.charAt(0), "$");
})
inptext.addEventListener('input', () => {
    console.log("changed")
    charCount.innerText = inptext.value.length
    wordCount.innerText = inptext.value.trim().split(" ").length
})