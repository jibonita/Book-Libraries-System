export class TextModifier{
    private static capitalize(text: string){
        return text.charAt(0).toUpperCase() + text.slice(1)
      }
    public static dashToCapitalize(text: string) {
        return text.split('-').map(x=> TextModifier.capitalize(x)).join('');
    }
}