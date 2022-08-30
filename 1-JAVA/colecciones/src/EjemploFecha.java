public class EjemploFecha {
    public static void main(String[] args) {
        var date = new Fecha();
        date.setDia(30);
        date.setMes(8);
        date.setAño(2022);
        System.out.println(date.formaF());
    }
}
