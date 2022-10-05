[Bingo](https://dev-5-lab-2.vercel.app)

# String replaceAll() Method
Met replaceAll() kan je de exemplaren van een string vervangen door een andere string.

replaceAll() is een upgrade van de replace() methode

Syntax: replaceAll(pattern, replacement)

Voorbeeld: function safeRedactName(text, name) {
  return text.replaceAll(name, '[REDACTED]');
}
const report = "A hacker called ha.*er used special characters in their name to breach the system.";
console.log(safeRedactName(report, "ha.*er")); // "A hacker called [REDACTED] used special characters in their name to breach the system."