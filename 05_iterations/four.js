
const myObject = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    swift: "swift by apple"
}

for (const key in myObject) {
    //console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js","rb","py","java","cpp"]
for (const key in programming) {
    console.log(programming[key]);       //key print k liye direct key print kraenge value k liye programming[key]
}