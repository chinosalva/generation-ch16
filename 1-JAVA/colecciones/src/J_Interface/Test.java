package J_Interface;

public interface Test {
    int CONV = 8;

    void metodo1(int x);
    String metodo2(String s);
}
class Prueba implements Test, Test1 {
    @Override
    public void metodo1(int x) {
        System.out.println("Hola metodo1 parametro x --> " + x);
    }

    @Override
    public String metodo2(String s) {
        return "Este parametro es s --> " + s;
    }

    public void metodoPropio (){
        System.out.println("Soy el metodo Propio");
    }

    @Override
    public void metodo01() {
        System.out.println("Hola soy el metodo de Test1 metodo 1");
    }

    @Override
    public String metod02() {
        return "Hola metodo 02";
    }
}