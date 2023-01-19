# DOKUMENTACE
***Dokumentace k projektu purkiada2023!***

Najdete tu návod ke každé custom **funkci/tagu**, která je v projektu obsažena!
    
## Tvorba aplikace (appBuild):
Pro vytvoření nové aplikace se používá html tag: `<appBuild>`. Lze použít **pouze** uvnitř tagu `<div id="contentDisplay">`!
Tento tag **musí** obsahovat atribut `title=""`, který je nutný k vytvoření aplikace!

**Příklad použití základní formy tohoto tagu:**
```
<div id="contentDisplay">

  <appBuild title="moje aplikace 1"></appBuild>
  
</div>
```
Obsah aplikace se nachází uvnitř tagu v tomto tvaru: `<appBuild title=""> Obsah aplikace </appBuild>`.

**Příklad použití obsahu aplikace:**
```
<div id="contentDisplay">

  <appBuild title="It's About Drive, It's About Power">
    <p>⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠿⠛⠛⠛⠛⠿⣿⣿⣿⣿⣿⣿⣿⣿
        ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠛⠉⠁⠀⠀⠀⠀⠀⠀⠀⠉⠻⣿⣿⣿⣿⣿⣿
        ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⢿⣿⣿⣿⣿
        ⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣾⣿⣿⣿⣿
        ⣿⣿⣿⣿⣿⣿⣿⠋⠈⠀⠀⠀⠀⠐⠺⣖⢄⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿
        ⣿⣿⣿⣿⣿⣿⡏⢀⡆⠀⠀⠀⢋⣭⣽⡚⢮⣲⠆⠀⠀⠀⠀⠀⠀⢹⣿⣿⣿⣿
        ⣿⣿⣿⣿⣿⣿⡇⡼⠀⠀⠀⠀⠈⠻⣅⣨⠇⠈⠀⠰⣀⣀⣀⡀⠀⢸⣿⣿⣿⣿
        ⣿⣿⣿⣿⣿⣿⡇⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣟⢷⣶⠶⣃⢀⣿⣿⣿⣿⣿
        ⣿⣿⣿⣿⣿⣿⡅⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢿⠀⠈⠓⠚⢸⣿⣿⣿⣿⣿
        ⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⢀⡠⠀⡄⣀⠀⠀⠀⢻⠀⠀⠀⣠⣿⣿⣿⣿⣿⣿
        ⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠐⠉⠀⠀⠙⠉⠀⠠⡶⣸⠁⠀⣠⣿⣿⣿⣿⣿⣿⣿
        ⣿⣿⣿⣿⣿⣿⣿⣦⡆⠀⠐⠒⠢⢤⣀⡰⠁⠇⠈⠘⢶⣿⣿⣿⣿⣿⣿⣿⣿⣿
        ⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠠⣄⣉⣙⡉⠓⢀⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿
        ⣿⣿⣿⣿⣿⣿⣿⣿⣷⣄⠀⠀⠀⠀⠀⠀⠀⠀⣰⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
        ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣤⣀⣀⠀⣀⣠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿</p>
  </appBuild>
  
</div>
```

### Další použitelné atributy v tomto tagu:
| Atribut                   |      Typ        |Výchozí nastavení| Popis atributu                                                     |
| :------------------------ | :-------------: | :-------------: | :----------------------------------------------------------------- |
| `title`                   |    `String`     |     `NULL`      | Nastaví jméno aplikace                                             |
| `icon`                    |   `file name`   |     `NULL`      | Nastaví ikonu aplikace                                             |
| `backgroundImage`         |   `file name`   |     `NULL`      | Nastaví obrázek na pozadí aplikace                                 |
| `backgroundColor`         |    `Color`      |     `NULL`      | Nastaví barvu na pozadí aplikace                                   |
| `scroll`                  |  `X, Y, XY, YX` |      `OFF`      | Přidá oknu aplikace možnost scrollovat                             |
| `width`                   | `Size with unit`|    `500px`      | Nastaví šířku okna aplikace                                        |
| `height`                  | `Size with unit`|    `400px`      | Nastaví výšku okna aplikace                                        |
| `maximize`                |    `boolean`    |     `true`      | Zapne/Vypne možnost maximalizovat okno aplikace                    |
| `resize`                  |    `boolean`    |     `true`      | Zapne/Vypne možnost uživateli manipulovat s velikostí okna aplikace|
| `shortcut`                |    `boolean`    |     `true`      | Zapne/Vypne shortcut na ploše                                      |
| `startMenu`               |    `boolean`    |     `true`      | Zapne/Vypne shortcut v start menu                                  |

> [ ! ] Pro nastavení jakéhokoliv obrázku v aplikaci mužete používat **pouze** obrázky uložené v patřičné složce!

## Contributors 🙏

[<img alt="wikitiki467" src="https://avatars.githubusercontent.com/u/48698941?v=4" width="80">](https://github.com/wikitiki467)
[<img alt="TheKomkry" src="https://avatars.githubusercontent.com/u/78811061?v=4" width="80">](https://github.com/TheKomkry)
[<img alt="rousek26" src="https://avatars.githubusercontent.com/u/119334621?v=4" width="80">](https://github.com/rousek26)
[<img alt="Venca1450" src="https://avatars.githubusercontent.com/u/119332065?v=4" width="80">](https://github.com/Venca1450)
