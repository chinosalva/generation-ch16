public class Fecha {
    private int dia;
    private int mes;
    private int año;

    public int getDia(){
        return dia;
    }

    public void setDia(int dia) {
        this.dia = dia;
    }

    public int getMes(){
        return mes;
    }

    public void setMes(int mes) {
        this.mes = mes;
    }

    public int getAño(){
        return año;
    }

    public void setAño(int año) {
        this.año = año;
    }

    public String formaF(){

        return "la fecha es " + getDia() + "/" + getMes() + "/" + getAño();
    }


}

