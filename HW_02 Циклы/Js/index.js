document.write("Прямокутник <br><br>");
for (let i = 0; i < 10; i++) {
    for ( let j = 0; j < 5; j++) {
        document.write("*")
    }
    document.write("<br>");
}
document.write("<br><br><br>");


document.write("<br><br>");
for (let i = 0; i < 10; i++) {
    for ( let j = (i + 1); j < 10; j++) {
        document.write("*")
    }
    document.write("<br>");
}
document.write("<br><br><br>");

document.write("  <br><br>");
for (let i = 0; i < 5; i++) {
	for (let g = 0 + i; g < 10 - i; g++) {
		document.write('&nbsp');
	}
	for (let c = 0; c < i + 1; c++) {
		document.write('&nbsp *');
	}
	document.write('<br>');
}


