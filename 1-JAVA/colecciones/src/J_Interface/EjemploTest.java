package J_Interface;

import java.util.List;

public class EjemploTest {
    public static void main(String[] args) {
        System.out.println("Test.CONV = " + Test.CONV);
        System.out.println("args = " + Prueba.CONV);
        Prueba p = new Prueba();
        System.out.println("p = " + p.CONV);

        Test ts = new Prueba();
        ts.metodo1(3);
        System.out.println("ts.metodo2(\"hola\") = " + ts.metodo2("hola mundo"));
        p.metodoPropio();
    }
}
