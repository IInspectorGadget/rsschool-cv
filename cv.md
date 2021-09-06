
1. **Surname & First name:**
    - Sivtsov Daniil
2. **Contacts:** 
   * email: danilklin17@gmail.com
   * telegram: t.me/InspectorGadget123
3.  **About myself:**
      * The goal is to get a job as a front-end programmer.
      * I have experience in testing applications for android.
      * I have the ability to learn quickly and learn new things.
      * I have average knowledge of python, css, html, as well as good knowledge of javascript, Django framework and sql. I can use the git system. I also know how to work with layouts in Figma.
4. **Сode examples:**
   Example 1: Format a string of names like 'Bart, Lisa & Maggie':
   ```
   function list(names) {
        return names.reduce(function (p, k) {
            if (names.length == 1){return p + k.name}
            if (names[names.length-1].name != k.name && names[names.length-2].name !=k.name){
            return p+k.name + ', '
        }
        if (names[names.length-2].name == k.name) {
            return p+k.name
        }
        if(names[names.length-1].name == k.name){
            return p + ' & '+ k.name
        }
    }
    ,'')}
    ```
    Example 2: ArrayDiff. Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.
    ``` const arrayDiff = (a, b) => a.filter((x) => b.indexOf(x) == -1); ```
5. Work experience: 
   * Educational projects:
     * Make up according to the ready-made layout adaptive landing https://github.com/IInspectorGadget/Brandi. Knowledge was used in html, js, css, sass preprocessor.
     * Create a news site with a forum https://github.com/IInspectorGadget/djangocy. Knowledge was used in html, js, css, sass preprocessor, python and Django.
6. Education:
   * I have a secondary vocational education in the specialty "Programming in computer systems".
   * 2nd year of higher education in the direction "Fundamental Informatics and Information Technologies" (program "Software Engineering").
   * English level A2.