var map = {};
var cyrilic_up = "А Ә Б В Г Ғ Д Е Е Ж З И Й К Қ Л М Н Ң О Ө П Р С Т У Ұ Ү Ф Х Һ Ц Ч Ш Щ Ъ Ы І Ь Э Ю Я".split(" ");
var cyrilic_low = "а ә б в г ғ д е ë ж з и й к қ л м н ң о ө п р с т у ұ ү ф х һ ц ч ш щ ъ ы і ь э ю я".split(" ");
var latin_up = "A A' B V G G' D E E J Z I' I' K Q L M N N' O O' P R S T Y' U U' F H Һ Ts C' S' S' Ъ Y I Ь E I'y' I'a".split(" ");
var latin_low = "a a' b v g g' d e e j z i' i' k q l m n n' o o' p r s t y' u u' f h һ ts c' s' s'  y і  e i'y' i'a".split(" ");

for (var i = 0; i < 42; i++) {
    map[cyrilic_low[i]] = latin_low[i];
    map[cyrilic_up[i]] = latin_up[i];
}
var highlight = window.getSelection();
var span = highlight.toString();
var newSpan = "";
for (var i = 0; i < span.length; i++) {
    var c = span.charAt(i);
    if (c in map) {
        newSpan += map[c];
    } else {
        newSpan += c;
    }
}
span = newSpan;

var selected, range;
if (window.getSelection) {
    selected= window.getSelection();
    if (selected.rangeCount) {
        range = selected.getRangeAt(0);
        range.deleteContents();
        range.insertNode(document.createTextNode(span));
    }
} else if (document.selection && document.selection.createRange) {
    range = document.selection.createRange();
    range.text = span;
}