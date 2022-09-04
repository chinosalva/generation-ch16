import java.util.Scanner;

public class Promedio {
    public static void main(String[] args) {
        System.out.println("Cual fue tu primera califcacion");
        Integer num1 = cargarNumero();

        System.out.println("Cual fue tu segunda calificacon");
        Integer num2 = cargarNumero();

        System.out.println("Cual fue tu tercera calificacion");
        Integer num3 = cargarNumero();
        promedio(num1, num2, num3);
    }
    private static Integer cargarNumero (){
        Scanner numPromedio = new Scanner(System.in);
        Integer readPromedio = Integer.valueOf(numPromedio.nextLine());
        return readPromedio;
    }
    private static void promedio (Integer num1, Integer num2, Integer num3){
        Integer sumaTodos = num1 + num2;
        sumaTodos = sumaTodos + num3;
        sumaTodos = sumaTodos / 3;
        System.out.println(sumaTodos);
    }
}
