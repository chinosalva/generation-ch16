public class EjemploVariables {
    public static void main(String[] args) {
        String nombre = "Hugo";
                String saludo = "Hola joven ";
                char espacio = '\u0020';
                char caracter = 'a';
        System.out.println(saludo + espacio + nombre);
        System.out.println("espacio =" + espacio);
        System.out.println("char corresponde en byte: " + Character.BYTES);
        System.out.println("char corresponde en bits: " + Character.SIZE);
        System.out.println("char corresponde en maximo: " + Character.MAX_VALUE);
        System.out.println("char corresponde en minimo: " + Character.MIN_VALUE);
    }
}
