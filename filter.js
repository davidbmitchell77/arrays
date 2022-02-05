<!DOCTYPE html>
<html>
<head>
<style>
div {
    margin-top: 1rem;
    margin-left: 1rem;
}
</style>
</head>
<body>
<div id="demo"></div>
<script type="text/javascript">
console.clear();
let integers = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
let even = integers.filter
(
    (i) => {
        return !(i % 2);
    }
);
console.info("even:", even);
let odd = integers.filter
(
    (i) => {
        return (i % 2);
    }
);
console.info("odd:", odd);
document.getElementById("demo").innerHTML = ("integers: " + JSON.stringify(integers) + "<br/>" + "odd: " + JSON.stringify(odd) + "<br/>" + "even: " + JSON.stringify(even)).replaceAll(",", ", ").replaceAll("[", "[ ").replaceAll("]", " ]");
</script>
</body>
</html>
