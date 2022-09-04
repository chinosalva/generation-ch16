import java.util.Scanner;

public class Main {
    public static void main (String[] args){
        System.out.println("Ingresa el primer numero ");
        Integer numero1 = cargarNumero();

        System.out.println("Ingresa el segundo numero ");
        Integer numero2 = cargarNumero();

        System.out.println("Ingresa el tercer numero ");
        Integer numero3 = cargarNumero();
        calcularNumeroMayor(numero1, numero2, numero3);
        calcularNumeroMenor(numero1, numero2, numero3);
    }

    private static Integer cargarNumero (){
        Scanner newNumero = new Scanner(System.in);
        Integer numero = Integer.valueOf(newNumero.nextLine());
        return numero;
    }

        private static void calcularNumeroMayor (Integer numero1, Integer numero2, Integer numero3){
            Integer mayor = numero1;

            if (numero2 > mayor){
                mayor = numero2;
            }
            if (numero3 > mayor){
                mayor = numero3;
            }
            System.out.println("El numero mayor es " + mayor);

        }
    private static void calcularNumeroMenor (Integer numero1, Integer numero2, Integer numero3){

        Integer menor = numero1;

        if (numero2 < menor){
            menor = numero2;
        }
        if (numero3 < menor){
            menor = numero3;
        }
        System.out.println("El numero menor es " + menor);

    }
}
